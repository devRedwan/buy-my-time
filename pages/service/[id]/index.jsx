import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Layout from "../../../components/layout/index";
import ScrollAnimationWrapper from "../../../components/layout/ScrollAnimationWrapper";
import SeoHead from "../../../components/layout/SeoHead";
import getScrollAnimation from "../../../utils/getScrollAnimation";

const Service = () => {
  const router = useRouter();
  const { id } = router?.query;
  const scrollAnimation = getScrollAnimation();

  return (
    <Layout>
      <SeoHead title="Buy My Time | Service Details" />
      <header className="exploreTitleWrapper bg-[url('https://i.postimg.cc/fLmQp8kY/raniputul-convinience-illustrations-waiting-illust.png')] bg-no-repeat bg-cover bg-blend-overlay h-32 sm:h-40 w-full">
        <div className="h-full w-full flex justify-center items-center bg-blue-500 bg-opacity-80">
          <h1 className="exploreTitle text-4xl sm:text-7xl font-semibold  text-white-500 tracking-wider">
            Service Details
          </h1>
        </div>
      </header>
      <main className="explore px-8 xl:px-16 max-w-screen-xl mx-auto">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row gap-8 py-6 sm:py-16 sm:grid-flow-col"
            variants={scrollAnimation}>
            Sections
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row gap-8 pt-6 pb-12 sm:pt-16 sm:pb-32 sm:grid-flow-col"
            variants={scrollAnimation}>
            Sections
          </motion.div>
        </ScrollAnimationWrapper>
      </main>
    </Layout>
  );
};

export default Service;
