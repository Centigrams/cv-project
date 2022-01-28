import React from 'react';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';
import AppMainContent from './AppMainContent';

// Holds form and preview instead of App component for new components in the future (i.e. modals).
function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <AppHeader />
      <AppMainContent />
    </div>
  );
}

export default MainContent;
