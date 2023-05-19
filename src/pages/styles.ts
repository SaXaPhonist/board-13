import { styled } from '@mui/material/styles';

export const DashboardWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  gridColumn: '2 / -1',
  gridRow: '2',
  display: 'flex',
  flexDirection: 'row',
  gap: '3em',
  [theme.breakpoints.down(1920)]: {},
}));
