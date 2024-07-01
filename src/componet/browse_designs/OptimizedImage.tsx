import { Image, Placeholder, Transformation } from "cloudinary-react";
import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
}) => {
  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Image
        cloudName="dwqantex4"
        loading="lazy"
        publicId={src}
        className={className}
        alt={alt}
      >
        <Transformation width="200" height="300" gravity="auto" crop="fill" />
      </Image>
      {/* Uncomment the following block if you need to use this image */}
      {/* 
      <Image
        cloudName="dwqantex4"
        publicId={src}
        width="auto"
        crop="scale"
        quality="auto"
        fetchFormat="auto"
        alt={alt}
        loading="lazy"
        accessibility="darkmode"
        height="auto"
        className={className}
      >
        <Placeholder type="vectorize"></Placeholder>
        <Transformation width="250" height="250" gravity="faces" crop="fill" />
      </Image>
      */}
    </div>
  );
};

export default OptimizedImage;
