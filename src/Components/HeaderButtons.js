import React from 'react';
import { ButtonGroup } from '@mui/material';
import CustomButtons from '../Styles/MUICustomStyledComponents/CustomHeaderButtons';

function HeaderButtons({ setEditMode, editMode }) {
  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };
  if (editMode === false) {
    return (
      <ButtonGroup variant="text">
        <CustomButtons variant="contained">GENERATE AS PDF</CustomButtons>
        <CustomButtons variant="contained" onClick={toggleEditMode}>EDIT</CustomButtons>
        <CustomButtons variant="contained">CLEAR</CustomButtons>
      </ButtonGroup>
    );
  }
  return (
    <ButtonGroup variant="text">
      <CustomButtons variant="contained">GENERATE AS PDF</CustomButtons>
      <CustomButtons variant="contained" onClick={toggleEditMode}>SAVE</CustomButtons>
      <CustomButtons variant="contained">CLEAR</CustomButtons>
    </ButtonGroup>
  );
}

export default HeaderButtons;
