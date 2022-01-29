import React, { useState } from 'react';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';
import AppMainContent from './AppMainContent';

function MainContent() {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <AppHeader setEditMode={setEditMode} />
      <AppMainContent editMode={editMode} />
    </div>
  );
}

export default MainContent;
