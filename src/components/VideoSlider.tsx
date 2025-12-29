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

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="bg-black">
      <div className="w-full mx-auto relative">
        <div className="relative overflow-hidden" style={{height}}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={videos.length > 1}
            navigation={showNavigation && videos.length > 1}
            pagination={videos.length > 1 ? {
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
            } : false}
            autoplay={false}
            speed={800}
            effect="slide"
            className="video-swiper h-full"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative h-full">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Action Buttons - Positioned at top center, bottom on mobile */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 md:top-10 md:left-1/2 md:transform md:-translate-x-1/2">
                    <div className="hidden md:flex space-x-4">
                      <button className="video-action-tag">
                        See
                      </button>
                      <button className="video-action-tag">
                        Explore
                      </button>
                      <button className="video-action-tag">
                        Create
                      </button>
                    </div>
                  </div>
                  
                  {/* Mobile Action Tags - Bottom */}
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 md:hidden">
                  </div>
                  
                  {/* Mobile Title - Outside overlay */}
                  <div className="absolute bottom-45 left-0 right-0 w-full text-center md:hidden z-20 px-4">
                    <h3 
                      className="video-title text-2xl mb-4" 
                      style={{color: video.titleColor || '#FFD058'}}
                    >
                      {video.title}
                    </h3>
                  </div>
                  
                  {/* Video Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8" style={{background: 'var(--Background-Black-40, #0F0F0F66)'}}>
                    {/* Mobile Layout - Description and action tags in overlay */}
                    <div className="md:hidden text-center">
                      <div className="flex justify-center space-x-4 mb-4">
                        <button className="video-action-tag">
                          Gather
                        </button>
                        <button className="video-action-tag">
                          Connect
                        </button>
                        <button className="video-action-tag">
                          Thrive
                        </button>
                      </div>
                      <p className="video-description text-sm leading-relaxed">
                        {video.description}
                      </p>
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
                      </div>
                      
                      {/* Right side - Description */}
                      <div className="space-y-4">
                        <p className="video-description">
                          {video.description}
                        </p>
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