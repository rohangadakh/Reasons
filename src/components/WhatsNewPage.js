import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const WhatsNewPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const handleScroll = () => {
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          gsap.to(card, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: index * 0.1,
          });
        } else {
          gsap.to(card, {
            y: 50,
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMuteUnmute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-screen">
        <img
          src="https://quadcubes.com/uplu/2023/01/aroosa-jewellery-photoshoot.jpg"
          alt="What's New"
          className="w-full h-full object-cover rounded-none brightness-50"
        />
        <motion.h1 
          className="absolute inset-0 flex items-center justify-center text-4xl hero-title md:text-5xl font-bold text-white z-10"
          initial={{ y: 50, opacity: 0 }} // Initial state
          animate={{ y: 0, opacity: 1 }}   // Final state
          transition={{ duration: 1, ease: "easeOut" }} // Animation properties
        >
          What's New in Our Collection
        </motion.h1>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-opacity-50 flex items-center justify-center z-20">
          <p className="text-lg hero-text text-white">
            Explore the latest arrivals and exclusive designs.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full mb-4 p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Card 1 */}
        <div className="bg-white border border-gray-300 p-6 mt-4 rounded-3xl w-full md:w-1/3 card opacity-0 transform translate-y-8 scale-90 mb-4 flex-grow">
          <div className="relative h-72">
            <img
              src="https://i.pinimg.com/564x/55/93/44/559344712a4dde584e12c34461462da4.jpg"
              alt="Latest Trends"
              className="rounded-3xl mb-4 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          </div>
          <h3 className="text-2xl font-semibold mt-2 mb-2 hero-title">
            Latest Trends
          </h3>
          <p
            className="text-gray-600 text-sm"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Discover the newest trends in high jewelry and fashion, exclusively
            available in our latest collection.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-300 p-6 rounded-3xl w-full md:w-1/3 card opacity-0 transform translate-y-8 scale-90 mb-4 flex-grow">
          <div className="relative h-72">
            <img
              src="https://i.pinimg.com/564x/c7/d1/d2/c7d1d2b647a03a23fa1833f89fc90b14.jpg"
              alt="New Arrivals"
              className="rounded-3xl mb-4 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          </div>
          <h3 className="text-2xl font-semibold mt-2 mb-2 hero-title">
            New Arrivals
          </h3>
          <p
            className="text-gray-600 text-sm"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Browse our newest arrivals, featuring timeless designs and
            innovative craftsmanship.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-300 p-6 rounded-3xl w-full md:w-1/3 card opacity-0 transform translate-y-8 scale-90 mb-4 flex-grow">
          <div className="relative h-72">
            <img
              src="https://i.pinimg.com/564x/63/04/b5/6304b54bf3cd996df473211fdef38a25.jpg"
              alt="Exclusive Designs"
              className="rounded-3xl mb-4 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          </div>
          <h3 className="text-2xl font-semibold mt-2 mb-2 hero-title">
            Exclusive Designs
          </h3>
          <p
            className="text-gray-600 text-sm"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Experience the luxury of exclusivity with designs only available at
            our boutique.
          </p>
        </div>
      </div>

      {/* Improved Text Section */}
      <div className="w-full px-8 md:px-20 mb-8">
        <p
          className="text-lg text-justify text-gray-700 leading-6"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Our collection brings together the finest materials and intricate craftsmanship to create pieces that transcend time and trends. Discover the latest arrivals and exclusive designs that embody the
          spirit of luxury, elegance, and sophistication.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-screen mb-4">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/assets/video5.mp4"
          muted={isMuted}
          autoPlay
          loop
        >
          Your browser does not support the video tag.
        </video>
        {/* Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button onClick={togglePlayPause} className="text-white">
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
          <button onClick={toggleMuteUnmute} className="text-white">
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsNewPage;
