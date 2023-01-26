import Image from "next/image";
import BMTSymbol from "../../../public/assets/icon_bmt.png";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 300);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className={`fixed bottom-2 right-2 m-4 z-10 opacity-60 hover:scale-110 hover:opacity-100 transition-all duration-200 ease-in-out hover:bg-gray-100 rounded-full p-1 pt-2 ${
        showButton ? "block" : "hidden"
      }`}>
      <button onClick={handleClick}>
        <Image src={BMTSymbol} alt="BuyMyTime" height={25} width={25} />
      </button>
    </div>
  );
}

export default BackToTopButton;
