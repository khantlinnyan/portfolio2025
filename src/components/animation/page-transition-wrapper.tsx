// pages/_app.jsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = usePathname();

  useEffect(() => {}, [router]);

  return (
    <AnimatePresence>
      <motion.div
        key={router}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
