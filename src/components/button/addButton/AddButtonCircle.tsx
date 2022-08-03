import { UNICODE_CROSS } from 'utils/constants';
import { CircleButton } from './styles';

const AddButtonCircle = () => (
  <CircleButton className="circle-add-button">
    <span>{UNICODE_CROSS}</span>
  </CircleButton>
);

export default AddButtonCircle;
