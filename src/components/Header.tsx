import './Button.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
  isMenuClosing?: boolean;
}

const Header = ({ onMenuToggle, isMenuOpen = false, isMenuClosing = false }: HeaderProps) => {
  const [localMenuOpen, setLocalMenuOpen] = useState(false);
  const [localMenuClosing, setLocalMenuClosing] = useState(false);

  const handleMenuToggle = () => {
    if (onMenuToggle) {
      onMenuToggle();
    } else {
      // Local state management if no props provided
      if (localMenuOpen) {
        setLocalMenuClosing(true);
        setTimeout(() => {
          setLocalMenuOpen(false);
          setLocalMenuClosing(false);
        }, 500);
      } else {
        setLocalMenuOpen(true);
      }
    }
  };

  const menuState = onMenuToggle ? { isMenuOpen, isMenuClosing } : { isMenuOpen: localMenuOpen, isMenuClosing: localMenuClosing };

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 shadow-lg w-full z-[100]" style={{backgroundColor: '#F2B522'}}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{height: '100px'}}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img src="/media/images/logo/techrow-fund.svg" alt="TechRow" style={{width: '162.57px'}} />
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button className="menu-button" onClick={handleMenuToggle}>
                {menuState.isMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      {(menuState.isMenuOpen || menuState.isMenuClosing) && (
        <div 
          className={`fixed z-100 flex transform transition-all duration-500 ease-in-out ${
            menuState.isMenuClosing ? 'animate-slideUp' : 'animate-slideDown'
          }`}
          style={{top: '100px', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
        >
          {/* Left side - Video background */}
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
          </div>
          
          {/* Right side - Menu items */}
          <div className="w-full flex items-center justify-end h-full">
            <div className="text-white text-center space-y-8 h-full flex flex-col justify-center menu-container">
              <Link to="/about" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                ABOUT US
              </Link>
              <a href="#" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                OUR PROGRAMS
              </a>
              <Link to="/fund-gala" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                GALA
              </Link>
              <Link to="/fund-partner-with-us" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                PARTNERSHIP
              </Link>
              <Link to="/donate" className="block text-6xl font-black font-league hover:text-purple-400 transition-colors menu-item">
                DONATE
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;