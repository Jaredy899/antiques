import Image from 'next/image';
import { ComponentProps } from 'react';

type OptimizedImageProps = Omit<ComponentProps<typeof Image>, 'src' | 'alt'> & {
  src: string;
  alt: string;
};

export default function OptimizedImage({ 
  src, 
  alt,
  className = "object-cover",
  ...props 
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
} 