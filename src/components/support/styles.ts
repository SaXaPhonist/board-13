import { styled } from '@mui/material';

export const SupportSection = styled('section')({
  marginTop: '1.5em',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  '& > .support-button': {
    fontWeight: 600,
    marginLeft: '1em',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
