import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const services = [
    "Companionship for any situation.",
    "Stand-in for events or social gatherings.",
    "Convenient waiting services - never wait on another line, our professionals are here to do it for you.",
    "Secure payments on all services.",
  ];

  return (
    <>
      <div
        className="service__Section max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
        id="feature">
        <div className="serviceGrid__container grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <ScrollAnimationWrapper className="serviceGrid__imageWrapper flex w-full justify-end">
            <motion.div
              className="serviceGrid__image h-full w-full p-4"
              variants={scrollAnimation}>
              <Image
                src="/assets/Illustration2.svg"
                alt="BMT Illustrasion"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="serviceGrid__textWrapper flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
              variants={scrollAnimation}>
              <h3 className="serviceGrid__textTitle text-2xl  md:text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                Find the Most Convenient Services on BuyMyTime
              </h3>
              <p className="serviceGrid__textPara my-2 text-black-500">
                Explore a variety of services offered by our world-class
                professionals on BuyMyTime.
              </p>
              <ul className="serviceText__services text-black-500 self-start list-inside ml-8">
                {services.map((service, index) => (
                  <motion.li
                    className="serviceText__service relative circle-check custom-list"
                    custom={{ duration: 1 + index }}
                    variants={scrollAnimation}
                    key={index}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.1,
                      },
                    }}>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Services;
