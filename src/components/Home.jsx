import React from "react";
import { HelpCircle, Layers, CheckCircle2, Mic } from "lucide-react";
import { C } from "../theme.js";
import { Pill } from "./UI.jsx";
import { chapters } from "../data/chapters.js";

export default function HomeView({ goPractice, chapterId }) {
  const chapter = chapters.find((c) => c.id === chapterId) || chapters[0];
  const cards = [
    { id: 2, title: "Key Concept Questions", desc: "Short, one-fact-at-a-time checks for quick revision.", icon: HelpCircle },
    { id: 3, title: "Complete Concept Questions", desc: "Deeper questions on how ideas connect together.", icon: Layers },
    { id: 4, title: "Real JEE Questions", desc: "Full exam-style practice with instant feedback.", icon: CheckCircle2 },
    { id: 1, title: "Ask & Answer", desc: "Speak or type answers for Claude to evaluate.", icon: Mic, soon: true },
  ];
  return (
    <div className="max-w-4xl mx-auto" style={{ padding: "56px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: C.text, margin: 0 }}>Continue with {chapter.title}</h1>
      <p style={{ color: C.textMuted, marginTop: 8, fontSize: 15 }}>{chapter.subject}</p>
      <div className="grid grid-cols-2 gap-4" style={{ marginTop: 28 }}>
        {cards.map((c) => (
          <div
            key={c.id}
            onClick={() => !c.soon && goPractice(c.id)}
            style={{
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: 20,
              background: "white",
              cursor: c.soon ? "default" : "pointer",
              opacity: c.soon ? 0.85 : 1,
            }}
          >
            <div className="flex items-center justify-between">
              <c.icon size={20} color={C.primary} />
              {c.soon && <Pill tone="warning">Soon</Pill>}
            </div>
            <p style={{ fontWeight: 700, fontSize: 15.5, color: C.text, marginTop: 12 }}>{c.title}</p>
            <p style={{ color: C.textMuted, fontSize: 13.5, marginTop: 4, lineHeight: 1.5 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
