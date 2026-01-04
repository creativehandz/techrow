import './Button.css';
import Header from './Header';
import HeroSection from './HeroSection';
import VideoSlider from './VideoSlider';
import ContactForm from './ContactForm';
import Copyright from './Copyright';

const ImpactProgramWeFunded = () => {
  // Impact Programs video data
  const impactVideos = [
    {
      id: 1,
      src: "/media/videos/pages/spaces-desktop-veed.mp4",
      title: "Augmented Reality",
      titleColor: "#FFD058",
      description: "Digital magic that let young creators remix their surroundings and reimagine their world."
    },
    {
      id: 2,
      src: "/media/videos/pages/booking-talent-desktop-veed.mp4",
      title: "Local Talent Development",
      titleColor: "#7ED321",
      description: "Discover the creative capacity we've built within communities, empowering local talent and fostering artistic growth through strategic funding and support programs."
    },
    {
      id: 3,
      src: "/media/videos/pages/media-partnerships-veed.mp4",
      title: "Measurable Impact",
      titleColor: "#FF6B6B",
      description: "From workforce development to community engagement, explore the tangible results of our funded programs across diverse neighborhoods and creative initiatives."
    },
    {
      id: 4,
      src: "/media/videos/pages/spaces-desktop-veed.mp4",
      title: "Augmented Reality",
      titleColor: "#8A40CA",
      description: "Digital magic that let young creators remix their surroundings and reimagine their world."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <HeroSection 
        videoSrc="/media/videos/pages/harlem-legendary-cultural-history.mp4"
        title="Our Impact Lives in the <br />Experiences We Sparked — <br /><span style='color: #FFD058'>and the Makers We Supported.</span>"
        subHeading="Across Harlem and beyond, these programs brought <br />entertainment-centered creativity into community spaces."
        showActionButtons={false}
        showBottomItems={false}
        overlayColor="bg-black/70"
      />

      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Video Section */}
      <section>
        <VideoSlider 
          videos={impactVideos}
          height="70vh"
        />
      </section>
      
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Impact Summary Section */}
      <section className="bg-black">
        <div className="container mx-auto text-center responsive-padding">
          <h2 className="impact-heading mb-5">YOUR IMPACT</h2>
          
          <p className="impact-summary-subtitle pb-5">
            OUR PROGRAMS STRENGTHENED COMMUNITIES THROUGH:
          </p>
          {/* Impact Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mobile-left-align">
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/more-pride.png" alt="Pride icon" className="w-auto h-6" />
              <span>PRIDE</span>
            </button>
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/more-local-makers.png" alt="Connection icon" className="w-auto h-6" />
              <span>Connection</span>
            </button>
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/safety-icon.png" alt="safety icon" className="w-auto h-6" />
              <span>Safety</span>
            </button>
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/more-active-community-spaces.png" alt="Creativity makers icon" className="w-auto h-6" />
              <span>Creativity</span>
            </button>
            
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/more-opportunity.png" alt="Opportunity icon" className="w-6 h-6" />
              <span>Opportunity</span>
            </button>
          </div>
          
          
        </div>
      </section>
      
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Impact Programs Section */}
      <section className="mission-section-bg footer-bg">
        <div className="container mx-auto">
          <p className="our-promise">
            <span>• Our Impact</span>
          </p>
          <h2 className="mission-title mb-5">
            This is how entertainment deserts<br /> begin to disappear.
          </h2>
          
         
          
          <div className="mission-buttons mb-12">
            <button className="hero-action-button hero-donate-button">
              Donate
            </button>
            <button className="hero-action-button hero-partner-button">
              Partner With Us
            </button>
          </div>
          <ContactForm />
        </div>
      </section>

      <Copyright />
    </div>
  );
};

export default ImpactProgramWeFunded;