import React, { createContext, useMemo, useState } from 'react';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';
import AppMainContent from './AppMainContent';

export const EditModeContext = createContext(undefined);
export const PersonalInfoContext = createContext(undefined);

function MainContent() {
  const [editMode, setEditMode] = useState(false);
  const editModeValue = useMemo(() => ({ editMode, setEditMode }), [editMode]);

  const [personalInfo, setPersonalInfo] = useState({
    name: 'First Lasts',
    email: 'sample@sample.xyz',
    contactNo: '(555) 555-5555',
    address: 'City Name, ST',
  });
  const personalInfoValue = useMemo(() => ({
    personalInfo, setPersonalInfo,
  }), [personalInfo]);

  return (
    <div className={styles.mainContainer}>
      <EditModeContext.Provider value={editModeValue}>
        <AppHeader />
        <PersonalInfoContext.Provider value={personalInfoValue}>
          <AppMainContent />
        </PersonalInfoContext.Provider>
      </EditModeContext.Provider>
    </div>
  );
}

export default MainContent;
