export const easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.85,
      duration: 1,
      ease: easing,
    },
  },
};

export const panZoom = {
  initial: {
    x: 30,
    scale: 1.4,
    transition: { duration: 1.25, ease: easing },
  },
  animate: {
    x: 0,
    scale: 1,
    transition: {
      duration: 1.25,
      ease: easing,
      delay: 0.25,
    },
  },
};

export const swipeTransition = {
  initial: {
    x: '-100%',
    transition: { duration: 1.25, ease: easing },
  },
  animate: {
    x: '100%',
    transition: {
      duration: 1.25,
      ease: easing,
      delay: -1,
    },
  },
};
