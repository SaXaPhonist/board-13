import { styled } from '@mui/material';

export const CalendarContainer = styled('section')(() => ({}));

export const MonthController = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '14.5em',
  justifyContent: 'center',
  '& > p': {
    fontWeight: 700,
  },
  '& .month-arrow': {
    color: '#9AA2AC',
  },
  '& .month-arrow:hover': {
    color: '#000',
    cursor: 'pointer',
  },
}));

export const CalendarDays = styled('div')(() => ({
  marginTop: '1em',
  fontWeight: 600,
  '& .weekdays': {
    color: '#9AA2AC',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    '& > div': {
      width: '3.5em',
      padding: '1em 0',
    },
  },
  '& .days': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    '& > div': {
      position: 'relative',
      width: '3.5em',
      padding: '1em 0',
      border: '1px solid transparent',
      borderRadius: '50%',
      '&:hover': {
        cursor: 'pointer',
        borderColor: '#9AA2AC',
      },
    },
    '.current-day': {
      backgroundColor: '#346AFF',
      color: '#fff',
    },
    '.days-between': {
      '&::after': {
        content: "''",
        position: 'absolute',
        display: 'inline-block',
        left: 'calc((3.5em / 2) - 5px)',
        top: '35px',
        width: '5px',
        height: '5px',
        backgroundColor: '#9AA2AC',
        borderRadius: '50%',
      },
    },
    '.final-day': {
      backgroundColor: '#9AA2AC',
      color: '#fff',
    },
    '& > .next-month': {
      color: '#9AA2AC',
    },
  },
}));
