import './Button.css';
import Header from './Header';
import HeroSection from './HeroSection';
import TeamMember from './TeamMember';
import VideoSlider from './VideoSlider';
import ContactForm from './ContactForm';
import Copyright from './Copyright';

const AboutUs = () => {
  // About Us video data
  const aboutUsVideos = [
    {
      id: 1,
      src: "/media/videos/pages/harlem-legendary-cultural-history.mp4",
      title: "Who We Are",
      titleColor: "#FFD058",
      description: "TechRow Fund transforms underused public spaces into vibrant entertainment hubsand builds the creative capacity inside communities to power them. We work where talent already lives — in the neighborhoods that shaped culture."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <HeroSection 
        videoSrc="/media/videos/pages/harlem-legendary-cultural-history.mp4"
        title="Born in <span style='color: #FFD058'>Harlem —</span> Steps From the Apollo."
        subHeading="A place that entertained the world. A history shaped by legendary talent. A neighborhood built on creativity, pride, and possibility."
        showActionButtons={false}
        showBottomItems={false}
        overlayColor="bg-black/70"
      />

      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Mission Section */}
      <section className="team-section-bg">
        <div className="container mx-auto team-container-border">
          <div className="mx-auto team-container-border" >
            <h2 className="team-heading mb-16">
              Meet our team
            </h2>
            
            {/* Team Members Grid */}
            <div className="space-y-16">
              {/* Travis Feldler - Text Left, Image Right */}
              <TeamMember 
                imageSrc="/media/images/sections/travis.png"
                name="TRAVIS FELDLER"
                position="Founder"
                description="Travis Feldler is Founder and CEO of TechRow Fund, where he leads a national effort to transform underused public spaces into vibrant entertainment hubs powered by local creators, immersive technology, and community engagement. His work spans workforce development, and community-led innovation to build sustainable local entertainment economies."
                imageOnLeft={false}
              />

              {/* Rudy Blanco - Image Left, Text Right */}
              <TeamMember 
                imageSrc="/media/images/sections/rudy.png"
                name="RUDY BLANCO"
                position="Executive Director"
                description="Rudy Blanco is Program Manager at TechRow Fund, designing youth and adult programs at the intersection of education, entertainment, and digital culture to expand access to technology and creative careers."
                imageOnLeft={true}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      
      {/* Video Section */}
      <section>
        <VideoSlider 
          videos={aboutUsVideos}
          height="70vh"
          showNavigation={false}
        />
      </section>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      {/* Mission Section */}
      <section className="mission-section-bg footer-bg">
        <div className="container mx-auto ">
          <h2 className="mission-title">
            Mission
          </h2>
          
          <p className="mission-subtitle">
            Activate spaces. Amplify talent. Build local creative power.
          </p>
          
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

export default AboutUs;