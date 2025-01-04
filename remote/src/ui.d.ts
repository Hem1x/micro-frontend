declare module 'ui/components' {
  interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
    variant?: 'primary' | 'default';
  }

  const Button: React.FC<ButtonProps>;

  export { Button };
}
