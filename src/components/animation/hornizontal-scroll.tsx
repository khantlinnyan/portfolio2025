"use client";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import kalasaImg from "@/../public/images/kalasa.png";
import zaySine from "@/../public/images/zaysine.png";
import theHive from "@/../public/images/thehive.png";
import Heading from "../ui/heading";
import { ProjectCard } from "../ui/project-card";
const projects = [
  {
    id: 1,
    image: kalasaImg,
    title: "Kalasa Art Gallery",
    description: "A platform to showcase and sell art pieces",
    link: "https://kalasaartgallery.com",
  },
  {
    id: 2,
    image: zaySine,
    title: "Zay Sine",
    description: "Point of sale system for small businesses",
    link: "",
  },
  {
    id: 3,
    image: theHive,
    title: "The Hive",
    description: "A Portfolio website for a youth non-profit organization",
    link: "https://www.beesinthehive.org",
  },
];

const HorizontalScroll = () => {
  const win = typeof window !== "undefined" ? window.innerWidth : 200;
  const targetRef = useRef(null);

  const sectionHeight = projects.length * 120;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  const isMobile = win <= 768;
  const x = useTransform(
    scrollSpring,
    [0, 1],
    isMobile ? [win / 1.2, -win * 3] : [win / 2, -win * 1]
  );

  return (
    <section
      ref={targetRef}
      className="relative"
      style={{ height: `${sectionHeight}vh` }}
    >
      <Heading
        className="sticky top-8 lg:top-16 right-8"
        title="SIGNATURE DISHES"
        subTitle="[Selected work]"
      />
      <div className="sticky top-0 w-full h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex flex-row gap-4 py-10 lg:py-20 md:gap-8 px-4 md:px-8 w-full will-change-transform"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index + project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
