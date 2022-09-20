import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const MuiButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Sora',
  fontWeight: 600,
  width: '100%',
  padding: '1em 5em',
  color: theme.palette.primary.main,
  borderRadius: '1em',
}));
