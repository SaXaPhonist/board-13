import { styled } from '@mui/material';

export const WeatherContainer = styled('div')({
  maxWidth: '16em',
  marginTop: '18.5em',
  padding: '1.5em',
  overflowX: 'hidden',
  backgroundColor: '#FAF9FF',
});

export const CurrentWeatherContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  padding: '0 0 1.75em 0',
  '& > .more-button': {
    marginLeft: '3em',
  },
});

export const DailyWeatherContainer = styled('ul')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
});

export const DayWeatherInfo = styled('li')({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  padding: '0 .5em',
  '& > .daily-temp': {
    fontSize: '0.875rem',
    fontWight: '600',
    lineHeight: '20px',
    '&::after': {
      content: "'\u00b0'",
    },
  },
  '& > .week-day': {
    fontWidht: 400,
    fontSize: '0.75rem',
    color: '#9AA2AC',
    lineHeght: '16px',
  },
});

export const CurrentTempretureContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1.2em',
  '& > .current-temp': {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: '48px',
    '&::after': {
      content: "'\u00b0'",
    },
  },
  '& > .location-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    '& > .location-wrapper__city': {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: '20px',
      color: '#9AA2AC',
    },
  },
});
