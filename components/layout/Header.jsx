import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import ButtonOutline from "../misc/buttons/ButtonOutline";
import AuthMenu from "./nav/AuthMenu";
import UserProfileMenu from "./nav/UserProfileMenu";
import { MobileNavMenu, NavMenu } from "./nav/NavMenu";
import NavLinks from "./nav/NavMenuLinks";
import { toast } from "react-hot-toast";

const Header = ({ modalSignIn, modalSignUp }) => {
  const { currentUser, userLoading, signOut } = useContext(AuthContext);
  const [scrollActive, setScrollActive] = useState(false);
  const links = NavLinks();

  const handleSignOut = async () => {
    const loadingToast = toast.loading("Signing out");
    try {
      setTimeout(async () => {
        await signOut();
      }, 1000);
      toast.success("Signed Out", {
        id: loadingToast,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to Sign Out");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  console.log("currentUser", currentUser);

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
              <Image
                priority
                src="/assets/Logo.svg"
                alt="BuyMyTime Logo"
                width={500}
                height={500}
                className="navLogo w-auto cursor-pointer h-10 sm:h-12 md:h-16"
              />
            </Link>
          </div>

          <NavMenu navLinks={links} />
          <div className="navMenu__authorizations col-start-10 col-end-12 font-medium flex justify-end items-center">
            {!userLoading ? (
              <>
                {currentUser ? (
                  <UserProfileMenu user={currentUser} signOut={handleSignOut} />
                ) : (
                  <AuthMenu
                    modalSignIn={modalSignIn}
                    modalSignUp={modalSignUp}
                  />
                )}
              </>
            ) : (
              <div className="flex justify-evenly">
                <div className="mx-2 rounded-lg h-10 w-32 bg-gray-500 animate-pulse"></div>
                <div className="mx-2 rounded-lg h-10 w-32 bg-gray-500 animate-pulse"></div>
              </div>
            )}
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
