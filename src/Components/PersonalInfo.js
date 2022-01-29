import React from 'react';
import personalInfoStyles from '../Styles/PersonalInfo.module.css';
import editModeStyles from '../Styles/editmode.module.css';

function PersonalInfo({
  editMode, name, setName, email, setEmail, contactNo, setContactNo, address, setAddress,
}) {
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
