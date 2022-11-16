import React from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import styles from "./styles.module.css";
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
export default function TOC({ className, ...props }) {
  return (
    <div
      className={clsx(
        styles.tableOfContents,
        "thin-scrollbar text-sm mt-[48px] xl:max-w-[216px]",
        className
      )}
    >
      <p className="uppercase text-sm font-bold text-grey-200 tracking-widest">
        On this page
      </p>
      <div className="border-b border-grey-600 bg-grey-600 mt-2" />
      <TOCItems
        {...props}
        linkClassName={
          "text-grey-400 capitalize !no-underline hover:text-white"
        }
        linkActiveClassName={"!text-white"}
      />
    </div>
  );
}
