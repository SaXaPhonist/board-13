import { styled } from '@mui/material/styles';

export const HeaderWrapper = styled('div')(({ theme }) => ({
  gridColumn: '2 / -1',
  gridRow: '1',
  display: 'flex',
  flexDirection: 'row',
  gap: '3em',
  flexWrap: 'nowrap',
  backgroundColor: theme.palette.secondary.main,
}));
