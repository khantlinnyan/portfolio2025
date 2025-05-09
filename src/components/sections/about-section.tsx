import Image from "next/image";
import { Container } from "../ui/container";
import FadeInOut from "../animation/fadein-out";
import profile from "../../../public/images/profile2.png";
import Heading from "../ui/heading";
// import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

export const AboutSection = () => {
  return (
    <Container className="bg-white lg:pb-80 pb-40 h-full" id="about">
      <Heading
        title="the guy who is cookin"
        className="mb-12"
        subTitle="[About me]"
      />
      {/* <Container className="w-full grid grid-cols-3 pr-12"> */}
      <FadeInOut className="flex flex-col w-full">
        <Image
          src={profile}
          alt="team photo"
          width={400}
          height={400}
          className="grayscale size-1/2 lg:size-3/12 bg-gradient-to-t self-end items-end from-zinc-300 to-transparent hover:grayscale-0 transition duration-300 rounded-sm ease-in-out"
        />
      </FadeInOut>
      <div className="flex justify-between bg-white ">
        <div className="w-full hidden lg:inline-block"></div>
        <div className="place-self-end mt-20 lg:mt-32 w-full pr-1">
          <FadeInOut>
            <p className="lg:text-4xl text-xl w-full leading-snug  text-zinc-800 ">
              Hi, I&apos;m developer with over 3 years of experience ,
              passionate about creating clean, user-friendly digital
              experiences. I specialize in blending technology and creativity to
              build functional and impactful solutions. With a focus on
              simplicity and usability,
            </p>
          </FadeInOut>
          <FadeInOut>
            <p className="lg:text-4xl text-xl w-full leading-snug  text-zinc-800 mt-4 lg:mt-5">
              Whether through coding, collaboration, hackathons, or volunteering
              with youth empowerment organizations, creating meaningful
              solutions that resonate with users and positively impact
              communities.
            </p>
          </FadeInOut>
          <FadeInOut>
            <p className="lg:text-4xl text-xl w-full leading-snug   text-zinc-800 mt-4 lg:mt-5">
              Let&apos;s create something extraordinary together!
            </p>
          </FadeInOut>

          <FadeInOut className="mt-5">
            <Button
              // duration={0.3}
              // containerClassName="rounded-full bg-transparent flex items-center"
              // as="button"
              className="dark:bg-black bg-transparent rounded-full border border-primary dark:text-white flex items-center space-x-2 text-primary py-5 px-10 lg:py-6 lg:px-12  ease-in hover:bg-primary hover:text-white duration-200 transition-all"
            >
              <a
                href={"/khantlinnyan.prof.resume.pdf"}
                className="text-sm lg:text-xl "
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume
              </a>
              <ArrowDown width={16} />
            </Button>
          </FadeInOut>
        </div>
      </div>
    </Container>
  );
};
