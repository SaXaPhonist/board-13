import { styled } from '@mui/material';

interface IProps {
  color: string;
}

export const ChartContainer = styled('div')(() => ({
  overflow: 'hiden',
  backgroundColor: '#FAF9FF',
  '& .expenses-chart__title': {
    color: '#9AA2AC',
    padding: '1em 0 0 1em',
  },
}));

export const Legends = styled('ul')(() => ({
  fontSize: '0.8rem',
  fontWeight: 600,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '.5em',
  justifyContent: 'center',
}));

export const LegendItem = styled('li')<IProps>(({ color }) => ({
  position: 'relative',
  '&::before': {
    content: "''",
    display: 'inline-block',
    height: '1em',
    width: '1em',
    backgroundColor: 'transparent',
    marginRight: '0.2em',
    borderRadius: '50%',
    border: `2px solid ${color}`,
  },
}));
