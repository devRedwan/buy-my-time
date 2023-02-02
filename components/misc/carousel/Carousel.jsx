import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBack from "../../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../../public/assets/Icon/eva_arrow-next-fill.svg";
import ServiceCard from "../service-card/ServiceCard";
import ServiceSkeletonCard from "../service-card/ServiceSkeletonCard";

const Carousel = ({ servicesData }) => {
  const sliderSettings = {
    dots: true,
    dotsClass:
      "slick-dots w-max absolute left-1/2 -translate-x-1/2 mt-12 sm:mt-2 ",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,

    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
    customPaging: function () {
      return (
        <span className="customPagingSetting mx-1 sm:mx-2 rounded-l-full rounded-r-full h-2 w-2 sm:h-4 sm:w-4 block cursor-pointer transition-all"></span>
      );
    },
  };
  const [sliderRef, setSliderRef] = useState({});

  return (
    <>
      <Slider
        {...sliderSettings}
        arrows={false}
        ref={setSliderRef}
        className="sliderItem flex items-stretch justify-items-stretch ">
        {servicesData.map((service, index) =>
          service ? (
            <ServiceCard service={service} key={service.id} />
          ) : (
            <ServiceSkeletonCard key={index} />
          )
        )}
      </Slider>

      <div className="carouselNavigation__wrapper max-w-screen-xl w-full absolute bottom-1/2 ">
        <div className="carousel__Navigation flex flex-none justify-between w-auto">
          <div
            className="carouselNavigation__leftArrow z-20 flex items-center justify-center h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer md:mr-5"
            onClick={sliderRef?.slickPrev}>
            <ArrowBack className="h-6 w-6 " />
          </div>

          <div
            className="carouselNavigation__leftArrow z-20  flex items-center justify-center h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}>
            <ArrowNext className="h-6 w-6 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
