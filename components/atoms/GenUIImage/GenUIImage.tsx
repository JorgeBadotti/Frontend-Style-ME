import React from 'react';
import styles from './GenUIImage.module.css';

interface GenUIImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  grayscale?: boolean;
  blur?: boolean;
  brightness?: 'default' | 'dim';
}

const GenUIImage: React.FC<GenUIImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  objectFit = 'cover',
  borderRadius = 'none',
  grayscale = false,
  blur = false,
  brightness = 'default',
  ...props
}) => {
  const imageClasses = [
    styles.image,
    styles[`object-${objectFit}`],
    styles[`radius-${borderRadius}`],
    grayscale ? styles.grayscale : '',
    blur ? styles.blur : '',
    styles[`brightness-${brightness}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={`${styles.imageContainer} ${containerClassName || ''}`}>
      <img src={src} alt={alt} className={imageClasses} {...props} />
    </div>
  );
};

export default GenUIImage;