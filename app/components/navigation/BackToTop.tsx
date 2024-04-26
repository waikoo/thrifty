"use client"
import { useEffect } from "react";

import { HiOutlineArrowSmUp } from "react-icons/hi";

import { useUIStore } from "@/state/client/uiState";
import { useThemeStore } from "@/state/themeState";

export default function BackToTop() {
  const { showBackToTop, setShowBackToTop } = useUIStore();
  const { theme } = useThemeStore()
  const bgColor = theme === 'dark' ? 'bg-t_white' : 'bg-t_black'
  const arrowColor = theme === 'dark' ? 'black' : 'white'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setShowBackToTop(scrollTop !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showBackToTop, setShowBackToTop]);

  return (
    <>
      {showBackToTop && (
        <div className="fixed bottom-5 right-5 z-50 hidden sm:block"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className={`relative rounded-full border-content border-2 p-4 h-6 w-6 mx-auto flex items-center justify-center ${bgColor}`}>
            <HiOutlineArrowSmUp
              color={arrowColor}
              size={25}
              className="z-50 absolute" />
          </div>
        </div>
      )}
    </>
  );
}

