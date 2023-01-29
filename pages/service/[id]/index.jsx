import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Layout from "../../../components/layout/index";
import ScrollAnimationWrapper from "../../../components/layout/ScrollAnimationWrapper";
import SeoHead from "../../../components/layout/SeoHead";
import ButtonOutline from "../../../components/misc/buttons/ButtonOutline";
import ButtonPrimary from "../../../components/misc/buttons/ButtonPrimary";
import SellerImageCard from "../../../components/misc/seller-card/SellerImageCard";
import ServicesContext from "../../../context/servicesContext";
import StarIcon from "../../../public/assets/Icon/stars.svg";
import getScrollAnimation from "../../../utils/getScrollAnimation";

const Service = () => {
  const scrollAnimation = getScrollAnimation();
  const router = useRouter();
  const { id: serviceSelectedId } = router?.query;
  const { services, sellers } = useContext(ServicesContext);
  const selectedService = services.find(
    (service) => service?.id === serviceSelectedId
  );
  const sellerOfSelectedService = sellers.find(
    (seller) => seller?.id === selectedService?.seller?.id
  );

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
            className="serviceSelectedInfo py-6 sm:py-16 flex justify-center"
            variants={scrollAnimation}>
            <section className="serviceSelected__Details realtive flex">
              <div className="serviceSelected__LeftColumn max-w-2xl">
                <h2 className="serviceSelected__Title text-3xl font-medium">
                  {selectedService?.title}
                </h2>
                <div className="service__metaData flex flex-wrap justify-start items-center py-3 lg:hidden">
                  <div className="sellerinfo__wrapper flex items-center my-3 group ">
                    <img
                      className="seller__image w-12 h-12 object-cover rounded-full shadow-xl shadow-blue-100 group-hover:scale-125 hover:shadow-blue-300 transition-all duration-500 ease-in-out cursor-pointer "
                      src={selectedService?.seller.sellerImageUrl}
                      alt="Service Professional - buymytime"
                    />
                    <h3 className="seller__name text-md transition-all duration-500 ease-in-out m-3">
                      {selectedService?.seller.name}
                    </h3>
                  </div>
                  <div className="service__metaData flex xs:border-l-2 border-gray-500">
                    <div className="serviceMeta__visits flex px-2 ">
                      <EyeIcon className="h-5 w-5 text-green-500" /> &nbsp;
                      {selectedService?.visits}
                    </div>
                    <div className="serviceMeta__likes flex px-2">
                      <HeartIcon className="h-5 w-5 text-blue-500" />
                      &nbsp;
                      {selectedService?.likes}
                    </div>
                    <div className="serviceMeta__rating flex px-2">
                      <StarIcon className="h-5 w-5" />
                      &nbsp;
                      {selectedService?.rating.toFixed(1)}
                    </div>
                  </div>
                </div>
                <figure className="serviceSelected__ImgWrapper my-4">
                  <img
                    src={selectedService?.serviceImageUrl}
                    alt="service Image"
                    className="serviceSelected__Img w-full object-cover overflow-hidden rounded-lg shadow-lg shadow-blue-100  hover:shadow-lg hover:shadow-blue-500 transition-all duration-300 ease-out"
                  />
                </figure>
                <p className="serviceSelected__description mt-4">
                  {selectedService?.description}
                </p>
                <h3 className="serviceSelected__Price text-xl mt-4">
                  ${selectedService?.price} / Hour
                </h3>
                <ButtonPrimary addClass="my-4 mr-4">Add to Cart</ButtonPrimary>
                <button
                  className="py-2 lg:py-3 px-9 lg:px-13 text-blue-500 font-semibold rounded-lg transition-all border-blue-500 border-2 cursor-not-allowed"
                  onClick={() => {
                    alert("Feature in construction. Coming up soon");
                  }}>
                  Contact Seller
                </button>
              </div>

              <div className="serviceSelected__rightColumn service__metaData hidden lg:flex flex-col items-center justify-start py-3 ml-16">
                <Link
                  href="/seller/[id]"
                  as={`/seller/${sellerOfSelectedService?.id}`}>
                  <div className="sellerImageInfo__wrapper flex flex-col justify-center items-center my-3 w-60 cursor-pointer">
                    <h3 className="serviceSeller__meta text-lg">
                      Service Provided By
                    </h3>
                    <SellerImageCard
                      selectedSeller={sellerOfSelectedService}
                      customSellerNameStyle="lg:text-xl"
                      className="cursor-pointer"
                    />
                  </div>
                </Link>

                <div className="service__metaData flex xs:border-l-2 border-gray-500">
                  <div className="serviceMeta__visits flex px-2 ">
                    <EyeIcon className="h-5 w-5 text-green-500" /> &nbsp;
                    {selectedService?.visits}
                  </div>
                  <div className="serviceMeta__likes flex px-2">
                    <HeartIcon className="h-5 w-5 text-blue-500" />
                    &nbsp;
                    {selectedService?.likes}
                  </div>
                  <div className="serviceMeta__rating flex px-2">
                    <StarIcon className="h-5 w-5" />
                    &nbsp;
                    {selectedService?.rating.toFixed(1)}
                  </div>
                </div>
              </div>
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
