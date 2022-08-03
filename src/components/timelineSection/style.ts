import { styled } from '@mui/material';

export const TimelineContainer = styled('section')(() => ({
  backgroundColor: '#FAF9FF',
  padding: '1em 0',
  '& > * + *': {
    marginTop: '2.5em',
  },
}));

export const TimelineHeaderContainer = styled('header')(() => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '0 0.5em',
  alignItems: 'center',
  gap: '4.75em',
  '& h2': {
    fontSize: '2rem',
    fontWight: 700,
  },
  '& .timeline__add-button': {
    paddingLeft: '2em',
    paddingRight: '2em',
  },
}));
