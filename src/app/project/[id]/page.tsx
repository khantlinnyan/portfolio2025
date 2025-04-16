import { projects } from "@/app/project";
import ProjectClient from "./project-client";

const page = ({ params }: { params: { id: undefined | string } }) => {
  const { id } = params;
  const project = projects.find((project) => project.id === parseInt(id));
  const currentIndex = projects.indexOf(project);
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];
  return (
    <ProjectClient
      prevProject={prevProject}
      nextProject={nextProject}
      project={project}
    />
  );
};

export default page;
