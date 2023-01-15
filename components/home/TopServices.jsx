import { motion } from "framer-motion";
import React, { useMemo } from "react";
import getScrollAnimation from "../../utils/getScrollAnimation";
import Carousel from "../misc/carousel/Carousel";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const TopServices = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="topServices__section bg-gradient-to-b from-white-300 to-white-500 w-full sm:py-14"
      id="topServices">
      <div className="topServices__container max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div
          className="topServices__carouselWrapper flex flex-col w-full my-8 sm:my-16"
          id="topServices__carousel">
          <ScrollAnimationWrapper className="topServices__textWrapper">
            <motion.h3
              variants={scrollAnimation}
              className="topServices__title text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-6/12 mx-auto">
              Top Selling Services
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="topServices__carousel w-full flex flex-col pt-5 pb-12 relative">
            <motion.div variants={scrollAnimation}>
              <Carousel className="carousel" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
