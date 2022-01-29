import React from 'react';
import personalInfoStyles from '../Styles/PersonalInfo.module.css';

function PersonalInfo() {
  return (
    <div className={personalInfoStyles.personalInfo}>
      <div>
        <h1 className={personalInfoStyles.name}>Jobby McJobface</h1>
      </div>
      <div>
        <h2 className={personalInfoStyles.contactAndAddress}>
          sample@sample.com | (555) 555-5555 | Los Angeles, CA
        </h2>
      </div>
    </div>
  );
}

export default PersonalInfo;
