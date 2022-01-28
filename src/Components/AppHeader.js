import React from 'react';
import HeaderButtons from './HeaderButtons';
import headerStyles from '../Styles/AppHeader.module.css';
import CustomAppBar from '../Styles/MUICustomStyledComponents/CustomAppBar';

function AppHeader() {
  return (
    <CustomAppBar>
      <div>
        <h1 className={headerStyles.appName}>Resume Generator</h1>
      </div>
      <HeaderButtons />
    </CustomAppBar>
  );
}

export default AppHeader;
