import NavLink from "./ActiveLink";

const MobileNavMenu = ({ navLinks }) => {
  return (
    <ul className="mobileNav__menuList flex w-full justify-between items-center text-black-500">
      {navLinks.map(({ href, icon, cartItemQty }, index) => (
        <NavLink
          href={href}
          activeLinkStyles="mobileNav__menuLink--active"
          key={index}>
          <a className="mobileNav__menuLink">
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

export default MobileNavMenu;
