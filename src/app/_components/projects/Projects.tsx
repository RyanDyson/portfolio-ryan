"use client";
import { useState } from "react";
import { EnhancedText, fontVariant } from "../text/EnhancedText";
import discard from "@/../public/projects/discard.png";
import hkiu from "@/../public/projects/hkiu.png";
import acme from "@/../public/projects/acme.png";
import hkscapes from "@/../public/projects/hkscapes.png";
import Image from "next/image";
import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { ProjectCard } from "./ProjectCard";

const titleItems = ["Professional", "Experience"];
export const projectItems = [
  {
    title: "Discard",
    imageUrl: discard,
    description:
      "A chatting application with built in support for voice chat and end to end encryption. This project was a collaboration with a couple of friends. Contributed on UI design with figma aswell with landing page and back-end development",
    stack: "Built with NextJS, TypeScript, React, and TailwindCSS",
  },
  {
    title: "Acme",
    imageUrl: acme,
    description:
      "A simple business financial tracker with support to input invoices and receipts from customer. A fully functional auth and dashboard is also supported",
    stack: "Built with NextJS, React, and TailwindCSS",
  },
  {
    title: "HKScapes",
    imageUrl: hkscapes,
    description: "A landing page for a touring company based in HongKong",
    stack: "Built with BootStrap and SASS",
  },
  {
    title: "HKIU",
    imageUrl: hkiu,
    description:
      "A mock university website with functional major preference choice and visitor booking system. This project was used to learn the basics of webdev with only frontend functionality being available",
    stack: "Built with vanilla HTML, CSS, and JavaScript",
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const enhancedTextClassName = (index: number) => {
    return `word fancy uppercase text-center w-full flex justify-between text-3xl md:text-4xl transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  return (
    <div className="overflow-hidden">
      {/* <div className="h-[150px] bg-gradient-to-b from-blue-800 to-blue-950" /> */}
      <div id="experience" className="flex flex-col h-screen p-8 bg-gray-900">
        <div className="flex h-max gap-x-1">
          {projectItems.map((item, index) => {
            return (
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-[600px] h-[500px] gap-x-1 relative hover:w-full transition-all duration-300 ease-in-out"
              >
                <ProjectCard
                  index={index}
                  item={item}
                  isHovered={hoveredIndex === index}
                />
              </div>
            );
          })}
        </div>
        <div className="text-center flex justify-center items-center w-max h-1/2 gap-x-2">
          {titleItems.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full"
              >
                <EnhancedText
                  text={item}
                  font={fontVariant.DM}
                  isAnimated={true}
                  className={enhancedTextClassName(index)}
                />
              </div>
            );
          })}
          {titleItems.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full"
              >
                <EnhancedText
                  text={item}
                  font={fontVariant.DM}
                  isAnimated={true}
                  className={enhancedTextClassName(index)}
                />
              </div>
            );
          })}
          {titleItems.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full"
              >
                <EnhancedText
                  text={item}
                  font={fontVariant.DM}
                  isAnimated={true}
                  className={enhancedTextClassName(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
