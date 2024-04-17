"use client"
import { useState, useEffect } from 'react';

export default function useViewport() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return viewportWidth;
};
