import { motion } from "framer-motion";

// Reusable "fade in + rise" wrapper.
// Wrap anything in <Reveal> and it gently animates into view on scroll.
// `delay` lets you stagger items (e.g. cards appearing one after another).
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      // animate once, and only when ~15% of the element is on screen
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
