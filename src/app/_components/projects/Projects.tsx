"use client";
import { useState } from "react";
import { projectItems } from "../types/projectItems";
import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { ProjectCard } from "./ProjectCard";
import { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  cubicBezier,
} from "framer-motion";
import { TitleComponent } from "./TitleComponent";
import { SubtitleComponent } from "./SubtitleComponent";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projectRef = useRef(null);
  const headingTrigger = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);
  const inView = useInView(headingTrigger);

  const transform = cubicBezier(0.33, 0.01, 0, 0.97);

  const subtitle = "PERSONAL";
  const title = "PROJECTS";

  return (
    <div ref={projectRef} className="bg-white w-screen h-[300vh]">
      <div
        id="projects"
        className="sticky top-0 w-full flex flex-col overflow-hidden bg-blue-800 pt-20 h-screen"
      >
        <div className=" text-center w-full bg-gradient-to-b from-blue-800/100 to-blue-950/100 relative h-max flex flex-col">
          <motion.div
            className="w-[400vw] flex flex-row transition-all"
            initial={{ transform: "translate(200vw)" }}
            animate={inView && { transform: "translate(-200vw)" }}
            transition={{ ease: transform, duration: 1 }}
          >
            {SubtitleComponent(subtitle)}
          </motion.div>

          <motion.div
            className="w-[400vw] flex flex-row"
            initial={{ transform: "translate(-400vw)" }}
            animate={inView && { transform: "translate(0)" }}
            transition={{ ease: transform, duration: 1 }}
          >
            {TitleComponent(title)}
          </motion.div>
          <div className="w-full h-full absolute bg-gradient-to-b from-blue-800/0 to-blue-950/100 to-95% z-20"></div>
        </div>

        <div
          id="experience"
          className="flex flex-col bg-blue-950 justify-center h-full w-[300vw]"
          ref={headingTrigger}
        >
          <motion.div
            style={{ x }}
            className="flex gap-x-1 px-2 py-4 overflow-x-hidden"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
