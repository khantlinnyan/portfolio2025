"use client";
import { Safari } from "@/components/magicui/safari";
import Link from "next/link";
import kalasa1 from "@/../public/images/kalasa/kalasa1.png";
import kalasa2 from "@/../public/images/kalasa/kalasa2.png";
import kalasa3 from "@/../public/images/kalasa/kalasa3.png";
import kalasa4 from "@/../public/images/kalasa/kalasa4.png";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import zaySine1 from "@/../public/images/zaysine/zaysine1.png";
import zaySine2 from "@/../public/images/zaysine/zaysine2.png";
import zaySine3 from "@/../public/images/zaysine/zaysine3.png";
import theHive1 from "@/../public/images/thehive/thehive1.png";
import theHive2 from "@/../public/images/thehive/thehive2.png";
import theHive3 from "@/../public/images/thehive/thehive3.png";
import theHive4 from "@/../public/images/thehive/thehive4.png";
import Image from "next/image";

export const kalasaHeading = () => {
  return (
    <Link
      href={"https://www.kalasa.gallery/artworks"}
      target="_blank"
      className="cursor-pointer w-full"
    >
      <Safari
        url="kalasa.gallery/artworks"
        className="size-full my-12 lg:my-20"
        imageSrc={kalasa1.src}
      />
    </Link>
  );
};

export const kalasaBody = () => {
  return (
    <section className="grid gap-y-8 grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <Iphone15Pro
        className="mx-auto size-120 bg-zinc-50 lg:bg-transparent w-full py-3 px-2 lg:w-fit lg:h-fit object-contain aspect-auto"
        src={kalasa2.src}
      />

      <Iphone15Pro
        className="mx-auto size-120 bg-zinc-50 lg:bg-transparent w-full py-3 px-2 lg:w-fit lg:h-fit object-contain aspect-auto"
        src={kalasa3.src}
      />
    </section>
  );
};

export const kalasaFooter = () => {
  return (
    <Safari
      url="dashboard"
      className="size-full my-12 lg:my-20"
      imageSrc={kalasa4.src}
    />
  );
};

export const zaySineHeading = () => (
  <Image src={zaySine1} className="w-full my-12 lg:my-20" alt="zay sine" />
);
export const zaySineBody = () => (
  <Image src={zaySine2} className="w-full " alt="zay sine" />
);
export const zaySineFooter = () => (
  <Image src={zaySine3} className="w-full my-12 lg:my-20" alt="zay sine" />
);

export const theHiveHeading = () => {
  return (
    <Link
      href={"https://www.beesinthehive.org"}
      target="_blank"
      className="cursor-pointer"
    >
      <Safari
        url="beesinthehive.org"
        className="size-full my-12 lg:my-20"
        imageSrc={theHive1.src}
      />
    </Link>
  );
};

export const theHiveBody = () => {
  return (
    <section className="grid gap-y-8 grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <Iphone15Pro
        className="mx-auto size-120 bg-zinc-100 lg:bg-transparent w-full py-3 px-2 lg:w-fit lg:h-fit object-contain aspect-auto"
        src={theHive2.src}
      />

      <Iphone15Pro
        className="mx-auto size-120 bg-zinc-100 lg:bg-transparent w-full py-3 px-2 lg:w-fit lg:h-fit object-contain aspect-auto"
        src={theHive3.src}
      />
    </section>
  );
};

export const theHiveFooter = () => {
  return (
    <Safari
      url="beesinthehive.org"
      className="size-full my-12 lg:my-20"
      imageSrc={theHive4.src}
    />
  );
};
