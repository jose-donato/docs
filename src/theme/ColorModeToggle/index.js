import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { translate } from '@docusaurus/Translate';
import * as PopoverPrimitive from "@radix-ui/react-popover";
import SunIcon from '@site/src/components/Icons/Sun';
import MoonIcon from '@site/src/components/Icons/Moon';
function ColorModeToggle({ className, value, onChange }) {
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode:
        value === 'dark'
          ? translate({
            message: 'dark mode',
            id: 'theme.colorToggle.ariaLabel.mode.dark',
            description: 'The name for the dark color mode',
          })
          : translate({
            message: 'light mode',
            id: 'theme.colorToggle.ariaLabel.mode.light',
            description: 'The name for the light color mode',
          }),
    },
  );
  return (

    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger className='bg-grey-900 radix-state-open:text-white hover:border-grey-200 hover:text-grey-200 radix-state-open:border-white border -mt-[0.6px] h-[34px] w-[34px] text-grey-400 border-grey-400 rounded flex items-center justify-center'>
        {
          value !== "dark" ? <SunIcon
            className='w-4 h-4'
          /> : <MoonIcon
            className='w-4 h-4'
          />
        }
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content
        sideOffset={5}
        align="start"
        className={clsx(
          "bg-grey-900 border text-white border-grey-200 rounded flex flex-col divide-y divide-grey-600 p-4"
        )}
      >
        <button className={clsx("text-sm inline-flex pb-3", {
          "text-grey-400": value === "dark",
          "text-white": value !== "dark",
        })}
          type="button"
          onClick={() => onChange("light")}
          disabled={!isBrowser}
          title={title}
          aria-label={title}
          aria-live="polite"
        >
          <SunIcon className='w-4 h-4 mr-2 mt-0.5' /> Light
        </button>
        <button className={clsx("text-sm inline-flex pt-3", {
          "text-grey-400": value !== "dark",
          "text-white": value === "dark",
        })}
          type="button"
          onClick={() => onChange("dark")}
          disabled={!isBrowser}
          title={title}
          aria-label={title}
          aria-live="polite"
        >
          <MoonIcon className='w-4 h-4 mr-2 mt-0.5' /> Dark
        </button>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
}
export default React.memo(ColorModeToggle);
