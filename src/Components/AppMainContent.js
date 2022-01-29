import React from 'react';
import appMainContentStyles from '../Styles/AppMainContent.module.css';
import ResumePreview from './ResumePreview';

function AppMainContent({
  editMode, name, setName, email, setEmail, contactNo, setContactNo, address, setAddress,
}) {
  return (
    <div className={appMainContentStyles.appMain}>
      <ResumePreview
        editMode={editMode}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        contactNo={contactNo}
        setContactNo={setContactNo}
        address={address}
        setAddress={setAddress}
      />
    </div>
  );
}

export default AppMainContent;
