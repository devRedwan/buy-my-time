import Link from "next/link";
import React from "react";

const CommonButton = ({ children, addClass, onClick, type }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none " +
        addClass
      }
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};

const ButtonPrimary = ({ children, addClass, href, onClick, type }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <CommonButton addClass={addClass} type={type}>
            {children}
          </CommonButton>
        </Link>
      ) : (
        <CommonButton addClass={addClass} onClick={onClick} type={type}>
          {children}
        </CommonButton>
      )}
    </>
  );
};

export default ButtonPrimary;
