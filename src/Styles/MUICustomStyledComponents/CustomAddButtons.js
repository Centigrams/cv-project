import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CustomAddButtons = styled(Button)`
  background-color: #45a29e;
  color: white;
  margin-top: 0.5rem;
  height: 2rem;

  &:hover {
    background-color: #358181;
  }
`;

export default CustomAddButtons;
