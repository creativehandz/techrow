import MuxVideo from '@mux/mux-video-react';
import { useEffect, useRef, useState } from 'react';
import {
  getMuxPlaybackId,
  getMuxPosterUrl,
  muxBackgroundVideoStyle
} from '../utils/muxPlayback';

interface LazyVideoProps {
  src: string;
  playbackId?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  onError?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  children?: React.ReactNode;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  playbackId,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  preload = 'none',
  onError,
  children
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muxPlaybackId = playbackId ?? getMuxPlaybackId(src);
  const posterUrl = getMuxPosterUrl(muxPlaybackId);
  const [showPoster, setShowPoster] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src && !muxPlaybackId) {
      console.warn('Mux playback ID missing for LazyVideo:', src);
    }
  }, [src, muxPlaybackId]);

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
        rootMargin: '50px' // Load 50px before entering viewport
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
        console.log('Autoplay failed:', e);
      });
    }
  }, [isInView, autoPlay]);

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
        preload={isInView ? preload : 'none'}
        onLoadStart={() => setShowPoster(true)}
        onLoadedData={() => {
          setShowPoster(false);
          console.log('Lazy video loaded:', src);
        }}
        onError={(e) => onError?.(e as React.SyntheticEvent<HTMLVideoElement>)}
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

export default LazyVideo;
