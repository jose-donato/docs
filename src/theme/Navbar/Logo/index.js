import React from "react";
import LetteringLogo from "@site/src/components/Icons/LetteringLogo";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";

export default function NavbarLogo() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex items-center gap-x-[56px]">
      <Link to="/">
        <LetteringLogo />
      </Link>
      <div className="hidden p-2 border border-grey-400 rounded h-[34px] items-center md:flex bg-grey-900 gap-3">
        <Link
          to="/terminal"
          className={clsx(
            "text-xs rounded px-2 py-1 hover:text-white hover:no-underline",
            {
              "text-grey-100 bg-grey-800 ": pathname.startsWith("/terminal"),
              "text-grey-500 hover:bg-grey-800 ":
                !pathname.startsWith("/terminal"),
            }
          )}
        >
          Terminal
        </Link>
        <Link
          to="/sdk"
          className={clsx(
            "text-xs px-2 py-1 rounded hover:text-white hover:no-underline",
            {
              "text-grey-100 bg-grey-800 ": pathname.startsWith("/sdk"),
              "text-grey-500 hover:bg-grey-800 ": !pathname.startsWith("/sdk"),
            }
          )}
        >
          SDK
        </Link>
      </div>
    </div>
  );
}
