import { useRef } from "react";
import Image from "next/image";
import { projectItems } from "../types/projectItems";
import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { motion, easeInOut } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { CustomButton } from "../CustomButton";

type Props = {
  item: (typeof projectItems)[number];
  index: number;
  setHoveredIndex?: (index: number) => void;
  isHovered?: boolean;
};

export const ProjectCard = ({ item, index, isHovered }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  // isHovered && cardRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={cardRef} className="w-max h-[500px] overflow-y-hidden">
      <motion.div
        key={index}
        className=" flex flex-col w-[800px] transition-all duration-300 ease-in-out gap-y-8"
        initial={{ width: "50vw", height: "50%", position: "relative" }}
        animate={
          isHovered
            ? { width: "70vw", height: "120%" }
            : { width: "50vw", height: "50%", position: "relative" }
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
          className="h-1/2 object-cover rounded-lg w-full bg-zinc-950"
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
          <div className="flex flex-col md:flex-row gap-x-2 md:justify-between gap-y-2 w-max">
            <Link href={item.demo} className="w-full">
              <CustomButton>
                <FaArrowUpRightFromSquare />
                <CommonText>Demo</CommonText>
              </CustomButton>
            </Link>
            <Link href={item.github} className="w-full">
              <CustomButton>
                <FaGithub />
                <CommonText>Repo</CommonText>
              </CustomButton>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
