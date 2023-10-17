import { useEffect, useState } from "react";
import useDarkMode from "./useDarkMode";


export default function useTogglerStyles() {
  const { isDark } = useDarkMode();
  const [xPos, setXPos] = useState('translate-x-[0.3rem]');

  useEffect(() => {
    if (isDark) {
      setXPos('translate-x-[1.4rem]');
    } else {
      setXPos('translate-x-[0.3rem]');
    }
  }, [isDark]);

  const getStyleForElement = (element: string) => {
    if (element === 'light') {
      return isDark ? 'text-gray-500 opacity-70' : 'text-black'
    } else if (element === 'dark') {
      return isDark ? 'text-black' : 'text-gray-500 opacity-70'
    }

  }
  return {
    getStyleForElement,
    bgColor: isDark ? 'bg-white' : 'bg-black',
    circleColor: isDark ? 'bg-black' : 'bg-white',
    xPos: xPos
  };
}
