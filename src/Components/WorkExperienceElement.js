import React from 'react';
import styles from '../Styles/resumeContent.module.css';

function WorkExperienceElement() {
  // TODO: On right click above component: Delete.
  // TODO: WorkExperienceElement input fields.
  return (
    <div className={styles.resumeContent}>
      <div className={styles.elementHeader}>
        <div>
          <h2 className={styles.institutionName}>Company Name</h2>
          <h2 className={styles.title}>Job title</h2>
        </div>
        <div className={styles.locationAndDuration}>
          <h2 className={styles.duration}>Month Year - Month Year</h2>
          <h2 className={styles.location}>City, ST</h2>
        </div>
      </div>
      <ul className={styles.list}>
        <li>Core responsibility</li>
        <li>Core responsibility</li>
        <li>Core responsibility</li>
      </ul>
    </div>
  );
}

export default WorkExperienceElement;
