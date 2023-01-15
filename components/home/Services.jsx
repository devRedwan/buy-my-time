import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import Maps from "../../public/assets/HugeGlobal.svg";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const services = [
  "Companionship for any situation.",
  "Stand-in for events or social gatherings.",
  "Convenient waiting services - never wait on another line, our professionals are here to do it for you.",
  "Secure payments on all services.",
];

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

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

      <div className="serviceMap__section text-center bg-gradient-to-b from-white-300 to-white-500 w-full flex flex-col  md:my-16 pt-10">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="serviceMap__sectionTitle text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-10/12 sm:w-6/12  mx-auto">
            Our professionals travel all over for their clients
          </motion.h3>
          <motion.p
            className="serviceMap__sectionPara leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
            variants={scrollAnimation}>
            Our services are adaptable to international requirements, subject to
            the execution of a legally binding agreement between the
            professional and the client.
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="serviceMap__map py-12 w-full px-8 mt-16"
            variants={scrollAnimation}>
            <Maps className="w-full h-auto" />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </>
  );
};

export default Services;
