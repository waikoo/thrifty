"use client";
import { useUIStore } from '@/state';
import { bannerMessages } from '../data';
import { ThemeToggler } from '../generic';
import useMessageDisplay from '../hooks/useMessageDisplay';
import LanguagePicker from './LanguagePicker';

export default function Banner() {
  const { showBanner, setShowBanner } = useUIStore()
  const idx = useMessageDisplay(bannerMessages, 5000);
  const textColor = showBanner ? 'text-black' : 'text-content'

  return (
    <>
      {showBanner ? (
        <section className={`z-20 bg-faded text-black-500 w-full  
          ${textColor}`}>
          <div className="mx-auto grid w-[95%] grid-cols-3 grid-rows-1 items-center gap-4">


            <LanguagePicker />

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
