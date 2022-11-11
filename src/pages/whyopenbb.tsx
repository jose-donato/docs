import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function OpenBB(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
      <main className='relative flex flex-col items-center justify-center w-full h-full overflow-hidden'>
        <div className="z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="mt-12 lg:mt-20 mx-6 font-extrabold text-5xl lg:text-6xl leading-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">OpenBB Terminal</h1>
          <p className="mx-6 w-[315px] md:w-[660px] text-center">
          OpenBB is a leading open source investment research software platform for accessing and analyzing financial market data. We represent millions of investors who want to leverage state-of-the-art data science and machine learning technologies to make sense of raw unrefined data. Our mission is to make investment research effective, powerful and accessible to everyone.
          </p>
        </div>
        <div className='flex w-full container items-center justify-center gap-6 px-6 sm:mx-0 mt-8 md:!mt-14 lg:!mt-15 md:mb-0 flex-col lg:!flex-row z-10 lg:!translate-y-0'>
          <Link className="!no-underline header_docs_sdk relative w-full h-full max-w-full p-8 rounded overflow-hidden flex flex-col items-center justify-center border border-grey-400 bg-grey-900">
            <h3 className='uppercase text-white tracking-widest font-bold text-2xl mb-2'>Why Python?</h3>
            <p className='text-center text-sm text-grey-300'>
            Python is one of the most used programming languages due to its simplified syntax and shallow learning curve. On top of this, it is highly used in data science and academia world (particularly on finance, economics or business related degrees). This is very important, as it is the first time in history that users - regardless of their background - can so easily add features to an investment research platform.
            </p>
          </Link>
          <Link to="/docs/terminal" className="!no-underline header_docs_terminal relative w-full h-full max-w-full p-8 rounded overflow-hidden flex flex-col items-center justify-center border border-grey-400 bg-grey-900">
            <h3 className='uppercase text-white tracking-widest font-bold text-2xl mb-2'>Why Open Source?</h3>
            <p className='text-center text-sm text-grey-300'>
            An open source product allows for higher quality, lower costs, more transparency, and faster go-to-market due to the strong community created. There is no point in re-inventing the wheel for financial theory that has been around for decades, thus users can adapt the platform to their needs or even build proprietary features on top of our infrastructure.
            </p>
          </Link>
        </div>
        <div className='flex w-full container items-center justify-center gap-6 px-6 sm:mx-0 mt-8 md:!mt-14 lg:!mt-15 md:mb-0 flex-col lg:!flex-row z-10 lg:!translate-y-0'>
          <Link to="/docs/z-guides-markdown" className="!no-underline header_docs_sdk relative w-full h-full max-w-full p-8 rounded overflow-hidden flex flex-col items-center justify-center border border-grey-400 bg-grey-900">
            <h3 className='uppercase text-white tracking-widest font-bold text-2xl mb-2'>Why Free?</h3>
            <p className='text-center text-sm text-grey-300'>
            We believe that everyone should be able to have the same tooling to do investment research. By leveraging free API tiers, we can allow users to have access to a vast range of information for free. On the other hand, we want users that are willing to subscribe to premium API keys from certain data providers to be able to take advantage of that on OpenBB Terminal - this is where we see a monetization opportunity, a revenue share with data providers for connecting our users to their resources.
            </p>
          </Link>
        </div>
      </main>
  );
}
