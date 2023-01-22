import { motion } from "framer-motion";
import React, { useContext } from "react";
import ServicesContext from "../../context/servicesContext";
import { getTopRatedServices } from "../../utils/getFilteredData";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import Carousel from "../misc/carousel/Carousel";

const TopRatedServices = () => {
  const scrollAnimation = getScrollAnimation();
  const { services } = useContext(ServicesContext);
  const topRatedServices = getTopRatedServices(services);

  return (
    <main className="topServices__section section">
      <section className="topServices__container container">
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
              <Carousel className="carousel" servicesData={topRatedServices} />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </main>
  );
};

export default TopRatedServices;
