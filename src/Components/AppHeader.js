import React from 'react';
import HeaderButtons from './HeaderButtons';
import headerStyles from '../Styles/AppHeader.module.css';

function AppHeader() {
  return (
    <header id={headerStyles.header}>
      <div>
        <h1 id={headerStyles.appName}>Resume Generator</h1>
      </div>
      <HeaderButtons />
    </header>
  );
}

export default AppHeader;
