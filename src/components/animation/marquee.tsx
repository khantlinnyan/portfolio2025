"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  baseSpeed?: number;
  mobileBaseSpeed?: number;
  scrollSpeedFactor?: number;
  pauseOnHover?: boolean;
}

export const Marquee = ({
  children,
  className,
  baseSpeed = 0.5,
  mobileBaseSpeed = 0.3,
  scrollSpeedFactor = 0.1,
  pauseOnHover = true,
}: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Check for mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Track visibility and scroll
  const isInView = useInView(containerRef, { amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 3. Calculate responsive speed
  const responsiveBaseSpeed = isMobile ? mobileBaseSpeed : baseSpeed;
  const dynamicSpeed = useTransform(
    scrollYProgress,
    [0, 1],
    [responsiveBaseSpeed, responsiveBaseSpeed * (1 + scrollSpeedFactor)]
  );

  // 4. Animation loop
  useEffect(() => {
    if (!isInView || !contentRef.current) return;

    let animationStop = false;
    let prevTime = 0;
    let contentWidth = contentRef.current.offsetWidth / 2;
    let currentSpeed = 0;

    const animateMarquee = (time: number) => {
      if (!prevTime) prevTime = time;
      const deltaTime = time - prevTime;
      prevTime = time;

      if (animationStop) return;

      // Pause logic (only for non-touch devices)
      if (!(pauseOnHover && isHovered && !isMobile)) {
        currentSpeed = dynamicSpeed.get();
      }

      x.set(x.get() - currentSpeed * deltaTime * 0.1);

      // Responsive looping
      if (Math.abs(x.get()) >= contentWidth) {
        x.set(0);
      }

      requestAnimationFrame(animateMarquee);
    };

    const frameId = requestAnimationFrame(animateMarquee);

    return () => {
      animationStop = true;
      cancelAnimationFrame(frameId);
    };
  }, [isInView, x, dynamicSpeed, isHovered, pauseOnHover, isMobile]);

  return (
    <motion.div
      ref={containerRef}
      className={cn("flex overflow-hidden relative", className)}
      onHoverStart={() => !isMobile && pauseOnHover && setIsHovered(true)}
      onHoverEnd={() => !isMobile && pauseOnHover && setIsHovered(false)}
      onTouchStart={() => isMobile && pauseOnHover && setIsHovered(true)}
      onTouchEnd={() => isMobile && pauseOnHover && setIsHovered(false)}
    >
      {/* Gradient fade edges - responsive sizing */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-1/4 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-1/4 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        ref={contentRef}
        className="flex shrink-0 gap-4 md:gap-8" // Responsive gap
        style={{ x }}
      >
        {children}
        {children} {/* Duplicate for seamless looping */}
      </motion.div>
    </motion.div>
  );
};
