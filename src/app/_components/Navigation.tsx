"use client";
import { useState } from "react";
import { navItems } from "./types/navItems";
import Link from "next/link";
import { motion } from "framer-motion";
import { EnhancedText } from "./text/EnhancedText";

type NavigationProps = {
  isHomeInView?: boolean;
};

export function Navigation({ isHomeInView }: NavigationProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredTextIndex, setHoveredIndex] = useState<number | null>(null);
  const enhancedTextClassName = (index: number) => {
    return ` text-center flex transition ease-in-out duration-300 ${
      hoveredTextIndex !== null && hoveredTextIndex !== index
        ? "opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  return (
    isHomeInView && (
      <motion.div className="hidden md:block fixed top-0 right-0 w-screen h-20 py-4 z-50 ">
        <div className="flex justify-center items-center">
          <div
            className="flex justify-around w-16 h-4 rounded-full items-center hover:h-full hover:px-8 hover:py-5 hover:gap-x-6 bg-slate-900/50 border border-slate-400/60 text-amber-50 hover:min-w-[600px] hover:w-3/5 transition duration-1000 ease-in-out z-50 backdrop-blur-lg"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            {isHovered &&
              navItems.map((item, index) => {
                return (
                  <Link
                    href={item.href}
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <EnhancedText
                      text={item.label}
                      className={enhancedTextClassName(index)}
                      isAnimated={false}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </motion.div>
    )
  );
}
