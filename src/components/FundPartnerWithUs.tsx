import React from 'react';
import './Button.css';
import Header from './Header';
import HeroSectionv1 from './HeroSectionv1';
import VideoSlider from './VideoSlider';
import Copyright from './Copyright';
import ContactForm from './ContactForm';


const FundPartnerWithUs = () => {
  // Partnership video data
  const partnershipVideos = [
    {
      id: 1,
      src: "/media/videos/pages/booking-talent-desktop-veed.mp4",
      title: "We help communities",
      titleColor: "#7ED321",
      description: "Discover how we can work together to transform communities through creative spaces and local talent development. Join our mission to build sustainable entertainment economies."
    },
    {
      id: 2,
      src: "/media/videos/pages/media-partnerships-veed.mp4",
      title: "What We Bring",
      titleColor: "#FFD058",
      description: "See the real impact of our partnerships in communities like Harlem. Together, we create opportunities for local creators and sustainable economic growth."
    },
 
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <HeroSectionv1 
        videoSrc="/media/videos/pages/celebrating-diverse-talents-together-veed.mp4"
        title="<span style='color: #7ED321'>PARTNER WITH US</span>"
        subHeading="Let's Bring Entertainment and Creative Capacity Into More Communities."
        showActionButtons={false}
        showBottomItems={true}
        overlayColor="bg-black/70"
      />
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      
      {/* Video Section */}
      <section>
        <VideoSlider 
          videos={partnershipVideos}
          height="70vh"
          showNavigation={true}
        />
      </section>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      {/* Mission Section */}
      <section className="mission-section-bg footer-bg">
        <div className="container mx-auto ">
          <h2 className="mission-title">
            This is how entertainment deserts<br />begin to disappear.
          </h2>
          
          <p className="mission-subtitle">
            Activate spaces. Amplify talent. Build local creative power.
          </p>
          
          <div className="mission-buttons mb-12">
            <button className="hero-action-button hero-donate-button">
              Donate
            </button>
            
          </div>
          
          <ContactForm />
        </div>
      </section>

      
      <Copyright />
    </div>
  );
};

export default FundPartnerWithUs;