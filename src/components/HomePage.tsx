import './Button.css';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample video data - you can replace with actual video files
  const sliderVideos = [
    {
      id: 1,
      src: "/media/videos/demos/demo-video-1.mp4",
      title: "DISTRIBUTION CHANNEL FOR PREMIUM PROGRAMMING",
      description: "Distribute films and series through curated, organization-run streaming destinations beyond traditional consumer platforms.",
      buttonText: "Become a Media Partner"
    },
    {
      id: 2,
      src: "/media/videos/demos/demo-video-2.mp4", 
      title: "CONTENT CREATION & PRODUCTION SERVICES",
      description: "Professional video production and content creation services for educational institutions and organizations worldwide.",
      buttonText: "Start Creating"
    },
    {
      id: 3,
      src: "/media/videos/demos/demo-video-3.mp4",
      title: "STREAMING TECHNOLOGY SOLUTIONS", 
      description: "Advanced streaming infrastructure and technology solutions designed for educational and institutional content delivery.",
      buttonText: "Explore Technology"
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
          className={`fixed bg-black bg-opacity-95 z-100 flex transform transition-all duration-500 ease-in-out ${
            isMenuClosing ? 'animate-slideUp' : 'animate-slideDown'
          }`}
          style={{top: '100px', left: '0', right: '0', bottom: '0'}}
        >
          {/* Left side - Video background (same as hero) */}
          <div className="w-1/2 relative">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop
              playsInline
            >
              <source src="/media/videos/hero/techrow_montage_new.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Hero content on left */}
            <div className="absolute inset-0 flex items-center justify-center">
             
            </div>
          </div>
          
          {/* Right side - Menu items */}
          <div className="w-full flex items-center justify-center">
            <div className="text-white text-right space-y-8">
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors">
                ENTERPRISE
              </a>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors">
                MEDIA PARTNERSHIPS
              </a>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors">
                SPONSORSHIPS
              </a>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors">
                ABOUT
              </a>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors">
                CONTACT
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

      {/* Video Slider Section */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Video Slider Container */}
          <div className="relative">
            {/* Main Video Display */}
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <video 
                key={sliderVideos[currentSlide].id}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
              >
                <source src={sliderVideos[currentSlide].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                  {/* Left side - Title */}
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight" style={{fontFamily: 'League Spartan'}}>
                      {sliderVideos[currentSlide].title}
                    </h3>
                  </div>
                  
                  {/* Right side - Description and Button */}
                  <div className="space-y-4">
                    <p className="text-lg text-gray-200 leading-relaxed" style={{fontFamily: 'Quicksand'}}>
                      {sliderVideos[currentSlide].description}
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300" style={{fontFamily: 'Quicksand'}}>
                      {sliderVideos[currentSlide].buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentSlide(currentSlide === 0 ? sliderVideos.length - 1 : currentSlide - 1)}
              className="absolute left-4 top-4 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setCurrentSlide(currentSlide === sliderVideos.length - 1 ? 0 : currentSlide + 1)}
              className="absolute right-4 top-4 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slider Dots/Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {sliderVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose TechRow?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide comprehensive solutions that help your business thrive in the digital age.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fast Performance</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Lightning-fast solutions optimized for speed and efficiency.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure & Reliable</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Enterprise-grade security with 99.9% uptime guarantee.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">User-Friendly</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Intuitive interfaces designed with user experience in mind.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 24l4-8m0 0l4 8m-4-8v-4m0 0L7 8m4 4l4-4" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">24/7 Support</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Round-the-clock support to help you whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2025 TechRow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;