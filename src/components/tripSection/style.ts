import { styled } from '@mui/material';

export const TripSectionContainer = styled('section')(() => ({
  maxWidth: '69em',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax( 368px, 1fr))',
  gridAutoRows: 'auto',
  columnGap: '1em',
  // flex: '1 1 70%',
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
}));
