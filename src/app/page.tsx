"use client";

import { Home } from "./_components/display/Home";
import { Profile } from "./_components/profile/Profile";
import { Experience } from "./_components/profile/Experience";
import { Navigation } from "./_components/Navigation";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Page() {
  const homeRef = useRef<HTMLDivElement>(null);
  const isHomeInView = useInView(homeRef);

  console.log(isHomeInView);

  return (
    <main className=" bg-blue-950 text-amber-50">
      <Navigation isHomeInView={!isHomeInView} />
      <Home ref={homeRef} />
      <Profile />
      <Experience />
    </main>
  );
}
