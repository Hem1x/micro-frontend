import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'default';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  ...props
}) => {
  return (
    <button
      {...props}
      style={{
        background: variant === 'primary' ? '#000' : '#fff',
        color: variant === 'primary' ? '#fff' : '#000',
      }}>
      {children}
    </button>
  );
};

export default Button;
