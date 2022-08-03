import { styled } from '@mui/material';

export const TravelInfoContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  gap: '1em',
  '& > swg': {
    color: '#346AFF',
  },
}));

export const PeopleInfoContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& > .circle-add-button': {
    marginLeft: '4em',
  },
  '& .avatar-group .names-group': {
    flex: '0 1 auto',
  },
}));

export const DestinationContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2em',
  '& > .destination-countries': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    '& > .destination-country': {
      marginLeft: '.5em',
    },
    '& > .destination-swap': {
      margin: '0 1em',
    },
  },
  '& > .flight-duration-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: '.5em',
  },
}));
