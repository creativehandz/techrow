import { useEffect } from 'react';
import './Button.css';
import Header from './Header';
import HeroSection from './HeroSection';
import ContactForm from './ContactForm';
import Copyright from './Copyright';

const Donate = () => {
  useEffect(() => {
    // Load DonorBox script
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.setAttribute('paypalExpress', 'false');
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <HeroSection 
        videoSrc="/media/videos/pages/donate.mp4"
        title="Help Us Bring Entertainment <br />and Creative Opportunity <br /><span style='color: #FFD058'>to Neighborhoods That Need It Most.</span> "
        subHeading="Your support activates spaces, powers creativity. and fuels the makers who bring entertainment to life."
        showActionButtons={false}
        showBottomItems={false}
        overlayColor="bg-black/70"
        height="var(--donate-hero-height)"
      />
      
      {/* Gap between sections - Hidden on mobile */}
      <div className="hidden lg:block" style={{height: '180px', backgroundColor: '#000000'}}></div>
      
      {/* Donation Options */}
      <section className="donation-section">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center justify-center mx-auto">
            {/* DonorBox Widget - Left Side */}
            <div className="flex flex-col items-center order-2 lg:order-1">
              <iframe 
                src="https://donorbox.org/embed/donation-campaign-6" 
                name="donorbox" 
                frameBorder="0" 
                scrolling="no" 
                allow="payment"
                className="donorbox-iframe"
                title="Donation Form"
              />
              
              {/* Receipt Information */}
              <div className="mt-0 max-w-sm">
                <p className="donation-receipt-text text-center">
                  A donation receipt will be emailed to you. Keep a copy for tax purposes. For recurring donations, you'll receive a receipt each month.
                </p>
              </div>
            </div>

            {/* Impact Section - Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center order-1 lg:order-2">
              <div className="impact-content-wrapper">
                <h2 className="impact-heading-new mb-8 text-left lg:text-center">
                  YOUR IMPACT IS<br />MORE
                </h2>
                
                {/* Impact Buttons - Responsive Layout */}
                <div className="flex flex-col gap-4 mb-0 mx-auto your-impact-buttons-wrapper">
                  {/* Desktop: 3 buttons, Mobile: 2 buttons left-aligned */}
                  <div className="flex gap-4 justify-start lg:justify-center flex-wrap lg:flex-nowrap">
                    <button className="impact-button-new">
                      Pride
                    </button>
                    <button className="impact-button-new">
                      Opportunity
                    </button>
                    <button className="impact-button-new hidden lg:flex">
                      Local Makers
                    </button>
                  </div>
                  {/* Mobile: Local Makers on separate row, left-aligned */}
                  <div className="flex justify-start lg:hidden">
                    <button className="impact-button-new">
                      Local Makers
                    </button>
                  </div>
                  {/* Active Community Spaces always on separate row, left-aligned on mobile */}
                  <div className="flex justify-start lg:justify-center">
                    <button className="impact-button-new">
                      Active Community Spaces
                    </button>
                  </div>
                </div>
              </div>

              {/* Tax Information */}
              <div className="mt-6 text-center  mx-auto">
                <p className="tax-info-text">
                  We are a 501(c)3 tax-exempt organization. Your donation is tax-deductible. Keep your email receipt for tax records. You will receive an e-mail after your donation. Questions? Contact{' '}
                  <a href="mailto:info@techrowfund.org" className="text-blue-600 underline">
                    info@techrowfund.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gap between sections - Hidden on mobile */}
      <div className="hidden lg:block" style={{height: '180px', backgroundColor: '#000000'}}></div>
      
      {/* Mission Section */}
      <section className="mission-section-bg footer-bg">
        <div className="container mx-auto">
          <h2 className="mission-title mb-8">
            Contact us
          </h2>
          
          
          
         
          
          <ContactForm />
        </div>
      </section>

      <Copyright />
    </div>
  );
};

export default Donate;