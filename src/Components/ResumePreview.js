import React from 'react';
import resumePreviewStyles from '../Styles/ResumePreview.module.css';
import PersonalInfo from './PersonalInfo';
import WorkExperienceSection from './WorkExperienceSection';
import EducationSection from './EducationSection';
import SkillsInterestsSection from './SkillsInterestsSection';

// TODO: Edit Mode Add Work Experience Buttons (on section header)
// IDEA: Replace hard coded section headers, and place buttons there when edit mode.

function ResumePreview() {
  return (
    <div className={resumePreviewStyles.resumePreview}>
      <PersonalInfo />
      <div className={resumePreviewStyles.topBorder}>
        <h2 className={resumePreviewStyles.header}>WORK EXPERIENCE</h2>
      </div>
      <WorkExperienceSection />
      <div className={resumePreviewStyles.topBorder}>
        <h2 className={resumePreviewStyles.header}>EDUCATION</h2>
      </div>
      <EducationSection />
      <div className={resumePreviewStyles.topBorder}>
        <h2 className={resumePreviewStyles.header}>SKILLS & INTERESTS</h2>
      </div>
      <SkillsInterestsSection />
    </div>
  );
}

export default ResumePreview;
