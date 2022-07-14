import { styled } from '@mui/material/styles';

export const SearchWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  maxWidth: '67.6em',
  borderBottom: '1px solid',
  flexGrow: '1',
}));
