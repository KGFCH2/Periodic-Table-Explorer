import React from 'react';
import './Footer.css';
import { Globe, Send, Mail, Shield, FileText, BookOpen, HelpCircle } from 'lucide-react';

const Footer = ({ onOpenDocs }) => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Periodic Table Explorer</h3>
          <p>The most comprehensive interactive periodic table for students and researchers.</p>
          <div className="social-links">
            <a href="https://github.com/shwetap3000/Periodic-Table-Explorer" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Globe size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-group">
            <h4>Resources</h4>
            <ul>
              <li>
                <button onClick={() => onOpenDocs('docs')}>
                  <BookOpen size={14} /> Documentation
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDocs('faq')}>
                  <HelpCircle size={14} /> FAQs
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Legal</h4>
            <ul>
              <li>
                <button onClick={() => onOpenDocs('privacy')}>
                  <Shield size={14} /> Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDocs('terms')}>
                  <FileText size={14} /> Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Periodic Table Explorer. Built with Science & React.</p>
      </div>
    </footer>
  );
};

export default Footer;
