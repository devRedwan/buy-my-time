import Link from "next/link";
import React from "react";

const CommonButton = ({ children, addClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue " +
        addClass
      }>
      {" "}
      {children}
    </button>
  );
};

const ButtonOutline = ({ children, addClass, onClick, href }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <CommonButton addClass={addClass}>{children}</CommonButton>
        </Link>
      ) : (
        <CommonButton addClass={addClass} onClick={onClick}>
          {children}
        </CommonButton>
      )}
    </>
  );
};

export default ButtonOutline;
