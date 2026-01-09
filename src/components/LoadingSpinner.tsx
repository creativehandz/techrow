import React from 'react';
import './Button.css';

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-text">
          <img 
            src="/media/images/logo/techrow-fund.svg" 
            alt="TechRow Fund" 
            className="loading-logo"
          />
          <p className="loading-message">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;