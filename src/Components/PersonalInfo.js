import React from 'react';
import personalInfoStyles from '../Styles/PersonalInfo.module.css';
import editModeStyles from '../Styles/editmode.module.css';

function PersonalInfo({ editMode }) {
  // TODO: Add new styling for edit mode.
  if (editMode) {
    return (
      <div className={personalInfoStyles.personalInfo}>
        <div>
          <input className={editModeStyles.name} value="First Last" />
        </div>
        <div>
          <input value="sample@sample.com" type="text" className={editModeStyles.email} />
          <input value="(555) 555-5555" type="text" className={editModeStyles.contactNo} />
          <input value="City, ST" type="text" className={editModeStyles.location} />
        </div>
      </div>
    );
  }
  return (
    <div className={personalInfoStyles.personalInfo}>
      <div>
        <h1 className={personalInfoStyles.name}>First Last</h1>
      </div>
      <div>
        <h2 className={personalInfoStyles.contactAndAddress}>
          sample@sample.com | (555) 555-5555 | City, ST
        </h2>
      </div>
    </div>
  );
}

export default PersonalInfo;
