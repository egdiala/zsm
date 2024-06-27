export const routeVariants = {
  initial: {
    opacity: 0,
    y: -10
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const homeCardVariants = {
  initial: {
    opacity: 0,
    y: -10
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};