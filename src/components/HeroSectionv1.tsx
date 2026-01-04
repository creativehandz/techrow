import { useEffect, useRef } from 'react';
import './Button.css';

interface HeroSectionv1Props {
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

const HeroSectionv1 = ({
  videoSrc,
  title,
  subtitle,
  subHeading,
  showActionButtons = false,
  showBottomItems = false,
  backgroundImage,
  overlay = true,
  overlayColor = 'bg-black bg-opacity-40',
  height = 'calc(100vh - 100px)'
}: HeroSectionv1Props) => {
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
        <div className="container mx-auto flex-1 flex items-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 mx-auto">
            <div className=" w-full ">
              {/* Title */}
              <h1 
                className="hero-title-v1 mb-0"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              
              {/* Sub Heading */}
              {subHeading && (
                <h2 
                  className="hero-subtitle-v1 mt-4 mb-4" 
                >
                  {subHeading.split('. ').map((line, index, array) => (
                    <span key={index}>
                      {line}
                      {index < array.length - 1 && '.'}
                      {index < array.length - 1 && <br />}
                    </span>
                  ))}
                </h2>
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
                <div className="flex flex-wrap gap-8 mt-8">
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
              <span className="hero-bottom-item">Collaborate</span>
              <span className="hero-bottom-item">Activate</span>
              <span className="hero-bottom-item">Expand</span>
            </div>
            {/* Learn More Button - Mobile Only */}
            <button className="learn-more-button mobile-only-button">
              Learn more<br></br>
              <img 
                src="/media/images/icons/down-arrow.png" 
                alt="Down arrow" 
                className="ml-2 w-4 inline-block"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSectionv1;