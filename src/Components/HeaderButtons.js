import React, { useContext } from 'react';
import { ButtonGroup } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import CustomButtons from '../Styles/MUICustomStyledComponents/CustomHeaderButtons';
import {
  EditModeContext,
  EducationArrayContext,
  InterestsContext,
  PersonalInfoContext,
  SkillsContext,
  WorkExperiencesContext,
} from './MainContent';

function HeaderButtons() {
  const { editMode, setEditMode } = useContext(EditModeContext);
  const { setPersonalInfo } = useContext(PersonalInfoContext);
  const { setWorkExperiencesArray } = useContext(WorkExperiencesContext);
  const { setEducationArray } = useContext(EducationArrayContext);
  const { setSkills } = useContext(SkillsContext);
  const { setInterests } = useContext(InterestsContext);

  // Reset resume template to initial states in MainContent component.
  const resetPreview = () => {
    setPersonalInfo({
      name: 'First Last',
      email: 'professional@sample.xyz',
      contactNo: '(555) 555-5555',
      address: 'City Name, ST',
    });
    setWorkExperiencesArray([
      {
        id: uuidv4(),
        companyName: 'Company Name',
        jobTitle: 'Job Title',
        tenure: 'Month Year - Month Year',
        location: 'City, ST',
        firstCR: 'Core Responsibility',
        secondCR: 'Core Responsibility',
        thirdCR: 'Core Responsibility',
      },
      {
        id: uuidv4(),
        companyName: 'Company Name',
        jobTitle: 'Job Title',
        tenure: 'Month Year - Month Year',
        location: 'City, ST',
        firstCR: 'Core Responsibility',
        secondCR: 'Core Responsibility',
        thirdCR: 'Core Responsibility',
      },
    ]);
    setEducationArray([
      {
        id: uuidv4(),
        universityName: 'University Name',
        degree: 'Degree (e.g., BS), Majors (e.g., Computer Science)',
        graduationDate: 'Graduation Month, Year',
        location: 'City, ST',
        firstBullet: 'List your honors like summa cum laude or GPA; (list only if GPA is over 3.3)',
        secondBullet: 'Studied abroad in City, Country during spring/fall 20YY semester (University Name)',
        thirdBullet: 'Any other fun stuff like varsity sports, or something that gives you a little color',
      },
    ]);
    setSkills('Strategic planning; strategic '
      + 'partnerships; revenue modeling & forecasting');
    setInterests('Racing; traveling; fishing; yachting; '
      + 'Reddit; Classical music');
  };

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  let editButton;
  if (editMode) {
    editButton = 'SAVE';
  } else {
    editButton = 'EDIT';
  }
  return (
    <ButtonGroup variant="text">
      <CustomButtons variant="contained">GENERATE AS PDF</CustomButtons>
      <CustomButtons variant="contained" onClick={toggleEditMode}>{editButton}</CustomButtons>
      <CustomButtons variant="contained" onClick={resetPreview}>RESET</CustomButtons>
    </ButtonGroup>
  );
}

export default HeaderButtons;
