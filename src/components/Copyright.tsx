import React from 'react';
import './Button.css';

interface CopyrightProps {
  className?: string;
}

const Copyright: React.FC<CopyrightProps> = ({ className = '' }) => {
  return (
    <div className={`copyright-container footer-bg ${className}`}>
      <div className="copyright-content">
        <p className="copyright-tagline">
          Local Spaces. Local Talent. Local Memories. Powered by TechRow.
        </p>
        
        <div className="copyright-social-icons">
          <a href="https://www.facebook.com/techrownyc/" target='_blank' className="social-icon" aria-label="Facebook">
            <img src="/media/images/icons/facebook.png" alt="Facebook" />
          </a>
          
          <a href="https://x.com/TechRowNYC" target='_blank' className="social-icon" aria-label="X (Twitter)">
            <img src="/media/images/icons/twitter.png" alt="Twitter" />
          </a>
          
          <a href="https://www.instagram.com/techrow_official" target='_blank' className="social-icon" aria-label="Instagram">
            <img src="/media/images/icons/instagram.png" alt="Instagram" />
          </a>
          
          <a href="https://www.youtube.com/channel/UCdqBRNn-6lN6d-omGFZXPxw" target='_blank' className="social-icon" aria-label="YouTube">
            <img src="/media/images/icons/youtube.png" alt="YouTube" />
          </a>
          
          <a href="https://www.linkedin.com/company/tech-row/" target='_blank' className="social-icon" aria-label="LinkedIn">
            <img src="/media/images/icons/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        
        <p className="copyright-text">
          © 2025 TechRow. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyright;