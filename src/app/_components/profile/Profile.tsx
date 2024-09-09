"use client";

import { DisplayText } from "../text/DisplayText";
import { fontVariant, EnhancedText } from "../text/EnhancedText";
import { CommonText } from "../text/CommonText";
import { useState } from "react";
import Image from "next/image";
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import PFP from "@/../../public/ryan.jpg";
import { CustomDialog } from "./CustomDialog";
import { CustomButton } from "../CustomButton";

const Name = [
  {
    label: "RYAN",
  },
  {
    label: "DYSON",
  },
  {
    label: "DARMAWAN",
  },
];

const stack = [
  {
    icon: <DiReact />,
    label: "REACT",
  },
  {
    icon: <RiTailwindCssFill />,
    label: "TAILWINDCSS",
  },
  {
    icon: <SiNextdotjs />,
    label: "NEXTJS",
  },

  {
    icon: <SiPrisma />,
    label: "PRISMA",
  },
  {
    icon: <BiLogoPostgresql />,
    label: "POSTGRESQL",
  },
  {
    icon: <SiTypescript />,
    label: "TS",
  },
];

const bioText =
  "Computer Science student at City University of Hong Kong. I am a Full Stack Developer and UI/UX Designer. I am passionate about creating beautiful and functional websites. I am always looking for new opportunities to learn and grow.";

const DialogContent = () => {
  return (
    <>
      <p>testing</p>
    </>
  );
};

export function Profile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const enhancedTextClassName = (index: number) => {
    return `word fancy text-center flex text-3xl md:text-4xl transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  return (
    <div
      id="profile"
      className="bg-blue-800 w-screen text-amber-50 p-8 md:px-16 py-32 pb-48"
    >
      <div className="py-16 flex flex-col gap-y-4 md:flex-row justify-between">
        <div className="flex flex-col">
          {Name.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <EnhancedText
                text={item.label}
                className={enhancedTextClassName(index)}
                font={fontVariant.DELA}
                isAnimated={true}
              />
            </div>
          ))}
        </div>
        <div className="text-right">
          <DisplayText>Profile</DisplayText>
          <CommonText className="text-xl">FULL STACK DEVELOPER </CommonText>
          <CommonText className="text-xl">UI UX DESIGNER</CommonText>
        </div>
      </div>
      <div className="flex flex-col gap-x-4 gap-y-4 md:flex-row">
        <Image
          src={PFP}
          alt="Profile Picture"
          className="rounded-md border-blue-950 border-4 h-auto w-full md:w-2/5 max-w-[500px] object-cover"
        />
        <div className="flex flex-col gap-y-2 justify-between">
          {/* <EnhancedText
            text="CS Student at CityU University HK"
            className={enhancedTextClassName(1)}
          ></EnhancedText> */}
          <CommonText className="text-justify break-words">
            {bioText}
          </CommonText>
          <DisplayText>Tech Stack</DisplayText>
          <div className="flex gap-x-2 justify-between text-3xl md:text-5xl items-center flex-wrap w-full">
            {stack.map((item, index) => (
              <div
                key={index}
                className="hover:text-amber-100 flex min-w-[250px] w-full md:w-auto justify-between"
              >
                {item.icon}
                <CommonText className="text-right">{item.label}</CommonText>
              </div>
            ))}
          </div>
          <DisplayText>Resume</DisplayText>
          <CustomButton
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 rounded-lg text-center "
          >
            <CommonText>View CV/Resume</CommonText>
          </CustomButton>
          <CustomDialog isOpen={isOpen} setOpen={setIsOpen}>
            <DialogContent />
          </CustomDialog>
        </div>
      </div>
    </div>
  );
}
