"use client";
import { useEffect, useState } from "react";

const useMessageDisplay = (messages: string[], delay: number): number => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  console.log(currentMessageIndex);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, messages.length, delay]);
  console.log(currentMessageIndex);
  return currentMessageIndex;
};

export default useMessageDisplay;
