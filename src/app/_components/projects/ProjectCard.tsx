import Image from "next/image";
import { projectItems } from "../types/projectItems";
import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { relative } from "path";
import Link from "next/link";

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
    <motion.div
      key={index}
      className="flex flex-col w-[800px] h-[300px] transition-all duration-300 ease-in-out gap-y-8"
      initial={{ width: 800, height: "50%", position: "relative" }}
      animate={
        isHovered
          ? { width: "98.75vw", height: "100%" }
          : { width: 800, height: "50%", position: "relative" }
      }
      transition={{ ease: easeInOut, duration: 0.3 }}
    >
      <motion.div
        className="text-lg w-full ps-8"
        initial={{ fontSize: "1.125rem" }}
        animate={isHovered ? { fontSize: "3rem" } : { fontSize: "1.125rem" }}
        transition={{ ease: easeInOut, duration: 0.3 }}
      >
        <DisplayText>{item.title}</DisplayText>
      </motion.div>
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={300}
        height={300}
        className="h-2/5 object-cover rounded-lg w-full bg-zinc-950"
        unoptimized
      />
      <motion.div
        className="flex gap-x-2 px-8 justify-between"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ ease: easeInOut, duration: 0.3 }}
      >
        <div>
          <CommonText className="text-lg font-bold">{item.stack}</CommonText>
          <CommonText className="text-sm">{item.description}</CommonText>
        </div>
        <div className="flex gap-x-2 justify-between">
          <Link href={item.demo}>
            <button className="flex gap-x-4 bg-yellow-50 text-blue-700 justify-between items-center p-2 px-4 rounded-full hover:bg-blue-600 hover:text-yellow-50 hover:border-2 hover:border-yellow-50 transition-all border-2 active:bg-blue-800">
              <FaArrowUpRightFromSquare />
              <CommonText>Demo</CommonText>
            </button>
          </Link>
          <Link href={item.github}>
            <button className="flex gap-x-4 bg-yellow-50 text-blue-700 justify-between items-center p-2 px-4 rounded-full hover:bg-blue-600 hover:text-yellow-50 hover:border-2 hover:border-yellow-50 transition-all border-2 active:bg-blue-800">
              <FaGithub />
              <CommonText>Repo</CommonText>
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
