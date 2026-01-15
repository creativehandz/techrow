import MuxVideo from '@mux/mux-video-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import {
  getMuxPlaybackId,
  getMuxPosterUrl,
  muxBackgroundVideoStyle
} from '../utils/muxPlayback';

interface HeroSectionProps {
  videoSrc?: string;
  videoPlaybackId?: string;
  requireMux?: boolean;
  title: string;
  subtitle?: string;
  subHeading?: string;
  showActionButtons?: boolean;
  showBottomItems?: boolean;
  backgroundImage?: string;
  overlay?: boolean;
  overlayColor?: string;
  height?: string;
}

const HeroSection = ({
  videoSrc,
  videoPlaybackId,
  requireMux = true,
  title,
  subtitle,
  subHeading,
  showActionButtons = false,
  showBottomItems = false,
  backgroundImage,
  overlay = true,
  overlayColor = 'bg-black bg-opacity-40',
  height = 'var(--hero-height)'
}: HeroSectionProps) => {
  const muxRef = useRef<HTMLVideoElement | null>(null);
  const muxPlaybackId = videoPlaybackId ?? getMuxPlaybackId(videoSrc);
  const usesMux = Boolean(muxPlaybackId);
  const posterUrl = getMuxPosterUrl(muxPlaybackId);
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    if (!usesMux) return;
    const media = muxRef.current;
    if (media) {
      media.play().catch((error) => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, [usesMux, muxPlaybackId]);

  useEffect(() => {
    if (requireMux && videoSrc && !muxPlaybackId) {
      console.warn('Mux playback ID missing for hero video:', videoSrc);
    }
  }, [requireMux, videoSrc, muxPlaybackId]);

  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative overflow-hidden bg-gray-900" style={{height}}>
      {/* Background Video or Image */}
      {muxPlaybackId ? (
        <>
          <MuxVideo
            ref={muxRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            style={muxBackgroundVideoStyle}
            playbackId={muxPlaybackId}
            poster={posterUrl}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            onLoadStart={() => setShowPoster(true)}
            onLoadedData={() => setShowPoster(false)}
            onError={() => {
              console.log('Hero video failed to load:', muxPlaybackId);
              if (muxRef.current) {
                muxRef.current.style.display = 'none';
              }
            }}
          />
          {posterUrl ? (
            <img
              src={posterUrl}
              alt=""
              aria-hidden="true"
              className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-opacity duration-500"
              style={{ opacity: showPoster ? 1 : 0, pointerEvents: 'none' }}
            />
          ) : null}
        </>
      ) : backgroundImage ? (
        <img 
          src={backgroundImage}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />
      ) : null}
      
      {/* Overlay */}
      {overlay && (
        <div className={`absolute top-0 left-0 w-full h-full ${overlayColor} z-20`}></div>
      )}
      
      {/* Hero Content */}
      <div className="relative z-50 h-full flex flex-col justify-between">
        {/* Main Content - Centered */}
        <div className="container mx-auto flex-1 flex items-center sm:items-center sm:w-full sm:max-w-none md:w-full md:max-w-none lg:w-full lg:max-w-none xl:w-full xl:max-w-non 2xl:w-full 2xl:max-w-non">
          <div className="text-left text-white px-4 sm:px-6 lg:px-8">
            <div className="w-full sm:max-w-3/4 lg:max-w-5/6 xl:max-w-3/4 2xl:w-full 2xl:max-w-full tablet-landscape-full-width mobile-landscape-full-width">
              {/* Title */}
              <h1 
                className="hero-title mb-0"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              
              {/* Sub Heading */}
              {subHeading && (
                <h2 
                  className="hero-subtitle mt-4 mb-4"
                  dangerouslySetInnerHTML={{ __html: subHeading }}
                />
              )}
              
              {/* Subtitle */}
              {subtitle && (
                <p 
                  className="text-xl md:text-2xl mt-6" 
                  style={{fontFamily: 'League Spartan', fontWeight: '400'}}
                >
                  {subtitle.split('. ').map((line, index, array) => (
                    <span key={index}>
                      {line}
                      {index < array.length - 1 && '.'}
                      {index < array.length - 1 && <br />}  
                    </span>
                  ))}
                </p>
              )}
              
              {/* Action Buttons */}
              {showActionButtons && (
                <div className="flex flex-wrap gap-4 sm:gap-8 mt-8">
                  <Link to="/donate" className="hero-action-button hero-donate-button">
                    Donate
                  </Link>
                  <Link to="/fund-partner-with-us" className="hero-action-button hero-partner-button">
                    Partner
                  </Link>
                  <button 
                    className="hero-action-button hero-community-button"
                    onClick={scrollToNextSection}
                  >
                    Bring Us to Your Community
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Bottom Items */}
        {showBottomItems && (
          <div className="pb-8 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-8 text-white">
              <span className="hero-bottom-item" style={{color: '#FFD058'}}>• Activate</span>
              <span className="hero-bottom-item">• Engage</span>
              <span className="hero-bottom-item">• Empower</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
