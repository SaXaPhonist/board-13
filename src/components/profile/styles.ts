import { Avatar, Badge, styled } from '@mui/material';

export const ProfileWrapepr = styled('div')(
  ({ theme }) => `
display: flex;
width: 100%;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
padding: 1em 0.5em 1em 4.5em;
background-color: ${theme.palette.primary.main};
& > * + * {
  margin-left: 2em
}
`,
);

export const LangContainer = styled('div')({
  width: '1.75em',
  height: '1.75em',
  borderRadius: '50%',
});

export const NotificationButton = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  position: 'relative',
  width: '2em',
  height: '2em',
  '&::after': {
    content: "''",
    position: 'absolute',
    width: '.875em',
    height: '.875em',
    left: '1.25em',
    border: '2px solid #fff',
    borderRadius: '50%',
    backgroundColor: 'red',
  },
});

export const UserInfoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '0 0 0 1em',
  '& > * + *': {
    marginLeft: '1em',
  },
});

export const UserAvatar = styled('div')({});

export const StyledUsername = styled('p')({
  lineHeight: '24px',
  fontWeight: 400,
});

export const StyledMuiAvatar = styled(Avatar)({
  boxShadow: '1px 5px 5px 0px rgba(34, 60, 80, 0.3)',
});

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
