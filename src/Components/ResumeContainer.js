import React from 'react';
import resumeContainerStyles from '../Styles/ResumeContainer.module.css';
import ResumePreview from './ResumePreview';

function ResumeContainer() {
  return (
    <div className={resumeContainerStyles.resumeContainer}>
      <ResumePreview />
    </div>
  );
}

export default ResumeContainer;
