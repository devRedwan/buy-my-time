import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/Logo.svg";
import ButtonOutline from "../misc/buttons/ButtonOutline";
import { MobileNavMenu, NavMenu } from "../misc/nav/NavMenu";
import NavLinks from "../misc/nav/NavMenuLinks";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const links = NavLinks();

  return (
    <>
      <header
        className={
          "header sticky top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }>
        <nav className="navBar max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="navLogoWrapper col-start-1 col-end-2 flex items-center ">
            <Link legacyBehavior href="/">
              <Logo className="navLogo w-auto cursor-pointer h-10 sm:h-12 md:h-16" />
            </Link>
          </div>

          <NavMenu navLinks={links} />

          <div className="navMenu__authorizations col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link legacyBehavior href="/">
              <a className="navMenu__authSignIn text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-500 transition-all">
                Sign In
              </a>
            </Link>
            <ButtonOutline className="navMenu__authSignUp">
              Sign Up
            </ButtonOutline>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="mobileNavBar fixed md:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="mobileNav bg-white-500 sm:px-3">
          <MobileNavMenu navLinks={links} />
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
