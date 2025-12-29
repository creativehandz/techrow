import './Button.css';
import Header from './Header';
import HeroSection from './HeroSection';
import ContactForm from './ContactForm';
import Copyright from './Copyright';

const Donate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <HeroSection 
        videoSrc="/media/videos/pages/harlem-legendary-cultural-history.mp4"
        title="Help Us Bring Entertainment and Creative Opportunity <span style='color: #FFD058'>to Neighborhoods That Need It Most.</span> "
        subHeading="Your support activates spaces, powers creativity. and fuels the makers who bring entertainment to life."
        showActionButtons={false}
        showBottomItems={false}
        overlayColor="bg-black/70"
      />
      
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      
      {/* Donation Options */}
      <section className="bg-black">
        <div className="container mx-auto text-center">
          <h2 className="impact-heading mb-12">YOUR IMPACT</h2>
          
          {/* Impact Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="impact-button impact-button-pride">
              <img src="/media/images/icons/more-pride.png" alt="Pride icon" className="w-auto h-6" />
              <span>MORE PRIDE</span>
            </button>
            <button className="impact-button">
              <img src="/media/images/icons/more-opportunity.png" alt="Opportunity icon" className="w-auto h-6" />
              <span>MORE OPPORTUNITY</span>
            </button>
            <button className="impact-button">
              <img src="/media/images/icons/more-local-makers.png" alt="Local makers icon" className="w-auto h-6" />
              <span>MORE LOCAL MAKERS</span>
            </button>
            <div className="w-full"></div>
            <button className="impact-button">
              <img src="/media/images/icons/more-active-community-spaces.png" alt="Community spaces icon" className="w-6 h-6" />
              <span>MORE ACTIVE COMMUNITY SPACES</span>
            </button>
          </div>
          
          {/* Donate Button */}
          <div className="flex justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-15 rounded-lg transition-colors duration-300 text-xl">
              Donate
            </button>
          </div>
        </div>
      </section>
      
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      
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