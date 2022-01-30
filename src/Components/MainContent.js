import React, { createContext, useMemo, useState } from 'react';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';
import AppMainContent from './AppMainContent';

export const EditModeContext = createContext(undefined);
export const NameContext = createContext(undefined);
export const EmailContext = createContext(undefined);
export const ContactNumberContext = createContext(undefined);
export const AddressContext = createContext(undefined);

function MainContent() {
  const [editMode, setEditMode] = useState(false);
  const editModeValue = useMemo(() => ({ editMode, setEditMode }), [editMode]);

  // Hooks for Personal Info.
  const [name, setName] = useState('First Last');
  const nameValue = useMemo(() => ({ name, setName }), [name]);

  const [email, setEmail] = useState('sample@sample.com');
  const emailValue = useMemo(() => ({ email, setEmail }), [email]);

  const [contactNo, setContactNo] = useState('(555) 555-5555');
  const contactNoValue = useMemo(() => ({ contactNo, setContactNo }), [contactNo]);

  const [address, setAddress] = useState('City Name, ST');
  const addressValue = useMemo(() => ({ address, setAddress }), [address]);

  /**
   * Using useContext greatly increases development speed by avoiding prop drilling,
   * however I am left with this pyramid.
   */
  return (
    <div className={styles.mainContainer}>
      <EditModeContext.Provider value={editModeValue}>
        <AppHeader />
        <NameContext.Provider value={nameValue}>
          <EmailContext.Provider value={emailValue}>
            <ContactNumberContext.Provider value={contactNoValue}>
              <AddressContext.Provider value={addressValue}>
                <AppMainContent />
              </AddressContext.Provider>
            </ContactNumberContext.Provider>
          </EmailContext.Provider>
        </NameContext.Provider>
      </EditModeContext.Provider>
    </div>
  );
}

export default MainContent;
