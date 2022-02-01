import React, { useContext } from 'react';
import WorkExperienceElement from './WorkExperienceElement';
import { EditModeContext, WorkExperiencesContext } from './MainContent';

function WorkExperienceSection() {
  const { editMode } = useContext(EditModeContext);
  const { workExperiencesArray, setWorkExperiencesArray } = useContext(WorkExperiencesContext);

  return (
    <div>
      {workExperiencesArray.map((experience) => (
        <WorkExperienceElement
          key={experience.id}
          experience={experience}
          editMode={editMode}
          workExperiencesArray={workExperiencesArray}
          setWorkExperiencesArray={setWorkExperiencesArray}
        />
      ))}
    </div>
  );
}

export default WorkExperienceSection;
