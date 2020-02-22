import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import {
  fadeInLeft,
  fadeInRight,
  stagger,
} from '../animations/header.animations';

const Header = () => {
  let currentRoute = '';
  if (typeof window !== 'undefined') {
    currentRoute = window.location.pathname;
  } else {
    currentRoute = '';
  }
  return (
    <motion.nav
      className="px-10 py-12 bg-transparent flex justify-between fixed w-screen z-10"
      animate="animate"
      initial="initial"
    >
      <motion.div variants={fadeInRight}>
        <Link
          to="/"
          className="text-3xl tracking-normal font-semibold hover:text-red-500 transition duration-100 ease-in-out"
        >
          virtex
        </Link>
      </motion.div>
      <div className="flex items-center">
        <Link
          to={currentRoute.includes('contact') ? '/' : '/contact/'}
          className="mr-4 hover:text-red-500 transition duration-100 ease-in-out"
        >
          {currentRoute.includes('contact') ? 'Home' : 'Contact us'}
        </Link>
        <motion.span
          className="flex flex-col justify-between items-end h-6 w-8"
          variants={stagger}
        >
          <motion.span
            variants={fadeInLeft}
            className="border border-gray-700 w-full h-1"
          />
          <motion.span
            variants={fadeInLeft}
            className="border border-gray-700 w-2/3 h-1"
          />
          <motion.span
            variants={fadeInLeft}
            className="border border-gray-700 w-1/3 h-1"
          />
        </motion.span>
      </div>
    </motion.nav>
  );
};

export default Header;
