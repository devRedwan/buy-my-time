import Link from "next/link";
import React from "react";

const CommonButton = ({ children, addClass, onClick }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none " +
        addClass
      }
      onClick={onClick}>
      {children}
    </button>
  );
};

const ButtonPrimary = ({ children, addClass, href, onClick }) => {
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

export default ButtonPrimary;
