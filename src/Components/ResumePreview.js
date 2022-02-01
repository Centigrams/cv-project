import React, { useContext } from 'react';
import resumePreviewStyles from '../Styles/ResumePreview.module.css';
import PersonalInfo from './PersonalInfo';
import WorkExperienceSection from './WorkExperienceSection';
import EducationSection from './EducationSection';
import SkillsInterestsSection from './SkillsInterestsSection';
import { EditModeContext } from './MainContent';
import SectionHeaderButton from './SectionHeaderButton';

// TODO: Add element functionality.

function ResumePreview() {
  const { editMode } = useContext(EditModeContext);
  let workExperienceHeader;
  let educationHeader;
  if (editMode) {
    workExperienceHeader = <SectionHeaderButton text="ADD WORK EXPERIENCE" />;
    educationHeader = <SectionHeaderButton text="ADD EDUCATION" />;
  } else {
    workExperienceHeader = <h2 className={resumePreviewStyles.header}>WORK EXPERIENCE</h2>;
    educationHeader = <h2 className={resumePreviewStyles.header}>EDUCATION</h2>;
  }

  return (
    <div className={resumePreviewStyles.resumePreview}>
      <PersonalInfo />
      <div className={resumePreviewStyles.topBorder}>
        {workExperienceHeader}
      </div>
      <WorkExperienceSection />
      <div className={resumePreviewStyles.topBorder}>
        {educationHeader}
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
