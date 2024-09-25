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
  const [loadingOpacity, setLoadingOpacity] = useState(1);

  useEffect(() => {
    setIsHomeVisible(!isHomeInView);
  }, [isHomeInView]);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setLoadingOpacity(0);
    }, 1500);

    // Remove loading component after fade out (2 seconds total)
    const removeLoadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timers
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeLoadingTimer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <AnimatePresence>
          <motion.div
            className="transtion-all duration-300 ease-linear"
            style={{ opacity: loadingOpacity }}
            transition={{ ease: "linear", duration: 0.3 }}
          >
            <Loading />
          </motion.div>
        </AnimatePresence>
      )}
      <main className="bg-blue-950 text-amber-50">
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
