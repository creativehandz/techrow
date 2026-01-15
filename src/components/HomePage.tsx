import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Button.css";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import VideoSlider from "./VideoSlider";
import VideoSlider2 from "./VideoSlider2";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  // Client logos data
  const clientLogos = [
    { id: 1, src: "/media/images/clients/afi.png", alt: "AFI" },
    { id: 2, src: "/media/images/clients/baltimore.png", alt: "Baltimore" },
    {
      id: 3,
      src: "/media/images/clients/cartoon-network.png",
      alt: "Cartoon Network",
    },
    { id: 4, src: "/media/images/clients/cnn.png", alt: "CNN" },
    { id: 5, src: "/media/images/clients/felix.png", alt: "Felix" },
    { id: 6, src: "/media/images/clients/nassau.png", alt: "Nassau" },
    { id: 7, src: "/media/images/clients/nyc.png", alt: "NYC" },
    { id: 8, src: "/media/images/clients/nyt-1.png", alt: "New York Times" },
    { id: 9, src: "/media/images/clients/peconic.png", alt: "Peconic" },
    { id: 10, src: "/media/images/clients/suffolk.png", alt: "Suffolk" },
    { id: 11, src: "/media/images/clients/tribeca.png", alt: "Tribeca" },
  ];

  // Sample video data - you can replace with actual video files
  const sliderVideos = [
    {
      id: 1,
      src: "/media/videos/pages/thechallagne.mp4",
      title: "Why Entertainment Matters",
      titleColor: "#FFD058",
      actionTags: ["Gather", "Connect", "Thrive"],
      description:
        "When entertainment returns to neighborhoods, families come together, safety improves, and communities feel alive again.",
    },
    {
      id: 2,
      src: "/media/videos/hero/techrow_montage_new-v1.mp4",
      title: "The Challenge",
      titleColor: "#89E717",
      actionTags: ["Access", "Equity", "Opportunity"],
      challengeButtons: [
        "Local screens and venues vanish",
        "Commutes grow longer",
        "Public spaces sit unused",
        "Creative pathways skip entire communities",
      ],
      challengeButtonsPosition: "left" as const,
      description:
        "Across the country, neighborhoods are becoming entertainment deserts",
      additionalText: "It's not a lack of creativity. It's a lack of access.",
    },
    {
      id: 3,
      src: "/media/videos/hero/techrow_montage_new-v1.mp4",
      title: "Immersive Experiences",
      subtitle: "Entertainment that starts from within the neighborhood.",
      titleColor: "#FFD058",
      actionTags: ["Experience", "Celebrate", "Belong"],
      description:
        "We activate gyms, theaters, and auditoriums with performances, films, gaming, esports, cultural nights, and community events.",
    },
    {
      id: 4,
      src: "/media/videos/hero/techrow_montage_new-v1.mp4",
      title: "Maker Experiences",
      titleColor: "#89E717",
      subtitle:
        "Makers who bring entertainment to life — and build futures in the process.",
      actionTags: ["Learn", "Create", "Lead"],
      description:
        "We build community-powered creative capacity through hands-on skills in sound, lighting, stagecraft, media, streaming, and emerging creative technologies.",
    },
  ];

  // Second slider video data
  const sliderVideos2 = [
    {
      id: 1,
      src: "/media/videos/pages/our-vision.mp4",
      title: "Why It Works",
      titleColor: "#7ED321",
      actionTags: ["Engage", "Build", "Transform"],
      description:
        "This isn’t just entertainment — it’s infrastructure for belonging, pride, and future-ready possibility.",
    },
    {
      id: 2,
      src: "/media/videos/hero/techrow_montage_new-v1.mp4",
      title: "Our Vision",
      titleColor: "#FFD058",
      actionTags: ["Imagine", "Activate", "Sustain"],
      description:
        "A world where every neighborhood can create, host and own their entertainment.",
    },
    {
      id: 3,
      src: "/media/videos/hero/techrow_montage_new-v1.mp4",
      title: "Programs We Funded",
      titleColor: "#89E717",
      actionTags: ["Activate", "Engage", "Empower"],
      description:
        "From VR worlds to robotics to music and digital creation, we supported programs that sparked imagination and brought entertainment-centered creativity into community spaces.",
      exploreButton: "Explore Programs We Funded",
    },
    {
      id: 4,
      src: "/media/videos/hero/techrow_montage_new-v1.mp4",
      title: "10,000+ people reached",
      titleColor: "#FFD058",
      actionTags: ["Joy", "Gather", "Celebrate"],
      description:
        "Through joyful, community-centered experiences that bring neighborhoods together.",
    },
    {
      id: 5,
      src: "/media/videos/hero/techrow_montage_new-v1.mp4",
      title: "50+ schools and campuses activated",
      titleColor: "#89E717",
      actionTags: ["Creativity", "Imagine", "Create"],
      description:
        "With immersive entertainment and creative-tech programs that spark imagination and possibility.",
    },
    {
      id: 6,
      src: "/media/videos/hero/techrow_montage_new-v1.mp4",
      title: "150+ local makers engaged",
      titleColor: "#FFD058",
      actionTags: ["Community", "Build", "Empower"],
      description:
        "Powering neighborhood events and strengthening local creative capacity.",
    },
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
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <Header
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
        isMenuClosing={isMenuClosing}
      />

      <HeroSection
        videoSrc="/media/videos/hero/techrow_montage_new-v1.mp4"
        requireMux={true}
        title="Let's Eradicate <span style='color: #FFD058'>Entertainment Deserts —</span> One Neighborhood at a Time."
        showActionButtons={true}
        showBottomItems={true}
        overlayColor="bg-black/60"
      />

      {/* Gap between sections */}
      <div style={{ height: "180px", backgroundColor: "#000000" }}></div>

      {/* Spiderman Kid Section */}
      <div className="bg-gray-100 relative spiderman-section">
        <img
          src="/media/images/sections/spiderman-kid-v1.jpg"
          alt="Spiderman Kid"
          className="w-full spiderman-image object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "#0f0f0f5e" }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto relative px-4  max-w-none sm:px-6 lg:px-8 lg:w-full lg:max-w-none xl:w-full 2xl:w-full">
            <div className="w-full sm:max-w-3/4 lg:max-w-5/6 xl:max-w-3/4 tablet-landscape-full-width mobile-landscape-full-width">
              <h2 className="neighborhood-text text-left">
                Neighborhoods come{" "}
                <span style={{ color: "#FFD058" }}>
                  alive when entertainment is close
                </span>{" "}
                to home.
              </h2>
              <p className="neighborhood-paragraph text-left mt-6 max-w-[720px]">
                We transform school and campus spaces into vibrant hubs of joy,
                creativity, and community.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Gap between sections */}
      <div style={{ height: "180px", backgroundColor: "#000000" }}></div>

      {/* Video Slider Section */}
      <div className="video-slider-section">
        <VideoSlider videos={sliderVideos} requireMux={true} />
      </div>
      {/* Gap between sections */}
      <div style={{ height: "180px", backgroundColor: "#000000" }}></div>

      {/* Second Video Slider Section */}
      <div className="video-slider-section">
        <VideoSlider2 videos={sliderVideos2} requireMux={true} />
      </div>
      {/* Gap between sections */}
      <div style={{ height: "180px", backgroundColor: "#000000" }}></div>
      {/* Customers and Partners Section */}
      <div
        className="customers-partners-bg"
        style={{
          height: "556px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="customers-partners-title">Customers and Partners</h2>
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
                    className={`max-w-full h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                      logo.alt === "Cartoon Network"
                        ? "filter-none"
                        : "filter brightness-0 invert"
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Gap between sections */}
      <div style={{ height: "180px", backgroundColor: "#000000" }}></div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default HomePage;
