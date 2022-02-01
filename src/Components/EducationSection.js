import React, { useContext } from 'react';
import EducationElement from './EducationElement';
import { EditModeContext, EducationArrayContext } from './MainContent';

function EducationSection() {
  const { editMode } = useContext(EditModeContext);
  const { educationArray, setEducationArray } = useContext(EducationArrayContext);

  return (
    <div>
      {educationArray.map((education) => (
        <EducationElement
          key={education.id}
          education={education}
          editMode={editMode}
          educationArray={educationArray}
          setEducationArray={setEducationArray}
        />
      ))}
    </div>
  );
}

export default EducationSection;
