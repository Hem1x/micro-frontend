declare module 'ui/Button' {
  interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
    variant?: 'primary' | 'default';
  }

  const Button: React.FC<ButtonProps>;

  export default Button;
}
