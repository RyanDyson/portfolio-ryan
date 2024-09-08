"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import { DisplayText } from "../text/DisplayText";
import { CommonText } from "../text/CommonText";
import { animate, motion, useMotionValue } from "framer-motion";
import { CustomButton } from "../CustomButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { EnhancedText, fontVariant } from "../text/EnhancedText";
import { ContactTitle } from "./ContactTitle";
import React from "react";

const contactInformation = {
  information: [
    {
      title: "dysonryan6@gmail.com",
      logo: <MdEmail />,
      url: "mailto:dysonryan6@gmail.com",
    },
    {
      title: "+852 9058 1053",
      logo: <FaPhone />,
      url: "https://wa.me/85290581053",
    },
    {
      title: "Hong Kong",
      logo: <MdLocationPin />,
      url: "https://www.google.com/maps/place/Hong+Kong/@22.396",
    },
  ],
  socials: [
    {
      logo: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ryan-dyson-darmawan-3a3b10241/",
    },
    {
      logo: <FaGithub />,
      url: "https://github.com/RyanDyson",
    },
    {
      logo: <FaInstagram />,
      url: "https://www.instagram.com/ryandyson/",
    },
  ],
};

type socialsProps = {
  logo: React.ReactNode;
  url: string;
};

const Socials = ({ logo, url }: socialsProps) => {
  return (
    <Link
      className="text-blue-800 cursor-pointer text-3xl hover:text-blue-600 transition"
      href={url}
    >
      {logo}
    </Link>
  );
};

const MemoizedTitle = React.memo(() => {
  return <ContactTitle />;
});

export function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const enhancedTextClassName = (index: number) => {
    return `word fancy text-center flex justify-between transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "text-cadetblue opacity-20"
        : "hover:text-blue-800"
    }`;
  };

  return (
    <div
      id="contact"
      className="w-screen h-screen p-12 bg-slate-200 overflow-hidden"
    >
      <CommonText className="text-lg text-blue-950 font-bold">
        Lets build something together
      </CommonText>
      <MemoizedTitle />
      <div className="flex gap-x-12 pt-12 h-4/6">
        <div className="w-3/4 text-blue-950 border-none h-full flex flex-col gap-y-4">
          Your Name
          <input className="text-blue-950 border-2 border-blue-200 rounded-md h-24 focus:border-blue-800 focus:bg-yellow-50 transition-all duration-200"></input>
          Your Email
          <input className="text-blue-950 border-2 border-blue-200 rounded-md h-24 hover:border-blue-800 focus:bg-yellow-50 transition-all duration-200"></input>
          Your Message
          <input className="text-blue-950 border-2 border-blue-200 rounded-md h-full hover:border-blue-800 focus:bg-yellow-50 transition-all duration-200"></input>
        </div>

        <div className="w-3/5 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 text-5xl text-blue-800">
            {contactInformation.information.map((item, index) => {
              return (
                <Link
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="font-bold text-3xl"
                  href={item.url}
                >
                  <EnhancedText
                    className={enhancedTextClassName(index)}
                    font={fontVariant.DM}
                    isAnimated={true}
                    text={item.title}
                  >
                    {item.logo}
                  </EnhancedText>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row w-full h-full justify-end gap-x-2">
            {contactInformation.socials.map((item, index) => (
              <Socials {...item} key={index} />
            ))}
          </div>
          <Link href="mailto:dysonryan6@gmail.com">
            <CustomButton className="rounded-">
              <CommonText>SEND MESSAGE</CommonText>
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
