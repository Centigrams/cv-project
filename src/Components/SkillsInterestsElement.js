import React from 'react';
import resumeContentStyles from '../Styles/resumeContent.module.css';

function SkillsInterestsElement() {
  return (
    <div className={resumeContentStyles.resumeContent}>
      <ul className={resumeContentStyles.list}>
        <li>Skills: Strategic planning; strategic partnerships; revenue modeling & forecasting</li>
        <li>Interests: Racing; traveling; fishing; yachting; Reddit; classical music</li>
      </ul>
    </div>
  );
}

export default SkillsInterestsElement;
