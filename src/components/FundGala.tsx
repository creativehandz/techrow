import './Button.css';
import Header from './Header';
import Copyright from './Copyright';
import ContactForm from './ContactForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const FundGala = () => {

  // Gala image data
  const galaImages = [
    {
      id: 1,
      src: "/media/images/sections/NMSS-0971.jpg",
      title: "FORUM AND GALA",
      description: "Celebrating the power of community, creativity, and collaboration"
    },
    {
      id: 2,
      src: "/media/images/hero/gala.jpg", 
      title: "Creative Partnerships",
      description: "Building bridges between talent and opportunity"
    },
    {
      id: 3,
      src: "/media/images/hero/gala.jpg",
      title: "Community Impact",
      description: "Transforming spaces and empowering communities"
    },
    {
      id: 4,
      src: "/media/images/hero/gala.jpg",
      title: "Celebrating Success",
      description: "See the real difference we're making together"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      
      
      {/* Image Slider Section */}
      <section className="bg-black">
        <div className="w-full px-0">
         
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView:1,
                spaceBetween: 20,
              },
            }}
            className="gala-image-slider"
          >
            {galaImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative group overflow-hidden gala-slider-height">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center  p-6">
                    <h3 className="gala-hero-title mb-4">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      {/* Forum Description Section */}
      <section className="bg-black">
        <div className="container mx-auto responsive-padding">
          <div className="w-full lg:w-4/5">
            <h2 className="forum-main-title mb-8">
              TECHROW FUND'S ANNUAL FORUM AND GALA PLATFORM LEVERAGES THE POWER OF <span className="forum-highlight">DIPLOMACY</span> AND <span className="forum-highlight">TECHNOLOGY</span> TO ADDRESS THE MOST CRITICAL ISSUES <span className="forum-highlight">IMPACTING OUR YOUTH</span>.
            </h2>
            
            
          </div>
          <div className="w-full lg:w-2/5 xl:w-2/5 2xl:w-2/5 ml-auto">
            
            
            <p className="forum-description">
              TechRow Fund's Forum for Technology and Education hosts strategic partners and innovators trailblazing social impact initiatives.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gap between sections */}
      <div style={{height: '180px', backgroundColor: '#000000'}}></div>
      
      {/* Gala Gallery Section */}
      <section className="bg-black">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  mx-auto">
            <div className="group overflow-hidden">
              <img
                src="/media/images/sections/gala1.jpg"
                alt="Gala Event 1"
                className="w-full h-120 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden">
              <img
                src="/media/images/sections/gala2.jpg"
                alt="Gala Event 2"
                className="w-full h-120 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden">
              <img
                src="/media/images/sections/gala3.jpg"
                alt="Gala Event 3"
                className="w-full h-120 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden">
              <img
                src="/media/images/sections/gala4.jpg"
                alt="Gala Event 4"
                className="w-full h-120 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Mission Section */}
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

export default FundGala;