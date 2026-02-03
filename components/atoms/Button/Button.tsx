import React from 'react';
import { ButtonVariant } from '../../../types';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

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
  const baseClasses = "border-none font-sans font-semibold uppercase tracking-luxury-sm cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-center gap-2";

  const variantClasses = {
    primary: "px-6 py-3 rounded-full text-xs bg-primary text-card-light shadow-[0_6px_16px_rgba(52,73,94,0.2)] hover:bg-slate-700 hover:shadow-[0_8px_20px_rgba(52,73,94,0.3)] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
    secondary: "px-6 py-3 rounded-full text-xs bg-background-light text-primary border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:bg-slate-100 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-card-dark dark:text-slate-100 dark:border-border-dark dark:hover:bg-slate-700",
    ghost: "px-4 py-2 rounded-full text-xs bg-transparent text-text-muted hover:opacity-70 active:scale-98 disabled:opacity-30 disabled:cursor-not-allowed dark:text-slate-400",
    iconOnly: "w-10 h-10 p-0 rounded-full bg-transparent text-primary border border-transparent hover:bg-slate-100 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed dark:text-slate-100 dark:hover:bg-slate-700",
    chip: "h-11 px-5 rounded-full border border-border-light bg-filter-bg text-primary text-[13px] font-bold uppercase hover:bg-slate-100 dark:bg-card-dark dark:border-border-dark dark:text-slate-300 dark:hover:bg-slate-700",
  };

  const buttonClass = clsx(
    baseClasses,
    variantClasses[variant],
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {icon && iconPosition === 'left' && <Icon name={icon} className={children ? "mr-2" : ""} />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} className={children ? "ml-2" : ""} />}
    </button>
  );
};

export default Button;
