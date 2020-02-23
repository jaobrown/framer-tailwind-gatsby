import React from 'react';
import { AnimatePresence } from 'framer-motion';

const AnimatePresenceWrapper = ({ children }) => {
  return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;
};

export default AnimatePresenceWrapper;
