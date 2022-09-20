import { styled } from '@mui/material/styles';

export const CityContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  width: '100%',
  maxWidth: '68em',
  borderRadius: '1em',
  backgroundColor: '#FEECCF',
});

export const ControlsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '1.5em 0 3.5em 1.5em',
  '& .subtitle': {
    fontWeight: 600,
  },
  '& .city-title': {
    fontSize: '4.5rem',
    fontWeight: 700,
    lineHeight: '108px',
  },
  '& .buttons-container': {
    display: 'flex',
    flexDirection: 'row',
    gap: '2.5em',
    marginTop: '3em',
    '& > svg': {
      width: '1.5em',
      height: '1.5em',
      borderRadius: '50%',
    },
    '& > svg:hover': {
      backgroundColor: '#fff',
      cursor: 'pointer',
    },
  },
});

export const CityImage = styled('img')({
  position: 'absolute',
  objectFit: 'cover',
  width: 'calc(100% - 26.5em)',
  height: 'calc(100% + 2.5em)',
  top: '-2.5em',
  left: '26.5em',
});
