import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  return (
    <div className="relative h-screen overflow-hidden p-10">
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="./assets/v2/Hero.mp4"
          loop
          
        />
        <div className="absolute inset-0 "></div>
      </motion.div>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInVariants}
          className="text-lg mt-96 text-white text-center font-bold max-w-2xl mb-6"
        >
          The Strength of Elegance - Explore Our Western Collection{" "}
        </motion.p>
      </motion.div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={handlePlayPause}
          className="p-3 rounded-full focus:outline-none hover:bg-opacity-90 transition duration-300"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
