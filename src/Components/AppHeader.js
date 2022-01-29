import React from 'react';
import { useScrollTrigger } from '@mui/material';
import HeaderButtons from './HeaderButtons';
import headerStyles from '../Styles/AppHeader.module.css';
import CustomAppBar from '../Styles/MUICustomStyledComponents/CustomAppBar';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function AppHeader({ setEditMode, editMode }) {
  return (
    <ElevationScroll>
      <CustomAppBar>
        <div>
          <h1 className={headerStyles.appName}>Resume Generator</h1>
        </div>
        <HeaderButtons setEditMode={setEditMode} editMode={editMode} />
      </CustomAppBar>
    </ElevationScroll>
  );
}

export default AppHeader;
