import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement, useEffect, useState } from "react";

const NavLink = ({ children, href, activeLinkStyles }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  useEffect(() => {
    setActiveLink(router.pathname === href);
  }, [router.pathname, href]);

  let className = children.props.className || "";
  if (activeLink) {
    className = `${className} ${activeLinkStyles}`.trim();
  }

  return (
    <Link legacyBehavior href={href}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};

export default NavLink;
