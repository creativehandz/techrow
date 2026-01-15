import MuxVideo from "@mux/mux-video-react";
import React from "react";
import "./Button.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  getMuxPlaybackId,
  getMuxPosterUrl,
  muxBackgroundVideoStyle,
} from "../utils/muxPlayback";
import { isSlowConnection } from "../utils/videoOptimization";

interface VideoSlide2 {
  id: number;
  src: string;
  playbackId?: string;
  title: string;
  titleColor?: string;
  subtitle?: string;
  challengeButtons?: string[];
  actionTags?: string[];
  exploreButton?: string;
  description: string;
  additionalText?: string;
}

interface VideoSlider2Props {
  videos: VideoSlide2[];
  height?: string;
  requireMux?: boolean;
}

const VideoSlider2 = ({ videos, requireMux = false }: VideoSlider2Props) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const muxRef = React.useRef<HTMLVideoElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const backgroundVideo = videos?.[0];
  const backgroundVideoSrc = backgroundVideo?.src;
  const muxPlaybackId =
    backgroundVideo?.playbackId ?? getMuxPlaybackId(backgroundVideoSrc);
  const backgroundSrc =
    backgroundVideoSrc || "/media/videos/hero/techrow_montage_new-v1.mp4";
  const usesMux = Boolean(muxPlaybackId);
  const allowFallback = !requireMux;
  const placeholderPoster =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDAwMDAiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzMzMzMzMyIgeD0iMzAiIHk9IjMwIj4KPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgo8L3N2Zz4KPC9zdmc+";
  const muxPosterUrl = getMuxPosterUrl(muxPlaybackId) ?? placeholderPoster;
  const [showPoster, setShowPoster] = React.useState(true);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Auto-play for both desktop and mobile with better mobile optimization
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = usesMux
          ? muxRef.current
          : allowFallback
          ? videoRef.current
          : null;
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => console.log("Autoplay prevented"));
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 } // Lower threshold for better mobile experience
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [allowFallback, usesMux, muxPlaybackId]);

  React.useEffect(() => {
    if (requireMux && backgroundVideoSrc && !muxPlaybackId) {
      console.warn(
        "Mux playback ID missing for slider video:",
        backgroundVideoSrc
      );
    }
  }, [requireMux, backgroundVideoSrc, muxPlaybackId]);

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="bg-black">
      <div className="w-full mx-auto relative">
        <div
          className="relative overflow-hidden video-content-height"
          ref={containerRef}
        >
          {/* Static Background Video */}
          <div className="absolute inset-0">
            {muxPlaybackId ? (
              <>
                <MuxVideo
                  ref={muxRef}
                  className="w-full h-full object-cover"
                  style={muxBackgroundVideoStyle}
                  playbackId={muxPlaybackId}
                  poster={muxPosterUrl}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onCanPlay={() => {
                    muxRef.current?.play().catch(() => {});
                  }}
                  onLoadStart={() => {
                    setShowPoster(true);
                    const player = muxRef.current;
                    if (!player) return;
                    if (isSlowConnection()) {
                      player.style.filter = "contrast(0.9)";
                    }
                  }}
                  onLoadedData={() => setShowPoster(false)}
                  onError={() => {
                    console.log("VideoSlider2 video failed to load");
                    if (muxRef.current) {
                      muxRef.current.style.display = "none";
                    }
                  }}
                />
                <img
                  src={muxPosterUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: showPoster ? 1 : 0, pointerEvents: "none" }}
                />
              </>
            ) : allowFallback ? (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                webkit-playsinline="true"
                preload="metadata"
                poster={placeholderPoster}
                onCanPlay={(e) => {
                  e.currentTarget.play().catch(() => {});
                }}
                onLoadStart={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                  // Mobile optimization: reduce quality if slow connection
                  const video = e.currentTarget;
                  if (isSlowConnection()) {
                    video.style.filter = "contrast(0.9)";
                  }
                }}
                onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                  console.log("VideoSlider2 video failed to load");
                  e.currentTarget.style.display = "none";
                }}
              >
                <source src={backgroundSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}
          </div>

          {/* Text Content Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={false}
            allowTouchMove={true}
            allowSlideNext={true}
            allowSlidePrev={true}
            touchStartPreventDefault={false}
            simulateTouch={true}
            grabCursor={true}
            touchRatio={1}
            threshold={5}
            longSwipes={true}
            longSwipesRatio={0.5}
            longSwipesMs={300}
            followFinger={true}
            speed={1000}
            effect="slide"
            className="video-swiper h-full relative z-10"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative h-full">
                  {/* Action Buttons - Positioned at top center, bottom on mobile */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 md:top-10 md:left-1/2 md:transform md:-translate-x-1/2">
                    <div className="hidden md:flex space-x-4">
                      {video.actionTags &&
                        video.actionTags.map((tag, index) => (
                          <button key={index} className="video-action-tag">
                            {tag}
                          </button>
                        ))}
                    </div>
                  </div>

                  {/* Mobile Action Tags - Bottom */}
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 md:hidden"></div>

                  {/* Mobile Title Section - Positioned above black overlay */}
                  <div className="absolute bottom-0 left-0 right-0 md:hidden z-30">
                    <div className="w-full text-center px-4 pb-2 mb-2">
                      <h3
                        className="video-title text-2xl mb-2"
                        style={{ color: video.titleColor || "#FFD058" }}
                      >
                        {video.title}
                      </h3>
                    </div>

                    {/* Video Overlay Info for Mobile */}
                    <div
                      className="p-4"
                      style={{
                        background: "var(--Background-Black-40, #0F0F0F66)",
                      }}
                    >
                      {/* Mobile Layout - Action tags, description and challenge buttons in overlay */}
                      <div className="text-center">
                        {/* Action tags */}
                        <div className="flex justify-center space-x-4 mb-4">
                          {video.actionTags &&
                            video.actionTags.map((tag, index) => (
                              <button key={index} className="video-action-tag">
                                {tag}
                              </button>
                            ))}
                        </div>
                        {/* Subtitle - appears after action tags in mobile */}
                        {video.subtitle && (
                          <p className="video-description text-lg text-white mb-4">
                            {video.subtitle}
                          </p>
                        )}
                        {/* Description */}
                        <h5 className="video-description text-sm leading-relaxed mb-4 font-semibold">
                          {video.description}
                        </h5>
                        {/* Additional Text */}
                        {video.additionalText && (
                          <p className="video-additional-text text-sm leading-relaxed mb-4">
                            {video.additionalText}
                          </p>
                        )}
                        {/* Explore Button */}
                        {video.exploreButton && (
                          <div className="flex justify-center mb-4">
                            <button className="explore-programs-button">
                              {video.exploreButton}
                            </button>
                          </div>
                        )}
                        {/* Challenge buttons */}
                        {video.challengeButtons && (
                          <div className="flex flex-col gap-3 w-full">
                            {video.challengeButtons.map((button, index) => (
                              <div key={index} className="flex justify-start">
                                <div className="challenge-button text-left">
                                  {button}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Video Overlay Info - Desktop Only */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 md:p-8 hidden md:block"
                    style={{
                      background: "var(--Background-Black-40, #0F0F0F66)",
                    }}
                  >
                    {/* Desktop Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Left side - Title */}
                      <div>
                        <h3
                          className="video-title"
                          style={{ color: video.titleColor || "#FFD058" }}
                        >
                          {video.title}
                        </h3>
                        {video.subtitle && (
                          <p className="video-description mt-4 text-white">
                            {video.subtitle}
                          </p>
                        )}
                        {video.challengeButtons && (
                          <div className="flex flex-col gap-4 mt-6 max-w-2xl">
                            {/* First row - 1 button */}
                            <div className="flex justify-start">
                              <div className="challenge-button w-full max-w-lg">
                                {video.challengeButtons[0]}
                              </div>
                            </div>
                            {/* Second row - 2 buttons */}
                            <div className="flex gap-4 justify-start">
                              <div className="challenge-button flex-1 max-w-xs">
                                {video.challengeButtons[1]}
                              </div>
                              <div className="challenge-button flex-1 max-w-xs">
                                {video.challengeButtons[2]}
                              </div>
                            </div>
                            {/* Third row - 1 button */}
                            <div className="flex justify-start">
                              <div className="challenge-button w-full max-w-lg">
                                {video.challengeButtons[3]}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right side - Description */}
                      <div className="space-y-4">
                        <h5 className="video-description font-semibold">
                          {video.description}
                        </h5>
                        {/* Additional Text */}
                        {video.additionalText && (
                          <p className="video-additional-text">
                            {video.additionalText}
                          </p>
                        )}
                        {/* Explore Button */}
                        {video.exploreButton && (
                          <div className="flex justify-start">
                            <button className="explore-programs-button">
                              {video.exploreButton}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider2;
