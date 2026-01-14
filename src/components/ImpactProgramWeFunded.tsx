import './Button.css';
import Header from './Header';
import HeroSection from './HeroSection';
import VideoSlider from './VideoSlider2';
import ContactForm from './ContactForm';
import Copyright from './Copyright';

const ImpactProgramWeFunded = () => {
  // Impact Programs video data
  const impactVideos = [
    {
      id: 1,
      src: "/media/videos/pages/reality.mp4",
      title: "Augmented Reality",
      titleColor: "#89E717",
      actionTags: ["See", "Explore", "Create"],
      description: "Digital magic that let young creators remix their surroundings and reimagine their world."
    },
    {
      id: 2,
      src: "/media/videos/pages/booking-talent-desktop-veed.mp4",
      title: "Virtual Reality",
      titleColor: "#FFD058",
      actionTags: ["Enter", "Imagine", "Build"],
      description: "Immersive worlds that transported creators into new realities — and let them shape their own."
    },
    {
      id: 3,
      src: "/media/videos/pages/media-partnerships-veed.mp4",
      title: "Esports",
      titleColor: "#89E717",
      actionTags: ["Play", "Compete", "Connect"],
      description: "High-energy gaming that turned community spaces into arenas of excitement, teamwork, and belonging."
    },
    {
      id: 4,
      src: "/media/videos/pages/reality.mp4",
      title: "Video Game Design",
      titleColor: "#FFD058",
      actionTags: ["Design", "Storytell", "Develop"],
      description: "Interactive storytelling where students built characters, worlds, and action."
    },
    {
      id: 5,
      src: "/media/videos/pages/reality.mp4",
      title: "Robotics",
      titleColor: "#89E717",
      actionTags: ["Think", "Engineer", "Innovate"],
      description: "Hands-on creation where imagination moved, lit up, and came alive."
    },
    {
      id: 6,
      src: "/media/videos/pages/reality.mp4",
      title: "Music & Technology",
      titleColor: "#FFD058",
      actionTags: ["Write", "Produce", "Publish"],
      description: "Beats, lyrics, and digital creativity — original tracks crafted with modern tools."
    },
    {
      id: 7,
      src: "/media/videos/pages/reality.mp4",
      title: "Professional Development",
      titleColor: "#89E717",
      actionTags: ["Train", "Inspire", "Empower"],
      description: "Helping educators bring dynamic, tech-forward experiences into community spaces."
    },
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
        height="calc(100vh - 50px)"
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
      <div style={{height: '180px', backgroundColor: '#141414'}}></div>

      {/* Impact Summary Section */}
      <section className="bg-black" style={{backgroundColor: '#141414'}}>
        <div className="container mx-auto text-center responsive-padding">
          <h2 className="impact-heading mb-5">Impact Summary</h2>
          
          <p className="impact-summary-subtitle pb-5">
            OUR PROGRAMS STRENGTHENED COMMUNITIES THROUGH:
          </p>
          
          
          
          {/* Impact Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mobile-left-align">
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/pride.svg" alt="Pride icon" className="w-auto h-6 prideicon" />
          
              <span>PRIDE</span>
            </button>
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/connection.png" alt="Connection icon" className="w-auto h-6 prideicon" />
              <span>Connection</span>
            </button>
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/safety.png" alt="safety icon" className="w-auto h-6 prideicon" />
              <span>Safety</span>
            </button>
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/creativity.png" alt="Creativity makers icon" className="w-auto h-6 prideicon" />
              <span>Creativity</span>
            </button>
            
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/opportunity.png" alt="Opportunity icon" className="w-6 h-6 prideicon" />
              <span>Opportunity</span>
            </button>
          </div>
          
          
        </div>
      </section>
      
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#141414'}}></div>

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