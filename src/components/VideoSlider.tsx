import './Button.css';
import { useState, useEffect, useRef } from 'react';

interface VideoSlide {
  id: number;
  src: string;
  title: string;
  titleColor?: string;
  description: string;
}

interface VideoSliderProps {
  videos: VideoSlide[];
  height?: string;
  showNavigation?: boolean;
}

const VideoSlider = ({ 
  videos, 
  height = '80vh',
  showNavigation = true 
}: VideoSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Reload the video when slide changes
      video.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, [currentSlide]);

  const handleSlideChange = (direction: 'left' | 'right') => {
    if (isSliding) return; // Prevent multiple clicks during animation
    
    setIsSliding(true);
    
    setTimeout(() => {
      if (direction === 'left') {
        setCurrentSlide(currentSlide === 0 ? videos.length - 1 : currentSlide - 1);
      } else {
        setCurrentSlide(currentSlide === videos.length - 1 ? 0 : currentSlide + 1);
      }
      setIsSliding(false);
    }, 250); // Half of animation duration
  };

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="bg-black">
      {/* Video Slider Container */}
      <div className="w-full mx-auto relative">
        {/* Main Video Display */}
        <div className="relative overflow-hidden" style={{height}}>
          <video 
            ref={videoRef}
            key={currentSlide}
            className={`w-full h-full object-cover ${isSliding ? 'video-slide-in-right' : ''}`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videos[currentSlide].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8" style={{background: 'var(--Background-Black-40, #0F0F0F66)'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Title */}
              <div>
                <h3 
                  className="video-title" 
                  style={{color: videos[currentSlide].titleColor || '#FFD058'}}
                >
                  {videos[currentSlide].title}
                </h3>
              </div>
              
              {/* Right side - Description */}
              <div className="space-y-4">
                <p className="video-description">
                  {videos[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        {showNavigation && videos.length > 1 && (
          <>
            <button 
              onClick={() => handleSlideChange('left')}
              className="absolute left-4 top-4 bg-gray-800 border-2 border-white hover:bg-gray-700 rounded-lg p-3 transition-all duration-300 z-50"
              disabled={isSliding}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => handleSlideChange('right')}
              className="absolute right-4 top-4 bg-gray-800 border-2 border-white hover:bg-gray-700 rounded-lg p-3 transition-all duration-300 z-50"
              disabled={isSliding}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {videos.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => !isSliding && setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                disabled={isSliding}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSlider;