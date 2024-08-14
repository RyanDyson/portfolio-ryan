"use client";

import { Home } from "./_components/display/Home";
import { Profile } from "./_components/profile/Profile";
import { Projects } from "./_components/projects/Projects";
import { Navigation } from "./_components/Navigation";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Page() {
  const homeRef = useRef<HTMLDivElement>(null);
  const isHomeInView = useInView(homeRef);
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(() => {
    setIsHomeVisible(!isHomeInView);
  }, [isHomeInView]);

  return (
    <main className="bg-blue-950 text-amber-50">
      <Navigation isHomeInView={!isHomeVisible} />
      <Home ref={homeRef} />
      <Profile />
      <Projects />
    </main>
  );
}
