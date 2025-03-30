"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useScrollContext } from "@/context/scroll-context-provider";
import { createRef } from "react";

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

interface ParagraphProps {
  paragraph: string;
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mt-1 mr-1 lg:mr-3 lg:mt-3">
      <span className="absolute opacity-20 text-2xl col-span-2 col-start-2 w-full font-normal font-sans lg:text-4xl duration-75">
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className="text-2xl w-full font-normal text-zinc-800  font-sans lg:text-4xl"
      >
        {children}
      </motion.span>
    </span>
  );
};

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  const { nextSectionRef } = useScrollContext();
  const targetRef = nextSectionRef ?? createRef<HTMLElement>();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [0, 0.6],
  });
  console.log(scrollYProgress);

  const words: string[] = paragraph.split(" ");

  return (
    <div className=" col-span-3  lg:col-span-2  lg:col-start-2 w-full">
      <p className="flex text-zinc-800 flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

export default Paragraph;
