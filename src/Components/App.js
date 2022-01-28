import React from 'react';
import appStyles from '../Styles/App.module.css';
import MainContent from './MainContent';

function App() {
  return (
    <div className={appStyles.app}>
      <MainContent />
    </div>
  );
}

export default App;
