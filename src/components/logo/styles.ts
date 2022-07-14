import { styled } from '@mui/material/styles';

export const LogoWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  margin: '0 0 2.3em 0',
});

export const AppTitle = styled('h2')(({ theme }) => ({
  padding: '0 0 0 0.41em',
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: '2.15rem',
}));

export const LogoImage = styled('img')({
  width: '2.25em',
  height: '2.6em',
});
