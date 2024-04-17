"use client"
import { useEffect, useRef } from "react";

type EventListenerOptions = boolean | { capture?: boolean; passive?: boolean };

type UseEventListenerProps = {
  eventType: string;
  listener: (event: Event) => void;
  target?: EventTarget | null;
  options?: EventListenerOptions;
  persist?: boolean
};

const useEventListener = ({ eventType, listener, target = window, options, persist
}: UseEventListenerProps): void => {

  const savedListener = useRef<(event: Event) => void>();

  useEffect(() => {

    if (!target?.addEventListener) return;
    savedListener.current = listener;
    const eventListener = (event: Event) => savedListener.current?.(event);
    target.addEventListener(eventType, eventListener, options);

    if (!persist) {
      return () => {
        target.removeEventListener(eventType, eventListener, options);
      }
    };
  }, [eventType, target, options]);
};

export default useEventListener;
