import { styled } from '@mui/material';

export const ToDoContainer = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5em',
  '& > * + *': {
    marginTop: '2em',
  },
  '& > .todo__add-button': {
    width: '100%',
    backgroundColor: '#FAF9FF',
    color: '#9AA2AC',
    border: '1px solid',
    paddingTop: '0.8em',
    paddingBottom: '0.8em',
  },
});

export const ToDoHeaderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '&  .todo__title': {
    fontSize: '2rem',
    fontWeight: 700,
    flex: '0 1 90%',
  },
  '& .todo__sort': {
    flex: '1 1 10%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
});

export const ToDoTableContainer = styled('table')(() => ({
  borderCollapse: 'collapse',
  width: '100%',
  tableLayout: 'fixed',
  '& thead th:nth-child(1)': {
    width: '3%',
  },
  '& thead th:nth-child(2)': {
    width: '7%',
  },
  '& thead th:nth-child(3)': {
    width: '50%',
  },
  '&  td': {
    fontSize: '.8rem',
    textAlign: 'left',
    fontWeight: 'inherit',
    border: 'none',
    padding: '1em 0 1em 1em',
  },
  '&  th': {
    fontWeight: 'inherit',
    padding: '0  1em',
  },
  '& tbody': {
    overflowY: 'hidden',
  },
}));

export const TableHeader = styled('tr')(() => ({
  fontSize: '.8rem',
  color: '#9AA2AC',
  fontWeight: 400,
  textAlign: 'left',
}));

export const ToDoCardContainer = styled('tr')(({ theme }) => ({
  color: '#27292C',
  fontWeight: 600,
  height: '3.5em',
  '& .todo__assign-photo': {
    fontSize: '1rem',
    display: 'none',
    width: '1.75em',
    height: '1.75em',
  },
  '.check-mark': {
    display: 'block',
    width: '1.5em',
    height: '1.5em',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    verticalAlign: 'middle',
    border: '1px solid #ddd',
    cursor: 'pointer',
  },
  '.todo__status .todo-check__input': {
    position: 'absolute',
    widht: '1px',
    height: '1px',
    oveflow: 'hidden',
    clip: 'rect(0 0 0 0)',
  },
  '.todo__status  .todo-check__input:checked  + .check-mark::before': {
    content: "'✔️'",
    display: 'inline-block',
  },
  '&:hover': {
    backgroundColor: '#fff',
    '& .todo__assign-name, .priority': {
      display: 'none',
    },
    '& .todo__assign-photo, .todo__actions': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      color: '#6B7178',
    },
    '& .actions__edit:hover, .actions__delete:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.dark,
    },
    '& td:first-child': {
      borderRadius: '1em 0 0 1em',
    },
    '& td:last-child': {
      borderRadius: '0 1em 1em 0',
    },
  },
}));

export const ToDoPriority = styled('p')(() => ({
  display: 'inline-block',
  padding: '0.2em 0.5em',
  borderRadius: '1em',
  backgroundColor: 'orange',
  color: '#fff',
}));

export const ToDoCardActions = styled('div')(() => ({
  display: 'none',
}));
