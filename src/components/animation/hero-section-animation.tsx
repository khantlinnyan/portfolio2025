"use client";
import { cn } from "@/lib/utils";
import {
  useTransform,
  useScroll,
  useReducedMotion,
  motion,
} from "motion/react"; // Assuming this is from Framer Motion
import { useRef } from "react";

type HeroSectionAnimationProps = {
  heroContent: React.ReactNode;
  heroClassName?: string;
  sectionContent: React.ReactNode;
  sectionClassName?: string;
};

const HeroSectionAnimation = ({
  heroContent,
  heroClassName,
  sectionContent,
  sectionClassName,
}: HeroSectionAnimationProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.9, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.8, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const prefersReducedMotion = useReducedMotion();
  const animationStyles = prefersReducedMotion ? {} : { opacity, scale, y };

  return (
    <main className="relative min-h-[168vh] lg:min-h-[180vh]">
      {/* Hero Section */}
      <section
        className={cn(
          "h-screen w-full flex justify-center items-center bg-gradient-to-tr from-[#7b61ff] via-[#9c81ff] to-[#b9a2ff] sticky top-0 left-0",
          heroClassName
        )}
      >
        {heroContent}
      </section>

      <div className="h-[50vh]"></div>

      <section
        ref={containerRef}
        className="relative h-[68vh] lg:h-[80vh] flex justify-center items-center"
      >
        <motion.div
          style={animationStyles}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={cn(
            "absolute inset-0 flex justify-center rounded-t-4xl items-center bg-white",
            sectionClassName
          )}
        >
          {sectionContent}
        </motion.div>
      </section>
    </main>
  );
};

export default HeroSectionAnimation;
