import { MuiButton } from './styles';
import { IButtonProps } from './types';

const CustomButton = ({ className, children, color, variant, ...props }: IButtonProps) => {
  return (
    <MuiButton className={className} color={color} variant={variant} {...props}>
      {children}
    </MuiButton>
  );
};

export default CustomButton;
