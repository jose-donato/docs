import { useLocation } from "@docusaurus/router";
import React, { useEffect } from "react";

export default function Root({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
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
  return <>{children}</>;
}
