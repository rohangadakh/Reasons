import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2,
      } 
    },
  }; 

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Slightly faster stagger for smoother animation
      },
    },
  };

  const backgroundZoom = {
    hidden: { scale: 1.3 },
    visible: {
      scale: 1,
      transition: {
        duration: 10,  // Faster background zoom effect
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Faster Zoom */}
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={backgroundZoom}
      >
        <img
          className="w-full h-full object-cover"
          src="//chokhahaar.com/cdn/shop/products/CopyofCopyofdefaultbasicproductimagesizeforwebsite_2.jpg?v=1616052404&width=3840"
          alt="Jewelry"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"  // Adjust position higher up
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          variants={fadeInVariants}
          className="text-4xl mt-96 sm:text-5xl md:text-6xl hero-title font-bold text-white text-center max-w-3xl leading-tight mb-4"
        >
          Timeless Elegance in Silver
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInVariants}
          className="text-lg text-white text-center max-w-2xl font-light mb-6"
        >
          Experience the beauty of handcrafted silver jewelry, designed to last a lifetime.
        </motion.p>
        
        {/* Button with Enhanced Hover Effects */}
        <motion.button
          variants={fadeInVariants}
          className="px-8 py-3 border border-white text-white font-semibold text-lg shadow-lg hover:bg-white hover:text-white hover:bg-opacity-20 transition duration-300 transform hover:scale-110 hover:rotate-2 hover:-translate-y-2 focus:outline-none"
          whileHover={{ 
            y: -10, 
            transition: { duration: 0.3 }, 
          }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Collection
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
