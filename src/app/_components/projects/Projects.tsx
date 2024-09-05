"use client";
import { useState } from "react";
import { EnhancedText, fontVariant } from "../text/EnhancedText";
import { projectItems } from "../types/projectItems";
import Image from "next/image";
import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { ProjectCard } from "./ProjectCard";

const titleItems = ["Professional", "Experience"];

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

  const subtitle = "PERSONAL";
  const title = "PROJECTS";

  return (
    <div className="w-full overflow-hidden bg-blue-800 py-32 h-screen">
      <div className=" text-center w-full bg-blue-800 relative h-max flex flex-col">
        <div className="leading-[100px] text-9xl font-extrabold w-full flex justify-between">
          {subtitle.split("").map((item, index) => (
            <CommonText key={index}>{item}</CommonText>
          ))}
        </div>
        <div className="leading-[160px] text-[175px] w-full flex justify-between">
          {title.split("").map((item, index) => (
            <DisplayText key={index}>{item}</DisplayText>
          ))}
        </div>
        <div className="w-full h-full absolute bg-gradient-to-b from-blue-800/0 to-blue-950/100 to-95% z-20"></div>
      </div>

      <div
        id="experience"
        className="flex flex-col h-[70vh] bg-blue-950 justify-end w-full"
      >
        <div className="w-full flex gap-x-1 px-2 overflow-x-scroll">
          {projectItems.map((item, index) => {
            return (
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                key={index}
                className="gap-x-1 relative transition-all duration-300 ease-in-out "
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
      </div>
    </div>
  );
}
