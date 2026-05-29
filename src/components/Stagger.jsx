import { motion } from "framer-motion";

// --- Shared animation "variants" -------------------------------------------
// The container doesn't move itself - it just tells its children to animate
// one after another (staggerChildren), creating that nice cascading effect.
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // gap between each child animating in
      delayChildren: 0.05,
    },
  },
};

// Each child fades in and slides up.
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Wrap a group (e.g. a grid) in <Stagger> ...
export function Stagger({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // animate once, when 20% visible
    >
      {children}
    </motion.div>
  );
}

// ... and wrap each item inside it in <StaggerItem>.
// It inherits the "hidden"/"show" states from the parent automatically.
export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
