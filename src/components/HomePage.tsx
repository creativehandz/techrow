import './Button.css';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="shadow-lg w-full relative z-[100]" style={{backgroundColor: '#141414'}}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{height: '100px'}}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/media/images/logo/logo.svg" alt="TechRow" style={{width: '162.57px'}} />
              </div>
            </div>
            <div className="flex items-center">
              <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed bg-black bg-opacity-95 z-50 flex" style={{top: '100px', left: '0', right: '0', bottom: '0'}}>
          {/* Left side - Video background (same as hero) */}
          <div className="w-1/2 relative">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop
              playsInline
            >
              <source src="/media/videos/hero/celebrating-diverse-talents-together-veed.mp4" type="video/mp4" />
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
          <source src="/media/videos/hero/celebrating-diverse-talents-together-veed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-50 h-full flex flex-col justify-between">
          {/* Titles - Centered */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8">
              <h2 className="hero-subtitle">
                Reimagining The
              </h2>
              <h1 className="hero-title mb-0">
                Content & Spaces
              </h1>
              <h2 className="hero-subtitle-bottom">
                That Moves Us
              </h2>
            </div>
          </div>
          
          {/* Button - Bottom */}
          <div className="pb-8 flex flex-col items-center space-y-4">
            <button className="learn-more-button">
              Learn More
            </button>
            <svg 
              className="w-8 h-8 text-white animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
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