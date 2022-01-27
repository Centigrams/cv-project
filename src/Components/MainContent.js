import React from 'react';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';

// Holds form and preview instead of App component for new components in the future (i.e. modals).
// TODO: Resume Component.
// TODO: Resume styles (May change).
function MainContent() {
  return (
    <div id={styles.mainContainer}>
      <AppHeader />
    </div>
  );
}

export default MainContent;
