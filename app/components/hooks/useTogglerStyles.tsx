import { useEffect, useState } from "react";


export default function useTogglerStyles(isDark: boolean) {
  const [xPos, setXPos] = useState('translate-x-[0.3rem]');

  useEffect(() => {
    if (isDark) {
      setXPos('translate-x-[1.4rem]');
    } else {
      setXPos('translate-x-[0.3rem]');
    }
  }, [isDark]);

  return {
    bgColor: !isDark ? 'bg-t_cream' : 'bg-t_black1',
    circleColor: isDark ? 'bg-t_black' : 'bg-t_white',
    xPos: xPos
  };
}
