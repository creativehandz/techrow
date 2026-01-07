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
          Local Spaces. Local Talent. Local Content. Powered by TechRow.
        </p>
        
        <p className="footer-email">
          <a href="mailto:info@techrowfund.org">info@techrowfund.org</a>
        </p>
        
        <div className="copyright-social-icons">
          <a href="https://www.facebook.com/profile.php?id=100066689012548&fb_dtsg_ag=AdwuUh4oJPtu6_nBNF[…]a9nJPp6K-vQ%3AAdyQU9J7HPtLAjAydsyYiNqBslZ6SmH6hDetuUZ_7lLc3w" target='_blank' className="social-icon" aria-label="Facebook">
            <img src="/media/images/icons/facebook.png" alt="Facebook" />
          </a>
          
          <a href="https://x.com/techrowfund" target='_blank' className="social-icon" aria-label="X (Twitter)">
            <img src="/media/images/icons/twitter.png" alt="Twitter" />
          </a>
          
          <a href="https://www.linkedin.com/company/techrow-fund/" target='_blank' className="social-icon" aria-label="LinkedIn">
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