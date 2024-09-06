"use client";
import { useState } from "react";
import { EnhancedText, fontVariant } from "../text/EnhancedText";
import { projectItems } from "../types/projectItems";
import Image from "next/image";
import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { ProjectCard } from "./ProjectCard";
import { useRef } from "react";
import { useScroll, useTransform, motion, scroll } from "framer-motion";
const titleItems = ["Professional", "Experience"];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
  });

  console.log(scrollYProgress);

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

  const subtitle = "PERSONAL";
  const title = "PROJECTS";

  return (
    <div ref={projectRef} className="bg-white w-screen h-[300vh]">
      <div
        id="projects"
        className="sticky top-0 w-full flex flex-col overflow-hidden bg-blue-800 pt-20 h-screen"
      >
        <div className=" text-center w-full bg-gradient-to-b from-blue-800/100 to-blue-950/100 relative h-max flex flex-col">
          <div className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between">
            {subtitle.split("").map((item, index) => (
              <CommonText key={index}>{item}</CommonText>
            ))}
          </div>
          <div className="leading-[11vw] text-[11vw] w-full flex justify-between">
            {title.split("").map((item, index) => (
              <DisplayText key={index}>{item}</DisplayText>
            ))}
          </div>
          <div className="w-full h-full absolute bg-gradient-to-b from-blue-800/0 to-blue-950/100 to-95% z-20"></div>
        </div>

        <div
          id="experience"
          className="flex flex-col bg-blue-950 justify-center h-full w-[300vw]"
        >
          <motion.div
            style={{ x }}
            className="flex gap-x-1 px-2 py-4 overflow-x-hidden"
          >
            {projectItems.map((item, index) => {
              return (
                <div
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                  }}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
