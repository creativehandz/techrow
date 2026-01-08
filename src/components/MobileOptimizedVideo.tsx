import React, { useState, useRef, useEffect } from 'react';

interface MobileOptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  posterImage?: string;
  onError?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  children?: React.ReactNode;
}

const MobileOptimizedVideo: React.FC<MobileOptimizedVideoProps> = ({
  src,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  posterImage,
  onError,
  children
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsInView(true);
          if (!isMobile || entry.intersectionRatio > 0.5) {
            // Load video when 50% visible on mobile, or any visibility on desktop
            setIsLoaded(true);
            observer.unobserve(video);
          }
        }
      },
      {
        threshold: isMobile ? 0.5 : 0.1, // Higher threshold for mobile
        rootMargin: isMobile ? '0px' : '50px' // No preload margin on mobile
      }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isLoaded, isMobile]);

  // Handle video loading
  const handleCanPlay = () => {
    const video = videoRef.current;
    if (video && autoPlay && isInView) {
      video.play().catch(e => {
        console.log('Mobile autoplay failed:', e);
      });
    }
  };

  // For mobile, only start loading when user scrolls to video
  const shouldLoadVideo = !isMobile || (isMobile && isInView && isLoaded);

  return (
    <video
      ref={videoRef}
      className={className}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      webkit-playsinline="true"
      preload={shouldLoadVideo ? 'metadata' : 'none'}
      poster={posterImage}
      onCanPlay={handleCanPlay}
      onError={onError}
      onLoadedData={() => console.log('Mobile optimized video loaded:', src)}
      // Mobile-specific attributes
      {...(isMobile && {
        'data-setup': '{"fluid": true}',
        controlsList: 'nodownload nofullscreen',
        disablePictureInPicture: true
      })}
    >
      {shouldLoadVideo && (
        <source src={src} type="video/mp4" />
      )}
      {children}
    </video>
  );
};

export default MobileOptimizedVideo;