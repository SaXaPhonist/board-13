import { styled } from '@mui/material';

export const InfoCardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  // minWidth: '16em',  do you need this?
  flex: '1 1 auto',
  backgroundColor: theme.palette.primary.main,
  padding: '1em',
  '& > .info-card__header': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '.5em',
    '& > .info-card__title': {
      width: '100%',
      fontWeight: 600,
      color: '#9AA2AC',
    },
  },
  '& > .info-card__value': {
    fontWeight: 700,
    fontSize: '2rem',
    lineHeght: '48px',
    marginBottom: '1em',
  },
  '& > .info-section': {
    display: 'flex',
    alignItems: 'center',
    flex: '1 0 auto',
  },
}));
