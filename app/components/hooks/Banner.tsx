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
  const viewportWidth = useViewport()
  const showElement = viewportWidth > 768

  return (
    <>
      {showBanner ? (
        <section className={`bg-t_black dark:bg-t_white text-t_white dark:text-t_black z-20 w-min-screen`}>
          <div className={`mx-auto grid grid-cols-1 py-1 md:grid-cols-[auto_1fr_auto] md:py-0 grid-rows-1 items-center gap-4 xl:max-w-[1280px] `}>

            {showElement && <LanguagePicker isTop />}

            <span className="justify-self-center mx-auto">
              {bannerMessages[idx]}
            </span>

            {showElement && <ThemeToggler />}

          </div>
        </section>
      ) : null}
    </>
  );
}
