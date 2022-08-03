import { MuiButton } from './styles';
import { IButtonProps } from './types';

const CustomButton = ({ className, children, color, variant }: IButtonProps) => {
  return (
    <MuiButton className={className} color={color} variant={variant}>
      {children}
    </MuiButton>
  );
};

export default CustomButton;
