"use client";
import { useState } from "react";
import { EnhancedText } from "../text/EnhancedText";

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const enhancedTextClassName = (index: number) => {
    return `word fancy text-center flex text-3xl md:text-4xl transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  return (
    <div id="experience" className="flex flex-col h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <div
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <EnhancedText
            text="PROFESSIONAL"
            className={enhancedTextClassName(0)}
          />
        </div>
        <div
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <EnhancedText
            text="EXPERIENCE"
            className={enhancedTextClassName(1)}
          />
        </div>
      </div>
    </div>
  );
}
