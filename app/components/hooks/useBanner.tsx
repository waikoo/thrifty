"use client";
import { useUIStore } from '@/state/client/uiState';
import { useMessageDisplay } from '@/app/components/hooks';
import { bannerMessages } from '@/app/components/data';

export default function Banner() {
  const { showBanner, setShowBanner } = useUIStore()
  const idx = useMessageDisplay(bannerMessages, 5000);

  return (
    <>
      {showBanner ? (
        <section className={`grid grid-cols-3 gap-4 py-1 bg-faded px-3 text-black w-full`}>

          <span className="col-span-2 col-start-2 col-end-3 justify-self-center">
            {bannerMessages[idx]}
          </span>

          <span className="col-start-3 col-end-4 justify-self-end cursor-pointer"
            onClick={() => setShowBanner(!showBanner)}>
            X
          </span>

        </section>
      ) : null}
    </>
  );
}

