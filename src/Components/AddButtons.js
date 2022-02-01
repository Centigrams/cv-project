import React from 'react';
import { ButtonGroup } from '@mui/material';
import CustomButtons from '../Styles/MUICustomStyledComponents/CustomHeaderButtons';

function Addbuttons() {
  return (
    <ButtonGroup variant="text">
      <CustomButtons variant="contained">ADD WORK EXPERIENCE</CustomButtons>
      <CustomButtons variant="contained">ADD EDUCATION</CustomButtons>
    </ButtonGroup>
  );
}

export default Addbuttons;
