import React from 'react';
import resumePreviewStyles from '../Styles/ResumePreview.module.css';
import PersonalInfo from './PersonalInfo';
import WorkExperienceSection from './WorkExperienceSection';
import EducationSection from './EducationSection';
import SkillsInterestsSection from './SkillsInterestsSection';

function ResumePreview({
  editMode, name, setName, email, setEmail, contactNo, setContactNo, address, setAddress,
}) {
  return (
    <div className={resumePreviewStyles.resumePreview}>
      <PersonalInfo
        editMode={editMode}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        contactNo={contactNo}
        setContactNo={setContactNo}
        address={address}
        setAddress={setAddress}
      />
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
