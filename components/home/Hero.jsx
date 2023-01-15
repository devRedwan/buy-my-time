import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="hero__Section max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="hero__landing">
      <ScrollAnimationWrapper>
        <motion.div
          className="heroContainer grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}>
          <div className="heroText__wrapper flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="heroText__title text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Your go-to for companionship and convenience.
            </h1>
            <p className="heroText__para text-black-500 mt-4 mb-6">
              <span className="text-blue-500 font-bold">BuyMyTime:</span> The
              ultimate solution for all your companionship and convenience needs
              - waiting in line, events, and more
            </p>

            <ButtonPrimary className="heroButton">
              <Link href="/explore">Browse Services</Link>
            </ButtonPrimary>
          </div>
          <div className="heroIllustration__wrapper flex w-full">
            <motion.div
              className="heroIllustration__img h-full w-full"
              variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.svg"
                alt="BMT Illustrasion"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
