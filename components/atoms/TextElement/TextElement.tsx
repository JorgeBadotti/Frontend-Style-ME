import React from 'react';
import styles from './TextElement.module.css';
import { TextVariant } from '../../../types';

interface TextElementProps extends React.HTMLAttributes<HTMLElement> {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType; // Allows overriding the semantic HTML element
  font?: 'display' | 'sans' | 'displaySecondary' | 'accent';
  // FIX: Added 'extralight' to the weight type definition
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  spacing?: 'narrow' | 'wide' | 'widest' | 'luxury-sm' | 'luxury-md' | 'luxury-lg' | 'luxury-xl';
  italic?: boolean;
}

const TextElement: React.FC<TextElementProps> = ({
  variant,
  children,
  className,
  as,
  font = 'sans',
  weight = 'normal',
  spacing = 'default', // Using 'default' as a placeholder if no specific spacing is desired
  italic = false,
  ...props
}) => {
  // FIX: Map 'quote' variant to 'blockquote' HTML element
  const Component = as || (variant === 'quote' ? 'blockquote' : variant);

  const textClasses = [
    styles.textBase,
    styles[variant],
    styles[`font-${font}`],
    styles[`weight-${weight}`],
    styles[`spacing-${spacing}`],
    italic ? styles.italic : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
};

export default TextElement;