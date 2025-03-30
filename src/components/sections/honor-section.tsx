import { Container } from "../ui/container";
import Heading from "../ui/heading";

const Awards = [
  {
    id: 1,
    title: "Winner Award 2023",
    competation: "Startup Weekend Yangon",
  },
  {
    id: 2,
    title: "Winner Award 2023",
    competation: "Lara.Camp Take Home Project",
  },
  {
    id: 3,
    title: "Hard Core Code Award 2024",
    competation: "Little Code Lab Myanmar",
  },
  {
    id: 4,
    title: "Best Game Story Award 2022",
    competation: "CTLA Game Jam Hackathon",
  },
];

const HonorSection = () => {
  return (
    <Container>
      <Heading
        title="COOKED AND BOOKED"
        subTitle="[Awards & Recognitions]"
        className="mt-20"
      />
      <div className="grid grid-cols-2 gap-x-10 gap-y-12 mt-10 lg:grid-cols-4">
        {Awards.map((award) => (
          <div key={award.id}>
            <h3 className="text-zinc-800 text-base lg:text-xl font-medium">
              {award.title}
            </h3>
            <p className="text-zinc-600 text-sm lg:text-lg">
              {award.competation}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HonorSection;
