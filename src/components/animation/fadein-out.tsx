"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
};

const FadeInOut = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  once = false,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "0px 0px -16% 0px",
  });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: yOffset }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
        className="w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInOut;
