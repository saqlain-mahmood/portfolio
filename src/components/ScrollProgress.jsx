import { motion, useScroll, useSpring } from "framer-motion";

// A thin gradient bar across the very top that fills as you scroll the page.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // useSpring smooths the motion so it doesn't feel jumpy
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
    />
  );
}
