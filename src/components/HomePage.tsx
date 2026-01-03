import './Button.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import VideoSlider from './VideoSlider';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  // Client logos data
  const clientLogos = [
    { id: 1, src: "/media/images/clients/afi.png", alt: "AFI" },
    { id: 2, src: "/media/images/clients/baltimore.png", alt: "Baltimore" },
    { id: 3, src: "/media/images/clients/cartoon-network.png", alt: "Cartoon Network" },
    { id: 4, src: "/media/images/clients/cnn.png", alt: "CNN" },
    { id: 5, src: "/media/images/clients/felix.png", alt: "Felix" },
    { id: 6, src: "/media/images/clients/nassau.png", alt: "Nassau" },
    { id: 7, src: "/media/images/clients/nyc.png", alt: "NYC" },
    { id: 8, src: "/media/images/clients/nyt-1.png", alt: "New York Times" },
    { id: 9, src: "/media/images/clients/peconic.png", alt: "Peconic" },
    { id: 10, src: "/media/images/clients/suffolk.png", alt: "Suffolk" },
    { id: 11, src: "/media/images/clients/tribeca.png", alt: "Tribeca" }
  ];

  // Sample video data - you can replace with actual video files
  const sliderVideos = [
    {
      id: 1,
      src: "/media/videos/hero/celebrating-diverse-talents-together-veed.mp4",
      title: "DISTRIBUTION CHANNEL FOR PREMIUM PROGRAMMING",
      titleColor: "#FFD058",
      description: "Distribute films and series through curated, organization-run streaming destinations beyond traditional consumer platforms.",
      
    },
    {
      id: 2,
      src: "/media/videos/hero/techrow_montage_new.mp4", 
      title: "Why It Works",
      titleColor: "#7ED321",
      description: "This isn't just entertainment — it's infrastructure for belonging, pride, and future-ready possibility.",
      
    }
  ];

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 250); // Match Swiper animation duration
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header 
        onMenuToggle={handleMenuToggle} 
        isMenuOpen={isMenuOpen} 
        isMenuClosing={isMenuClosing} 
      />

      <HeroSection 
        videoSrc="/media/videos/hero/techrow_montage_new.mp4"
        title="Let's Eradicate <span style='color: #FFD058'>Entertainment Deserts —</span> One Neighborhood at a Time."
        showActionButtons={true}
        showBottomItems={true}
        overlayColor="bg-black/70"
      />

      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Spiderman Kid Section */}
      <div className="bg-gray-100 relative spiderman-section">
        <img 
          src="/media/images/sections/spiderman-kid.jpg" 
          alt="Spiderman Kid" 
          className="w-full spiderman-image object-cover"
        />
        <div className="absolute inset-0" style={{background: 'var(--Background-Black-20, #0F0F0F33)'}}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto relative px-4  max-w-none sm:px-6 lg:px-8 lg:w-full lg:max-w-none xl:w-full 2xl:w-full">
            <div className="w-full sm:max-w-3/4 lg:max-w-5/6 xl:max-w-3/4 tablet-landscape-full-width mobile-landscape-full-width">
            <h2 className="neighborhood-text text-left">
              Neighborhoods come <span style={{color: '#FFD058'}}>alive when entertainment is close</span> to home.
            </h2>
            <p className="neighborhood-paragraph text-left mt-6 max-w-[720px]">
              We transform school and campus spaces into vibrant hubs of joy, creativity, and community.
            </p>
            </div>
            
          </div>
        </div>
      </div>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>

      {/* Video Slider Section */}
      <div className="video-slider-section">
        <VideoSlider 
          videos={sliderVideos}
          showNavigation={false}
        />
      </div>
{/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      {/* Customers and Partners Section */}
      <div className="customers-partners-bg" style={{height: '556px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="customers-partners-title">
              Customers and Partners
            </h2>
          </div>
          
          {/* Logo Slider */}
          <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={0}
              slidesPerView={7}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 12,
                },
                1536: {
                  slidesPerView: 8,
                  spaceBetween: 15,
                },
              }}
              className="client-logos-swiper"
            >
              {clientLogos.map((logo) => (
                <SwiperSlide key={logo.id}>
                  <div className="flex items-center justify-center p-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
{/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      <Footer />
    </div>
  );
};

export default HomePage;