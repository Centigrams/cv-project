import React, { useContext } from 'react';
import WorkExperienceElement from './WorkExperienceElement';
import { EditModeContext, WorkExperiencesContext } from './MainContent';

function WorkExperienceSection() {
  const { editMode } = useContext(EditModeContext);
  const { workExperiencesArray, setWorkExperiencesArray } = useContext(WorkExperiencesContext);

  /**
   * Placing the add buttons here and using the if (editMode) {...} logic
   * will not save the changes made in the components. It is expected that it will also occur
   * in the next few sections of the resume preview. The best implementation for now would be
   * to render the "Add button" on the section headers instead if edit mode is true.
   *
   * TL;DR: Adding an "Add button" if editMode is true here will break the preview.
   * */
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
