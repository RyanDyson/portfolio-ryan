import Image from "next/image";
import { type projectItems } from "./Projects";
import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useEffect } from "react";

type Props = {
  item: (typeof projectItems)[number];
  index: number;
  setHoveredIndex?: (index: number) => void;
  isHovered?: boolean;
};

export const ProjectCard = ({
  item,
  index,
  setHoveredIndex,
  isHovered,
}: Props) => {
  console.log(index, isHovered);

  return (
    <div key={index} className="flex flex-col w-full h-full">
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={300}
        height={300}
        className="h-full object-cover rounded-lg w-full absolute  bg-zinc-950"
        unoptimized
      />
      <div className="z-20 w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-zinc-950 p-4 rounded-lg">
        <DisplayText className="text-xl">{item.title}</DisplayText>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="flex flex-col gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: easeInOut, duration: 0.3 }}
            >
              <CommonText className="text-md">{item.stack}</CommonText>
              <CommonText className="text-sm">{item.description}</CommonText>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
