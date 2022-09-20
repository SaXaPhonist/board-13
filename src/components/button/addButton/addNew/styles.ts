import { styled } from '@mui/material/styles';

export const AddNewStyled = styled('p')({
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  position: 'relative',
  lineHeight: '24px',
  '&::after': {
    content: "'\u00d7'",
    fontSize: '1.5em',
    marginLeft: '.8em',
    display: 'inline-block',
    transform: 'rotate(45deg)',
  },
});
