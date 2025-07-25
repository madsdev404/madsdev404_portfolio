import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles = 'py-3 px-6 rounded-full inline-block';
  const primaryStyles = 'bg-blue-500 hover:bg-blue-600 text-white';
  const outlineStyles = 'border border-white text-white hover:bg-white hover:text-blue-500';

  const styles = variant === 'primary' ? primaryStyles : outlineStyles;

  return (
    <button className={`${baseStyles} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
