import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkExperienceElement from './WorkExperienceElement';
import { EditModeContext, WorkExperiencesContext, WorkExperienceContext } from './MainContent';
import CustomAddButtons from '../Styles/MUICustomStyledComponents/CustomAddButtons';

function WorkExperienceSection() {
  const { editMode } = useContext(EditModeContext);
  const { workExperiencesArray, setWorkExperiencesArray } = useContext(WorkExperiencesContext);
  const { workExperience, setWorkExperience } = useContext(WorkExperienceContext);

  const addWorkExperience = () => {
    setWorkExperiencesArray(workExperiencesArray.concat(workExperience));
    setWorkExperience({
      id: uuidv4(),
      companyName: 'Company Name',
      jobTitle: 'Job Title',
      tenure: 'Month Year - Month Year',
      location: 'City, ST',
      firstCR: 'Core Responsibility',
      secondCR: 'Core Responsibility',
      thirdCR: 'Core Responsibility',
    });
  };

  if (editMode) {
    return (
      <div>
        { workExperiencesArray.map((experience) => <WorkExperienceElement key={experience.id} />)}
        <CustomAddButtons onClick={addWorkExperience}>Add Work Experience</CustomAddButtons>
      </div>
    );
  }
  return (
    <div>
      { workExperiencesArray.map((experience) => <WorkExperienceElement key={experience.id} />)}
    </div>
  );
}

export default WorkExperienceSection;
