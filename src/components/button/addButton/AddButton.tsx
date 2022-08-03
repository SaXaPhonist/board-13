import CustomButton from '../CustomButton';
import { IButtonProps } from '../types';
import AddNew from './addNew/addNew';

const AddButton = ({
  children,
  className,
  color = 'info',
  variant = 'contained',
}: IButtonProps) => (
  <CustomButton className={className} color={color} variant={variant}>
    <AddNew>{children}</AddNew>
  </CustomButton>
);

export default AddButton;
