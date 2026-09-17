import React from "react";
import { Home, BookOpen, FileText, Search, User, ChevronDown } from "lucide-react";
import { C } from "../theme.js";
import { Pill, PrimaryButton } from "./UI.jsx";
import { chapters } from "../data/chapters.js";

export function UtilityBar({ view, setView, user, onOpenAuth, onLogout }) {
  const NavLink = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setView(id)}
      className="flex items-center gap-1.5"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: view === id ? C.primary : C.textMuted,
        fontWeight: view === id ? 700 : 500,
        fontSize: 14,
        padding: "6px 4px",
        borderBottom: view === id ? `2px solid ${C.primary}` : "2px solid transparent",
      }}
    >
      <Icon size={16} />
      {label}
    </button>
  );

  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, background: "white", position: "sticky", top: 0, zIndex: 20 }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6" style={{ height: 56 }}>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5" style={{ cursor: "pointer" }} onClick={() => setView("home")}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: 14 }}>J</span>
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>JEE Prep</div>
              <div style={{ fontSize: 10, color: C.textMuted, fontWeight: 600, letterSpacing: 0.3 }}>by Urani Software</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <NavLink id="home" label="Home" icon={Home} />
            <NavLink id="syllabus" label="Syllabus" icon={BookOpen} />
            <NavLink id="documentation" label="Documentation" icon={FileText} />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Search size={17} color={C.textMuted} style={{ cursor: "pointer" }} />
          {user ? (
            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 600, color: C.text }}>
                <User size={15} /> {user.email}
              </span>
              <button
                onClick={onLogout}
                style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 12px", fontSize: 13, fontWeight: 600, color: C.textMuted, cursor: "pointer" }}
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5"
              style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 12px", fontSize: 13, fontWeight: 600, color: C.text, cursor: "pointer" }}
            >
              <User size={15} /> Log in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function AuthModal({ onClose, onAuthSuccess }) {
  const [mode, setMode] = React.useState("login"); // "login" | "signup"
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/${mode === "login" ? "login" : "signup"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      onAuthSuccess(data.email);
    } catch (err) {
      setError("Couldn't reach the server. Is the backend running (npm run server)?");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    padding: "9px 12px",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 14,
    boxSizing: "border-box",
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(20,30,40,0.45)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }} onClick={onClose}>
      <div style={{ background: "white", borderRadius: 12, padding: 28, width: 360 }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-1" style={{ marginBottom: 18, borderBottom: `1px solid ${C.border}` }}>
          {["login", "signup"].map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setError("");
              }}
              style={{
                background: "none",
                border: "none",
                borderBottom: mode === m ? `2px solid ${C.primary}` : "2px solid transparent",
                padding: "8px 4px",
                marginRight: 20,
                fontSize: 14,
                fontWeight: mode === m ? 700 : 500,
                color: mode === m ? C.primary : C.textMuted,
                cursor: "pointer",
              }}
            >
              {m === "login" ? "Log in" : "Sign up"}
            </button>
          ))}
        </div>

        <form onSubmit={submit}>
          <label style={{ fontSize: 12.5, fontWeight: 600, color: C.textMuted }}>Email</label>
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoFocus
            required
          />
          <label style={{ fontSize: 12.5, fontWeight: 600, color: C.textMuted }}>Password</label>
          <input
            style={inputStyle}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={mode === "signup" ? "At least 6 characters" : "••••••••"}
            required
          />
          {error && <p style={{ color: C.error, fontSize: 13, marginTop: -6, marginBottom: 12 }}>{error}</p>}
          <PrimaryButton style={{ width: "100%" }} disabled={loading}>
            {loading ? "Please wait…" : mode === "login" ? "Log in" : "Create account"}
          </PrimaryButton>
        </form>

        <p style={{ fontSize: 12, color: C.textMuted, marginTop: 14, textAlign: "center" }}>
          {mode === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            style={{ background: "none", border: "none", color: C.primary, fontWeight: 600, cursor: "pointer", fontSize: 12, padding: 0 }}
          >
            {mode === "login" ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}

export function PracticeBar({ category, setCategory, chapterId, setChapterId }) {
  const tabs = [
    { id: 1, label: "Ask & Answer", soon: true },
    { id: 2, label: "Key Concept Questions" },
    { id: 3, label: "Complete Concept Questions" },
    { id: 4, label: "Real JEE Questions" },
  ];
  const currentChapter = chapters.find((c) => c.id === chapterId) || chapters[0];

  return (
    <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-6xl mx-auto px-6" style={{ paddingTop: 10, paddingBottom: 0 }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 13, color: C.textMuted }}>{currentChapter.subject}</div>
          <div className="flex items-center gap-1.5" style={{ position: "relative" }}>
            <select
              value={chapterId}
              onChange={(e) => setChapterId(e.target.value)}
              style={{
                appearance: "none",
                WebkitAppearance: "none",
                background: "white",
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "6px 30px 6px 12px",
                fontSize: 13.5,
                fontWeight: 700,
                color: C.text,
                cursor: "pointer",
              }}
            >
              {chapters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                  {c.available ? "" : " (coming soon)"}
                </option>
              ))}
            </select>
            <ChevronDown size={14} color={C.textMuted} style={{ position: "absolute", right: 10, pointerEvents: "none" }} />
          </div>
        </div>
        <div className="flex items-center gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setCategory(t.id)}
              className="flex items-center gap-1.5"
              style={{
                background: category === t.id ? "white" : "transparent",
                border: `1px solid ${category === t.id ? C.border : "transparent"}`,
                borderBottom: category === t.id ? "1px solid white" : "1px solid transparent",
                marginBottom: -1,
                borderRadius: "8px 8px 0 0",
                padding: "9px 16px",
                fontSize: 13.5,
                fontWeight: category === t.id ? 700 : 500,
                color: category === t.id ? C.primary : C.textMuted,
                cursor: "pointer",
              }}
            >
              {t.id}. {t.label}
              {t.soon && <Pill tone="warning">Soon</Pill>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 40, padding: "20px 24px", textAlign: "center" }}>
      <p style={{ fontSize: 12.5, color: C.textMuted, margin: 0 }}>
        JEE Prep — a product by <strong style={{ color: C.text }}>Urani Software</strong>
      </p>
      <p style={{ fontSize: 12, color: C.textMuted, marginTop: 6 }}>
        Have feedback?{" "}
        <a href="mailto:kasi47@gmail.com" style={{ color: C.primary, fontWeight: 600, textDecoration: "none" }}>
          kasi47@gmail.com
        </a>
      </p>
    </div>
  );
}
