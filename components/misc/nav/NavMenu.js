import NavLink from "./ActiveLink";

const NavMenu = ({ navLinks }) => {
  return (
    <ul className="navMenu__List hidden md:flex col-start-4 col-end-8 text-black-500 justify-center items-center">
      {navLinks.map(({ label, href, icon, cartItemQty }, index) => (
        <NavLink
          href={href}
          activeLinkStyles="navMenu__link--active"
          key={index}>
          <a className="navMenu__link">
            {label !== "Cart" ? label : icon}
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

export default NavMenu;
