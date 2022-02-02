import React, { useContext } from 'react';
import { ButtonGroup } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useReactToPrint } from 'react-to-print';
import CustomButtons from '../Styles/MUICustomStyledComponents/CustomHeaderButtons';
import {
  EditModeContext,
  EducationArrayContext,
  InterestsContext,
  PersonalInfoContext, ResumePreviewRefContext,
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

  /**
   * In order for the generatePDF function to work, we used the createRef method
   * which was then passed in a context to avoid prop drilling. Take note that this
   * occurred at the parent component of the AppHeader and the AppMainContent components.
   * In the ResumePreview component, we used the created context as a ref attached to the
   * div (see ResumePreview.js return statement), this will be the component to be printed when
   * the button is clicked.
   * ---
   * In this component, we used the same context used in ResumePreview in the generatePDF function,
   * more specifically in the useReactToPrint hook.
   * ---
   * Summary:
   * 1. Create ref in parent component of AppHeader and AppMainContent.
   * 2. Pass the ref in ResumePreview.js
   * 3. Use the ref to generatePDF with useReactToPrint hook.
   * */
  const previewRef = useContext(ResumePreviewRefContext);
  const generatePDF = useReactToPrint({
    content: () => previewRef.current,
  });

  let editButton;
  if (editMode) {
    editButton = 'SAVE';
  } else {
    editButton = 'EDIT';
  }
  return (
    <ButtonGroup variant="text">
      <CustomButtons variant="contained" onClick={generatePDF}>GENERATE AS PDF</CustomButtons>
      <CustomButtons variant="contained" onClick={toggleEditMode}>{editButton}</CustomButtons>
      <CustomButtons variant="contained" onClick={resetPreview}>RESET</CustomButtons>
    </ButtonGroup>
  );
}

export default HeaderButtons;
