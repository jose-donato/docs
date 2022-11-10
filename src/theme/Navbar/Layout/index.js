import React, { useEffect } from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import styles from "./styles.module.css";
import { useLocation } from "@docusaurus/router";
function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}
export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const { pathname } = useLocation();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  useEffect(() => {
    if (pathname.startsWith("/docs/terminal")) {
      document.documentElement.style.setProperty(
        "--ifm-color-primary",
        "#006bb6"
      );
    } else if (pathname.startsWith("/docs/sdk")) {
      document.documentElement.style.setProperty(
        "--ifm-color-primary",
        "#e47600"
      );
    } else {
    }
  }, [pathname]);
  return (
    <nav
      ref={navbarRef}
      className={clsx(
        {
          header_docs_terminal: pathname.startsWith("/docs/terminal"),
          header_docs_sdk: pathname.startsWith("/docs/sdk"),
        },
        "navbar",
        "navbar--fixed-top",
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          "navbar-sidebar--show": mobileSidebar.shown,
        }
      )}
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}
