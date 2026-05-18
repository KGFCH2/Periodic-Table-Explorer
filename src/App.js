import React, { useState } from "react";
import { Beaker } from "lucide-react";
import PeriodicTable from "./Components/PeriodicTable";
import Trends from "./Components/Trends/Trends";
import CompareElements from "./Components/CompareElements";
import ThemeToggle from "./Components/ThemeToggle/ThemeToggle";
import Assistant from "./Components/Assistant/Assistant";
import QuizMode from "./Components/QuizMode";
<<<<<<< HEAD
import ElementDetailsPanel from "./Components/ElementDetailsPanel";
=======
>>>>>>> 9d2165a81e82d91012ba84c395201d8de89d31d2
import Footer from "./Components/Footer/Footer";
import DocsPortal from "./Components/Footer/DocsPortal";


import { FlaskConical } from "lucide-react";

function App() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [docsView, setDocsView] = useState({ open: false, type: 'docs' });

  const handleOpenDocs = (type) => {
    setDocsView({ open: true, type });
  };

  
  return (
    <div className="app">
<<<<<<< HEAD
      <header className="app-header">
        <h1 className="app-title">Periodic Table Explorer</h1>
        <div className="header-actions">
=======
      <header className="app-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
        <h1 style={{ margin: 0 }}>Periodic Table Explorer</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
>>>>>>> 9d2165a81e82d91012ba84c395201d8de89d31d2
          <button
            onClick={() => setQuizOpen(true)}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              color: 'var(--text-color)',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            title="Open Quiz Mode">
            <FlaskConical size={18} /> Quiz Mode
          </button>
          <ThemeToggle />
        </div>
      </header>
      <PeriodicTable />
      <Trends />
      <CompareElements />
      <Assistant />
<<<<<<< HEAD
      <ElementDetailsPanel />
=======
>>>>>>> 9d2165a81e82d91012ba84c395201d8de89d31d2
      <Footer onOpenDocs={handleOpenDocs} />
      {quizOpen && <QuizMode onClose={() => setQuizOpen(false)} />}
      {docsView.open && (
        <DocsPortal 
          type={docsView.type} 
          onClose={() => setDocsView({ ...docsView, open: false })} 
        />
      )}
    </div>
  );
}

export default App;

