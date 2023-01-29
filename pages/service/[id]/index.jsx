import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Layout from "../../../components/layout/index";
import ScrollAnimationWrapper from "../../../components/layout/ScrollAnimationWrapper";
import SeoHead from "../../../components/layout/SeoHead";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import { useContext } from "react";
import ServicesContext from "../../../context/servicesContext";
import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid";
import StarIcon from "../../../public/assets/Icon/stars.svg";
import ButtonOutline from "../../../components/misc/buttons/ButtonOutline";
import ButtonPrimary from "../../../components/misc/buttons/ButtonPrimary";

const Service = () => {
  const scrollAnimation = getScrollAnimation();
  const router = useRouter();
  const { id: serviceSelectedId } = router?.query;
  const { services } = useContext(ServicesContext);
  const service = services.find((service) => service?.id === serviceSelectedId);
  console.log(service);

  return (
    <Layout>
      <SeoHead title="Buy My Time | Service Details" />
      <header className="serviceInfoWrapper bg-[url('https://i.postimg.cc/fLmQp8kY/raniputul-convinience-illustrations-waiting-illust.png')] bg-no-repeat bg-cover bg-blend-overlay h-32 sm:h-40 w-full">
        <div className="titleWrapper h-full w-full flex justify-center items-center bg-blue-500 bg-opacity-80">
          <h1 className="title text-4xl sm:text-7xl font-semibold  text-white-500 tracking-wider">
            Service Details
          </h1>
        </div>
      </header>
      <main className="serviceSelectedInfoWrapper px-8 xl:px-16 max-w-screen-xl mx-auto">
        <ScrollAnimationWrapper>
          <motion.div
            className="serviceSelectedInfo grid grid-flow-row gap-8 py-6 sm:py-16 sm:grid-flow-col justify-items-center lg:justify-items-start "
            variants={scrollAnimation}>
            <section className="serviceSelected__Details max-w-2xl realtive ">
              <h2 className="serviceSelected__Title text-3xl font-medium">
                {service?.title}
              </h2>
              <div className="service__metaData flex flex-wrap justify-start items-center py-3 lg:hidden">
                <div className="sellerinfo__wrapper flex items-center my-3 group ">
                  <img
                    className="seller__image w-12 h-12 object-cover rounded-full shadow-xl shadow-blue-100 group-hover:scale-125 hover:shadow-blue-300 transition-all duration-500 ease-in-out cursor-pointer"
                    src={service?.seller.sellerImageUrl}
                    alt="Service Professional - buymytime"
                  />

                  <h3 className="seller__name text-md transition-all duration-500 ease-in-out m-3">
                    {service?.seller.name}
                  </h3>
                </div>
                <div className="service__metaData flex xs:border-l-2 border-gray-500">
                  <div className="serviceMeta__visits flex px-2 ">
                    <EyeIcon className="h-5 w-5 text-green-500" /> &nbsp;
                    {service?.visits}
                  </div>
                  <div className="serviceMeta__likes flex px-2">
                    <HeartIcon className="h-5 w-5 text-blue-500" />
                    &nbsp;
                    {service?.likes}
                  </div>
                  <div className="serviceMeta__rating flex px-2">
                    <StarIcon className="h-5 w-5" />
                    &nbsp;
                    {service?.rating.toFixed(1)}
                  </div>
                </div>
              </div>
              <figure className="serviceSelected__ImgWrapper my-4">
                <img
                  src={service?.serviceImageUrl}
                  alt="service Image"
                  className="serviceSelected__Img w-full object-cover overflow-hidden rounded-lg shadow-lg shadow-blue-100 hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </figure>
              <p className="serviceSelected__description mt-4">
                {service?.description}
              </p>
              <h3 className="serviceSelected__Price text-xl mt-4">
                ${service?.price} / Hour
              </h3>
              <ButtonPrimary addClass="my-4 mr-4 rounded-full">
                Add to Cart
              </ButtonPrimary>
              <ButtonOutline
                onClick={() => {
                  alert("Feature implementation under construction");
                }}
                addClass="py-3 lg:py-4 px-12 lg:px-16 cursor-not-allowed hover:bg-white-500 hover:text-blue-300 transition-all hover:shadow-none"
                disabled>
                Contact Seller
              </ButtonOutline>
            </section>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="serviceFeatured grid grid-flow-row gap-8 pt-6 pb-12 sm:pt-16 sm:pb-32 sm:grid-flow-col"
            variants={scrollAnimation}>
            Sections
          </motion.div>
        </ScrollAnimationWrapper>
      </main>
    </Layout>
  );
};

export default Service;
