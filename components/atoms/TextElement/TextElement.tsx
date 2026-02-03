import React from 'react';
import { TextVariant } from '../../../types';
import clsx from 'clsx';

interface TextElementProps extends React.HTMLAttributes<HTMLElement> {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType; // Allows overriding the semantic HTML element
  font?: 'display' | 'sans' | 'displaySecondary' | 'accent';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'extralight';
  spacing?: 'narrow' | 'wide' | 'widest' | 'luxury-sm' | 'luxury-md' | 'luxury-lg' | 'luxury-xl' | 'default';
  italic?: boolean;
}

const TextElement: React.FC<TextElementProps> = ({
  variant,
  children,
  className,
  as,
  font = 'sans',
  weight = 'normal',
  spacing = 'default',
  italic = false,
  ...props
}) => {
  // Determine the HTML tag to use
  const Component = as || (variant === 'quote' ? 'blockquote' : (variant === 'label' || variant === 'small' || variant === 'span') ? 'span' : variant);

  const baseClasses = "text-slate-900 dark:text-slate-100";

  const variantClasses = {
    h1: "text-4xl font-bold leading-tight",
    h2: "text-3xl font-bold leading-snug",
    h3: "text-2xl font-semibold leading-relaxed",
    h4: "text-xl font-semibold leading-relaxed",
    p: "text-base font-normal leading-relaxed",
    span: "text-base font-normal inline-block",
    label: "text-xs font-bold uppercase tracking-luxury-sm text-text-muted dark:text-slate-400",
    small: "text-[10px] font-normal text-text-muted dark:text-slate-500",
    quote: "text-lg font-display italic text-text-muted",
  };

  const fontClasses = {
    display: "font-display",
    sans: "font-sans",
    displaySecondary: "font-displaySecondary",
    accent: "font-accent",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    extralight: "font-extralight",
  };

  const spacingClasses = {
    default: "",
    narrow: "tracking-[0.05em]",
    wide: "tracking-[0.1em]",
    widest: "tracking-[0.25em]",
    'luxury-sm': "tracking-luxury-sm",
    'luxury-md': "tracking-luxury-md",
    'luxury-lg': "tracking-luxury-lg",
    'luxury-xl': "tracking-luxury-xl",
  };

  const textClasses = clsx(
    baseClasses,
    variantClasses[variant],
    fontClasses[font],
    weightClasses[weight],
    spacing !== 'default' && spacingClasses[spacing],
    italic && "italic",
    className
  );

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
};

export default TextElement;
