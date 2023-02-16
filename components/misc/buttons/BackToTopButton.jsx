import Image from "next/image";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className={`fixed bottom-7 right-0 lg:bottom-2 lg:right-2 m-4 z-10 hover:scale-110 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer hover:bg-gray-100 group rounded-full p-4 pt-2 ${
        showButton ? "block" : "hidden"
      }`}>
      <button
        onClick={handleClick}
        className="flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
        <Image
          src="/assets/icon_bmt.png"
          alt="BuyMyTime"
          height={25}
          width={25}
        />
        <span className="text-xs hidden group-hover:inline-block transition-all duration-500 ease-in-out">
          Back To Top
        </span>
      </button>
    </div>
  );
}

export default BackToTopButton;
