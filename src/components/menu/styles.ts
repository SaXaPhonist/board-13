import { styled } from '@mui/material/styles';
import CustomButton from 'components/button/CustomButton';

export const SideMenuWrapper = styled('aside')(({ theme }) => ({
  gridColumn: 'span 1',
  gridRow: '1 / 3',
  display: 'flex',
  maxWidth: '292px',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2.25em 1.5em 1em 1.5em',
  backgroundColor: theme.palette.primary.main,
  '& > .menu__add-button': {
    marginTop: '1.5em',
  },
}));

export const NavWrapper = styled('nav')(() => ({
  width: '100%',
  margin: ' 3.6em 0  0 0',
  alignSelf: 'baseline',
}));

export const NavContainer = styled('ul')(() => ({
  '& .menu-item-icon': {
    color: '#9AA2AC',
  },
  '& > * + *': {
    marginTop: '1em',
  },
  '& > li': {
    fontWeight: 600,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: '.5em',
    alignItems: 'center',
    gap: '1em',
  },
  '& > li:hover': {
    backgroundColor: '#FAF9FF',
    cursor: 'pointer',
    '& > .menu-item-icon': {
      color: '#27292C',
    },
  },
}));

export const AddNewButton = styled(CustomButton)({
  marginTop: '2.4em',
});
