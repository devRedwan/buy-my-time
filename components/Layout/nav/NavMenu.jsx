import NavLink from "./ActiveLink";

export const NavMenu = ({ navLinks }) => {
  return (
    <ul className="navMenu__List hidden md:flex col-start-4 col-end-8 text-black-500 justify-center items-center">
      {navLinks.map(({ label, href, icon, cartItemQty }, index) => (
        <NavLink
          href={href}
          activeLinkStyles="navMenu__link--active"
          key={index}>
          <a
            className={`navMenu__link ${
              label === "Cart" && cartItemQty && "animate-bounce"
            }`}>
            {label !== "Cart" ? label : icon}
            {cartItemQty ? (
              <span className="cart__itemQty  bottom-1 right-2 animate-bounce">
                {cartItemQty}
              </span>
            ) : (
              ""
            )}
          </a>
        </NavLink>
      ))}
    </ul>
  );
};

export const MobileNavMenu = ({ navLinks }) => {
  return (
    <ul className="mobileNav__menuList flex w-full justify-between items-center text-black-500">
      {navLinks.map(({ href, icon, cartItemQty }, index) => (
        <NavLink
          href={href}
          activeLinkStyles="mobileNav__menuLink--active"
          key={index}>
          <a
            className={`mobileNav__menuLink ${
              href === "/cart" &&
              cartItemQty &&
              "animate-bounce !border-transparent"
            }`}>
            {icon}
            {cartItemQty ? (
              <span className="cart__itemQty  bottom-1 right-2">
                {cartItemQty}
              </span>
            ) : (
              ""
            )}
          </a>
        </NavLink>
      ))}
    </ul>
  );
};
