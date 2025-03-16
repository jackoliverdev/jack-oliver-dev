import React from 'react';
import styles from './BrowserMockup.module.css';

const BrowserMockup = ({ url, children }) => {
  return (
    <div className={styles.browserContainer}>
      <div className={styles.browserBar}>
        <div className={styles.browserControls}>
          <div className={styles.browserButton} style={{ backgroundColor: '#FF5F57' }}></div>
          <div className={styles.browserButton} style={{ backgroundColor: '#FFBD2E' }}></div>
          <div className={styles.browserButton} style={{ backgroundColor: '#28CA41' }}></div>
        </div>
        <div className={styles.browserAddressBar}>
          <div className={styles.browserUrl}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconGlobe}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>{url}</span>
          </div>
        </div>
        <div className={styles.browserActions}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      </div>
      <div className={styles.browserContent}>
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup; 