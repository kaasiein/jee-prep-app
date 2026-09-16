import React from "react";
import { Mic, Keyboard, Bell } from "lucide-react";
import { C } from "../theme.js";
import { GhostButton, PrimaryButton } from "./UI.jsx";

export default function AskAndAnswer() {
  return (
    <div className="max-w-2xl mx-auto text-center" style={{ padding: "72px 24px" }}>
      <div style={{ width: 56, height: 56, borderRadius: 999, background: C.surface, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
        <Mic size={26} color={C.primary} />
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text, margin: 0 }}>Ask & Answer</h2>
      <p style={{ color: C.textMuted, marginTop: 10, lineHeight: 1.6, fontSize: 15 }}>
        Speak or type your answer to a question — Claude will evaluate it and give you feedback, just like an oral exam.
      </p>
      <div className="flex items-center justify-center gap-3" style={{ marginTop: 28 }}>
        <GhostButton style={{ opacity: 0.5, cursor: "not-allowed" }}>
          <span className="flex items-center gap-2">
            <Mic size={15} /> Speak
          </span>
        </GhostButton>
        <GhostButton style={{ opacity: 0.5, cursor: "not-allowed" }}>
          <span className="flex items-center gap-2">
            <Keyboard size={15} /> Type instead
          </span>
        </GhostButton>
      </div>
      <div style={{ marginTop: 36, borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
        <p style={{ fontSize: 13.5, color: C.textMuted, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <Bell size={14} /> Coming soon. Want early access?
        </p>
        <PrimaryButton style={{ marginTop: 12 }}>Notify me</PrimaryButton>
      </div>
    </div>
  );
}
