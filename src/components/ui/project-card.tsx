"use client";
import { memo } from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import Image from "next/image";
import { HoverBorderGradient } from "./hover-border-gradient";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  project: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
};
export const ProjectCard = memo(({ project, index }: Props) => (
  <div key={`card-${index}-${project.title}`} className="flex-shrink-0">
    <div className="inter-var h-full">
      <div className="relative h-96 w-96 rounded-xl pb-4 px-4 md:pb-6 md:px-6 lg:w-3xl  h-full flex flex-col ">
        <div className="w-full my-4 flex-grow">
          <Image
            src={project.image}
            className="w-full h-full object-contain bg-gray-100/70 rounded-xl"
            alt={project.title}
            priority={index === 0}
          />
        </div>
        <div className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white">
          {project.title}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#6E6E73] text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300">
            {project.description}
          </div>
          <div>
            <HoverBorderGradient
              duration={0.3}
              containerClassName="rounded-full flex items-center"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center"
            >
              <Link href={"/"} className="text-xs lg:text-base">
                VIEW
              </Link>
              <ArrowRight strokeWidth={1} />
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  </div>
));

ProjectCard.displayName = "ProjectCard";
