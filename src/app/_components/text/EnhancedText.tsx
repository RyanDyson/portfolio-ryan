"use client";
import React, { useState } from "react";
import { DisplayText } from "./DisplayText";

const rand = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

interface EnhancedTextProps {
  id?: string;
  text: string;
  className?: string;
}

export const EnhancedText = ({ id, text, className }: EnhancedTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={id}
      className={`${className} fancy`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split("").map((char, index) => (
        <span key={index} className="outer">
          <span
            className="inner"
            style={{ animationDelay: `${rand(-5000, 0)}ms` }}
          >
            <DisplayText
              className={`letter text-center ${isHovered ? "hovered" : ""}`}
              style={{
                animationDelay: `${index * 1000}ms`,
              }}
            >
              {char}
            </DisplayText>
          </span>
        </span>
      ))}
    </div>
  );
};
