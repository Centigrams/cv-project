import React from 'react';
import { ButtonGroup } from '@mui/material';
import CustomButtons from '../Styles/MUICustomStyledComponents/CustomHeaderButtons';

function HeaderButtons({ setEditMode }) {
  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };
  return (
    <ButtonGroup variant="text">
      <CustomButtons variant="contained">GENERATE AS PDF</CustomButtons>
      <CustomButtons variant="contained" onClick={toggleEditMode}>EDIT</CustomButtons>
      <CustomButtons variant="contained">CLEAR</CustomButtons>
    </ButtonGroup>
  );
}

export default HeaderButtons;
