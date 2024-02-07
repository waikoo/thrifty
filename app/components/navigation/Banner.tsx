"use client";
import { useUIStore } from '@/state';
import { bannerMessages } from '../data';
import { ThemeToggler } from '../generic';
import useMessageDisplay from '../hooks/useMessageDisplay';
import LanguagePicker from './LanguagePicker';

export default function Banner() {
  const { showBanner } = useUIStore()
  const idx = useMessageDisplay(bannerMessages, 5000);
  const textColor = showBanner ? 'text-black' : 'text-content'

  return (
    <>
      {showBanner ? (
        <section className={`bg-faded text-black-500 z-20 w-screen  
          ${textColor}`}>
          <div className="mx-auto grid grid-cols-3 grid-rows-1 items-center gap-4 px-[2.063rem]">

            <LanguagePicker isTop />

            <span className="justify-self-center">
              {bannerMessages[idx]}
            </span>

            <ThemeToggler />

          </div>
        </section>
      ) : null}
    </>
  );
}
