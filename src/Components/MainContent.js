import React from 'react';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';
import ResumeContainer from './ResumeContainer';

// Holds form and preview instead of App component for new components in the future (i.e. modals).
// TODO: ResumeContainer Component.
// TODO: ResumeContainer component will hold ResumePreview component.
// TODO: ResumeContainer styles (May change).
function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <AppHeader />
      <ResumeContainer />
    </div>
  );
}

export default MainContent;
