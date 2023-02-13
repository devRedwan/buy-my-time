import { useRouter } from "next/router";
import { useContext } from "react";
import ExploreServices from "../../../components/explore/ExploreServices";
import Layout from "../../../components/Layout/MainLayout";
import ScrollAnimationWrapper from "../../../components/Layout/ScrollAnimationWrapper";
import SeoHead from "../../../components/Layout/SeoHead";
import ButtonPrimary from "../../../components/misc/buttons/ButtonPrimary";
import PageHeader from "../../../components/misc/PageHeader";
import SellerImageCard from "../../../components/misc/seller-card/SellerImageCard";
import { ServicesContext } from "../../../context/Contexts";
import { getUniqueSellerServices } from "../../../utils/getFilteredData";

const Seller = () => {
  const router = useRouter();
  const { sellers, services } = useContext(ServicesContext);
  const { id: selectedSellerId } = router?.query;
  const selectedSeller = sellers?.find(
    (seller) => seller.id === selectedSellerId
  );

  return (
    <Layout>
      <SeoHead title="Buy My Time | Seller Profile" />
      <PageHeader
        title="Service Professional"
        bgImageKey="SellerProfileBGImage"
      />

      <main className="sellerProfile py-7 px-8 xl:px-16 max-w-screen-xl mx-auto">
        <ScrollAnimationWrapper className="sellerSection w-full flex justify-center items-center py-6 sm:py-16">
          <SellerImageCard
            selectedSeller={selectedSeller}
            className="w-3/4 sm:w-2/3"
          />
        </ScrollAnimationWrapper>

        <div className="listedServicesSection w-full flex flex-col py-6 sm:py-16">
          <div className="listedServicesWrapper max-w-screen-xl flex flex-col items-center justify-center">
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
          </div>
          <ButtonPrimary
            addClass="moreSellersButton w-fit mx-auto right-1/2 mt-10 sm:mt-5"
            href="/explore">
            More Sellers
          </ButtonPrimary>
        </div>
      </main>
    </Layout>
  );
};

export default Seller;
