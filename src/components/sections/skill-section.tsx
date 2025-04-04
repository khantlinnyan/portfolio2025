import FadeInOut from "../animation/fadein-out";
import { IconCloud } from "../magicui/icon-cloud";
import { Container } from "../ui/container";
import Heading from "../ui/heading";
import { CloudSun, Code, Database, Palette, Server } from "lucide-react";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "swr",
  "tailwindcss",
  "reacthookform",
  "reactquery",
  "expo",
  "s3",
  "supabase",
  "mongodb",
  "mysql",
  "zustand",
  "prisma",
  "typeorm",
  "railway",
  "postgresql",
  "firebase",
  "vercel",
  "axios",
  "basecamp",
  "notion",
  "trello",
  "jest",
  "git",
  "jira",
  "github",
  "figma",
];

const skills = [
  {
    id: 1,
    icon: <Code size={24} className="size-4 lg:size-6" color={"#7b61ff"} />,
    title: "Frontend",
    list: [
      "TypeScript, JavaScript, HTML5, CSS3",
      "React, Next.js, Tailwind CSS",
      "Zustand, SWR, React Query",
      "React Hook Form, Axios, Expo",
    ],
  },
  {
    id: 2,
    icon: <Server size={24} className="size-4 lg:size-6" color={"#7b61ff"} />,
    title: "Backend",
    list: ["Node.js, Express.js, Python", "Prisma, TypeORM"],
  },
  {
    id: 3,
    icon: <Database size={24} className="size-4 lg:size-6" color={"#7b61ff"} />,
    title: "Databases",
    list: ["PostgreSQL, MySQL, MongoDB", "Firebase, Supabase, AWS S3"],
  },
  {
    id: 4,
    icon: <CloudSun size={24} className="size-4 lg:size-6" color={"#7b61ff"} />,
    title: "DevOps & Deployment",
    list: ["Vercel, Railway, Git, GitHub"],
  },
  {
    id: 5,
    icon: <Palette size={24} className="size-4 lg:size-6" color={"#7b61ff"} />,
    title: "Tools & Collaboration",
    list: ["Jest, Figma, Postman", "Jira, Trello, Basecamp, Notion"],
  },
];

export default function SkillSection() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <Container className="mt-30 lg:mt-40">
      <Heading
        title="THE INGREDIENTS"
        className="mb-12"
        subTitle="[Tech Stack]"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FadeInOut className=" w-full lg:w-5/7 flex  items-center flex-col justify-center overflow-hidden">
          <IconCloud images={images} />
        </FadeInOut>
        <div className="grid grid-cols-1 gap-4 mt-0 lg:mt-26 lg:grid-cols-2">
          {skills.map((category) => (
            <FadeInOut key={category.id} className="mb-8">
              <h3 className="text-base items-center lg:text-xl flex gap-2 mb-4">
                {category.icon} {category.title}
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                {category.list.map((item, index) => (
                  <li
                    key={index}
                    className="text-zinc-700 text-sm lg:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInOut>
          ))}
        </div>
      </div>
    </Container>
  );
}
