export const easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const fadeInLeft = {
  initial: {
    x: 10,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
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

export const fadeInRight = {
  initial: {
    x: -10,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};
