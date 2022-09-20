/* eslint-disable jsx-a11y/control-has-associated-label */
import { TableHeader, ToDoTableContainer } from './styles';
import { dummyData } from './data';
import ToDoCard from './ToDoCard';

const ToDoTable = () => {
  return (
    <ToDoTableContainer className="todo__table">
      <thead>
        <TableHeader>
          <th>#</th>
          <th />
          <th>Task Name</th>
          <th>Assignee</th>
          <th>Priority</th>
        </TableHeader>
      </thead>
      <tbody>
        {dummyData.map((card) => (
          <ToDoCard key={card.id} id={card.id} />
        ))}
      </tbody>
    </ToDoTableContainer>
  );
};

export default ToDoTable;
