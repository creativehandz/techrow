import MuxVideo from '@mux/mux-video-react';
import React, { useState, useRef, useEffect } from 'react';
import {
  getMuxPlaybackId,
  getMuxPosterUrl,
  muxBackgroundVideoStyle
} from '../utils/muxPlayback';

interface MobileOptimizedVideoProps {
  src: string;
  playbackId?: string;
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
  playbackId,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  posterImage,
  onError,
  children
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muxPlaybackId = playbackId ?? getMuxPlaybackId(src);
  const posterUrl = posterImage ?? getMuxPosterUrl(muxPlaybackId);
  const [showPoster, setShowPoster] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (src && !muxPlaybackId) {
      console.warn('Mux playback ID missing for MobileOptimizedVideo:', src);
    }
  }, [src, muxPlaybackId]);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
      );
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
      video.play().catch((e) => {
        console.log('Mobile autoplay failed:', e);
      });
    }
  };

  // For mobile, only start loading when user scrolls to video
  const shouldLoadVideo = !isMobile || (isMobile && isInView && isLoaded);

  if (!muxPlaybackId) {
    return null;
  }

  return (
    <div className={`relative ${className}`.trim()}>
      <MuxVideo
        ref={videoRef}
        className="w-full h-full object-cover"
        style={muxBackgroundVideoStyle}
        playbackId={muxPlaybackId}
        poster={posterUrl}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload={shouldLoadVideo ? 'metadata' : 'none'}
        onCanPlay={handleCanPlay}
        onLoadStart={() => setShowPoster(true)}
        onLoadedData={() => {
          setShowPoster(false);
          console.log('Mobile optimized video loaded:', src);
        }}
        onError={(e) => onError?.(e as React.SyntheticEvent<HTMLVideoElement>)}
        {...(isMobile && {
          controlsList: 'nodownload nofullscreen',
          disablePictureInPicture: true
        })}
      >
        {children}
      </MuxVideo>
      {posterUrl ? (
        <img
          src={posterUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: showPoster ? 1 : 0, pointerEvents: 'none' }}
        />
      ) : null}
    </div>
  );
};

export default MobileOptimizedVideo;
