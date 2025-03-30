"use client";
import React, { useMemo, ReactNode, RefObject } from "react";
import { motion, useAnimation, useInView } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
}) => {
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const inView = useInView(textRef, { once: false, margin: "-20%" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const controls = useAnimation();

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <motion.span
          className="inline-block word"
          key={index}
          initial={{
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
          }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      );
    });
  }, [children, baseOpacity, enableBlur, blurStrength, inView]);

  return (
    <motion.h2
      ref={textRef}
      className={`my-5 ${containerClassName}`}
      initial={{ rotate: baseRotation }}
      animate={{ rotate: inView ? 0 : baseRotation }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0, originY: 0.5 }}
    >
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5]  ${textClassName}`}
      >
        {splitText}
      </p>
    </motion.h2>
  );
};

export default ScrollReveal;
