import React from 'react';
import resumePreviewStyles from '../Styles/ResumePreview.module.css';
import PersonalInfo from './PersonalInfo';
import WorkExperienceSection from './WorkExperienceSection';
import EducationSection from './EducationSection';
import SkillsInterestsSection from './SkillsInterestsSection';

function ResumePreview() {
  return (
    <div className={resumePreviewStyles.resumePreview}>
      <PersonalInfo />
      <div>
        <h2 className={resumePreviewStyles.header}>WORK EXPERIENCE</h2>
      </div>
      <WorkExperienceSection />
      <div>
        <h2 className={resumePreviewStyles.header}>EDUCATION</h2>
      </div>
      <EducationSection />
      <div>
        <h2 className={resumePreviewStyles.header}>SKILLS & INTERESTS</h2>
      </div>
      <SkillsInterestsSection />
    </div>
  );
}

export default ResumePreview;
