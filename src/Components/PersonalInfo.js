import React, { useContext } from 'react';
import personalInfoStyles from '../Styles/PersonalInfo.module.css';
import editModeStyles from '../Styles/editmode.module.css';
import { EditModeContext, PersonalInfoContext } from './MainContent';

function PersonalInfo() {
  const { editMode } = useContext(EditModeContext);
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);

  const handleChangeInName = (e) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleChangeInEmail = (e) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const handleChangeInContactNo = (e) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      contactNo: e.target.value,
    }));
  };

  const handleChangeInAddress = (e) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      address: e.target.value,
    }));
  };

  if (editMode) {
    return (
      <div className={personalInfoStyles.personalInfo}>
        <div>
          <input
            className={editModeStyles.name}
            onChange={handleChangeInName}
            value={personalInfo.name}
          />
        </div>
        <div>
          <input type="text" className={editModeStyles.email} onChange={handleChangeInEmail} value={personalInfo.email} />
          <input type="tel" className={editModeStyles.contactNo} onChange={handleChangeInContactNo} value={personalInfo.contactNo} />
          <input type="text" className={editModeStyles.location} onChange={handleChangeInAddress} value={personalInfo.address} />
        </div>
      </div>
    );
  }
  return (
    <div className={personalInfoStyles.personalInfo}>
      <div>
        <h1 className={personalInfoStyles.name}>{personalInfo.name}</h1>
      </div>
      <div>
        <h2 className={personalInfoStyles.contactAndAddress}>
          {personalInfo.email}
          {' '}
          |
          {' '}
          {personalInfo.contactNo}
          {' '}
          |
          {' '}
          {personalInfo.address}
        </h2>
      </div>
    </div>
  );
}

export default PersonalInfo;
