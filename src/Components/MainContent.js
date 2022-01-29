import React from 'react';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';
import AppMainContent from './AppMainContent';

function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <AppHeader />
      <AppMainContent />
    </div>
  );
}

export default MainContent;
