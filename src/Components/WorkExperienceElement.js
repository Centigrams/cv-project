import React, { useState } from 'react';
import styles from '../Styles/resumeContent.module.css';
import editStyles from '../Styles/editmode.module.css';

function WorkExperienceElement({ experience, editMode }) {
  // TODO: On right click above component: Delete.

  const [workExperience, setWorkExperience] = useState({
    companyName: experience.companyName,
    jobTitle: experience.jobTitle,
    tenure: experience.tenure,
    location: experience.location,
    firstCR: experience.firstCR,
    secondCR: experience.secondCR,
    thirdCR: experience.thirdCR,
  });

  const handleChangeInCompanyName = (e) => {
    setWorkExperience((prevState) => ({
      ...prevState,
      companyName: e.target.value,
    }));
  };

  const handleChangeInJobTitle = (e) => {
    setWorkExperience((prevState) => ({
      ...prevState,
      jobTitle: e.target.value,
    }));
  };

  const handleChangeInTenure = (e) => {
    setWorkExperience((prevState) => ({
      ...prevState,
      tenure: e.target.value,
    }));
  };

  const handleChangeInLocation = (e) => {
    setWorkExperience((prevState) => ({
      ...prevState,
      location: e.target.value,
    }));
  };

  const handleChangeInFirstCR = (e) => {
    setWorkExperience((prevState) => ({
      ...prevState,
      firstCR: e.target.value,
    }));
  };

  const handleChangeInSecondCR = (e) => {
    setWorkExperience((prevState) => ({
      ...prevState,
      secondCR: e.target.value,
    }));
  };

  const handleChangeInThirdCR = (e) => {
    setWorkExperience((prevState) => ({
      ...prevState,
      thirdCR: e.target.value,
    }));
  };

  if (editMode) {
    return (
      <div className={styles.resumeContent}>
        <div className={styles.elementHeader}>
          <div>
            <input
              onChange={handleChangeInCompanyName}
              className={editStyles.institutionName}
              value={workExperience.companyName}
            />
            <input
              onChange={handleChangeInJobTitle}
              className={editStyles.title}
              value={workExperience.jobTitle}
            />
          </div>
          <div className={styles.locationAndDuration}>
            <input
              onChange={handleChangeInTenure}
              className={editStyles.duration}
              value={workExperience.tenure}
            />
            <input
              onChange={handleChangeInLocation}
              className={editStyles.institutionAddress}
              value={workExperience.location}
            />
          </div>
        </div>
        <ul className={styles.list}>
          <li>
            <input
              onChange={handleChangeInFirstCR}
              className={editStyles.listElement}
              value={workExperience.firstCR}
            />
          </li>
          <li>
            <input
              onChange={handleChangeInSecondCR}
              className={editStyles.listElement}
              value={workExperience.secondCR}
            />
          </li>
          <li>
            <input
              onChange={handleChangeInThirdCR}
              className={editStyles.listElement}
              value={workExperience.thirdCR}
            />
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.resumeContent}>
      <div className={styles.elementHeader}>
        <div>
          <h2 className={styles.institutionName}>{workExperience.companyName}</h2>
          <h2 className={styles.title}>{workExperience.jobTitle}</h2>
        </div>
        <div className={styles.locationAndDuration}>
          <h2 className={styles.duration}>{workExperience.tenure}</h2>
          <h2 className={styles.location}>{workExperience.location}</h2>
        </div>
      </div>
      <ul className={styles.list}>
        <li>{workExperience.firstCR}</li>
        <li>{workExperience.secondCR}</li>
        <li>{workExperience.thirdCR}</li>
      </ul>
    </div>
  );
}

export default WorkExperienceElement;
