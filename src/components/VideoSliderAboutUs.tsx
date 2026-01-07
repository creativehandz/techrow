import './Button.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface VideoSlideAboutUs {
  id: number;
  src: string;
  title: string;
  titleColor?: string;
  subtitle?: string;
  subtitle2?: string;
  challengeButtons?: string[];
  challengeButtonsPosition?: 'left' | 'right';
  actionTags?: string[];
  description: string;
}

interface VideoSliderAboutUsProps {
  videos: VideoSlideAboutUs[];
  height?: string;
}

const VideoSliderAboutUs = ({ 
  videos,
  height = "800px"
}: VideoSliderAboutUsProps) => {

  if (!videos || videos.length === 0) {
    return <div>No videos available</div>;
  }

  return (
    <div className="video-slider-container" style={{ height }}>
      <div className="w-full h-full">
        <div className="h-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet video-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active video-pagination-bullet-active'
            }}
            autoplay={false}
            loop={true}
            className="video-swiper h-full"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="relative h-full">
                <div className="relative w-full h-full">
                  {/* Video Background */}
                  <video
                    className="w-full h-full object-cover"
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    preload="metadata"
                    onError={(e) => {
                      console.log('VideoSliderAboutUs video failed to load:', video.src);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Action Buttons - Positioned at top center */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 hidden md:flex">
                    {video.actionTags && video.actionTags.map((tag, index) => (
                      <button key={index} className="video-action-tag">
                        {tag}
                      </button>
                    ))}
                  </div>
                  
                  {/* Mobile Title Section - Positioned above black overlay */}
                  <div className="absolute bottom-0 left-0 right-0 md:hidden z-30">
                    <div className="w-full text-center px-4 pb-2 mb-2">
                      <h3 
                        className="video-title text-2xl mb-2" 
                        style={{color: video.titleColor || '#FFD058'}}
                      >
                        {video.title}
                      </h3>
                    </div>
                    
                    {/* Video Overlay Info for Mobile */}
                    <div className="p-4" style={{background: 'var(--Background-Black-40, #0F0F0F66)'}}>
                      {/* Mobile Layout - centered content */}
                      <div className="text-center">
                        {/* Action tags */}
                        <div className="flex justify-center space-x-4 mb-4">
                          {video.actionTags && video.actionTags.map((tag, index) => (
                            <button key={index} className="video-action-tag">
                              {tag}
                            </button>
                          ))}
                        </div>
                        {/* Subtitle - appears in mobile */}
                        {video.subtitle && (
                          <p className="video-subtitle text-lg text-white mb-4">
                            {video.subtitle}
                          </p>
                        )}
                        {/* Subtitle2 - appears in mobile */}
                        {video.subtitle2 && (
                          <p className="video-subtitle text-lg text-white mb-4">
                            {video.subtitle2}
                          </p>
                        )}
                        {/* Description */}
                        <h5 className="video-description text-sm leading-relaxed mb-4 font-semibold">
                          {video.description}
                        </h5>
                        {/* Challenge buttons */}
                        {video.challengeButtons && (
                          <div className="flex flex-col gap-3 w-full">
                            {video.challengeButtons.map((button, index) => {
                              // First two buttons - regular style
                              if (index < 2) {
                                return (
                                  <div key={index} className="flex justify-start">
                                    <div className="aboutus-challenge-button">
                                      {button}
                                    </div>
                                  </div>
                                );
                              }
                              // Third button - wide style
                              else if (index === 2) {
                                return (
                                  <div key={index} className="flex justify-start">
                                    <div className="aboutus-challenge-button">
                                      {button}
                                    </div>
                                  </div>
                                );
                              }
                              // Fourth button - outline style
                              else {
                                return (
                                  <div key={index} className="flex justify-start">
                                    <div className="aboutus-challenge-button">
                                      {button}
                                    </div>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Overlay Info - Desktop Only */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 hidden md:block" style={{background: 'var(--Background-Black-40, #0F0F0F66)'}}>
                    {/* Desktop Layout - Left/Right aligned */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Left side - Title */}
                      <div className="text-left">
                        <h3 
                          className="video-title text-2xl md:text-4xl mb-4" 
                          style={{color: video.titleColor || '#FFD058'}}
                        >
                          {video.title}
                        </h3>
                        
                        {/* Subtitle - Desktop */}
                        {video.subtitle && (
                          <p className="video-subtitle text-lg md:text-xl text-white mb-4">
                            {video.subtitle}
                          </p>
                        )}
                        
                        {/* Subtitle2 - Desktop */}
                        {video.subtitle2 && (
                          <p className="video-subtitle text-lg md:text-xl text-white mb-4">
                            {video.subtitle2}
                          </p>
                        )}
                        
                        {/* Challenge buttons on left when position is left */}
                        {video.challengeButtons && video.challengeButtonsPosition === 'left' && (
                          <div className="gap-4 mt-6 max-w-2xl">
                            {/* All buttons in one row */}
                            <div className="flex flex-wrap gap-4 justify-start">
                              {video.challengeButtons.map((button, index) => {
                                // First two buttons - regular style
                                if (index < 2) {
                                  return (
                                    <div key={index} className="aboutus-challenge-button">
                                      {button}
                                    </div>
                                  );
                                }
                                // Third button - wide style
                                else if (index === 2) {
                                  return (
                                    <div key={index} className="aboutus-challenge-button">
                                      {button}
                                    </div>
                                  );
                                }
                                // Fourth button - outline style
                                else {
                                  return (
                                    <div key={index} className="aboutus-challenge-button">
                                      {button}
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Right side - Description */}
                      <div className="text-left">
                        <h5 className="video-description text-lg md:text-xl leading-relaxed font-semibold">
                          {video.description}
                        </h5>
                        
                        {/* Challenge buttons on right when position is right or no position specified */}
                        {video.challengeButtons && (video.challengeButtonsPosition === 'right' || !video.challengeButtonsPosition) && (
                          <div className="gap-4 mt-6 max-w-2xl">
                            {/* All buttons in one row */}
                            <div className="flex flex-wrap gap-4 justify-start">
                              {video.challengeButtons.map((button, index) => {
                                // First two buttons - regular style
                                if (index < 2) {
                                  return (
                                    <div key={index} className="aboutus-challenge-button text-center">
                                      {button}
                                    </div>
                                  );
                                }
                                // Third button - wide style
                                else if (index === 2) {
                                  return (
                                    <div key={index} className="aboutus-challenge-button">
                                      {button}
                                    </div>
                                  );
                                }
                                // Fourth button - outline style
                                else {
                                  return (
                                    <div key={index} className="aboutus-challenge-button">
                                      {button}
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default VideoSliderAboutUs;