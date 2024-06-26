import { useInView } from "react-intersection-observer";
import OptimizedImage from "./OptimizedImage";
import React from "react";
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}
const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView ? (
        <OptimizedImage src={src} alt={alt} className={className} />
      ) : (
        <>
          <div className="h-[507px] w-full bg-[#F5F5F5] p-2 rounded-[24px]">
            <div className="h-full w-full bg-[#F0F0F0] rounded-[24px] pulse-light-dark"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default LazyImage;
