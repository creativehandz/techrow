import './Button.css';
import Header from './Header';
import HeroSection from './HeroSection';
import TeamMember from './TeamMember';
import VideoSliderAboutUs from './VideoSliderAboutUs';
import ContactForm from './ContactForm';
import Copyright from './Copyright';

const AboutUs = () => {
  // About Us video data
  const aboutUsVideos = [
    {
      id: 1,
      src: "/media/videos/pages/HomVid2Final.mp4",
      title: "Who We Are",
      titleColor: "#FFD058",
      actionTags: ["Activate", "Engage", "Empower"],
      description: "TechRow Fund transforms underused public spaces into vibrant entertainment hubsand builds the creative capacity inside communities to power them. We work where talent already lives — in the neighborhoods that shaped culture."
    },
    {
  id: 2,
  src: "/media/videos/pages/spaces-desktop-veed.mp4", 
  title: "The Challenge",
  titleColor: "#7ED321",
  actionTags: ["Access", "Equity", "Opportunity"],
  description: "Across the country, neighborhoods face:",
  subtitle: "Communities Aren't Losing Creativity —  They're Losing Access.",
  subtitle2: "Empty spaces lead to empty evenings — and fading community life.",
  challengeButtons: [
    "Fewer local venues",
    "Darkened screens", 
    "Unused public spaces after 3 PM",
    "Creative pathways that rarely reach the block"
  ]
},
    {
      id: 3,
      src: "/media/videos/pages/spaces-desktop-veed.mp4",
      title: "Why It Matters",
      titleColor: "#FFD058",
      actionTags: ["Belong", "Engage", "Flourish"],
      description: "Entertainment is more than a show — it’s how communities gather, connect, and grow. Activated spaces create:",
      subtitle: "When spaces open, people show up.",
      subtitle2: "When makers rise, neighborhoods rise with them.",
      challengeButtons: [
    "Safety",
    "Belonging", 
    "Shared moments",
    "New opportunities"
  ],
    },
    {
      id: 4,
      src: "/media/videos/pages/listing-talent-veed.mp4",
      title: "Our Vision",
      titleColor: "#7ED321",
      actionTags: ["Imagine", "Activate", "Sustain"],
      description: "A future where every neighborhood has:",
      subtitle: "When spaces open, Communities shouldnt wait for entertainment. They should create it, host it, and own it.",
      challengeButtons: [
    "Entertainment close to home",
    "Creative-tech pathways", 
    "Active community spaces",
    "Local makers powering local shows"
  ],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <HeroSection 
        videoSrc="/media/videos/pages/harlem_s-legendary-cultural-history-v1.mp4"
        title="Born in <span style='color: #FFD058'>Harlem — <br /></span> Steps From the Apollo."
        subHeading="A place that entertained the world. <br />A history shaped by legendary talent. <br />A neighborhood built on creativity, pride, and possibility."
        showActionButtons={false}
        showBottomItems={false}
        overlayColor="bg-black/70"
      />

      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Mission Section */}
      <section className="team-section-bg responsive-padding">
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
                linkedinUrl="https://www.linkedin.com/in/travis-feldler-38636727/"
              />

              {/* Rudy Blanco - Image Left, Text Right */}
              <TeamMember 
                imageSrc="/media/images/sections/rudy.png"
                name="RUDY BLANCO"
                position="Program Manager"
                description="Rudy Blanco is Program Manager at TechRow Fund, designing youth and adult programs at the intersection of education, entertainment, and digital culture to expand access to technology and creative careers."
                imageOnLeft={true}
                linkedinUrl="https://www.linkedin.com/in/rudyblanco"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      
      {/* Video Section */}
      <section>
        <VideoSliderAboutUs 
          videos={aboutUsVideos}
          height="800px"
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