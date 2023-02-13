import {
  ChatBubbleLeftRightIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Layout from "../../../components/Layout/MainLayout.jsx";
import ScrollAnimationWrapper from "../../../components/Layout/ScrollAnimationWrapper.jsx";
import SeoHead from "../../../components/Layout/SeoHead";
import ButtonPrimary from "../../../components/misc/buttons/ButtonPrimary";
import Carousel from "../../../components/misc/carousel/Carousel";
import PageHeader from "../../../components/misc/PageHeader";
import ExistingReviews from "../../../components/misc/reviews/ExistingReviews.jsx";
import PostReview from "../../../components/misc/reviews/PostReview.jsx";
import Modal from "../../../components/misc/Modal";
import SellerImageCard from "../../../components/misc/seller-card/SellerImageCard";
import {
  SkeletonSeller,
  SkeletonServiceDetails,
} from "../../../components/misc/service-card/skeleton";
import { AuthContext, ServicesContext } from "../../../context/Contexts";
import { getFeaturedServices } from "../../../utils/getFilteredData";
import getScrollAnimation from "../../../utils/getScrollAnimation";

const Service = () => {
  const scrollAnimation = getScrollAnimation();
  const router = useRouter();
  const { id: serviceSelectedId } = router?.query;
  const {
    services,
    setServices,
    sellers,
    setCart,
    cart,
    reviews,
    setServiceId,
  } = useContext(ServicesContext);
  const { toggleModalOpen } = useContext(AuthContext);
  const [loading, setLoading] = useState();
  const featuredServices = getFeaturedServices(services, serviceSelectedId);
  setServiceId(serviceSelectedId);

  const selectedService = services.find(
    (service) => service?.id === serviceSelectedId
  );

  const sellerOfSelectedService = sellers.find(
    (seller) => seller?.id === selectedService?.seller?.id
  );

  const addToCart = (selectedService) => {
    const LoadingToast = toast.loading("adding ...");

    setCart((prevCart) => {
      const existingService = prevCart.find(
        (service) => service._id === selectedService._id
      );
      if (existingService) {
        existingService.quantity += 1;
        return [...prevCart];
      } else {
        const updatedCart = [
          ...prevCart,
          {
            ...selectedService,
            quantity: 1,
            totalPrice: selectedService?.price,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });

    toast.success("Added to Cart", {
      id: LoadingToast,
    });
  };

  const serviceExistsOnCart = () => {
    return cart?.find((service) => service?.id === serviceSelectedId);
  };

  const updateServiceStats = async (stat) => {
    const updatedService = {
      ...selectedService,
      [stat]: selectedService?.[stat] + 1,
    };
    await fetch(`/api/updateServiceStats`, {
      body: JSON.stringify(updatedService),
      method: "PATCH",
    });
    const updatedServices = services?.map((service) => {
      if (service?.id === selectedService?.id) {
        return updatedService;
      }
      return service;
    });
    setServices(updatedServices);
  };

  const addToLikes = async () => {
    try {
      const LoadingToast = toast.loading("Updating");
      updateServiceStats("likes");
      setTimeout(() => {
        toast.success("Updated", {
          id: LoadingToast,
        });
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("We are sorry, there was issue");
    }
  };

  const updateVisits = async () => {
    try {
      if (sessionStorage.getItem(selectedService?.id) !== "visited") {
        updateServiceStats("visits");
        sessionStorage.setItem(selectedService?.id, "visited");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateVisits();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Layout>
        <SeoHead title="Buy My Time | Service Details" />
        <PageHeader
          title="Service Details"
          bgImageKey="ServiceDetailsBGImage"
        />
        <main
          className={
            "serviceSelectedInfoWrapper px-8 xl:px-16 max-w-screen-xl mx-auto"
          }>
          <ScrollAnimationWrapper>
            <motion.div
              className="serviceSelectedInfo py-6 sm:py-16 flex justify-center"
              variants={scrollAnimation}>
              <section className="serviceSelected__Details realtive flex flex-col justify-center items-center">
                {loading ? (
                  <div className="flex">
                    <SkeletonServiceDetails />
                    <SkeletonSeller />
                  </div>
                ) : (
                  <div className="serviceDetails flex transition-all duration-300 ease-in-out">
                    <div className="serviceSelected__LeftColumn max-w-2xl">
                      <h2 className="serviceSelected__Title text-3xl lg:text-4xl font-medium">
                        {selectedService?.title}
                      </h2>
                      <div className="service__metaData flex flex-wrap justify-start items-center py-3 lg:hidden">
                        <div className="sellerinfo__wrapper flex items-center my-3 group ">
                          <Link
                            href="/seller/[id]"
                            as={`/seller/${sellerOfSelectedService?.id}`}>
                            <img
                              className="seller__image w-12 h-12 object-cover rounded-full shadow-xl shadow-blue-100 group-hover:scale-125 hover:shadow-blue-300 transition-all duration-500 ease-in-out cursor-pointer "
                              src={selectedService?.seller.sellerImageUrl}
                              alt="Service Professional - buymytime"
                            />
                          </Link>
                          <h3 className="seller__name text-md transition-all duration-500 ease-in-out m-3">
                            {selectedService?.seller.name}
                          </h3>
                        </div>
                        <div className="service__metaData flex xs:border-l-2 border-gray-500">
                          <div className="serviceMeta__visits flex items-center mx-2 px-2 border border-blue-500 rounded-lg">
                            <EyeIcon className="h-5 w-5 text-green-500" />{" "}
                            &nbsp;
                            {selectedService?.visits}
                          </div>
                          <div
                            className="serviceMeta__likes flex mx-2 px-2 items-center rounded-lg bg-blue-100 border border-blue-500 cursor-pointer"
                            onClick={() => addToLikes()}>
                            <HeartIcon className="h-5 w-5 text-blue-500" />
                            &nbsp;
                            {selectedService?.likes}
                          </div>
                          <div
                            className="serviceMeta__rating flex mx-2 px-2 items-center rounded-lg bg-blue-100 border border-blue-500 cursor-pointer"
                            onClick={() => toggleModalOpen("reviews")}>
                            <Image
                              src="/assets/Icon/stars.svg"
                              alt="BuyMyTime Icon"
                              height={50}
                              width={50}
                              className="h-5 w-5"
                            />
                            &nbsp;
                            {selectedService?.rating.toFixed(1)}
                          </div>
                          <div
                            className="serviceMeta__review flex mx-2 px-2 items-center rounded-lg bg-blue-100 border border-blue-500 cursor-pointer"
                            onClick={() => toggleModalOpen("reviews")}>
                            <ChatBubbleLeftRightIcon className="h-5 w-5 text-red" />
                            &nbsp;
                            {reviews?.length}
                          </div>
                        </div>
                      </div>
                      <figure className="serviceSelected__ImgWrapper my-4">
                        <img
                          src={selectedService?.serviceImageUrl}
                          alt="service Image"
                          className="serviceSelected__Img w-full object-cover overflow-hidden rounded-lg shadow-lg shadow-blue-100  hover:shadow-lg hover:shadow-blue-300 transition-all duration-200 ease-in-out"
                        />
                      </figure>
                      <p className="serviceSelected__description mt-4">
                        {selectedService?.description}
                      </p>
                      <h3 className="serviceSelected__Price text-xl mt-4">
                        ${selectedService?.price} / Hour
                      </h3>
                      {serviceExistsOnCart() ? (
                        <ButtonPrimary addClass="my-4 mr-4" href="/cart">
                          Checkout
                        </ButtonPrimary>
                      ) : (
                        <ButtonPrimary
                          addClass="my-4 mr-4"
                          onClick={() => addToCart(selectedService)}>
                          Add to Cart
                        </ButtonPrimary>
                      )}
                      <button
                        className="py-2 lg:py-3 px-9 lg:px-13 text-blue-500 font-semibold rounded-lg transition-all border-blue-500 border-2 cursor-not-allowed"
                        onClick={() => {
                          toast.error("Feature under construction...🛠️", {
                            icon: "🚧",
                            duration: 3000,
                          });
                        }}>
                        Contact Seller
                      </button>
                    </div>
                    <div
                      className={
                        "serviceSelected__rightColumn service__metaData hidden lg:flex flex-col items-center justify-center py-3 ml-16 "
                      }>
                      <Link
                        href="/seller/[id]"
                        as={`/seller/${sellerOfSelectedService?.id}`}>
                        <div className="sellerImageInfo__wrapper  flex-col justify-center items-center my-3 w-60 cursor-pointer">
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
                      <div className="service__metaData flex flex-col mt-5">
                        <h3 className="serviceMeta__Title text-lg py-3 text-center">
                          Service Stats
                        </h3>
                        <div className="serviceMeta__visits flex text-lg items-center  px-2 text-left mb-4 rounded-lg border border-blue-500">
                          <EyeIcon className="h-5 w-5 text-green-500 mr-1 " />
                          Visits:&nbsp;
                          {selectedService?.visits}
                        </div>
                        <div
                          className="serviceMeta__likes flex  text-lg items-center hover:scale-110 px-2 text-left cursor-pointer rounded-lg bg-blue-100 mb-4 transition-transform border border-blue-500"
                          onClick={() => addToLikes()}>
                          <HeartIcon className="h-5 w-5 text-blue-500 mr-1" />
                          Likes: &nbsp;
                          {selectedService?.likes}
                        </div>
                        <div
                          className="serviceMeta__rating flex text-lg items-center hover:scale-110  px-2 rounded-lg bg-blue-100 mb-4 cursor-pointer transition-transform border border-blue-500"
                          onClick={() => toggleModalOpen("reviews")}>
                          <Image
                            src="/assets/Icon/stars.svg"
                            alt="BuyMyTime Icon"
                            height={50}
                            width={50}
                            className="h-5 w-5 mr-1"
                          />
                          Rating: &nbsp;
                          {selectedService?.rating.toFixed(1)}
                        </div>
                        <div
                          className="serviceMeta__review flex text-lg items-center hover:scale-110  px-2 rounded-lg bg-blue-100 mb-4 cursor-pointer transition-transform border border-blue-500"
                          onClick={() => toggleModalOpen("reviews")}>
                          <ChatBubbleLeftRightIcon className="h-5 w-5 mr-1 text-red" />
                          Reviews: &nbsp;
                          {reviews?.length}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </motion.div>
          </ScrollAnimationWrapper>
          <section className={"featuredServices__wrapper"}>
            <ScrollAnimationWrapper className="featuredServices__textWrapper section__textWrapper text-center">
              <motion.h3
                variants={scrollAnimation}
                className="featuredServices__title section__title">
                Featured Services
              </motion.h3>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="featuredServices__carousel section__carousel  w-full flex flex-col pt-5 pb-12 mb-8 sm:mb-16 relative">
              <motion.div variants={scrollAnimation}>
                <Carousel
                  className="carousel"
                  servicesData={featuredServices}
                />
              </motion.div>
            </ScrollAnimationWrapper>
          </section>
        </main>
      </Layout>
      <Modal title="Reviews" id="reviews">
        <PostReview />
        <ExistingReviews />
      </Modal>
    </>
  );
};

export default Service;
