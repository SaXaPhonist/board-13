import { AddNewStyled } from './styles';

interface IAddNewProps {
  children: React.ReactNode;
}

const AddNew = ({ children }: IAddNewProps) => <AddNewStyled>{children}</AddNewStyled>;

export default AddNew;
