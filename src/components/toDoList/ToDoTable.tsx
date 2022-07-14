import ToDoCard from './ToDoCard';

const ToDoTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>status</th>
          <th>Task Name</th>
          <th>Assignee</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <ToDoCard />
      </tbody>
    </table>
  );
};

export default ToDoTable;
