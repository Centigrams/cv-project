import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import CustomAddButtons from '../Styles/MUICustomStyledComponents/CustomAddButtons';

function SectionHeaderButton({
  text,
  section,
  workExperience,
  setWorkExperience,
  workExperiencesArray,
  setWorkExperiencesArray,
}) {
  const addNewWorkExperience = () => {
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

  // TODO: Add education functionality.
  const addEducation = () => {
  };

  if (section === 'workExperience') {
    return (
      <CustomAddButtons variant="outlined" endIcon={<AddIcon />} onClick={addNewWorkExperience}>
        {text}
      </CustomAddButtons>
    );
  } if (section === 'education') {
    return (
      <CustomAddButtons variant="outlined" endIcon={<AddIcon />} onClick={addEducation}>
        {text}
      </CustomAddButtons>
    );
  }
}

export default SectionHeaderButton;
