import React from "react";
import { C } from "../theme.js";

export function Pill({ children, tone = "neutral" }) {
  const tones = {
    neutral: { background: C.surface, color: C.textMuted },
    success: { background: C.successBg, color: C.success },
    warning: { background: C.warningBg, color: C.warning },
  };
  return (
    <span style={{ ...tones[tone], fontSize: 12, fontWeight: 600, padding: "2px 10px", borderRadius: 999 }}>
      {children}
    </span>
  );
}

export function PrimaryButton({ children, onClick, disabled, style }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? "#9FB3C8" : C.primary,
        color: "white",
        border: "none",
        borderRadius: 8,
        padding: "10px 20px",
        fontWeight: 600,
        fontSize: 14,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        color: C.textMuted,
        border: `1px solid ${C.border}`,
        borderRadius: 8,
        padding: "10px 18px",
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/**
 * Graphical answered/correct indicator — a segmented bar showing, out of
 * the total question count: how many are correct (green), how many are
 * answered but incorrect (red), and how many are still unanswered (grey
 * track). Used for both the overall chapter summary and per-section rows.
 */
export function ProgressBar({ total, answered, correct, height = 8, showLabel = true, labelSize = 12.5 }) {
  const safeTotal = total || 1;
  const correctPct = (correct / safeTotal) * 100;
  const incorrectPct = (Math.max(answered - correct, 0) / safeTotal) * 100;

  return (
    <div>
      {showLabel && (
        <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
          <span style={{ fontSize: labelSize, color: C.textMuted, fontWeight: 600 }}>
            {answered}/{total} answered
          </span>
          <span style={{ fontSize: labelSize, color: C.success, fontWeight: 700 }}>{correct} correct</span>
        </div>
      )}
      <div style={{ height, borderRadius: height, background: C.border, overflow: "hidden", display: "flex" }}>
        <div style={{ width: `${correctPct}%`, background: C.success, height: "100%", transition: "width 0.3s" }} />
        <div style={{ width: `${incorrectPct}%`, background: C.error, height: "100%", transition: "width 0.3s" }} />
      </div>
    </div>
  );
}
