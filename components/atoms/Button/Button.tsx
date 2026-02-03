import React from 'react';
import styles from './Button.module.css';
import { ButtonVariant } from '../../../types';
import Icon from '../Icon/Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  icon?: string; // Material Symbols icon name
  iconPosition?: 'left' | 'right';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {icon && iconPosition === 'left' && <Icon name={icon} className={children ? styles.iconLeft : ''} />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} className={children ? styles.iconRight : ''} />}
    </button>
  );
};

export default Button;