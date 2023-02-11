import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <main
      className="hero__Section max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="hero__landing">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:py-16 sm:grid-flow-col sm:grid-cols-2 md:grid-rows-1"
          variants={scrollAnimation}>
          <div className="heroText__wrapper flex flex-col justify-center items-center sm:items-start row-start-2 sm:row-start-1">
            <h1 className="heroText__title text-center sm:text-left text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Your go-to for companionship and convenience.
            </h1>
            <p className="heroText__para text-black-500 mt-4 mb-6 text-center sm:text-left">
              <span className="text-blue-500 font-bold">BuyMyTime:</span> The
              ultimate solution for all your companionship and convenience needs
              - waiting in line, events, and more
            </p>

            <ButtonPrimary addClass="heroButton" href="/explore">
              Browse Services
            </ButtonPrimary>
          </div>
          <div className="heroIllustration__wrapper flex h-auto w-full items-center justify-center relative sm:row-start-1">
            <motion.div
              className="heroIllustration__img h-full w-full relative"
              variants={scrollAnimation}>
              <Image
                priority
                src="/assets/Illustration1.svg"
                alt="BuyMyTime Illustrasion"
                height={500}
                width={500}
                className="h-auto w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </main>
  );
};

export default Hero;
