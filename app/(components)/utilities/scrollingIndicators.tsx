"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollingIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed bottom-0 inset-x-0 h-1 origin-[0%] bg-white"
        style={{ scaleX }}
      />
    </>
  );
}
