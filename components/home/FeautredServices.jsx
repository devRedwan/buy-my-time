import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ServicesContext } from "../../context/Contexts";
import {
  getMostPopularServices,
  getTopRatedServices,
} from "../../utils/getFilteredData";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";
import Carousel from "../misc/carousel/Carousel";

const FeaturedServices = () => {
  const scrollAnimation = getScrollAnimation();
  const { services } = useContext(ServicesContext);
  const topRatedServices = getTopRatedServices(services);
  const mostPopularServices = getMostPopularServices(services);

  return (
    <main className="featuredServices__section section">
      <section className="featuredServices__container container">
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
          <ButtonPrimary
            addClass="moreServicesButton w-fit mx-auto mt-10 sm:mt-5"
            href="/explore">
            More Services
          </ButtonPrimary>
        </div>
        <div className="popularServices__carouselWrapper carouselWrapper flex flex-col w-full my-8 sm:my-16 ">
          <ScrollAnimationWrapper className="popularServices__textWrapper section__textWrapper">
            <motion.h3
              variants={scrollAnimation}
              className="popularServices__title section__title">
              Most Popular Services
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="popularServices__carousel section__carousel  w-full flex flex-col pt-5 pb-12 relative">
            <motion.div variants={scrollAnimation}>
              <Carousel
                className="carousel"
                servicesData={mostPopularServices}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ButtonPrimary
            addClass="moreServicesButton w-fit mx-auto mt-10 sm:mt-5"
            href="/explore">
            More Services
          </ButtonPrimary>
        </div>
      </section>
    </main>
  );
};

export default FeaturedServices;
