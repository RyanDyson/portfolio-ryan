"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { DisplayText } from "../text/DisplayText";
import { CommonText } from "../text/CommonText";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { IconType } from "react-icons";
import Link from "next/link";
import { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

const contactInformation = {
  email: "dysonryan6@gmail.com",
  phone: "+85290581053",
  location: "Hong Kong",
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
    <Link className="text-blue-800 cursor-pointer text-3xl" href={url}>
      {logo}
    </Link>
  );
};

const title = ["GET IN TOUCH", "GET IN TOUCH", "GET IN TOUCH", "GET IN TOUCH"];

export function Contact() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -(2 * width) - 48;
    let controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="w-screen h-screen p-12 bg-polka overflow-hidden">
      <CommonText className="text-lg text-blue-950 font-bold">
        Let's build something together
      </CommonText>
      <div className="w-full h-max overflow-x-hidden">
        <motion.div
          style={{ x: xTranslation }}
          className="flex flex-row h-min w gap-x-6"
        >
          {title.map((item, index) => {
            return (
              <div ref={ref}>
                <DisplayText
                  key={index}
                  className="text-nowrap text-9xl text-blue-800"
                >
                  {item}
                </DisplayText>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="flex flex-row">
        {contactInformation.socials.map((item, index) => (
          <Socials {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
