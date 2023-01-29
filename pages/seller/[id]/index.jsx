import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import ExploreServices from "../../../components/explore/ExploreServices";
import Layout from "../../../components/layout/index";
import ScrollAnimationWrapper from "../../../components/layout/ScrollAnimationWrapper";
import SeoHead from "../../../components/layout/SeoHead";
import ButtonPrimary from "../../../components/misc/buttons/ButtonPrimary";
import SellerImageCard from "../../../components/misc/seller-card/SellerImageCard";
import ServicesContext from "../../../context/servicesContext";
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
          <SellerImageCard
            selectedSeller={selectedSeller}
            className="w-3/4 sm:w-2/3"
          />
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
