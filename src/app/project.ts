import {
  kalasaBody,
  kalasaFooter,
  kalasaHeading,
  theHiveBody,
  theHiveFooter,
  theHiveHeading,
  zaySineBody,
  zaySineFooter,
  zaySineHeading,
} from "@/components/ui/detail/dynamic-project";

type Point = {
  client: string;
  year: string;
  role: string;
  serviceProvide: string;
};
export type Project = {
  id: number;
  title: string;
  description: string;
  headingComponent: React.ComponentType;
  about: string;
  point: Point;
  bodyComponent: React.ComponentType;
  footerComponent: React.ComponentType;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Kalasa Art Gallery",
    description:
      "Kalasa Art Space is a Yangon-based gallery where art and community intersect. Founded in 2019, it showcases contemporary Myanmar artists and hosts exhibitions, art healing workshops, and cultural programs—creating a space for creativity, reflection, and dialogue.",
    headingComponent: kalasaHeading,
    about:
      "As a frontend developer for Kalasa Art Space, I built both the public-facing website and internal dashboard from the ground up. My work included creating reusable components, integrating APIs, optimizing images, and writing tests for performance and reliability. I collaborated closely with senior developers, learned a lot through hands-on mentorship, and leveled up my skills through this real-world project. It was a milestone experience that shaped my approach to scalable and maintainable frontend architecture.",
    point: {
      client: "Kalasa Art Gallery",
      year: "2023",
      role: "Frontend Developer",
      serviceProvide:
        "Interactive UI Development, Performance Optimization,API Integration",
    },
    bodyComponent: kalasaBody,
    footerComponent: kalasaFooter,
  },
  {
    id: 2,
    title: "Zay Sine POS",
    description:
      "A mobile POS app built under Techno Nex to help small businesses manage sales and inventory.",
    headingComponent: zaySineHeading,
    about:
      "Zay Sine POS was my first real dive into production-level mobile development. I joined the project under Techno Nex as a React Native developer, and it became a huge learning curve for me—in the best way. I spent time researching mobile patterns, figuring out how native modules work, and really understanding how mobile apps function under the hood.Most of the app's state was managed using Zustand, and we built it with an offline-first approach to make sure it ran smoothly even without a stable internet connection. It pushed me to think about performance, reliability, and user experience from a mobile-first perspective. I gained a ton from working with a great team and seeing this project come to life.",
    point: {
      client: "Techno Nex",
      year: "2024",
      role: "Mobile Developer",
      serviceProvide:
        "Cross-Platform Development, API Integration, Offline Functionality, Native Module Integration",
    },
    bodyComponent: zaySineBody,
    footerComponent: zaySineFooter,
  },
  {
    id: 3,
    title: "The Hive Portfolio",
    description:
      "The Hive is a youth-led nonprofit organization based in Myanmar, focused on empowering young people through free educational resources, skill-building workshops, and community-driven initiatives.",
    headingComponent: theHiveHeading,
    about:
      "As Head of Tech and Frontend Developer, I lead the design and development of the Hive’s portfolio website, ensuring a seamless and accessible experience for students, volunteers, and the broader community. I oversee the technical infrastructure, maintain the website, and collaborate with the creative and academic teams to bring ideas to life through clean, responsive UI/UX design. My work supports the organization's mission by making educational resources more reachable and impactful for youth across Myanmar.",
    point: {
      client: "The Hive",
      year: "2024",
      role: "Head of Tech",
      serviceProvide:
        "Lead Frontend Development, API Integration, Performance Optimization,",
    },
    bodyComponent: theHiveBody,
    footerComponent: theHiveFooter,
  },
];
