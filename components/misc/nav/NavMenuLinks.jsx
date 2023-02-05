import {
  GlobeAltIcon,
  HomeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import ServicesContext from "../../../context/servicesContext";

const navLinks = () => {
  const { cart } = useContext(ServicesContext);

  return [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon className="mobileNav__menuLink--exploreIcon w-6 h-6" />,
    },
    {
      label: "Explore",
      href: "/explore",
      icon: (
        <GlobeAltIcon className="mobileNav__menuLink--exploreIcon w-6 h-6" />
      ),
    },
    {
      label: "Cart",
      href: "/cart",
      icon: <ShoppingCartIcon className="navMenu__link--cartIcon h-6 w-6" />,
      cartItemQty: cart?.length,
    },
  ];
};

export default navLinks;
