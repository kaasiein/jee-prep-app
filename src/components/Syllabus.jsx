import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { C } from "../theme.js";
import { Pill } from "./UI.jsx";
import { syllabusTree } from "../data/content.js";
import { chapters } from "../data/chapters.js";

const subjects = Object.keys(syllabusTree);

export default function Syllabus({ onOpenChapter }) {
  const [subject, setSubject] = useState(subjects[0]);
  const [open, setOpen] = useState(0);

  const units = syllabusTree[subject] || [];

  function matchedChapter(unitTitle) {
    return chapters.find((c) => c.subject === subject && c.title === unitTitle);
  }

  return (
    <div className="max-w-3xl mx-auto" style={{ padding: "32px 24px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text }}>JEE Main Syllabus</h2>
      <p style={{ color: C.textMuted, fontSize: 14, marginBottom: 16 }}>
        Full official syllabus for reference. Units with practice content are clickable.
      </p>

      <div className="flex gap-1" style={{ marginBottom: 20, borderBottom: `1px solid ${C.border}` }}>
        {subjects.map((s) => (
          <button
            key={s}
            onClick={() => {
              setSubject(s);
              setOpen(0);
            }}
            style={{
              background: "none",
              border: "none",
              borderBottom: subject === s ? `2px solid ${C.primary}` : "2px solid transparent",
              padding: "8px 16px",
              fontSize: 14,
              fontWeight: subject === s ? 700 : 500,
              color: subject === s ? C.primary : C.textMuted,
              cursor: "pointer",
              marginBottom: -1,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {units.map((u, i) => {
        const chapter = matchedChapter(u.unit);
        const clickable = !!(chapter && chapter.available);
        return (
          <div key={u.unit} style={{ border: `1px solid ${C.border}`, borderRadius: 10, marginBottom: 10, overflow: "hidden" }}>
            <div
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex items-center justify-between"
              style={{ padding: "13px 16px", cursor: "pointer", background: "white" }}
            >
              <span className="flex items-center gap-2" style={{ fontWeight: 700, fontSize: 14.5, color: C.text }}>
                {open === i ? <ChevronDown size={16} /> : <ChevronRight size={16} />} {u.unit}
              </span>
              <Pill tone={u.progress === "in-progress" ? "warning" : "neutral"}>
                {u.progress === "in-progress" ? "In progress" : "Not started"}
              </Pill>
            </div>
            {open === i && (
              <div style={{ borderTop: `1px solid ${C.border}`, background: C.surface }}>
                {u.topics.map((t) => (
                  <div key={t} style={{ padding: "10px 16px", fontSize: 13.5, color: C.text, lineHeight: 1.5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: clickable ? C.warning : C.border, display: "inline-block", marginRight: 10, verticalAlign: "middle" }} />
                    {t}
                  </div>
                ))}
                <div style={{ padding: "8px 16px 14px" }}>
                  {clickable ? (
                    <button
                      onClick={() => onOpenChapter(chapter.id)}
                      style={{ background: C.primary, color: "white", border: "none", borderRadius: 7, padding: "7px 14px", fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}
                    >
                      Start practicing this unit
                    </button>
                  ) : (
                    <span style={{ fontSize: 12.5, color: C.textMuted, fontStyle: "italic" }}>Practice questions coming soon for this unit</span>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
