import React from 'react';
import { motion } from 'framer-motion';
import bgBlock from '../assets/bgBlock.png';
import leftBlock from '../assets/leftBlock.png';
import rightBlock from '../assets/rightBlock.png';
import outlineBlock from '../assets/outlineBlock.png';
import profileImage from '../assets/profileImage.png';

const SlidingBlocks = () => {
    return (
      <div className="relative flex items-center justify-center w-[300px] md:w-[400px] md:mx-16 h-auto mx-auto">
        {/* Background Block */}
        <motion.img
          src={bgBlock}
          alt="Background Block"
          className="relative w-full h-auto"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1 }}

        />
  
        {/* Left Block */}
        <motion.img
          src={leftBlock}
          alt="Left Block"
          className="absolute w-full h-auto"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
  
        {/* Right Block */}
        <motion.img
          src={rightBlock}
          alt="Right Block"
          className="absolute w-full h-auto z-[1]"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
  
        {/* Outline Block */}
        <motion.img
          src={outlineBlock}
          alt="Outline Block"
          className="absolute w-full h-auto"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
        />
  
        {/* Profile Image */}
        <motion.img
          src={profileImage}
          alt="Profile"
          className="absolute w-full h-auto"
          initial={{ y: '10%', scale: 1, opacity: 0 }}
          animate={{ y: '0%', scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    );
  };

export default SlidingBlocks;
