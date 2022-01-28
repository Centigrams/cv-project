import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

const CustomAppBar = styled(AppBar)`
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  background-color: #1f2833;
`;

export default CustomAppBar;
