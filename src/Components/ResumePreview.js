import React, { useContext } from 'react';
import resumePreviewStyles from '../Styles/ResumePreview.module.css';
import PersonalInfo from './PersonalInfo';
import WorkExperienceSection from './WorkExperienceSection';
import EducationSection from './EducationSection';
import SkillsInterestsSection from './SkillsInterestsSection';
import {
  EditModeContext,
  EducationArrayContext,
  EducationContext, ResumePreviewRefContext,
  WorkExperienceContext,
  WorkExperiencesContext,
} from './MainContent';
import SectionHeaderButton from './SectionHeaderButton';

// TODO: During edit mode, when element is hovered, show border highlight.
// TODO: Character limits for input fields.
// TODO: PDF Generator.
function ResumePreview() {
  const { editMode } = useContext(EditModeContext);
  const { workExperience, setWorkExperience } = useContext(WorkExperienceContext);
  const { workExperiencesArray, setWorkExperiencesArray } = useContext(WorkExperiencesContext);
  const { education, setEducation } = useContext(EducationContext);
  const { educationArray, setEducationArray } = useContext(EducationArrayContext);
  const previewRef = useContext(ResumePreviewRefContext);

  let workExperienceHeader;
  let educationHeader;
  if (editMode) {
    workExperienceHeader = (
      <SectionHeaderButton
        text="ADD WORK EXPERIENCE"
        section="workExperience"
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
        workExperiencesArray={workExperiencesArray}
        setWorkExperiencesArray={setWorkExperiencesArray}
      />
    );
    educationHeader = (
      <SectionHeaderButton
        text="ADD EDUCATION"
        section="education"
        education={education}
        setEducation={setEducation}
        educationArray={educationArray}
        setEducationArray={setEducationArray}
      />
    );
  } else {
    workExperienceHeader = <h2 className={resumePreviewStyles.header}>WORK EXPERIENCE</h2>;
    educationHeader = <h2 className={resumePreviewStyles.header}>EDUCATION</h2>;
  }

  return (
    <div className={resumePreviewStyles.resumePreview} ref={previewRef}>
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
