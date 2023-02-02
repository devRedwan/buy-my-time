import {
  GlobeAltIcon,
  HomeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="mobileNav__menuLink--exploreIcon w-6 h-6" />,
  },
  {
    label: "Explore",
    href: "/explore",
    icon: <GlobeAltIcon className="mobileNav__menuLink--exploreIcon w-6 h-6" />,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: <ShoppingCartIcon className="navMenu__link--cartIcon h-6 w-6" />,
    cartItemQty: 2,
  },
];

export default navLinks;
