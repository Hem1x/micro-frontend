import React from 'react';
import { MessageContext } from 'src/App';
import { useStrictContext } from 'src/shared/lib/react';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'default';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  ...props
}) => {
  const { messageApi } = useStrictContext(MessageContext);

  return (
    <button
      {...props}
      onClick={() => messageApi.success('hello')}
      style={{
        background: variant === 'primary' ? '#000' : '#fff',
        color: variant === 'primary' ? '#fff' : '#000',
      }}>
      {children}
    </button>
  );
};

export default Button;
