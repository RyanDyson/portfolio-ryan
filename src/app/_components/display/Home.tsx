"use client";

import { useState } from "react";
import Link from "next/link";
import { EnhancedText } from "../text/EnhancedText";

const DisplayItems = [
  { label: "PROFILE", href: "/#profile" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
  { label: "BLOG", href: "/blog" },
];

export function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className=" bg-circle">
      <div
        id="home"
        className="flex justify-center items-center min-h-screen w-full flex-col bg-gradient-to-t from-blue-800 to-transparent"
      >
        <div className="flex flex-col justify-between w-max-[700px]">
          {DisplayItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <EnhancedText
                text={item.label}
                className={`word fancy text-center flex justify-between text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full transition ease-in-out duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "text-cadetblue opacity-20"
                    : "hover:text-amber-100"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
