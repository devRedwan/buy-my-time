import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBack from "../../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../../public/assets/Icon/eva_arrow-next-fill.svg";
import ServiceCard from "../ServiceCard";

const Carousel = (props) => {
  const services = [
    {
      id: 491,
      imageURL:
        "https://cdn.discordapp.com/attachments/997260939135025223/1063550099176816661/nura_two_men_sitting_in_silence_realistic_art_8k_fe5d0a7b-917e-4b2f-9e37-933fa486417f.png",
      price: 50,
      title: "Buddy for sitting in silence",
      description:
        "Spend time with me in quiet companionship. No talking necessary. Just sit and be present with each other.",
      seller: {
        id: 73317331,
        name: "Redwan Ahmed",
        rating: 5.0,
        imageURL: "https://i.postimg.cc/x12tFnd7/IMG-1874.jpg",
      },
      visits: 3000,
      likes: 1657,
      rating: 5.0,
    },
    {
      id: 712,
      imageURL:
        "https://cdn.discordapp.com/attachments/997260939135025223/1063553760716136598/nura_two_happy_friends_conversing_while_waiting_at_the_doctors__34ab4f94-b7ad-42b8-8cbc-3303cc8af1e2.png",
      title: "Companionship for a doctor's appointment",
      price: 40,
      description:
        "Accompany you to your medical appointment and provide emotional support.",
      seller: {
        id: 85869845,
        name: "Bob Marley",
        rating: 4.5,
        imageURL:
          "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      visits: 1000,
      likes: 879,
      rating: 4.8,
    },
    {
      id: 316,
      imageURL:
        "https://cdn.discordapp.com/attachments/997260939135025223/1063561080493834331/nura_two_smiling_people_having_a_good_time_in_a_waiting_room_wi_9d0ba5b6-dfe2-4ea9-b5da-1648040ae9a2.png",
      title: "Wait at the DMV",
      price: 50,
      description:
        "Keep you company while you wait at the DMV. I'll bring something to do and keep you company to make the time pass more quickly.",
      seller: {
        id: 85869845,
        name: "Bob Marley",
        rating: 4.5,
        imageURL:
          "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      visits: 3500,
      likes: 3200,
      rating: 4.7,
    },
    {
      id: 128,
      imageURL:
        "https://cdn.discordapp.com/attachments/981697648119648266/1063568007353335908/NMadness444_young_man_happy_coversation_with_an_old_lady_highly_1604c351-2f60-4098-8f87-6c2863b19bfe.png",
      title: "Senior citizen companion",
      price: 20,
      description:
        "Offer my time as a companion for a senior citizen. I can provide conversation or just be present for some company.",
      seller: {
        id: 85869845,
        name: "Bob Marley",
        rating: 4.5,
        imageURL:
          "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      visits: 2200,
      likes: 1851,
      rating: 5.0,
    },
    {
      id: 902,
      imageURL:
        "https://cdn.discordapp.com/attachments/981697648119648266/1063570650079436840/NMadness444_therapy_session_with_two_people_therapist_sitting_b_ab3035ba-b063-4c24-a57f-e962f468f17b.png",
      title: "Support person for a therapy session",
      price: 20,
      description:
        "Provide support and companionship during a therapy session. I'll be there to listen and offer a supportive presence.",
      seller: {
        id: 85869845,
        name: "Bob Marley",
        rating: 4.5,
        imageURL:
          "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      visits: 1500,
      likes: 140,
      rating: 4.7,
    },
    {
      id: 647,
      imageURL:
        "https://cdn.discordapp.com/attachments/981697648119648266/1063569179891994775/NMadness444_two_people_comforting_each_other_while_speaking_to__19f6472a-e47f-4986-88b8-baf17648775d.png",
      title: "Support person during a difficult time",
      price: 30,
      description:
        "Offer my time and support during a difficult time. If you just need someone to listen, I'm here for you.",
      seller: {
        id: 73317331,
        name: "Redwan Ahmed",
        rating: 5.0,
        imageURL: "https://i.postimg.cc/x12tFnd7/IMG-1874.jpg",
      },
      visits: 4000,
      likes: 600,
      rating: 5.0,
    },
    {
      id: 390,
      imageURL:
        "https://media.tenor.com/s8-6ZHt_BicAAAAM/david-rose-hiking.gif",
      title: "Hiking or walking companion",
      price: 60,
      description:
        "Accompany you on a hike or walk. I'll bring water and a snack and be there to keep you company and enjoy the outdoors with you.",
      seller: {
        id: 85869845,
        name: "Bob Marley",
        rating: 4.5,
        imageURL:
          "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      visits: 2800,
      likes: 295,
      rating: 5.0,
    },
    {
      id: 568,
      imageURL:
        "https://cdn.discordapp.com/attachments/981697648119648266/1063583832055496725/NMadness444_man_enjoying_himself_in_a_wedding_full_of_people_ma_ee023146-2864-4057-b613-dcbf24d4a73b.png",
      title: "Stand-in for a wedding or event",
      price: 40,
      description:
        "Be a stand-in for you at a wedding or event. I'll fill in as needed.",
      seller: {
        id: 73317331,
        name: "Redwan Ahmed",
        rating: 5.0,
        imageURL: "https://i.postimg.cc/x12tFnd7/IMG-1874.jpg",
      },
      visits: 1800,
      likes: 146,
      rating: 4.7,
    },
    {
      id: 832,
      imageURL:
        "https://cdn.discordapp.com/attachments/981697648119648266/1063585873087701052/NMadness444_two_friends_waiting_at_the_airport_waiting_area_smi_5a368ea6-dc63-41d2-954d-ce01ef48d173.png",
      title: "Airport wait companion",
      price: 50,
      description:
        "Keep you company while you wait at the airport. I'll bring something to do and keep youcompany to make the time pass more quickly.",
      seller: {
        id: 73317331,
        name: "Redwan Ahmed",
        rating: 5.0,
        imageURL: "https://i.postimg.cc/x12tFnd7/IMG-1874.jpg",
      },
      visits: 5500,
      likes: 4500,
      rating: 5.0,
    },
  ];
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
        {services.map((service) => (
          <ServiceCard
            service={service}
            key={service.id}
          />
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
