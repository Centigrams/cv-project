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
          <input className={editModeStyles.name} value={name} onChange={handleChangeInName} />
        </div>
        <div>
          <input value={email} onChange={handleChangeInEmail} type="text" className={editModeStyles.email} />
          <input value={contactNo} onChange={handleChangeInContactNo} type="text" className={editModeStyles.contactNo} />
          <input value={address} onChange={handleChangeInAddress} type="text" className={editModeStyles.location} />
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
