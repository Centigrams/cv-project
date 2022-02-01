import React, { useContext } from 'react';
import resumeContentStyles from '../Styles/resumeContent.module.css';
import editModeStyles from '../Styles/editmode.module.css';
import { EditModeContext, InterestsContext, SkillsContext } from './MainContent';

function SkillsInterestsElement() {
  const { editMode } = useContext(EditModeContext);
  const { skills, setSkills } = useContext(SkillsContext);
  const { interests, setInterests } = useContext(InterestsContext);

  const handleChangeInSkills = (e) => {
    setSkills(e.target.value);
  };

  const handleChangeInInterests = (e) => {
    setInterests(e.target.value);
  };

  if (editMode) {
    return (
      <div className={resumeContentStyles.resumeContent}>
        <ul className={resumeContentStyles.list}>
          <li>
            <input
              value={skills}
              onChange={handleChangeInSkills}
              className={editModeStyles.listElement}
            />
          </li>
          <li>
            <input
              value={interests}
              onChange={handleChangeInInterests}
              className={editModeStyles.listElement}
            />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={resumeContentStyles.resumeContent}>
      <ul className={resumeContentStyles.list}>
        <li>
          {'Skills: '}
          {skills}
        </li>
        <li>
          {'Interests: '}
          {interests}
        </li>
      </ul>
    </div>
  );
}

export default SkillsInterestsElement;
