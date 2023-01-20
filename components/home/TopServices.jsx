import { motion } from "framer-motion";
import React from "react";
import getScrollAnimation from "../../utils/getScrollAnimation";
import getTopRatedServices from "../../utils/getTopRatedServices";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Carousel from "../misc/carousel/Carousel";
import { services } from "../../ServicesData";

const TopServices = () => {
  const scrollAnimation = getScrollAnimation();
  const topRatedServices = getTopRatedServices(services);

  return (
    <div className="topServices__section section">
      <div className="topServices__container container">
        <div className="topServices__carouselWrapper carouselWrapper flex flex-col w-full my-8 sm:my-16 ">
          <ScrollAnimationWrapper className="topServices__textWrapper section__textWrapper">
            <motion.h3
              variants={scrollAnimation}
              className="topServices__title section__title">
              Top Rated Services
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="topServices__carousel section__carousel  w-full flex flex-col pt-5 pb-12 relative">
            <motion.div variants={scrollAnimation}>
              <Carousel
                className="carousel"
                customServiceData={topRatedServices}
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
