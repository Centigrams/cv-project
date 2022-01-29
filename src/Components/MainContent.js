import React, { useState } from 'react';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';
import AppMainContent from './AppMainContent';

function MainContent() {
  const [editMode, setEditMode] = useState(false);
  // Hooks for PersonalInfo component.
  const [name, setName] = useState('First Last');
  const [email, setEmail] = useState('sample@sample.com');
  const [contactNo, setContactNo] = useState('(555) 555-5555');
  const [address, setAddress] = useState('City Name, State');

  return (
    <div className={styles.mainContainer}>
      <AppHeader setEditMode={setEditMode} editMode={editMode} />
      <AppMainContent
        editMode={editMode}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        contactNo={contactNo}
        setContactNo={setContactNo}
        address={address}
        setAddress={setAddress}
      />
    </div>
  );
}

export default MainContent;
