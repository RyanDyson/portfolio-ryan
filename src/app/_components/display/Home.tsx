"use client";

import { RefObject, useState } from "react";
import Link from "next/link";
import { EnhancedText } from "../text/EnhancedText";
import { navItems } from "../types/navItems";
import { fontVariant } from "../text/EnhancedText";

type HomeProps = {
  ref?: RefObject<HTMLDivElement>;
};

export function Home({ ref }: HomeProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const enhancedTextClassName = (index: number) => {
    return `word fancy text-center flex justify-between text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "text-cadetblue opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  return (
    <div ref={ref} id="home" className=" bg-circle">
      <div
        id="home"
        className="flex justify-center items-center min-h-screen w-full flex-col bg-gradient-to-t from-blue-800 to-transparent"
      >
        <div className="flex flex-col justify-between w-max-[700px]">
          {navItems.map(
            (item, index) =>
              !item.notInHeader && (
                <Link
                  key={index}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <EnhancedText
                    text={item.label}
                    className={enhancedTextClassName(index)}
                    font={fontVariant.DELA}
                    isAnimated={true}
                  />
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
}
