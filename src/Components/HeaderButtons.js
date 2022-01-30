import React, { useContext } from 'react';
import { ButtonGroup } from '@mui/material';
import CustomButtons from '../Styles/MUICustomStyledComponents/CustomHeaderButtons';
import { EditModeContext } from './MainContent';

function HeaderButtons() {
  const { editMode, setEditMode } = useContext(EditModeContext);

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  if (editMode) {
    return (
      <ButtonGroup variant="text">
        <CustomButtons variant="contained">GENERATE AS PDF</CustomButtons>
        <CustomButtons variant="contained" onClick={toggleEditMode}>SAVE</CustomButtons>
        <CustomButtons variant="contained">CLEAR</CustomButtons>
      </ButtonGroup>
    );
  }
  return (
    <ButtonGroup variant="text">
      <CustomButtons variant="contained">GENERATE AS PDF</CustomButtons>
      <CustomButtons variant="contained" onClick={toggleEditMode}>EDIT</CustomButtons>
      <CustomButtons variant="contained">CLEAR</CustomButtons>
    </ButtonGroup>
  );
}

export default HeaderButtons;
