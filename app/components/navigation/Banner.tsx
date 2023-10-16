"use client";
import { useUIStore } from '@/state';
import { bannerMessages } from '../data';
import useMessageDisplay from '../hooks/useMessageDisplay';

export default function Banner() {
  const { showBanner, setShowBanner } = useUIStore()
  const idx = useMessageDisplay(bannerMessages, 5000);
  const textColor = showBanner ? 'text-black' : 'text-content'

  return (
    <>
      {showBanner ? (
        <section className={` z-20 grid grid-cols-3 gap-4 py-1 bg-faded px-3 text-black-500 w-screen
          ${textColor}`}>

          <span className="col-span-2 col-start-2 col-end-3 justify-self-center">
            {bannerMessages[idx]}
          </span>

          <span className="col-start-3 col-end-4 cursor-pointer justify-self-end"
            onClick={() => setShowBanner(!showBanner)}>
            X
          </span>

        </section>
      ) : null}
    </>
  );
}
