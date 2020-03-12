import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { fadeInDown } from '../animations/header.animations';

const Header = () => (
  <motion.nav
    className="px-24 py-12 bg-transparent flex justify-between fixed w-screen z-40"
    animate="animate"
    initial="initial"
  >
    <motion.div
      variants={fadeInDown}
      className="absolute inset-y-0 flex justify-center items-center px-8"
      style={{ background: '#520a76' }}
    >
      <Link
        to="/"
        className="text-4xl tracking-normal font-semibold hover:text-red-500 transition duration-100 ease-in-out text-white my-0"
      >
        E3
      </Link>
    </motion.div>
  </motion.nav>
);

export default Header;
