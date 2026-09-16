import React, { useState, useEffect } from "react";
import { UtilityBar, PracticeBar, AuthModal, Footer } from "./components/Shell.jsx";
import HomeView from "./components/Home.jsx";
import Syllabus from "./components/Syllabus.jsx";
import Documentation from "./components/Documentation.jsx";
import AskAndAnswer from "./components/AskAndAnswer.jsx";
import QuestionEngine from "./components/QuestionEngine.jsx";
import { chapters } from "./data/chapters.js";
import { questionBanks } from "./data/questionBanks.js";

const SESSION_KEY = "jeeprep_user";

export default function App() {
  const [view, setView] = useState("home"); // home | syllabus | documentation | practice
  const [category, setCategory] = useState(2); // 1-4, only used when view === "practice"
  const [chapterId, setChapterId] = useState(chapters[0].id);
  const [totalViews, setTotalViews] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Restore a logged-in session (if any) on load.
  useEffect(() => {
    const saved = window.localStorage.getItem(SESSION_KEY);
    if (saved) setUser({ username: saved });
  }, []);

  // Real, persistent page-view counter. GET /api/views hits our own backend
  // (server/index.js), which increments a number stored in
  // server/data/views.txt on disk and returns the new total. Because the
  // count lives in a real file this server controls, it's a genuine
  // cumulative count across every visitor, not a random or simulated one.
  // If the backend isn't running, the badge just hides itself rather than
  // showing a stale or fake number — see UtilityBar's `totalViews !== null`.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/views")
      .then((res) => {
        if (!res.ok) throw new Error("Views request failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled && typeof data.count === "number") setTotalViews(data.count);
      })
      .catch(() => {
        // Backend not running or unreachable — leave totalViews as null.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function goPractice(cat) {
    setCategory(cat);
    setView("practice");
  }

  function handleAuthSuccess(username) {
    setUser({ username });
    window.localStorage.setItem(SESSION_KEY, username);
    setShowAuth(false);
  }

  function handleLogout() {
    setUser(null);
    window.localStorage.removeItem(SESSION_KEY);
  }

  const bank = questionBanks[chapterId] || {};

  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif", background: "#FCFDFE", minHeight: "100vh", color: "#1B2430", display: "flex", flexDirection: "column" }}>
      <UtilityBar
        view={view}
        setView={setView}
        totalViews={totalViews}
        user={user}
        onOpenAuth={() => setShowAuth(true)}
        onLogout={handleLogout}
      />
      {view === "practice" && (
        <PracticeBar category={category} setCategory={setCategory} chapterId={chapterId} setChapterId={setChapterId} />
      )}

      <div style={{ flex: 1 }}>
        {view === "home" && <HomeView goPractice={goPractice} chapterId={chapterId} />}
        {view === "syllabus" && (
          <Syllabus
            onOpenChapter={(chapterIdToOpen) => {
              setChapterId(chapterIdToOpen);
              goPractice(2);
            }}
          />
        )}
        {view === "documentation" && <Documentation />}

        {view === "practice" && category === 1 && <AskAndAnswer />}
        {view === "practice" && category === 2 && (
          <QuestionEngine
            key={`${chapterId}-key`}
            sections={bank.keyConceptQuestions}
            emptyLabel="Key Concept Questions for this chapter are coming soon."
          />
        )}
        {view === "practice" && category === 3 && (
          <QuestionEngine
            key={`${chapterId}-complete`}
            sections={bank.completeConceptQuestions}
            emptyLabel="Complete Concept Questions for this chapter are coming soon."
          />
        )}
        {view === "practice" && category === 4 && (
          <QuestionEngine
            key={`${chapterId}-jee`}
            sections={bank.realJeeQuestions}
            emptyLabel="Real JEE Questions for this chapter are coming soon."
          />
        )}
      </div>

      <Footer />
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onAuthSuccess={handleAuthSuccess} />}
    </div>
  );
}
