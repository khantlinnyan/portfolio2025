import Image from "next/image";
import { Container } from "../ui/container";
import Heading from "../ui/heading";
import HysanLogo from "@/../public/images/hysan.png";
import TechnoNexLogo from "@/../public/images/technonex.jpg";
import AllYoursLogo from "@/../public/images/allyours.jpg";
import TeeHtwinLogo from "@/../public/images/teehtwin.jpg";
import FadeInOut from "../animation/fadein-out";

const experience = [
  {
    img: TeeHtwinLogo,
    jobTitle: "Frontend Developer",
    timeline: "Aug 2023 - Present",
    jobDec: "High Tech Startup | Enterprises",
    location: "US & MM",
    company: "Tee Htwin Enterprises",
    jobType: "Part-time",
  },
  {
    img: TechnoNexLogo,
    jobTitle: "React Native Developer",
    timeline: "Jan 2024 - Jul 2024",
    jobDec: "Tech Solution Startup",
    location: "MM",
    company: "Techno Nex",
    jobType: "Part-time",
  },
  {
    img: HysanLogo,
    jobTitle: "Fullstack Developer",
    timeline: "Aug 2024 - Present",
    jobDec: "Education",
    location: "MM & TH",
    company: "Hysan Education",
    jobType: "Full-time",
  },
  {
    img: AllYoursLogo,
    jobTitle: "Fullstack Developer",
    timeline: "Feb 2025 - Present",
    jobDec: "Nongovernmental Organizations",
    location: "MM",
    company: "All Yours",
    jobType: "Part-time",
  },
];
const ExperienceSection = () => {
  return (
    <Container className="mt-0 lg:mt-40">
      <Heading
        title="COOKING JOURNEY"
        subTitle="[Expreience]"
        className="mb-10"
      />
      {experience.map((exp, index) => (
        <FadeInOut key={index + exp.timeline}>
          <div className="flex items-start py-5 gap-4  border-b">
            <Image
              src={exp.img}
              alt={exp.company}
              className="bg-neutral-100 z-30 w-14 aspect-square object-contain rounded-lg"
              width={80}
              height={80}
            />
            <div className="w-full gap-5 flex flex-col">
              <div className="mb-1 justify-between w-full flex text-xs lg:text-sm text-zinc-600">
                <div>
                  <p className="">
                    {exp.company} | {exp.location}
                  </p>
                  <h4 className="text-base lg:text-lg text-zinc-900">
                    {exp.jobTitle}
                  </h4>
                </div>
                <div className="flex gap-1 flex-col">
                  <p>{exp.timeline}</p>
                  <p className="t">{exp.jobType}</p>
                </div>
              </div>

              <p className="text-sm text-zinc-700">{exp.jobDec}</p>
            </div>
          </div>
        </FadeInOut>
      ))}
    </Container>
  );
};

export default ExperienceSection;
