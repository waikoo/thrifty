"use client";
import { useUIStore } from '@/state/client/uiState';
import { bannerMessages } from '@/app/components/data';
import { ThemeToggler } from '@/app/components/generic';
import useMessageDisplay from '@/app/components/hooks/useMessageDisplay';
import LanguagePicker from '@/app/components/navigation/LanguagePicker';
import useViewport from '@/app/components/hooks/useViewport';
import { viewport } from '@/app/components/data/universalStyles';

type BannerProps = {
  className?: string
}

export default function Banner({ className }: BannerProps) {
  const { showBanner } = useUIStore()
  const idx = useMessageDisplay(bannerMessages, 5000);
  const textColor = showBanner ? 'text-black' : 'text-content'
  const currentViewport = useViewport()
  const hideElement = currentViewport > viewport.xl
  // const gridCols = hideElement ? 'grid-cols-[auto_1fr_auto]' : 'grid-cols-1 py-1'
  const gridCols = hideElement ? 'grid-cols-3' : 'grid-cols-1 py-1'

  return (
    <>
      {showBanner ? (
        <section className={`${className} bg-t_black dark:bg-t_white text-t_white dark:text-t_black z-20 w-screen ${textColor}`}>
          <div className={`mx-auto grid ${gridCols} grid-rows-1 items-center gap-4 max-w-[90vw] 3xl:max-w-[1800px] `}>

            {hideElement && <LanguagePicker isTop />}

            <span className="justify-self-center mx-auto h-[35px] text-[0.75rem] md:text-[0.9375rem] xl:text-[0.875rem] whitespace-nowrap flex justify-center items-center">
              {bannerMessages[idx]}
            </span>

            {/* {hideElement && <ThemeToggler />} */}

          </div>
        </section>
      ) : null}
    </>
  );
}
