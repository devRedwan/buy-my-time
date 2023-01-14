import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import Stars from "../public/assets/Icon/stars.svg";

const Carousel = ({
  services = [
    {
      id: 491,
      imageURL:
        "https://cdn.discordapp.com/attachments/997260939135025223/1063550099176816661/nura_two_men_sitting_in_silence_realistic_art_8k_fe5d0a7b-917e-4b2f-9e37-933fa486417f.png",
      price: 50,
      description:
        "Spend time with me in quiet companionship. No talking necessary. Just sit and be present with each other.",
      seller: {
        id: 73317331,
        name: "Redwan Ahmed",
      },
      vists: 3000,
      likes: 1657,
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
      },
      visits: 1000,
      likes: 879,
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
        visits: 3500,
        likes: 3200,
      },
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
      },
      visits: 2200,
      likes: 1851,
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
      },
      visits: 1500,
      likes: 140,
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
      },
      visits: 4000,
      likes: 600,
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
      },
      visits: 2800,
      likes: 295,
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
      },
      visits: 1800,
      likes: 146,
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
      },
      visits: 5500,
      likes: 4500,
    },
    {
      id: 123,
      imageURL:
        "https://cdn.discordapp.com/attachments/981697648119648266/1063588193854836816/NMadness444_a_smiling_young_person_extending_his_hand_on_anothe_28b2aea6-b9f8-423b-94f2-6b78bb99be03.png",
      title: "Companion for someone feeling lonely",
      price: 60,
      description:
        "Provide companionship for someone feeling lonely. I'll be there to listen and offer a supportive presence.",
      seller: {
        id: 25462897,
        name: "Carl Mourinho",
      },
      visits: 2600,
      likes: 204,
    },
  ],
}) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots w-max absolute mt-20  ",
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
        },
      },
    ],
    customPaging: function () {
      return (
        <span className="customPagingSetting mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
      );
    },
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch">
        {services.map((service) => (
          <div className="serviceWrapper px-3" key={service.id}>
            <div className="serviceBox__container border">
              <div className="serviceImageWrapper w-full h-1/2">
                <img
                  className="h-60 object-cover w-full "
                  src={service.imageURL}
                  alt="BuyMyTime Services"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}>
            <ArrowBack className="h-6 w-6 " />
          </div>

          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}>
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
