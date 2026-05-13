import React, { useState } from "react";
import PeriodicTable from "./Components/PeriodicTable";
import Trends from "./Components/Trends/Trends";
import CompareElements from "./Components/compareElements";
import ThemeToggle from "./Components/ThemeToggle/ThemeToggle";
import Assistant from "./Components/Assistant/Assistant";
import QuizMode from "./Components/QuizMode";


function App() {
  const [quizOpen, setQuizOpen] = useState(false);

  
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Periodic Table Explorer</h1>
        <div className="header-actions">
          <button
            onClick={() => setQuizOpen(true)}
            className="quiz-button"
            title="Open Quiz Mode">
            ⚗️ Quiz Mode
          </button>
          <ThemeToggle />
        </div>
      </header>
      <PeriodicTable />
      <Trends />
      <CompareElements />
      <Assistant />
      {quizOpen && <QuizMode onClose={() => setQuizOpen(false)} />}
    </div>
  );
}

export default App;

