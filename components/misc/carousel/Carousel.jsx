import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBack from "../../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../../public/assets/Icon/eva_arrow-next-fill.svg";
import ServiceCard from "../ServiceCard";


const Carousel = ({ customServiceData }) => {
  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots w-max absolute left-1/2 -translate-x-1/2 sm:mt-2 ",
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
        className="sliderItem flex items-stretch justify-items-stretch">
        {customServiceData.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </Slider>

      <div className="carouselNavigation__wrapper max-w-screen-xl w-screen  absolute -left-6 sm:-left-8 lg:-left-16 bottom-1/2 ">
        <div className="carousel__Navigation flex flex-none justify-between w-auto">
          <div
            className="carouselNavigation__leftArrow ml-3 sm:ml-5 lg:ml-7 flex items-center justify-center h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}>
            <ArrowBack className="h-6 w-6" />
          </div>

          <div
            className="carouselNavigation__leftArrow mr-3 sm:mr-5 lg:mr-7 flex items-center justify-center h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}>
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

Carousel.getInitialProps = async (context) => {
  const largestSlide = Array.from(
    context.querySelectorAll(".slick-slide")
  ).reduce((largest, current) => {
    return current.clientHeight > largest.clientHeight ? current : largest;
  });
  return { largestSlideHeight: largestSlide.clientHeight };
};

export default Carousel;
