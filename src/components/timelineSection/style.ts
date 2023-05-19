import { styled } from '@mui/material';
import CustomButton from 'components/button/CustomButton';

interface IStyleProps {
  isTimelineOpen?: boolean;
}

export const TimelineContainer = styled('section')<IStyleProps>(
  ({ theme, isTimelineOpen = false }) => ({
    backgroundColor: '#FAF9FF',
    padding: '1em 0',
    '& > * + *': {
      marginTop: '2.5em',
    },
    [theme.breakpoints.down(1920)]: {
      display: 'none',
      ...(isTimelineOpen && { 
        display: 'visible',
        position: 'fixed',
      }),
    },
  }),
);

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

export const CalendarControl = styled(CustomButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down(1920)]: {
    display: 'inline',
    position: 'fixed',
    whiteSpace: 'nowrap',
    // width: 'unset',
    // height: '100px',
    left: '100%',
    top: '50%',
    padding: '1%',
    transformOrigin: '0% 0%',
    webkitTransform: 'rotate(90deg)',
    mozTransform: 'rotate(90deg)',
    oTransform: 'rotate(90deg)',
    msTransform: 'rotate(90deg)',
    transform: 'rotate(90deg) translateX(-50%)',
  },
}));
