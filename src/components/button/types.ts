export type VariantProps = 'text' | 'outlined' | 'contained';

export type TColorVariants =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | 'inherit';

export interface IButtonProps {
  className: string;
  children: React.ReactNode;
  color?: TColorVariants;
  variant?: VariantProps;
  onClick?: () => void;
}
