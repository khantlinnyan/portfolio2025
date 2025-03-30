// components/AnimatedComponent.jsx
"use client";
import { motion } from "motion/react";

const AnimatedTransition = () => {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "blue",
        borderRadius: 10,
      }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      whileHover={{ scale: 1.2, backgroundColor: "red" }}
      whileTap={{ scale: 0.9 }}
    />
  );
};

export default AnimatedTransition;
