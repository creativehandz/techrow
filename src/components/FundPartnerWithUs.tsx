import './Button.css';
import Header from './Header';
import HeroSectionv1 from './HeroSectionv1';
import VideoSliderFundPartner from './VideoSliderFundPartner';
import Copyright from './Copyright';
import ContactForm from './ContactForm';


const FundPartnerWithUs = () => {
  // Partnership video data
  const partnershipVideos = [
    {
      id: 1,
      src: "/media/videos/pages/booking-talent-desktop-veed.mp4",
      title: "We help communities",
      titleColor: "#FFD058",
      actionTags: ["Local", "Creative", "Impactful"],
      challengeButtons: ["Activate unused spaces", "Engage families", "Build creative capacity", "Strengthen neighborhood identity"],
      description: "Partner with us to transform communities through creative spaces and local talent development."
    }
  ];

  // Second slider video data
  const partnershipVideos2 = [
    {
      id: 1,
      src: "/media/videos/pages/media-partnerships-veed.mp4",
      title: "What We Bring",
      titleColor: "#7ED321",
      actionTags: ["Model", "Experience", "Support"],
      challengeButtons: ["A proven activation + creative-capacity model", "High-energy, entertainment-first programs", "Experience partnering with schools & CBOs", "A mission centered on belonging and opportunity"],
      description: "Discover our proven approach and extensive experience in building sustainable entertainment ecosystems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="partner-hero-section">
        <HeroSectionv1 
          videoSrc="/media/videos/pages/celebrating-diverse-talents-together-veed.mp4"
          title="<span style='color: #7ED321'>PARTNER WITH US</span>"
          subHeading="Let's Bring Entertainment and Creative Capacity Into More Communities."
          showActionButtons={false}
          showBottomItems={true}
          overlayColor="bg-black/70"
          height="100%"
        />
      </div>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      
      {/* Video Section */}
      <section>
        <VideoSliderFundPartner 
          videos={partnershipVideos}
          height="70vh"
        />
      </section>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Second Video Section */}
      <section>
        <VideoSliderFundPartner 
          videos={partnershipVideos2}
          height="70vh"
        />
      </section>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      {/* Mission Section */}
      <section className="mission-section-bg footer-bg">
        <div className="container mx-auto ">
          <p className="our-promise">
            <span>• Our Promise</span>
          </p>
          <h2 className="mission-title">
            This is how entertainment deserts<br />begin to disappear.
          </h2>
          
          <p className="mission-subtitle hide-mobile">
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