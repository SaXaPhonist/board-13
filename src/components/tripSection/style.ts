import { styled } from '@mui/material';

export const TripSectionContainer = styled('section')(({ theme }) => ({
  // maxWidth: '69em',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax( 290px, 1fr))',
  gridAutoRows: 'auto',
  columnGap: '1em',
  flex: '0 1 auto',
  rowGap: '2.5em',
  gridAutoFlow: 'dense',
  '& > .city-control': {
    gridRow: 'span 1',
    gridColumn: 'span 2',
  },
  '& > .todo-list': {
    gridRow: 'span 1',
    gridColumn: 'span 2',
  },
  '& > .info-cards': {
    gridRow: 'span 1',
    gridColumn: 'span 3',
  },
  [theme.breakpoints.down(1920)]: {
    '& > .city-map': {
      gridRow: 'span 1',
      gridColumn: 'span 2',
    },
    '& > .city-control': {
      gridColumn: 'span 3',
    },
    '& > .info-cards': {
      gridColumn: '1 / -1',
    },
    // '& > .expenses-chart': {
    //   gridRow: 1,
    //   gridColumn: '-1',
    // },
  },
  [theme.breakpoints.down(1570)]: {
    '& > .todo-list': {
      gridColumn: 'span 3',
    },
  },
  [theme.breakpoints.down(1440)]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    '& > .city-map': {
      gridRow: 'span 1',
      gridColumn: 'span 3',
    },
    '& > .city-control': {
      gridColumn: 'span 2',
    },
    '& > .todo-list': {
      gridRow: 'span 1',
      gridColumn: 'span 3',
    },
    '& > .info-cards': {
      gridColumn: 'span 3 ',
    },
  },
}));
