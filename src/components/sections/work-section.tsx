"use client";
import dynamic from "next/dynamic";
// import HorizontalScroll from "../animation/hornizontal-scroll";
import { Container } from "../ui/container";
const HorizontalScroll = dynamic(
  () => import("../animation/hornizontal-scroll"),
  { ssr: false }
);

const WorkSection = () => {
  return (
    <Container className="bg-white h-full" id="work">
      <HorizontalScroll />
    </Container>
  );
};

export default WorkSection;
