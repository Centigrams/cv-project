import React from 'react';
import appMainContentStyles from '../Styles/AppMainContent.module.css';
import ResumePreview from './ResumePreview';

function AppMainContent({ editMode }) {
  return (
    <div className={appMainContentStyles.appMain}>
      <ResumePreview editMode={editMode} />
    </div>
  );
}

export default AppMainContent;
