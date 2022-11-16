import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Documentation for free and open source OpenBB products.">
      <main className="relative flex mx-auto flex-col items-center justify-center w-full max-w-[906px] mt-12 lg:mt-20 xl:mt-40">
        <div className="z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="mx-6 font-bold text-3xl lg:text-4xl leading-10 text-center mb-4 tracking-widest uppercase">
            OpenBB Documentation
          </h1>
          <p className="mx-6 w-[315px] md:w-[660px] text-center">
            rojects that powers your investment research.
          </p>            This website contains documentation for OpenBB SDK and Terminal, two
          open source p
        </div>
        <div className="flex flex-col md:flex-row w-full container items-center justify-center gap-6 px-6 sm:mx-0 mt-8 md:!mt-14 lg:!mt-15 md:mb-0">
          <Link
            style={{
              backgroundImage: "url('/img/terminal_bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            to="/terminal"
            className="!no-underline hover:border-white hover:!text-white relative w-full h-[238px] max-w-full p-8 rounded flex flex-col items-start justify-start border border-grey-400 dark:bg-grey-900"
          >
            <h3 className="uppercase tracking-widest font-bold text-2xl mb-3">
              OpenBB Terminal
            </h3>
            <p className="text-center text-sm dark:text-grey-300">
              Desktop application that allows you to perform your own investment
              research.
            </p>
            <p className="mt-auto">{`See more >`}</p>
          </Link>
          <Link
            style={{
              backgroundImage: "url('/img/sdk_bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 120%",
            }}
            to="/sdk"
            className="!no-underline hover:border-white hover:!text-white relative w-full h-[238px] max-w-full p-8 rounded flex flex-col items-start justify-start border border-grey-400 dark:bg-grey-900"
          >
            <h3 className="uppercase tracking-widest font-bold text-2xl mb-3">
              OpenBB SDK
            </h3>
            <p className="text-sm dark:text-grey-300">
              Python library that allows you to build your own investment
              research platform.
            </p>
            <p className="mt-auto">{`See more >`}</p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
