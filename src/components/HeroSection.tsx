import { useEffect, useRef } from 'react';
import './Button.css';

interface HeroSectionProps {
  videoSrc?: string;
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900" style={{height}}>
      {/* Background Video or Image */}
      {videoSrc ? (
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          autoPlay 
          muted 
          loop
          playsInline
          preload="auto"
          controls={false}
          onLoadedData={() => console.log('Video loaded')}
          onError={() => console.log('Video error')}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
                  <button className="hero-action-button hero-donate-button">
                    Donate
                  </button>
                  <button className="hero-action-button hero-partner-button">
                    Partner
                  </button>
                  <button className="hero-action-button hero-community-button">
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
              <span className="hero-bottom-item">• Activate</span>
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