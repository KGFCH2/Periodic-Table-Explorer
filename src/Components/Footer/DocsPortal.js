import React, { useState, useEffect, useRef } from 'react';
import './DocsPortal.css';
import { X, ChevronDown, Book, Shield, FileText, HelpCircle, ArrowUp } from 'lucide-react';

const DocsPortal = ({ type, onClose }) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const portalRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts or type changes
    if (portalRef.current) {
      portalRef.current.scrollTop = 0;
    }
  }, [type]);

  const faqs = [
    {
      q: "What is the Periodic Table Explorer?",
      a: "It's an interactive web application designed to help students and researchers explore chemical elements in 3D, compare properties, and test their knowledge via quiz mode."
    },
    {
      q: "How do I use the Compare tool?",
      a: "Scroll to the 'Compare Elements' section at the bottom, select two elements from the dropdowns, and see their properties side-by-side."
    },
    {
      q: "Is there a mobile app?",
      a: "The Periodic Table Explorer is a progressive web app (PWA) and is fully responsive, meaning you can use it on any mobile browser with a native-like experience."
    },
    {
      q: "Where does the element data come from?",
      a: "The data is curated from various scientific sources including IUPAC and Wikipedia to ensure accuracy."
    }
  ];

  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="docs-content-wrapper">
            <h2><Shield className="section-icon" /> Privacy Policy</h2>
            <p className="last-updated">Last Updated: May 2026</p>
            <section>
              <h3>1. Information We Collect</h3>
              <p>We do not collect any personal identifiable information. The application runs entirely in your browser. Any preferences (like theme selection) are stored locally on your device.</p>
            </section>
            <section>
              <h3>2. Data Security</h3>
              <p>Since we do not host a central database for user accounts, your data never leaves your device. We use standard web encryption for any external API calls (like fetching 3D models).</p>
            </section>
          </div>
        );
      case 'terms':
        return (
          <div className="docs-content-wrapper">
            <h2><FileText className="section-icon" /> Terms of Service</h2>
            <p className="last-updated">Last Updated: May 2026</p>
            <section>
              <h3>1. Acceptance of Terms</h3>
              <p>By using the Periodic Table Explorer, you agree to use the tool for educational and research purposes only. Commercial redistribution of the data provided is prohibited.</p>
            </section>
            <section>
              <h3>2. Accuracy of Data</h3>
              <p>While we strive for 100% accuracy, scientific data can change. We are not responsible for any academic or professional errors resulting from the use of this data.</p>
            </section>
          </div>
        );
      case 'faq':
        return (
          <div className="docs-content-wrapper">
            <h2><HelpCircle className="section-icon" /> Frequently Asked Questions</h2>
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="chevron" />
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'docs':
      default:
        return (
          <div className="docs-content-wrapper">
            <h2><Book className="section-icon" /> Documentation</h2>
            <section>
              <h3>Getting Started</h3>
              <p>Navigate through the grid to view basic information about each element. Hover over an element to see its block classification and symbol.</p>
            </section>
            <section>
              <h3>3.D Visualization</h3>
              <p>Click on any element to open its details. Many elements feature a 3D atomic model that you can rotate and zoom to understand its electron shell structure.</p>
            </section>
            <section>
              <h3>Keyboard Shortcuts</h3>
              <ul>
                <li><strong>/</strong> : Focus the search bar</li>
                <li><strong>Esc</strong> : Close any open modal or clear search</li>
                <li><strong>1-4</strong> : Select options in Quiz Mode</li>
              </ul>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="docs-overlay" onClick={onClose}>
      <div className="docs-modal" onClick={e => e.stopPropagation()} ref={portalRef}>
        <div className="docs-header">
          <button className="docs-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        {renderContent()}
        <div className="docs-footer">
          <button className="scroll-top-btn" onClick={() => portalRef.current.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp size={16} /> Back to top
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocsPortal;
