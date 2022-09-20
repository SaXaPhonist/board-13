import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Avatar } from '@mui/material';
import UserPhoto from 'assets/images/user-photo-1.jpg';
import { ToDoCardActions, ToDoCardContainer, ToDoPriority } from './styles';

const ToDoCard = ({ id }: { id: number }) => {
  return (
    <ToDoCardContainer>
      <td>{id}</td>
      <td className="todo__status">
        <label htmlFor={`input-${id}`}>
          <input id={`input-${id}`} className="todo-check__input" type="checkbox" />
          <span className="check-mark" />
        </label>
      </td>
      <td>Drink coffe</td>
      <td>
        <p className="todo__assign-name">Marta</p>
        <Avatar alt="user" src={UserPhoto} className="todo__assign-photo" />
      </td>
      <td className="todo__priority">
        <ToDoPriority className="priority">Medium</ToDoPriority>
        <ToDoCardActions className="todo__actions">
          <EditIcon className="actions__edit" />
          <DeleteForeverIcon className="actions__delete" />
        </ToDoCardActions>
      </td>
    </ToDoCardContainer>
  );
};

export default ToDoCard;
