import React from 'react';
import { IconType } from '../../../types';
import clsx from 'clsx';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconType;
  filled?: boolean;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Icon: React.FC<IconProps> = ({ name, filled = false, className, size = 'md', ...props }) => {

  const sizeClasses = {
    xs: "text-[10px]",
    sm: "text-xs", // 12px
    md: "text-xl", // 20px
    lg: "text-2xl", // 24px
    xl: "text-[2rem]", // 32px
  };

  const iconClasses = clsx(
    'material-symbols-outlined',
    'inline-flex items-center justify-center',
    sizeClasses[size],
    filled && 'fill-1',
    className
  );

  return (
    <span className={iconClasses} {...props}>
      {name}
    </span>
  );
};

export default Icon;
