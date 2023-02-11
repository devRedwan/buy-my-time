import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer bg-white-300 pt-24 sm:pb-24">
      <div className="footer__container max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="footer__essentials row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
          <Image
            src="/assets/Logo.svg"
            alt="BuyMyTime"
            height={500}
            width={500}
            priority
            className="footer__logo h-12 w-auto mb-6"
          />
          <p className="footer__essentialsText mb-4">
            <strong className="font-medium">BuyMyTime</strong>: your go-to for
            companionship and convinience.
          </p>
          <div className="footer__socials flex w-full mt-2 mb-8 -mx-2">
            <div className="footerSocial__facebook mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/assets/Icon/facebook.svg"
                alt="BuyMyTime Facebook Icon"
                height={500}
                width={500}
                className="h-6 w-6"
              />
            </div>
            <div className="footerSocial__twitter mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/assets/Icon/twitter.svg"
                alt="BuyMyTime Twitter Icon"
                height={500}
                width={500}
                className="h-6 w-6"
              />
            </div>
            <div className="footerSocial__instagram mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/assets/Icon/instagram.svg"
                alt="BuyMyTime Instagram Icon"
                height={500}
                width={500}
                className="h-6 w-6"
              />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - BuyMyTime
          </p>
        </div>
        <div className="footerMenu__community row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Community</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Events{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Blog{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Forum{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Podcast{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Influencers{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Affiliates{" "}
            </li>
          </ul>
        </div>
        <div className="footerMenu__Engage row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">About</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              BuyMyTime ?{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="footerMenu__EarnMoney row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Support</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Help & Support{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Selling on BuyMyTime{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Buying on BuyMyTime{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-not-allowed transition-all">
              Trust & Safety{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
