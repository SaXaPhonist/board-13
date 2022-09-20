import { styled } from '@mui/material';

export const ScheduleContainer = styled('section')(() => ({
  position: 'relative',
  overflowX: 'hidden',
  padding: '.5em  .5em 0 3.5em',
  '& .halfhour-container': {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    gap: '1.5em',
    alignItems: 'start',
    '& .halfhour__line': {
      width: '100%',
      height: '6em',
      borderTop: '1px solid #9AA2AC',
    },
    '& .halfhour': {
      position: 'absolute',
      left: '-3em',
      top: '-.5em',
    },
  },
}));
