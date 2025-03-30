// pages/index.js
"use client";
import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

export default function footer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  return (
    <div className="relative h-[200vh]">
      {/* Hero Section (Fixed) */}
      <section className="h-screen w-full flex justify-center items-center bg-black text-white fixed top-0 left-0 z-20">
        <h1 className="text-5xl font-bold">Welcome to Off-Menu</h1>
      </section>

      {/* Second Section (Animated) */}
      <div
        ref={containerRef}
        className="relative h-screen w-full flex justify-center items-center"
      >
        <motion.div
          style={{ opacity, scale }}
          className="w-3/4 h-96 bg-white shadow-xl rounded-lg flex items-center justify-center text-3xl font-semibold"
        >
          This section pops up!
        </motion.div>
      </div>
    </div>
  );
}
