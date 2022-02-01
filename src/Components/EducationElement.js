import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import styles from '../Styles/resumeContent.module.css';
import editStyles from '../Styles/editmode.module.css';

function EducationElement({
  education, editMode, educationArray, setEducationArray,
}) {
  const [educationState, setEducation] = useState({
    universityName: education.universityName,
    degree: education.degree,
    graduationDate: education.graduationDate,
    location: education.location,
    firstBullet: education.firstBullet,
    secondBullet: education.secondBullet,
    thirdBullet: education.thirdBullet,
  });

  const handleChangeInUniversityName = (e) => {
    setEducation((prevState) => ({
      ...prevState,
      universityName: e.target.value,
    }));
  };

  const handleChangeInDegree = (e) => {
    setEducation((prevState) => ({
      ...prevState,
      degree: e.target.value,
    }));
  };

  const handleChangeInGraduationDate = (e) => {
    setEducation((prevState) => ({
      ...prevState,
      graduationDate: e.target.value,
    }));
  };

  const handleChangeInLocation = (e) => {
    setEducation((prevState) => ({
      ...prevState,
      location: e.target.value,
    }));
  };

  const handleChangeInFirstBullet = (e) => {
    setEducation((prevState) => ({
      ...prevState,
      firstBullet: e.target.value,
    }));
  };

  const handleChangeInSecondBullet = (e) => {
    setEducation((prevState) => ({
      ...prevState,
      secondBullet: e.target.value,
    }));
  };

  const handleChangeInThirdBullet = (e) => {
    setEducation((prevState) => ({
      ...prevState,
      thirdBullet: e.target.value,
    }));
  };

  const deleteEducation = () => {
    const arr = [...educationArray];
    const newArray = arr.filter((educationElement) => education.id !== educationElement.id);
    setEducationArray(newArray);
  };

  if (editMode) {
    return (
      <div className={editStyles.resumeContent}>
        <IconButton aria-label="delete" size="small" onClick={deleteEducation}>
          <ClearIcon fontSize="inherit" />
        </IconButton>
        <div className={styles.elementHeader}>
          <div>
            <input
              onChange={handleChangeInUniversityName}
              className={editStyles.institutionName}
              value={educationState.universityName}
            />
            <input
              onChange={handleChangeInDegree}
              className={editStyles.title}
              value={educationState.degree}
            />
          </div>
          <div className={styles.locationAndDuration}>
            <input
              onChange={handleChangeInGraduationDate}
              className={editStyles.duration}
              value={educationState.graduationDate}
            />
            <input
              onChange={handleChangeInLocation}
              className={editStyles.institutionAddress}
              value={educationState.location}
            />
          </div>
        </div>
        <ul className={styles.list}>
          <li>
            <input
              onChange={handleChangeInFirstBullet}
              className={editStyles.listElement}
              value={educationState.firstBullet}
            />
          </li>
          <li>
            <input
              onChange={handleChangeInSecondBullet}
              className={editStyles.listElement}
              value={educationState.secondBullet}
            />
          </li>
          <li>
            <input
              onChange={handleChangeInThirdBullet}
              className={editStyles.listElement}
              value={educationState.thirdBullet}
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
          <h2 className={styles.institutionName}>{educationState.universityName}</h2>
          <h2 className={styles.title}>{educationState.degree}</h2>
        </div>
        <div className={styles.locationAndDuration}>
          <h2 className={styles.duration}>{educationState.graduationDate}</h2>
          <h2 className={styles.location}>{educationState.location}</h2>
        </div>
      </div>
      <ul className={styles.list}>
        <li>{educationState.firstBullet}</li>
        <li>{educationState.secondBullet}</li>
        <li>{educationState.thirdBullet}</li>
      </ul>
    </div>
  );
}

export default EducationElement;
