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
        className="service__Section mx-auto mt-8 mb-6 max-w-screen-xl px-6 sm:mt-14 sm:mb-14 sm:px-8 lg:px-16"
        id="feature">
        <div className="serviceGrid__container p y-8 my-12 grid grid-flow-row grid-cols-1 gap-8  sm:grid-flow-col sm:grid-cols-2">
          <ScrollAnimationWrapper className="serviceGrid__imageWrapper flex w-full justify-end">
            <motion.div
              className="serviceGrid__image h-full w-full p-4 relative"
              variants={scrollAnimation}>
              <Image
                priority
                src="/assets/Illustration2.svg"
                alt="BuyMyTime Illustrasion"
                className="h-auto w-auto"
                height={500}
                width={500}
              />
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="serviceGrid__textWrapper ml-auto flex w-full flex-col items-end justify-center lg:w-9/12"
              variants={scrollAnimation}>
              <h3 className="serviceGrid__textTitle text-2xl  font-medium leading-relaxed text-black-600 md:text-3xl lg:text-4xl">
                Find the Most Convenient Services on{" "}
                <span className="text-blue-500">BuyMyTime</span>
              </h3>
              <p className="serviceGrid__textPara my-2 text-black-500">
                Explore a variety of services offered by our world-class
                professionals on BuyMyTime.
              </p>
              <ul className="serviceText__services ml-8 list-inside self-start text-black-500">
                {services.map((service, index) => (
                  <motion.li
                    className="serviceText__service circle-check custom-list relative"
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
