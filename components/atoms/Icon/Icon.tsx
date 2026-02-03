import React from 'react';
import styles from './Icon.module.css';
import { IconType } from '../../../types';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconType;
  filled?: boolean;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // Define common icon sizes
}

const Icon: React.FC<IconProps> = ({ name, filled = false, className, size = 'md', ...props }) => {
  const iconClasses = [
    'material-symbols-outlined', // Global class for Material Symbols font
    styles.icon,
    styles[size],
    filled ? 'fill-1' : '', // Global class for filled icons (from global.css)
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={iconClasses} {...props}>
      {name}
    </span>
  );
};

export default Icon;