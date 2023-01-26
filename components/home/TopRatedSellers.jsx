import { motion } from "framer-motion";
import { useContext } from "react";
import ServicesContext from "../../context/servicesContext";
import { getTopRatedSellers } from "../../utils/getFilteredData";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";
import SellerCard from "../misc/seller-card/SellerCard";
import SellerSkeletonCard from "../misc/seller-card/SellerSkeletonCard";

const TopRatedSellers = () => {
  const scrollAnimation = getScrollAnimation();
  const { sellers } = useContext(ServicesContext);
  const topRatedSellers = getTopRatedSellers(sellers);

  return (
    <main className="topSeller__section section">
      <section className="topSeller__container container">
        <div className="topSellers__gridWrapper flex flex-col w-full my-8 sm:my-16 ">
          <ScrollAnimationWrapper className="topSellers__textWrapper section__textWrapper">
            <motion.h3
              variants={scrollAnimation}
              className="topSellers__title section__title">
              Top Rated Service Professionals
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="topSellers__grid pt-5 pb-12 relative">
            <div className="topSeller__gridItems w-full flex flex-col sm:flex-row flex-wrap items-center justify-center">
              {topRatedSellers.map((seller) =>
                seller ? (
                  <SellerCard seller={seller} key={seller.id} />
                ) : (
                  <SellerSkeletonCard />
                )
              )}
            </div>

            <ButtonPrimary
              addClass="moreSellersButton w-fit mx-auto mt-10 sm:mt-5"
              href="/explore">
              More Sellers
            </ButtonPrimary>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </main>
  );
};

export default TopRatedSellers;
