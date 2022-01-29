import React from 'react';
import styles from '../Styles/resumeContent.module.css';

function EducationElement() {
  return (
    <div className={styles.resumeContent}>
      <div className={styles.elementHeader}>
        <div>
          <h2 className={styles.institutionName}>University Name</h2>
          <h2 className={styles.title}>Degree (e.g., BS), Majors (e.g., Computer Science)</h2>
        </div>
        <div className={styles.locationAndDuration}>
          <h2 className={styles.duration}>Graduation Month, Year</h2>
          <h2 className={styles.location}>City, ST</h2>
        </div>
      </div>
      <ul className={styles.list}>
        <li>List your honors like summa cum laude or GPA; (list only if GPA is over 3.3)</li>
        <li>Studied abroad in City, Country during spring/fall 20YY semester (University Name)</li>
        <li>Any other fun stuff like varsity sports, or something that gives you a little color</li>
      </ul>
    </div>
  );
}

export default EducationElement;
