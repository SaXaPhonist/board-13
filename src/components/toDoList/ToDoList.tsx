import AddButton from 'components/button/addButton/AddButton';
import { ToDoContainer } from './styles';
import ToDoHeader from './ToDoHeader';
import ToDoTable from './ToDoTable';

const ToDoList = () => {
  return (
    <ToDoContainer className="todo-list">
      <ToDoHeader />
      <ToDoTable />
      <AddButton className="todo__add-button">Add new task</AddButton>
    </ToDoContainer>
  );
};

export default ToDoList;
