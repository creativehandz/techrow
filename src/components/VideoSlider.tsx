import './Button.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface VideoSlide {
  id: number;
  src: string;
  title: string;
  titleColor?: string;
  subtitle?: string;
  challengeButtons?: string[];
  challengeButtonsPosition?: 'left' | 'right';
  actionTags?: string[];
  description: string;
  additionalText?: string;
}

interface VideoSliderProps {
  videos: VideoSlide[];
  height?: string;
}

const VideoSlider = ({ 
  videos 
}: VideoSliderProps) => {

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="bg-black">
      <div className="w-full mx-auto relative">
        <div className="relative overflow-hidden video-content-height">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={false}
            allowTouchMove={true}
            allowSlideNext={true}
            allowSlidePrev={true}
            touchStartPreventDefault={false}
            simulateTouch={true}
            grabCursor={true}
            touchRatio={1}
            threshold={5}
            longSwipes={true}
            longSwipesRatio={0.5}
            longSwipesMs={300}
            followFinger={true}
            speed={1000}
            effect="slide"
            className="video-swiper h-full"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative h-full">
                  <video 
                    className="w-full h-full object-cover"
                    
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    preload="none"
                    onCanPlay={(e) => {
    e.currentTarget.play().catch(() => {})
  }}
                    onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                      console.log('Video failed to load:', video.src);
                      e.currentTarget.style.display = 'none';
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Action Buttons - Positioned at top center, bottom on mobile */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 md:top-10 md:left-1/2 md:transform md:-translate-x-1/2">
                    <div className="hidden md:flex space-x-4">
                      {video.actionTags && video.actionTags.map((tag, index) => (
                        <button key={index} className="video-action-tag">
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mobile Action Tags - Bottom */}
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 md:hidden">
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
                      {/* Mobile Layout - Action tags, description and challenge buttons in overlay */}
                      <div className="text-center">
                        {/* Action tags */}
                        <div className="flex justify-center space-x-4 mb-4">
                          {video.actionTags && video.actionTags.map((tag, index) => (
                            <button key={index} className="video-action-tag">
                              {tag}
                            </button>
                          ))}
                        </div>
                        {/* Subtitle - appears after action tags in mobile */}
                        {video.subtitle && (
                          <h6 className="video-subtitle text-lg text-white mb-4 font-semibold">
                            {video.subtitle}
                          </h6>
                        )}
                        {/* Description */}
                        <h5 className="video-description text-sm leading-relaxed mb-4 font-semibold">
                          {video.description}
                        </h5>
                        {/* Additional Text */}
                        {video.additionalText && (
                          <p className="video-additional-text text-sm leading-relaxed mb-4">
                            {video.additionalText}
                          </p>
                        )}
                        {/* Challenge buttons */}
                        {video.challengeButtons && (
                          <div className="flex flex-col gap-2 w-full">
                            {video.challengeButtons.map((button, index) => (
                              <div key={index} className="flex justify-start">
                                <div className="challenge-button text-left">
                                  {button}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Overlay Info - Desktop Only */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 hidden md:block" style={{background: 'var(--Background-Black-40, #0F0F0F66)'}}>
                    {/* Mobile Layout - Action tags, description and challenge buttons in overlay */}
                    <div className="md:hidden text-center">
                      {/* Action tags */}
                      <div className="flex justify-center space-x-4 mb-4">
                        {video.actionTags && video.actionTags.map((tag, index) => (
                          <button key={index} className="video-action-tag">
                            {tag}
                          </button>
                        ))}
                      </div>
                      {/* Subtitle - appears after action tags in mobile */}
                      {video.subtitle && (
                        <h6 className="video-subtitle text-lg text-white mb-4 font-semibold">
                          {video.subtitle}
                        </h6>
                      )}
                      {/* Description */}
                      <h5 className="video-description text-sm leading-relaxed mb-4 font-semibold">
                        {video.description}
                      </h5>
                      {/* Additional Text */}
                      {video.additionalText && (
                        <p className="video-additional-text text-sm leading-relaxed mb-4">
                          {video.additionalText}
                        </p>
                      )}
                      {/* Challenge buttons */}
                      {video.challengeButtons && (
                        <div className="flex flex-col gap-3 w-full">
                          {video.challengeButtons.map((button, index) => (
                            <div key={index} className="flex justify-start">
                              <div className="challenge-button text-left">
                                {button}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Left side - Title */}
                      <div>
                        <h3 
                          className="video-title" 
                          style={{color: video.titleColor || '#FFD058'}}
                        >
                          {video.title}
                        </h3>
                        {video.subtitle && (
                          <h6 className="video-subtitle mt-4 text-white font-semibold">
                            {video.subtitle}
                          </h6>
                        )}
                        {video.challengeButtons && video.challengeButtonsPosition === 'left' && (
                          <div className="flex flex-col gap-4 mt-6 max-w-2xl">
                            {/* First row - 1 button */}
                            <div className="flex justify-start">
                              <div className="challenge-button w-full max-w-lg">
                                {video.challengeButtons[0]}
                              </div>
                            </div>
                            {/* Second row - 2 buttons */}
                            <div className="flex gap-4 justify-start">
                              <div className="challenge-button flex-1 max-w-xs">
                                {video.challengeButtons[1]}
                              </div>
                              <div className="challenge-button flex-1 max-w-xs">
                                {video.challengeButtons[2]}
                              </div>
                            </div>
                            {/* Third row - 1 button */}
                            <div className="flex justify-start">
                              <div className="challenge-button w-full max-w-lg">
                                {video.challengeButtons[3]}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Right side - Description or Challenge Buttons */}
                      <div className="space-y-4">
                        {video.challengeButtons && video.challengeButtonsPosition !== 'left' ? (
                          <div className="flex flex-col gap-4 max-w-2xl">
                            {/* First row - 3 buttons */}
                            <div className="flex gap-4 justify-center">
                              <div className="challenge-button flex-1 max-w-xs">
                                {video.challengeButtons[0]}
                              </div>
                              <div className="challenge-button flex-1 max-w-xs">
                                {video.challengeButtons[1]}
                              </div>
                              <div className="challenge-button flex-1 max-w-xs">
                                {video.challengeButtons[2]}
                              </div>
                            </div>
                            {/* Second row - 1 button */}
                            <div className="flex justify-center">
                              <div className="challenge-button w-full max-w-xs">
                                {video.challengeButtons[3]}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <h5 className="video-description font-semibold">
                            {video.description}
                          </h5>
                        )}
                        {/* Additional Text */}
                        {video.additionalText && (
                          <p className="video-additional-text">
                            {video.additionalText}
                          </p>
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

export default VideoSlider;