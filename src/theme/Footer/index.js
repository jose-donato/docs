import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import Link from '@docusaurus/Link';
import LetteringLogo from '@site/src/components/Icons/LetteringLogo';
function Footer() {
  /*const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;*/
  return (
    <footer className="z-40 mt-16 flex flex-col px-6 py-10 text-white md:px12 md:py-16 bg-grey-900">
      <hr className="divider" />
      <div className="flex w-full flex-col justify-between gap-10 md:flex-row md:items-start">
        <div className="ml-2 mb-2 space-y-10 md:m-0">
          <Link
            aria-label="Home"
            to="/"
            className="text-white hover:text-gray-50"
          >
            <LetteringLogo className="h-[14px] w-[140px]" />
          </Link>
          <a
            className="flex h-[32px] w-[172px] rounded-md border border-white bg-white text-xs"
            href="https://github.com/OpenBB-finance/OpenBBTerminal"
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex w-[60%] items-center gap-x-[6px] px-3 py-2 text-grey-800">
              {/*<StarIcon
                style={{ marginBottom: 3 }}
                className="h-[14.67px] w-[14.67px]"
              />{" "}*/}
              Star us
            </span>
            <span className="inline-flex w-[40%] items-center justify-center rounded-r-md bg-grey-900 text-grey-500">
              {/*nFormatter(githubStars, 1) ?? "12.5k"*/}
            </span>
          </a>
        </div>
      </div>
      <Link to="/docs/z-guides-markdown" className="mt-10">
        Markdown examples
      </Link>
    </footer>
  );
}
export default React.memo(Footer);
