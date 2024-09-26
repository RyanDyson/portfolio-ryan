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
  easeInOut,
  easeIn,
} from "framer-motion";
import { TitleComponent } from "./TitleComponent";
import { SubtitleComponent } from "./SubtitleComponent";
import { CustomButton } from "../CustomButton";
import { CustomDialog } from "../profile/CustomDialog";
import { archiveLists } from "../types/archiveList";
import { ArchiveListItem } from "./ArchiveListItem";
import { easeOut } from "framer-motion/dom";

export function Projects() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndexArchive, setHoveredIndexArchive] = useState<number | null>(
    null
  );
  const projectRef = useRef(null);
  const headingTrigger = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);
  const inView = useInView(headingTrigger);

  const subtitle = "PERSONAL";
  const title = "PROJECTS";

  const archiveClassName = (index: number) => {
    return `text-3xl transition-all duration-150 text-wrap-none pe-1 md:pe-8 text-right ${
      hoveredIndexArchive != null && hoveredIndexArchive !== index
        ? "text-blue-700/20"
        : "text-blue-200"
    }`;
  };

  return (
    <>
      <div
        id="projects"
        ref={projectRef}
        className="bg-white w-screen h-[525vh] snap-normal snap-start z-10"
      >
        <div className="sticky top-0 w-full flex flex-col overflow-hidden bg-blue-800 pt-20">
          <div className=" text-center w-full bg-gradient-to-b from-blue-800/100 to-blue-950/100 relative h-max flex flex-col">
            <motion.div
              className="w-[400vw] flex flex-row transition-all"
              initial={{ transform: "translate(100vw)" }}
              animate={inView && { transform: "translate(-300vw)" }}
              transition={{ ease: easeIn, duration: 1 }}
            >
              {SubtitleComponent(subtitle)}
            </motion.div>

            <motion.div
              className="w-[400vw] flex flex-row"
              initial={{ transform: "translate(-400vw)" }}
              animate={inView && { transform: "translate(0)" }}
              transition={{ ease: easeIn, duration: 1 }}
            >
              {TitleComponent(title)}
            </motion.div>
            <div className="w-full h-full absolute bg-gradient-to-b from-blue-800/0 to-blue-950/100 to-95% z-20"></div>
          </div>

          <div
            id="experience"
            className="flex flex-col bg-blue-950 justify-center w-[300vw] h-full"
            ref={headingTrigger}
          >
            <motion.div
              style={{ x }}
              className="flex gap-x-1 px-2 py-4 overflow-x-hidden h-full"
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
            <div className="w-screen flex justify-end">
              <CustomButton
                onClick={() => setIsDialogOpen(!isDialogOpen)}
                className="w-min m-12 text-xl"
              >
                <CommonText>Archive</CommonText>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <CustomDialog isOpen={isDialogOpen} setOpen={setIsDialogOpen}>
        <div className="flex flex-col gap-y-4 p-4 divide-y divide-yellow-50 overflow-y-scroll">
          {archiveLists.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndexArchive(index)}
                onMouseLeave={() => setHoveredIndexArchive(null)}
              >
                <ArchiveListItem
                  id={index}
                  item={item}
                  isHovered={index === hoveredIndexArchive}
                  className={archiveClassName(index)}
                />
              </div>
            );
          })}
        </div>
      </CustomDialog>
    </>
  );
}
