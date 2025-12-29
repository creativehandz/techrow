import './Button.css';

const Footer = () => {
  return (
    <footer className="footer-bg" style={{height: '490px', display: 'flex', alignItems: 'center'}}>
      <div className="w-3/4 mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="w-full">
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
  );
};

export default Footer;