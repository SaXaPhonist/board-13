import SwapVertIcon from '@mui/icons-material/SwapVert';
import { ToDoHeaderContainer } from './styles';

const ToDoHeader = () => {
  return (
    <ToDoHeaderContainer>
      <h3 className="todo__title">To do&#8242;s</h3>
      <div className="todo__sort">
        <span>Sort</span>
        <SwapVertIcon />
      </div>
    </ToDoHeaderContainer>
  );
};

export default ToDoHeader;
