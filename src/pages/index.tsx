import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Documentation for free and open source OpenBB products.">
      <main className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
        <div className="z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="mt-12 lg:mt-20 mx-6 font-bold text-3xl lg:text-4xl leading-10 text-center mb-4 tracking-widest uppercase">
            OpenBB Documentation
          </h1>
          <p className="mx-6 w-[315px] md:w-[660px] text-center">
            This website contains documentation for OpenBB SDK and Terminal, two
            open source projects that powers your investment research.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full container items-center justify-center gap-6 px-6 sm:mx-0 mt-8 md:!mt-14 lg:!mt-15 md:mb-0 max-w-[1087px]">
          <Link
            style={{
              backgroundImage: "url('/docs/img/sdk_bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            to="/docs/sdk"
            className="!no-underline hover:border-white hover:!text-white relative w-full h-[238px] max-w-full p-8 rounded overflow-hidden flex flex-col items-center justify-center border border-grey-400 dark:bg-grey-900"
          >
            <h3 className="uppercase tracking-widest font-bold text-2xl mb-2">
              OpenBB SDK
            </h3>
            <p className="text-center text-sm dark:text-grey-300">
              Python library that allows you to build your own investment
              research platform.
            </p>
          </Link>
          <Link
            style={{
              backgroundImage: "url('/docs/img/terminal_bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            to="/docs/terminal"
            className="!no-underline hover:border-white hover:!text-white relative w-full h-[238px] max-w-full p-8 rounded overflow-hidden flex flex-col items-center justify-center border border-grey-400 dark:bg-grey-900"
          >
            <h3 className="uppercase tracking-widest font-bold text-2xl mb-2">
              OpenBB Terminal
            </h3>
            <p className="text-center text-sm dark:text-grey-300">
              Desktop application that allows you to perform your own investment
              research.
            </p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
