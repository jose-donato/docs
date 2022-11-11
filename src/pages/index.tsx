import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className='relative flex flex-col items-center justify-center w-full h-full overflow-hidden'>
        <div className="z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="mt-12 lg:mt-20 mx-6 font-extrabold text-5xl lg:text-6xl leading-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">OpenBB Documentation</h1>
          <p className="mx-6 w-[315px] md:w-[660px] text-center">
            This website contains documentation for OpenBB SDK and Terminal, two open source projects that powers your investment research.
          </p>
        </div>
        <div className='flex w-full container items-center justify-center gap-6 px-6 sm:mx-0 mt-8 md:!mt-14 lg:!mt-15 md:mb-0 flex-col lg:!flex-row z-10 lg:!translate-y-0'>
          <Link to="/docs/sdk" className="!no-underline header_docs_sdk relative w-full h-full max-w-full p-8 rounded overflow-hidden flex flex-col items-center justify-center border border-grey-400 bg-grey-900">
            <h3 className='uppercase text-white tracking-widest font-bold text-2xl mb-2'>OpenBB SDK</h3>
            <p className='text-center text-sm text-grey-300'>
              Python library that allows you to build your own investment research platform.
            </p>
          </Link>
          <Link to="/docs/terminal" className="!no-underline header_docs_terminal relative w-full h-full max-w-full p-8 rounded overflow-hidden flex flex-col items-center justify-center border border-grey-400 bg-grey-900">
            <h3 className='uppercase text-white tracking-widest font-bold text-2xl mb-2'>OpenBB Terminal</h3>
            <p className='text-center text-sm text-grey-300'>
              Desktop application that allows you to perform your own investment research.
            </p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
