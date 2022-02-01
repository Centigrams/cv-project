import React, { createContext, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../Styles/MainContent.module.css';
import AppHeader from './AppHeader';
import AppMainContent from './AppMainContent';

export const EditModeContext = createContext(undefined);
export const PersonalInfoContext = createContext(undefined);
export const WorkExperienceContext = createContext(undefined);
export const WorkExperiencesContext = createContext(undefined);
export const EducationContext = createContext(undefined);
export const EducationArrayContext = createContext(undefined);

function MainContent() {
  const [editMode, setEditMode] = useState(false);
  const editModeValue = useMemo(() => ({ editMode, setEditMode }), [editMode]);

  const [personalInfo, setPersonalInfo] = useState({
    name: 'First Lasts',
    email: 'sample@sample.xyz',
    contactNo: '(555) 555-5555',
    address: 'City Name, ST',
  });
  const personalInfoValue = useMemo(() => ({
    personalInfo, setPersonalInfo,
  }), [personalInfo]);

  const [workExperience, setWorkExperience] = useState({
    id: uuidv4(),
    companyName: 'Company Name',
    jobTitle: 'Job Title',
    tenure: 'Month Year - Month Year',
    location: 'City, ST',
    firstCR: 'Core Responsibility',
    secondCR: 'Core Responsibility',
    thirdCR: 'Core Responsibility',
  });
  const workExperienceValue = useMemo(() => ({
    workExperience, setWorkExperience,
  }), [workExperience]);

  const [workExperiencesArray, setWorkExperiencesArray] = useState([
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
  const workExperiencesValue = useMemo(() => ({
    workExperiencesArray, setWorkExperiencesArray,
  }), [workExperiencesArray]);

  const [education, setEducation] = useState({
    id: uuidv4(),
    universityName: 'University Name',
    degree: 'Degree (e.g., BS), Majors (e.g., Computer Science)',
    graduationDate: 'Graduation Month, Year',
    location: 'City, ST',
    firstBullet: 'List your honors like summa cum laude or GPA; (list only if GPA is over 3.3)',
    secondBullet: 'Studied abroad in City, Country during spring/fall 20YY semester (University Name)',
    thirdBullet: 'Any other fun stuff like varsity sports, or something that gives you a little color',
  });
  const educationValue = useMemo(() => ({
    education, setEducation,
  }), [education]);

  const [educationArray, setEducationArray] = useState([
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
  const educationArrayValue = useMemo(() => ({
    educationArray, setEducationArray,
  }), [educationArray]);

  return (
    <div className={styles.mainContainer}>
      <EditModeContext.Provider value={editModeValue}>
        <AppHeader />
        <PersonalInfoContext.Provider value={personalInfoValue}>
          <WorkExperienceContext.Provider value={workExperienceValue}>
            <WorkExperiencesContext.Provider value={workExperiencesValue}>
              <EducationContext.Provider value={educationValue}>
                <EducationArrayContext.Provider value={educationArrayValue}>
                  <AppMainContent />
                </EducationArrayContext.Provider>
              </EducationContext.Provider>
            </WorkExperiencesContext.Provider>
          </WorkExperienceContext.Provider>
        </PersonalInfoContext.Provider>
      </EditModeContext.Provider>
    </div>
  );
}

export default MainContent;
