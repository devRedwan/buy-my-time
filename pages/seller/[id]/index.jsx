import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import ExploreServices from "../../../components/explore/ExploreServices";
import Layout from "../../../components/layout/index";
import ScrollAnimationWrapper from "../../../components/layout/ScrollAnimationWrapper";
import SeoHead from "../../../components/layout/SeoHead";
import ButtonPrimary from "../../../components/misc/buttons/ButtonPrimary";
import ServicesContext from "../../../context/servicesContext";
import StarIcon from "../../../public/assets/Icon/stars.svg";
import { getUniqueSellerServices } from "../../../utils/getFilteredData";
import getScrollAnimation from "../../../utils/getScrollAnimation";

const Seller = () => {
  const router = useRouter();
  const scrollAnimation = getScrollAnimation();
  const { sellers, services } = useContext(ServicesContext);
  const { id: selectedSellerId } = router?.query;
  const selectedSeller = sellers?.find(
    (seller) => seller.id === selectedSellerId
  );

  return (
    <Layout>
      <SeoHead title="Buy My Time | Seller Profile" />
      <header className="sellerProfileTitleWrapper bg-[url('https://i.postimg.cc/jjf1SLKb/raniputul-full-frame-filled-with-small-customer-se.png')] bg-no-repeat bg-cover bg-blend-overlay h-32 sm:h-40 w-full">
        <div className="h-full w-full flex justify-center items-center bg-blue-500 bg-opacity-80">
          <h1 className="sellerProfileTitle text-center text-4xl sm:text-5xl lg:text-7xl font-semibold  text-white-500 tracking-wider">
            Professional Profile
          </h1>
        </div>
      </header>

      <main className="sellerProfile py-7 px-8 xl:px-16 max-w-screen-xl mx-auto">
        <ScrollAnimationWrapper className="sellerSection w-full flex justify-center items-center py-6 sm:py-16">
          <motion.div
            className="sellerInfoWrapper w-3/4 sm:w-2/3 max-w-xl rounded-lg flex felx-col items-center justify-center shadow-lg shadow-gray-400 relative group overflow-hidden"
            variants={scrollAnimation}>
            <img
              src={selectedSeller?.sellerImageUrl}
              alt="BuyMyTime Service Professional Image"
              className="w-full overflow-hidden rounded-lg group-hover:scale-105 group-hover:blur-sm transition-all duration-500 ease-in-out"
            />
            <div className="sellerInfo__bg absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-300 to-blue-100  rounded-lg overflow-hidden opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"></div>

            <div className="sellerDescription flex flex-col absolute opacity-0 translate-y-72 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h2 className="sellerName w-full text-center font-semibold mb-3 text-2xl sm:text-4xl md:text-5xl">
                {selectedSeller?.name}
              </h2>
              <h3 className="sellerSeller__info flex flex-col items-center sm:flex-row justify-evenly mx-auto ">
                Total Listed Services: {selectedSeller?.totalServices}
              </h3>
              <div className="sellerDescription leading-relaxed mb-3 text-md flex items-center justify-center">
                <p className="text-black-600">
                  Rating: {selectedSeller?.sellerRating}{" "}
                </p>
                <StarIcon className="h-5 w-5 mb-1" />
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="listedServicesSection w-full flex flex-col py-6 sm:py-16">
          <motion.div
            className="listedServicesWrapper max-w-screen-xl flex flex-col items-center justify-center"
            variants={scrollAnimation}>
            <h2 className="listedServicesTitle w-full text-center text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal p-2 my-4 relative">
              {selectedSeller?.name}'s Services
            </h2>
            <div className="listedServices flex flex-wrap justify-evenly text-center animate-floatUp my-6">
              <ExploreServices
                getFilteredServices={getUniqueSellerServices(
                  services,
                  selectedSellerId
                )}
                services={services}
              />
            </div>
          </motion.div>
          <ButtonPrimary
            addClass="moreSellersButton w-fit mx-auto right-1/2 mt-10 sm:mt-5"
            href="/explore">
            More Sellers
          </ButtonPrimary>
        </ScrollAnimationWrapper>
      </main>
    </Layout>
  );
};

export default Seller;
