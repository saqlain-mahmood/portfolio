import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon } from "./Icons";

// A floating button that fades in once you've scrolled down, and
// smoothly scrolls back to the top when clicked.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          whileHover={{ y: -3 }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-soft transition-colors hover:bg-accent-hover"
        >
          {/* arrow rotated to point up */}
          <ArrowIcon className="h-5 w-5 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
