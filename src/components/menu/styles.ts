import { styled } from '@mui/material/styles';

export const SideMenuWrapper = styled('aside')(({ theme }) => ({
  padding: '2.25em 1.5em 1em 1.5em',
  backgroundColor: theme.palette.primary.main,
}));

export const NavWrapper = styled('nav')(() => ({
  '& ul > * + *': {
    marginTop: '1em',
  },
  margin: '0 0 18.5em 0',
}));
