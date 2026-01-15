import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
  onError?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  children?: React.ReactNode;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className = "",
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  preload = "none",
  onError,
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsInView(true);
          setIsLoaded(true);
          observer.unobserve(video);
        }
      },
      {
        threshold: 0.1, // Load when 10% visible
        rootMargin: "50px", // Load 50px before entering viewport
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isLoaded]);

  // Auto-play when video comes into view
  useEffect(() => {
    const video = videoRef.current;
    if (video && isInView && autoPlay) {
      video.play().catch((e) => {
        console.log("Autoplay failed:", e);
      });
    }
  }, [isInView, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      webkit-playsinline="true"
      preload={isInView ? preload : "none"}
      onError={onError}
      onLoadedData={() => console.log("Lazy video loaded:", src)}
    >
      {isInView && <source src={src} type="video/mp4" />}
      {children}
    </video>
  );
};

export default LazyVideo;
