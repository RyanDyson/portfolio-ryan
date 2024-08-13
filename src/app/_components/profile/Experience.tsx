"use client";
import { useState } from "react";
import { EnhancedText, fontVariant } from "../text/EnhancedText";

const titleItems = ["Professional", "Experience"];

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const enhancedTextClassName = (index: number) => {
    return `word fancy uppercase text-center w-full flex justify-between text-3xl md:text-4xl transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  return (
    <div id="experience" className="flex flex-col h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        {titleItems.map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="w-[400px]"
            >
              <EnhancedText
                text={item}
                font={fontVariant.DELA}
                isAnimated={true}
                className={enhancedTextClassName(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
