import React from "react";
import { motion } from "framer-motion";
import { HeroSection } from "../component/hero-section.jsx";
import { AuroraBackground } from "../component/aurora-background.jsx";
import { FocusCards } from "../component/focus-cards.jsx";
import { WobbleCardDemo } from "../component/wobble-card.jsx";
import {
  IndustryPonits, ShowCaseCart,
  ServiceCards,

} from "../component/cards.jsx";
import { BackgroundBeamsWithCollisionDemo } from "../component/footer-background-lines.jsx";
////----------------------------

export function HOME() {

  return (
    <>
      <div className="w-full mx-auto min-h-screen overflow-hidden">
        <HeroSection />
      </div>
      <WobbleCardDemo />
      <IndustryPonits />
      <AuroraBackground className="w-full min-h-screen overflow-hidden flex flex-col mt-10">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 flex-grow"
        >
        </motion.div>
        <ServiceCards />
      </AuroraBackground>
      <ShowCaseCart />

      <FocusCards />

      <BackgroundBeamsWithCollisionDemo />
    </>

  );
}
