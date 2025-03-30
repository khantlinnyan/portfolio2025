import HeroSectionAnimation from "../animation/hero-section-animation";
import { Container } from "../ui/container";
import AnimatedParagraph from "../animation/animated-paragraph";
import { FlipWords } from "../animation/flip-words";
import TimeLocation from "../ui/time-location";
import { Letter } from "../animation/gibberish-text";
import Aurora from "../../../Aurora/Aurora";

const words = ["frontend", "backend", "mobile"];
const text = "Khant Lin Nyan";
const HeroSection = () => {
  return (
    <HeroSectionAnimation
      heroContent={
        <section
          className="transform w-full h-full
  bg-[radial-gradient(50%_8%_at_50%_0%,rgba(0,230,230,0.3)_10%,rgba(0,230,230,0)_50%,rgba(0,230,230,0)_70%)]
  overflow-x-hidden"
        >
          <div className="grid grid-rows-3 px-4 lg:px-12 mx-auto h-[90%] mt-14 lg:mt-0 lg:h-[80%] -z-10 justify-center w-screen">
            <div className="row-start-2 lg:row-start-3">
              <p className="text-xl text-semibold w-full lg:w-2/3 font-mono lg:text-4xl text-white/80 font-normal">
                Howdy! Meet your trusted <FlipWords words={words} /> developer,
                building dynamic digital experiences for web apps, SaaS,
                websites, and mobile applications.
              </p>

              <h1 className="font-sans font-extrabold leading-16 mt-8 mb-12 lg:mb-0 lg:leading-tight text-[16vw] lg:text-[12vw] text-white text-whitepointer-events-none whitespace-pre-wrap lg:bg-gradient-to-b  from-primary to-gray-100/80 bg-clip-text lg:text-transparent">
                {text.split("").map((letter, index) => {
                  return <Letter letter={letter} key={`${index}-${letter}`} />;
                })}
              </h1>

              {/* <h1 className="font-sans  font-extrabold leading-16 mt-8 mb-12 lg:mb-0 lg:leading-tight text-[16vw] lg:text-[12vw] text-white"></h1> */}
              <TimeLocation />
            </div>
          </div>
        </section>

        // <h1 className="text-7xl text-bold">Hello wokdasf</h1>
      }
      sectionContent={
        <Container className="w-full grid grid-cols-3 pr-12">
          <AnimatedParagraph paragraph="Building fast, scalable, and interactive digital solutions that transform ideas  into seamless user experiences. Through efficient development and innovative technology." />
        </Container>
      }
    />
  );
};

export default HeroSection;
