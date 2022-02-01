import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CustomAddButtons = styled(Button)`
  background-color: #45a29e;
  color: white;
  height: 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    background-color: #358181;
  }
`;

export default CustomAddButtons;
