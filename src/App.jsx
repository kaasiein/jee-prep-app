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
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Restore a logged-in session (if any) on load.
  useEffect(() => {
    const saved = window.localStorage.getItem(SESSION_KEY);
    if (saved) setUser({ email: saved });
  }, []);

  function goPractice(cat) {
    setCategory(cat);
    setView("practice");
  }

  function handleAuthSuccess(email) {
    setUser({ email });
    window.localStorage.setItem(SESSION_KEY, email);
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
