import React, { useContext } from 'react';
import personalInfoStyles from '../Styles/PersonalInfo.module.css';
import editModeStyles from '../Styles/editmode.module.css';
import {
  EditModeContext, EmailContext, NameContext, ContactNumberContext, AddressContext,
} from './MainContent';

function PersonalInfo() {
  const { editMode } = useContext(EditModeContext);
  const { name, setName } = useContext(NameContext);
  const { email, setEmail } = useContext(EmailContext);
  const { contactNo, setContactNo } = useContext(ContactNumberContext);
  const { address, setAddress } = useContext(AddressContext);

  const handleChangeInName = (e) => {
    setName(e.target.value);
  };

  const handleChangeInEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeInContactNo = (e) => {
    setContactNo(e.target.value);
  };

  const handleChangeInAddress = (e) => {
    setAddress(e.target.value);
  };

  if (editMode) {
    return (
      <div className={personalInfoStyles.personalInfo}>
        <div>
          <input className={editModeStyles.name} onChange={handleChangeInName} value={name} />
        </div>
        <div>
          <input type="text" className={editModeStyles.email} onChange={handleChangeInEmail} value={email} />
          <input type="tel" className={editModeStyles.contactNo} onChange={handleChangeInContactNo} value={contactNo} />
          <input type="text" className={editModeStyles.location} onChange={handleChangeInAddress} value={address} />
        </div>
      </div>
    );
  }
  return (
    <div className={personalInfoStyles.personalInfo}>
      <div>
        <h1 className={personalInfoStyles.name}>{name}</h1>
      </div>
      <div>
        <h2 className={personalInfoStyles.contactAndAddress}>
          {email}
          {' '}
          |
          {' '}
          {contactNo}
          {' '}
          |
          {' '}
          {address}
        </h2>
      </div>
    </div>
  );
}

export default PersonalInfo;
