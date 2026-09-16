import React, { useMemo, useState, useRef } from "react";
import { C } from "../theme.js";
import { parseDocIntoSections } from "../lib/parseDoc.js";
import documentationMarkdown from "../data/documentation.md?raw";

export default function Documentation() {
  const doc = useMemo(() => parseDocIntoSections(documentationMarkdown), []);
  const [active, setActive] = useState(doc.sections[0]?.id);
  const refs = useRef({});

  function jumpTo(id) {
    setActive(id);
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="max-w-6xl mx-auto flex gap-8" style={{ padding: "32px 24px" }}>
      <div style={{ width: 260, flexShrink: 0 }}>
        <div style={{ position: "sticky", top: 76, maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, letterSpacing: 0.4, marginBottom: 10 }}>ON THIS PAGE</p>
          {doc.sections.map((s) => (
            <div
              key={s.id}
              onClick={() => jumpTo(s.id)}
              style={{
                fontSize: 13,
                padding: "6px 10px",
                borderRadius: 6,
                cursor: "pointer",
                marginBottom: 1,
                color: active === s.id ? C.primary : C.textMuted,
                background: active === s.id ? C.surface : "transparent",
                fontWeight: active === s.id ? 700 : 500,
                borderLeft: active === s.id ? `3px solid ${C.primary}` : "3px solid transparent",
                lineHeight: 1.4,
              }}
            >
              {s.title}
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, marginBottom: 6 }}>{doc.title}</h1>
        {doc.introHtml && (
          <div className="docs-content" style={{ color: C.textMuted, fontSize: 14, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: doc.introHtml }} />
        )}
        {doc.sections.map((s) => (
          <div key={s.id} ref={(el) => (refs.current[s.id] = el)} style={{ marginBottom: 36, scrollMarginTop: 76 }}>
            <div className="docs-content" dangerouslySetInnerHTML={{ __html: s.html }} />
          </div>
        ))}
      </div>
    </div>
  );
}
