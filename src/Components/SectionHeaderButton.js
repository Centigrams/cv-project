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
  education,
  setEducation,
  educationArray,
  setEducationArray,
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

  const addNewEducation = () => {
    setEducationArray(educationArray.concat(education));
    setEducation({
      id: uuidv4(),
      universityName: 'University Name',
      degree: 'Degree (e.g., BS), Majors (e.g., Computer Science)',
      graduationDate: 'Graduation Month, Year',
      location: 'City, ST',
      firstBullet: 'List your honors like summa cum laude or GPA; (list only if GPA is over 3.3)',
      secondBullet: 'Studied abroad in City, Country during spring/fall 20YY semester (University Name)',
      thirdBullet: 'Any other fun stuff like varsity sports, or something that gives you a little color',
    });
  };

  if (section === 'workExperience') {
    return (
      <CustomAddButtons variant="outlined" endIcon={<AddIcon />} onClick={addNewWorkExperience}>
        {text}
      </CustomAddButtons>
    );
  } if (section === 'education') {
    return (
      <CustomAddButtons variant="outlined" endIcon={<AddIcon />} onClick={addNewEducation}>
        {text}
      </CustomAddButtons>
    );
  }
}

export default SectionHeaderButton;
