import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CustomAddButtons from '../Styles/MUICustomStyledComponents/CustomAddButtons';

function SectionHeaderButton({ text }) {
  return (
    <CustomAddButtons variant="outlined" endIcon={<AddIcon />}>
      {text}
    </CustomAddButtons>
  );
}

export default SectionHeaderButton;
