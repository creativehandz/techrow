import './Button.css';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Client logos data
  const clientLogos = [
    { id: 1, src: "/media/images/clients/afi.png", alt: "AFI" },
    { id: 2, src: "/media/images/clients/baltimore.png", alt: "Baltimore" },
    { id: 3, src: "/media/images/clients/cartoon-network.png", alt: "Cartoon Network" },
    { id: 4, src: "/media/images/clients/cnn.png", alt: "CNN" },
    { id: 5, src: "/media/images/clients/felix.png", alt: "Felix" },
    { id: 6, src: "/media/images/clients/nassau.png", alt: "Nassau" },
    { id: 7, src: "/media/images/clients/nyc.png", alt: "NYC" },
    { id: 8, src: "/media/images/clients/nyt-1.png", alt: "New York Times" },
    { id: 9, src: "/media/images/clients/peconic.png", alt: "Peconic" },
    { id: 10, src: "/media/images/clients/suffolk.png", alt: "Suffolk" },
    { id: 11, src: "/media/images/clients/tribeca.png", alt: "Tribeca" }
  ];

  // Sample video data - you can replace with actual video files
  const sliderVideos = [
    {
      id: 1,
      src: "/media/videos/hero/celebrating-diverse-talents-together-veed.mp4",
      title: "DISTRIBUTION CHANNEL FOR PREMIUM PROGRAMMING",
      titleColor: "#FFD058",
      description: "Distribute films and series through curated, organization-run streaming destinations beyond traditional consumer platforms.",
      
    },
    {
      id: 2,
      src: "/media/videos/hero/techrow_montage_new.mp4", 
      title: "Why It Works",
      titleColor: "#7ED321",
      description: "This isn't just entertainment — it's infrastructure for belonging, pride, and future-ready possibility.",
      
    }
  ];

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 500); // Match animation duration
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleSlideChange = (direction: 'left' | 'right') => {
    if (isSliding) return; // Prevent multiple clicks during animation
    
    setIsSliding(true);
    
    setTimeout(() => {
      if (direction === 'left') {
        setCurrentSlide(currentSlide === 0 ? sliderVideos.length - 1 : currentSlide - 1);
      } else {
        setCurrentSlide(currentSlide === sliderVideos.length - 1 ? 0 : currentSlide + 1);
      }
      setIsSliding(false);
    }, 250); // Half of animation duration
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 shadow-lg w-full z-[100]" style={{backgroundColor: '#F2B522'}}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{height: '100px'}}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/media/images/logo/techrow-fund.svg" alt="TechRow" style={{width: '162.57px'}} />
              </div>
            </div>
            <div className="flex items-center">
              <button className="menu-button" onClick={handleMenuToggle}>
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      {(isMenuOpen || isMenuClosing) && (
        <div 
          className={`fixed z-100 flex transform transition-all duration-500 ease-in-out ${
            isMenuClosing ? 'animate-slideUp' : 'animate-slideDown'
          }`}
          style={{top: '100px', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
        >
          
          
          
          {/* Right side - Menu items */}
          <div className="w-full flex items-center justify-end h-full">
            <div className="text-white text-center space-y-8 h-full flex flex-col justify-center menu-container">
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                ABOUT US
              </a>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                OUR PROGRAMS
              </a>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                GALA
              </a>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                PARTNERSHIP
              </a>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                DONATE
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900" style={{height: 'calc(100vh - 100px)'}}>
        {/* Background Video */}
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-30"
          autoPlay 
          muted 
          loop
          playsInline
          preload="auto"
          controls={false}
          onLoadedData={() => console.log('Video loaded')}
          onError={() => console.log('Video error')}
        >
          <source src="/media/videos/hero/techrow_montage_new.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-50 h-full flex flex-col justify-between">
          {/* Titles - Centered */}
          <div className="container mx-auto flex-1 flex items-center">
            <div className="text-left text-white px-4 sm:px-6 lg:px-8">
              <div className="max-w-3/4">
                
                <h1 className="hero-title mb-0">
                  Let's Eradicate <span style={{color: '#FFD058'}}>Entertainment Deserts —</span> One Neighborhood at a Time.
                </h1>
                
                {/* Three Action Buttons */}
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
               
              </div>
            </div>
          </div>
          
          {/* Bottom Items */}
          <div className="pb-8 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-8 text-white">
              <span className="hero-bottom-item">• Activate</span>
              <span className="hero-bottom-item">• Engage</span>
              <span className="hero-bottom-item">• Empower</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Spiderman Kid Section */}
      <div className="bg-gray-100 relative">
        <img 
          src="/media/images/sections/spiderman-kid.jpg" 
          alt="Spiderman Kid" 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0" style={{background: 'var(--Background-Black-20, #0F0F0F33)'}}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto relative">
            <div className="max-w-3/4">
            <h2 className="neighborhood-text text-left">
              Neighborhoods come <span style={{color: '#FFD058'}}>alive when entertainment is close</span> to home.
            </h2>
            <p className="neighborhood-paragraph text-left mt-6 max-w-[720px]">
              We transform school and campus spaces into vibrant hubs of joy, creativity, and community.
            </p>
            </div>
            
          </div>
        </div>
      </div>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Video Slider Section */}
      <div className="bg-black">
        {/* Video Slider Container */}
        <div className="container mx-auto relative">
          {/* Main Video Display */}
          <div className="relative overflow-hidden" style={{height: '80vh'}}>
            <video 
              key={sliderVideos[currentSlide].id}
              className={`w-full h-full object-cover ${isSliding ? 'video-slide-in-right' : ''}`}
              autoPlay
              muted
            >
              <source src={sliderVideos[currentSlide].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8" style={{background: 'var(--Background-Black-40, #0F0F0F66)'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Title */}
                <div>
                  <h3 className="video-title" style={{color: sliderVideos[currentSlide].titleColor}}>
                    {sliderVideos[currentSlide].title}
                  </h3>
                </div>
                
                {/* Right side - Description and Button */}
                <div className="space-y-4">
                  <p className="video-description">
                    {sliderVideos[currentSlide].description}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
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
        </div>
      </div>
{/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      {/* Customers and Partners Section */}
      <div className="customers-partners-bg" style={{height: '556px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="customers-partners-title">
              Customers and Partners
            </h2>
          </div>
          
          {/* Logo Slider */}
          <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={0}
              slidesPerView={7}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 12,
                },
                1536: {
                  slidesPerView: 8,
                  spaceBetween: 15,
                },
              }}
              className="client-logos-swiper"
            >
              {clientLogos.map((logo) => (
                <SwiperSlide key={logo.id}>
                  <div className="flex items-center justify-center p-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-bg" style={{height: '490px', display: 'flex', alignItems: 'center'}}>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-1/2 mx-auto">
            <h2 className="footer-title">Join Us</h2>
            
            {/* Footer Buttons */}
            <div className="flex justify-center space-x-8 mb-8">
              <button className="footer-button">
                Support
              </button>
              <button className="footer-button">
                Partner
              </button>
              <button className="footer-button">
                Empower
              </button>
            </div>
            
            {/* Footer Description */}
            <div className="text-center mb-12">
              <p className="footer-description">
                Help us bring entertainment, creativity, and opportunity back to neighborhoods nationwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;