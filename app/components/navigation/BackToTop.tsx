"use client"
import { useUIStore } from "@/state/client/uiState";
import { useEventListener } from "../hooks";

export default function BackToTop() {
  const { showBackToTop, setShowBackToTop } = useUIStore();

  if (typeof window !== 'undefined') {
    useEventListener({
      eventType: "scroll",
      listener: () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        setShowBackToTop(scrollTop !== 0)
      },
      target: window
    })
  }

  return (
    <>
      {showBackToTop && (
        <div className="fixed bottom-5 right-5"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <button className="btn btn-circle btn-ghost rounded-full border-content border-2 p-4 h-6 w-6 mx-auto flex items-center justify-center">
            &#x2191;
          </button>
        </div>
      )}
    </>
  );
}

