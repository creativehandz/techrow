import './Button.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
  isMenuClosing?: boolean;
}

const Header = ({ onMenuToggle, isMenuOpen = false, isMenuClosing = false }: HeaderProps) => {
  const [localMenuOpen, setLocalMenuOpen] = useState(false);
  const [localMenuClosing, setLocalMenuClosing] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        }, 250);
      } else {
        setLocalMenuOpen(true);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Show/hide header based on scroll direction
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          // Scrolling down - hide header
          setHeaderVisible(false);
        } else if (lastScrollY > currentScrollY && lastScrollY - currentScrollY > 10) {
          // Scrolling up - show header
          setHeaderVisible(true);
        }
      } else {
        // Always show header when at the very top
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuState = onMenuToggle ? { isMenuOpen, isMenuClosing } : { isMenuOpen: localMenuOpen, isMenuClosing: localMenuClosing };

  return (
    <>
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-[100] transform transition-all duration-300 ease-in-out ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`} 
        style={{
          backgroundColor: menuState.isMenuOpen || scrollY > 1200 ? '#F2B522' : 'transparent',
          opacity: scrollY > 1200 ? 1 : (scrollY > 0 ? 0.9 : 1)
        }}
      >
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
                {menuState.isMenuOpen ? (
                  <div className="flex items-center">
                    <img 
                      src="/media/images/icons/Union.png" 
                      alt="Close" 
                      className="w-6 h-6 md:hidden" 
                    />
                    <span className="hidden md:inline">Close</span>
                  </div>
                ) : (
                  'Menu'
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Overlay with CSS Animation */}
      {(menuState.isMenuOpen || menuState.isMenuClosing) && (
        <div 
          className="fixed z-100"
          style={{top: '100px', left: '0', right: '0', bottom: '0'}}
          onClick={handleMenuToggle}
        >
          <div className="w-full h-full flex" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            {/* Left side - Video background */}
            <div className="w-4/2 relative">
             
            </div>
            
            {/* Right side - Menu items */}
            <div 
              className={`w-full flex items-center justify-end h-full transform transition-all ease-out ${
                menuState.isMenuClosing ? 'animate-slideRightOut' : 'animate-slideRightIn'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white text-center space-y-8 h-full flex flex-col justify-center menu-container">
                <Link to="/about" className="block font-league hover:text-purple-400 transition-colors menu-item">
                  ABOUT US
                </Link>
                <Link to="/impact-program-we-funded" className="block font-league hover:text-purple-400 transition-colors menu-item">
                  OUR PROGRAMS
                </Link>
                <Link to="/fund-gala" className="block font-league hover:text-purple-400 transition-colors menu-item">
                  GALA
                </Link>
                <Link to="/fund-partner-with-us" className="block font-league hover:text-purple-400 transition-colors menu-item">
                  PARTNERSHIP
                </Link>
                <Link to="/donate" className="block font-league hover:text-purple-400 transition-colors menu-item">
                  DONATE
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;