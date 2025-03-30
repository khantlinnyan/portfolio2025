"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FadeInOut = ({ children, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  // const hasWindow = typeof window !== "undefined";

  return (
    <div
      ref={ref}
      className={cn(isInView ? "" : "opacity-100 translate-y-0", className)}
    >
      {isInView ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className={cn("w-full")}
        >
          {children}
        </motion.div>
      ) : (
        <div className="opacity-0">{children}</div>
      )}
    </div>
  );
};

export default FadeInOut;
