import { motion } from "framer-motion";
import { useState } from "react";
import ExploreSellers from "../components/explore/ExploreSellers";
import ExploreServices from "../components/explore/ExploreServices";
import Layout from "../components/layout";
import ScrollAnimationWrapper from "../components/layout/ScrollAnimationWrapper";
import AccordianMenu from "../components/misc/AccordianMenu";
import SeoHead from "../components/SeoHead";
import getScrollAnimation from "../utils/getScrollAnimation";

export default function Explore() {
  const scrollAnimation = getScrollAnimation();

  return (
    <>
      <SeoHead title="Buy My Time | Explore" />
      <Layout>
        <header className="exploreTitleWrapper bg-[url('https://i.postimg.cc/s2j9Dn6S/Explore-title-background.png')] bg-no-repeat bg-cover bg-blend-overlay h-32 sm:h-40 w-screen">
          <div className="h-full w-full flex justify-center items-center bg-blue-500 bg-opacity-70">
            <h1 className="exploreTitle text-4xl sm:text-7xl font-semibold  text-white-500 tracking-widest">
              Explore
            </h1>
          </div>
        </header>
        <main className="explore px-8 xl:px-16 max-w-screen-xl mx-auto">
          <ScrollAnimationWrapper>
            <motion.div
              className="grid grid-flow-row gap-8 py-6 sm:py-16 sm:grid-flow-col"
              variants={scrollAnimation}>
              <AccordianMenu title="Services">
                <ExploreServices />
              </AccordianMenu>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="grid grid-flow-row gap-8 pt-6 pb-12 sm:pt-16 sm:pb-32 sm:grid-flow-col"
              variants={scrollAnimation}>
              <AccordianMenu title="Service Professionals">
                <ExploreSellers />
              </AccordianMenu>
            </motion.div>
          </ScrollAnimationWrapper>
        </main>
      </Layout>
    </>
  );
}
