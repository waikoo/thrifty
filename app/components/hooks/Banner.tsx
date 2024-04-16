"use client";
import { useUIStore } from '@/state/client/uiState';
import { bannerMessages } from '@/app/components/data';
import { ThemeToggler } from '@/app/components/generic';
import useMessageDisplay from '@/app/components/hooks/useMessageDisplay';
import LanguagePicker from '@/app/components/navigation/LanguagePicker';
import useViewport from '@/app/components/hooks/useViewport';

export default function Banner() {
  const { showBanner } = useUIStore()
  const idx = useMessageDisplay(bannerMessages, 5000);
  const textColor = showBanner ? 'text-black' : 'text-content'
  const viewportWidth = useViewport()
  const hideElement = viewportWidth > 768
  const gridCols = hideElement ? 'grid-cols-[auto_1fr_auto]' : 'grid-cols-1 py-1'

  return (
    <>
      {showBanner ? (
        <section className={`bg-t_black dark:bg-t_white text-t_white dark:text-t_black z-20 w-screen ${textColor}`}>
          <div className={`mx-auto grid ${gridCols} grid-rows-1 items-center gap-4 xl:max-w-[1280px] `}>

            {hideElement && <LanguagePicker isTop />}

            <span className="justify-self-center mx-auto">
              {bannerMessages[idx]}
            </span>

            {hideElement && <ThemeToggler />}

          </div>
        </section>
      ) : null}
    </>
  );
}
