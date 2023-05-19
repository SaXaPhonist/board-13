import { styled } from '@mui/material';

export const InfoCardsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5em',
  [theme.breakpoints.down('xl')]: {
    flexDirection: 'column',
    gap: '1em',

  },
}));
