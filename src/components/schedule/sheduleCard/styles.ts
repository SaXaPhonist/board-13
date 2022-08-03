import { styled } from '@mui/material';

export const ScheduleCardStyled = styled('div')(() => ({
  position: 'absolute',
  display: 'flex',
  width: '15em',
  height: '12em', // 1min = 0.25em
  top: '8px',
  left: '5.5em',
  opacity: '0.5',
  borderRadius: '1em',
  alignItems: 'baseline',
  padding: '.5em',
  backgroundColor: 'rgba(81, 195, 237, 0.5)',
  '& .schedule__info-card': {
    display: 'flex',
    flexDirection: 'row',
    gap: '1em',
  },
  '& .schedule__cities, .schedule__arriving-time': {
    display: 'flex',
    flexDirection: 'row',
    gap: '.1em',
  },
}));
