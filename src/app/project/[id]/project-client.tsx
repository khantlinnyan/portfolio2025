"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Link from "next/link";
import { ArrowDownCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import FadeInOut from "@/components/animation/fadein-out";
import { Project } from "@/app/project";

export default function ProjectClient({
  project,
  nextProject,
  prevProject,
}: {
  project: Project;
  nextProject: Project;
  prevProject: Project;
}) {
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const footerTriggerRef = useRef(null);

  // Scroll progress for entire page (Nav bar)
  const globalScroll = useScroll();
  const navBarProgressScale = useTransform(
    globalScroll.scrollYProgress,
    [0, 1],
    [0, 1]
  );

  // Scroll progress for footer visibility
  const { scrollYProgress: footerVisibility } = useScroll({
    target: footerTriggerRef,
    offset: ["end end", "start start"], // Detect when footer enters viewport
  });

  // Scroll progress for footer content
  const { scrollYProgress: footerScrollY } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"], // Progress from when footer top hits viewport bottom to bottom
  });

  // Combine visibility and scroll progress for footer bar
  const footerProgressBarScale = useTransform(
    [footerVisibility, footerScrollY],
    ([visibility, progress]) => (visibility > 0 ? progress : 0)
  );

  const navControls = useAnimation();
  const descControls = useAnimation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animate navbar + hero text on mount
  useEffect(() => {
    navControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.25, ease: "easeOut" },
    });

    descControls.start({
      opacity: 1,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    });
  }, [navControls, descControls]);

  // Auto-transition when footer scroll progress is complete
  useEffect(() => {
    const unsubscribe = footerScrollY.on("change", (v) => {
      if (v >= 0.95 && !isTransitioning && footerVisibility.get() > 0) {
        setIsTransitioning(true);
        setTimeout(() => {
          window.location.href = `/project/${nextProject.id}`; // Updated route
        }, 600);
      }
    });

    return () => unsubscribe();
  }, [footerScrollY, isTransitioning, footerVisibility, nextProject.id]);

  return (
    <Container className="relative">
      {/* Navigation Bar */}
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0, y: -100 }}
        animate={navControls}
        className="project-nav fixed top-0 left-1/2 -translate-x-1/2 w-[50vw] max-w-full flex justify-between items-center gap-8 p-2 lg:p-3 mt-3 z-20 bg-white/30 backdrop-blur-md rounded-full"
      >
        <div className="hidden md:flex items-center gap-2 bg-zinc-50 rounded-full px-3 py-1">
          <ArrowLeft />
          <Link href={`/project/${prevProject.id}`}>Previous</Link>{" "}
          {/* Updated route */}
        </div>

        <div className="flex-1 relative h-[30px] flex items-center justify-center border border-[#c6c6be] rounded-full overflow-hidden bg-white/25 backdrop-blur-[20px]">
          <p className="text-sm font-medium text-center">{project.title}</p>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-zinc-200/60 origin-left"
            style={{ scaleX: navBarProgressScale }}
            transition={{ ease: "linear", duration: 0.3 }} // Smooth nav progress
          />
        </div>

        <div className="hidden md:flex items-center gap-2 bg-zinc-100 rounded-full px-3 py-1">
          <Link href={`/project/${nextProject.id}`}>Next</Link>{" "}
          {/* Updated route */}
          <ArrowRight />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <FadeInOut>
        <section>
          <div className="project-hero mt-40 grid grid-cols-1 lg:grid-cols-2 gap-y-8  items-center">
            <h2 className="lg:text-6xl text-2xl text-left font-medium w-full leading-snug  text-zinc-800 ">
              {project.title}
            </h2>
            <div className="flex flex-col w-5/6 items-start text-start justify-center">
              <p className="text-zinc-500 ">OVERVIEW</p>
              <p>{project.description}</p>
            </div>
          </div>
          <div className="w-full">{project.headingComponent()}</div>
        </section>
      </FadeInOut>

      {/* Project Images */}
      <FadeInOut>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 my-12">
          <h1 className="lg:text-4xl text-xl text-left font-medium w-full leading-snug  text-zinc-800">
            The Dish [Project]
          </h1>
          <div>
            <h1 className="lg:text-3xl text-xl w-full leading-snug  text-zinc-800 ">
              {project.about}
            </h1>
            <div
              className="flex justify-center flex-col gap-4 items-center"
              key={project.point.id}
            >
              <div className="border-b py-4 grid grid-cols-2 text-zinc-700   w-full items-center justify-center text-sm lg:text-base">
                <p>Client: </p>
                <p className="text-start">{project.point.client}</p>
              </div>
              <div className="border-b py-4 grid grid-cols-2 text-zinc-700   w-full items-center justify-center text-sm lg:text-base">
                <p>Role: </p>
                <p className="text-start">{project.point.role}</p>
              </div>
              <div className="border-b py-4 grid grid-cols-2 text-zinc-700   w-full items-center justify-center text-sm lg:text-base">
                <p>Services Provided: </p>
                <p className="text-start">{project.point.serviceProvide}</p>
              </div>
            </div>
          </div>
        </div>
      </FadeInOut>
      {project.bodyComponent()}
      {project.footerComponent()}

      {/* Footer Trigger (invisible element to detect footer entry) */}
      <div ref={footerTriggerRef} className="h-px w-full" />

      {/* Footer Section */}
      <div ref={footerRef} className="project-footer relative  h-[70vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 pb-20 items-center">
          <h2 className="lg:text-6xl text-2xl text-left font-medium w-full leading-snug  text-zinc-800 ">
            {nextProject.title}
          </h2>
          <div className="flex flex-col w-5/6 items-start text-start justify-center">
            <p className="text-zinc-500 ">OVERVIEW</p>
            <p>{nextProject.description}</p>
          </div>
        </div>

        <div className="absolute  top-[45%]  lg:top-[35%] flex gap-2  left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-zinc-600 font-medium">Scroll to Next Project</p>
          <ArrowDownCircle color="#c6c6be" />
        </div>

        <div className="next-project-progress absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-[50%] w-1/2 h-[4px] bg-[#c6c6be] overflow-hidden">
          <motion.div
            className="next-project-progress-bar w-full h-full bg-black origin-left"
            style={{ scaleX: footerProgressBarScale }}
            transition={{ ease: "linear", duration: 0.3 }} // Smooth footer progress
          />
        </div>
      </div>
    </Container>
  );
}
