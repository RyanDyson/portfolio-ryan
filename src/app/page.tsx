"use client";

import { Home } from "./_components/display/Home";
import { Profile } from "./_components/profile/Profile";
import { Projects } from "./_components/projects/Projects";
import { Navigation } from "./_components/Navigation";
import { Contact } from "./_components/contact/Contact";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Loading } from "./_components/loading/Loading";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "./_components/Footer";
import { Blog } from "./_components/blog/Blog";

export default function Page() {
  const homeRef = useRef<HTMLDivElement>(null);
  const isHomeInView = useInView(homeRef);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsHomeVisible(!isHomeInView);
  }, [isHomeInView]);

  useEffect(() => {
    // Remove loading component after fade out (2 seconds total)
    const removeLoadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    // Clean up the timers
    return () => {
      clearTimeout(removeLoadingTimer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <AnimatePresence>
          <motion.div
            className="fixed top-0 left-0 transtion-all duration-300 ease-linear z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0.5, delay: 4 }}
          >
            <Loading isLoading={isLoading} />
          </motion.div>
        </AnimatePresence>
      )}
      <main className="bg-blue-950 text-amber-50 z-10">
        <Navigation isHomeInView={!isHomeVisible} />
        <Home ref={homeRef} />
        <Profile />
        <Projects />
        <Contact />
        <Blog />
        <Footer />
      </main>
    </>
  );
}
