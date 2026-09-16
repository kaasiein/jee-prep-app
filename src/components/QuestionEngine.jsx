import React, { useState, useMemo, useEffect } from "react";
import { ChevronRight, Lock, CheckCircle2, XCircle, Circle, Flag, Inbox } from "lucide-react";
import { C, shuffle } from "../theme.js";
import { PrimaryButton, GhostButton, ProgressBar } from "./UI.jsx";

/**
 * Generic exam-style question engine. Used for all three question
 * categories (Key Concept Questions, Complete Concept Questions, Real JEE
 * Questions) — only the `sections` data passed in differs between them.
 *
 * `sections` shape: [{ name: string, questions: [{ id, topic, question,
 *   options: [{ id, text, isCorrect, explanation }] }] }]
 *
 * Sections unlock sequentially: section N+1 stays locked until every
 * question in section N has been answered.
 */
export default function QuestionEngine({ sections, emptyLabel }) {
  const [secIdx, setSecIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [testMode, setTestMode] = useState(false);
  const [sectionSubmitted, setSectionSubmitted] = useState({});
  const [flagged, setFlagged] = useState({});

  const hasContent = Array.isArray(sections) && sections.length > 0 && sections.some((s) => s.questions?.length);

  // Shuffle each section's option order once per mount (i.e. once per
  // attempt) — never re-shuffle on every re-render.
  const shuffledBySection = useMemo(
    () => (hasContent ? sections.map((s) => s.questions.map((q) => ({ ...q, options: shuffle(q.options) }))) : []),
    [hasContent, sections]
  );

  const sectionStatus = hasContent
    ? sections.map((s, i) => {
        const answeredCount = s.questions.filter((q) => answers[q.id]).length;
        const done = answeredCount === s.questions.length;
        const unlocked = i === 0 || sections[i - 1].questions.every((q) => answers[q.id]);
        return { answeredCount, total: s.questions.length, done, unlocked };
      })
    : [];

  useEffect(() => {
    if (hasContent && !sectionStatus[secIdx]?.unlocked) {
      const firstAvailable = sectionStatus.findIndex((s) => s.unlocked && !s.done);
      setSecIdx(firstAvailable >= 0 ? firstAvailable : 0);
      setQIdx(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secIdx, hasContent]);

  if (!hasContent) {
    return (
      <div className="max-w-md mx-auto text-center" style={{ padding: "80px 24px" }}>
        <Inbox size={32} color={C.textMuted} style={{ margin: "0 auto 14px" }} />
        <p style={{ color: C.textMuted, fontSize: 14.5, lineHeight: 1.6 }}>
          {emptyLabel || "Content coming soon for this chapter."}
        </p>
      </div>
    );
  }

  const currentSection = shuffledBySection[secIdx];
  const currentQ = currentSection[qIdx];
  const selected = answers[currentQ.id];
  const showFeedback = selected && (!testMode || sectionSubmitted[secIdx]);

  const correctCount = sections[secIdx].questions.filter(
    (q) => answers[q.id] && q.options.find((o) => o.id === answers[q.id])?.isCorrect
  ).length;
  const answeredCount = sectionStatus[secIdx].answeredCount;

  const overallTotal = sections.reduce((sum, s) => sum + s.questions.length, 0);
  const overallAnswered = sectionStatus.reduce((sum, st) => sum + st.answeredCount, 0);
  const overallCorrect = sections.reduce((sum, s, i) => {
    if (testMode && !sectionSubmitted[i]) return sum; // don't leak correctness for an unsubmitted test-mode section
    return sum + s.questions.filter((q) => answers[q.id] && q.options.find((o) => o.id === answers[q.id])?.isCorrect).length;
  }, 0);

  function selectOption(optId) {
    if (testMode && sectionSubmitted[secIdx]) return;
    setAnswers((a) => ({ ...a, [currentQ.id]: optId }));
  }

  function nextQuestion() {
    if (qIdx < currentSection.length - 1) setQIdx(qIdx + 1);
  }

  return (
    <div className="max-w-5xl mx-auto" style={{ padding: "28px 24px" }}>
      <div style={{ background: "white", border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
        <ProgressBar total={overallTotal} answered={overallAnswered} correct={overallCorrect} height={10} labelSize={13.5} />
      </div>

      <div className="flex gap-6">
      {/* LEFT: sections list */}
      <div style={{ width: 250, flexShrink: 0 }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, letterSpacing: 0.4 }}>SECTIONS</p>
          <label className="flex items-center gap-1.5" style={{ fontSize: 11.5, color: C.textMuted, cursor: "pointer" }}>
            <input type="checkbox" checked={testMode} onChange={(e) => setTestMode(e.target.checked)} />
            Test Mode
          </label>
        </div>
        {sections.map((s, i) => {
          const st = sectionStatus[i];
          const locked = !st.unlocked;
          return (
            <div
              key={s.name}
              onClick={() => {
                if (!locked) {
                  setSecIdx(i);
                  setQIdx(0);
                }
              }}
              style={{
                border: `1px solid ${i === secIdx ? C.primary : C.border}`,
                background: locked ? "#FAFBFC" : "white",
                borderRadius: 10,
                padding: "12px 14px",
                marginBottom: 10,
                cursor: locked ? "not-allowed" : "pointer",
                opacity: locked ? 0.75 : 1,
              }}
            >
              <div className="flex items-center gap-2">
                {st.done ? <CheckCircle2 size={15} color={C.success} /> : locked ? <Lock size={14} color={C.textMuted} /> : <Circle size={14} color={C.primary} />}
                <span style={{ fontSize: 13.5, fontWeight: 700, color: locked ? C.textMuted : C.text }}>{s.name}</span>
              </div>
              {locked ? (
                <p style={{ fontSize: 11.5, color: C.textMuted, marginTop: 6, marginLeft: 22 }}>Unlocks after previous section is completed</p>
              ) : (
                <div style={{ marginTop: 8, marginLeft: 22, marginRight: 2 }}>
                  <ProgressBar
                    total={st.total}
                    answered={st.answeredCount}
                    correct={(!testMode || sectionSubmitted[i]) ? sections[i].questions.filter((q) => answers[q.id] && q.options.find((o) => o.id === answers[q.id])?.isCorrect).length : 0}
                    height={5}
                    showLabel={false}
                  />
                  <p style={{ fontSize: 11.5, color: C.textMuted, marginTop: 4 }}>
                    {st.answeredCount}/{st.total} answered
                    {(!testMode || sectionSubmitted[i]) && st.answeredCount > 0 && (
                      <> · {sections[i].questions.filter((q) => answers[q.id] && q.options.find((o) => o.id === answers[q.id])?.isCorrect).length} correct</>
                    )}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT: question */}
      <div style={{ flex: 1 }}>
        <div style={{ background: "white", border: `1px solid ${C.border}`, borderRadius: 12, padding: 24 }}>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: 13, fontWeight: 700, color: C.primary }}>
              {sections[secIdx].name} — Q{qIdx + 1} of {currentSection.length}
            </span>
            <button
              onClick={() => setFlagged((f) => ({ ...f, [currentQ.id]: !f[currentQ.id] }))}
              className="flex items-center gap-1"
              style={{ background: "none", border: "none", cursor: "pointer", color: flagged[currentQ.id] ? C.warning : C.textMuted, fontSize: 12.5, fontWeight: 600 }}
            >
              <Flag size={13} /> {flagged[currentQ.id] ? "Marked" : "Mark"}
            </button>
          </div>
          <div style={{ marginTop: 6 }}>
            <ProgressBar
              total={currentSection.length}
              answered={answeredCount}
              correct={testMode && !sectionSubmitted[secIdx] ? 0 : correctCount}
              height={5}
              showLabel={false}
            />
            <p style={{ fontSize: 12.5, color: C.textMuted, marginTop: 5 }}>
              Answered: {answeredCount}/{currentSection.length} · Correct: {testMode && !sectionSubmitted[secIdx] ? "—" : correctCount}
            </p>
          </div>

          <p style={{ fontSize: 16, fontWeight: 600, color: C.text, marginTop: 18, lineHeight: 1.6 }}>{currentQ.question}</p>

          <div style={{ marginTop: 16 }}>
            {currentQ.options.map((opt) => {
              const isSelected = selected === opt.id;
              let bg = "white",
                border = C.border,
                textColor = C.text;
              if (showFeedback) {
                if (opt.isCorrect) {
                  bg = C.successBg;
                  border = C.success;
                } else if (isSelected) {
                  bg = C.errorBg;
                  border = C.error;
                }
              } else if (isSelected) {
                bg = C.surface;
                border = C.primary;
              }
              return (
                <div
                  key={opt.id}
                  onClick={() => selectOption(opt.id)}
                  className="flex items-start gap-3"
                  style={{ border: `1.5px solid ${border}`, background: bg, borderRadius: 9, padding: "12px 14px", marginBottom: 9, cursor: "pointer" }}
                >
                  {showFeedback ? (
                    opt.isCorrect ? (
                      <CheckCircle2 size={17} color={C.success} style={{ flexShrink: 0, marginTop: 1 }} />
                    ) : isSelected ? (
                      <XCircle size={17} color={C.error} style={{ flexShrink: 0, marginTop: 1 }} />
                    ) : (
                      <Circle size={17} color={C.border} style={{ flexShrink: 0, marginTop: 1 }} />
                    )
                  ) : (
                    <Circle size={17} color={isSelected ? C.primary : C.border} style={{ flexShrink: 0, marginTop: 1 }} />
                  )}
                  <div>
                    <span style={{ fontSize: 14.5, color: textColor, fontWeight: isSelected ? 600 : 500 }}>{opt.text}</span>
                    {showFeedback && !opt.isCorrect && <p style={{ fontSize: 12.5, color: C.textMuted, marginTop: 4 }}>{opt.explanation}</p>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between" style={{ marginTop: 20 }}>
            <GhostButton
              onClick={() =>
                setAnswers((a) => {
                  const c = { ...a };
                  delete c[currentQ.id];
                  return c;
                })
              }
            >
              Clear Response
            </GhostButton>
            <div className="flex gap-2">
              {testMode && sectionStatus[secIdx].done && !sectionSubmitted[secIdx] && (
                <PrimaryButton onClick={() => setSectionSubmitted((s) => ({ ...s, [secIdx]: true }))} style={{ background: C.success }}>
                  Submit Section
                </PrimaryButton>
              )}
              <PrimaryButton onClick={nextQuestion} disabled={qIdx === currentSection.length - 1}>
                Save & Next <ChevronRight size={14} style={{ display: "inline", verticalAlign: -2 }} />
              </PrimaryButton>
            </div>
          </div>
        </div>

        {sectionStatus[secIdx].done && (!testMode || sectionSubmitted[secIdx]) && (
          <div style={{ background: "white", border: `1px solid ${C.border}`, borderRadius: 12, padding: 20, marginTop: 16, textAlign: "center" }}>
            <p style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>
              Section complete — {correctCount}/{currentSection.length} correct
            </p>
            {secIdx < sections.length - 1 ? (
              <PrimaryButton
                style={{ marginTop: 10 }}
                onClick={() => {
                  setSecIdx(secIdx + 1);
                  setQIdx(0);
                }}
              >
                Continue to {sections[secIdx + 1].name} <ChevronRight size={14} style={{ display: "inline", verticalAlign: -2 }} />
              </PrimaryButton>
            ) : (
              <p style={{ color: C.textMuted, fontSize: 13.5, marginTop: 8 }}>🎉 All sections in this chapter complete.</p>
            )}
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
