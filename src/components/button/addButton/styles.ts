import { styled } from '@mui/material';

export const CircleButton = styled('div')(({ theme }) => ({
  width: '2.5em',
  height: '2.5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  border: '1px solid #C0C6CD',
  '& > span': {
    fontSize: '1.5rem',
    display: 'inline-block',
    transform: 'rotate(45deg)',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));
