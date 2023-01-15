import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import animatedLogo from "../public/assets/buy_my_time_Logo_animated.gif";

const Custom404 = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col  bg-gradient-to-b from-white-100 to-white-500">
      <div className="error__container flex flex-col w-3/4 items-center justify-center">
        <h1 className="errorTitle text-blue-500 font-bold text-6xl text-center">
          <ExclamationTriangleIcon className="h-20 w-20 m-auto text-red" />
          Oops!!!
        </h1>
        <h2 className="errorSubtitle mt-5 text-center">
          We couldn't find that page, <br /> but we're sure we can help you find
          the perfect companion for your needs.
        </h2>
        <p className="errorCTAPara text-center mt-5 mb-10">
          <span className="text-blue-500 font-bold">
            Click the jumping animation
          </span>{" "}
          eager to get you home.
        </p>
        <Link href="/">
          <Image src={animatedLogo} />
        </Link>
      </div>
    </div>
  );
};

export default Custom404;