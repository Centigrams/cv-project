import React from 'react';
import appMainContentStyles from '../Styles/AppMainContent.module.css';
import ResumePreview from './ResumePreview';

function AppMainContent() {
  return (
    <div className={appMainContentStyles.appMain}>
      <ResumePreview />
    </div>
  );
}

export default AppMainContent;
