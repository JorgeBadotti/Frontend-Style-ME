import React from 'react';
import clsx from 'clsx';

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

// Renamed component from Image to GenUIImage to avoid name collision with global Image constructor
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

  const getRadiusClass = (r: string) => {
    switch(r) {
      case 'none': return 'rounded-none';
      case 'sm': return 'rounded-lg'; // 0.5rem
      case 'md': return 'rounded-[1rem]'; // 1rem
      case 'lg': return 'rounded-2xl'; // 2rem (custom config)
      case 'full': return 'rounded-full';
      default: return '';
    }
  };

  const imageClasses = clsx(
    "w-full h-full block transition-all duration-300 ease-in-out",
    {
      'object-contain': objectFit === 'contain',
      'object-cover': objectFit === 'cover',
      'object-fill': objectFit === 'fill',
      'object-none': objectFit === 'none',
      'object-scale-down': objectFit === 'scale-down',
    },
    getRadiusClass(borderRadius),
    grayscale && 'grayscale-[0.2]',
    blur && 'blur-sm',
    brightness === 'dim' && 'brightness-95',
    className
  );

  return (
    <div className={clsx("w-full h-full flex overflow-hidden", containerClassName)}>
      <img src={src} alt={alt} className={imageClasses} {...props} />
    </div>
  );
};

export default GenUIImage;
