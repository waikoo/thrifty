"use client"
import { FcGoogle } from "react-icons/fc";
import { albert_600 } from '@/utils/fonts';
import { useEffect } from "react";
import { supabase } from "@/app/supabase";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          renderButton: (element: HTMLElement | null, options: { theme: string; size: string }) => void;
        };
      };
    };
  }
}

type SignInWithGoogleProps = {
  setShowSignIn: (show: boolean) => void
}

export default function SignInWithGoogle({ setShowSignIn }: SignInWithGoogleProps) {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-button"),
          { theme: "outline", size: "large" }
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  async function handleCredentialResponse(response: any) {

    try {
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: response.credential }),
      });

      const { user, session } = await res.json();

      const { error } = await supabase.auth.setSession(session)
      if (!error) {
        console.log("Supabase session set successfully")
      }
      if (res.ok) {
        setShowSignIn(false)
      } else {
        console.error("Error:", session.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  }

  return (
    <button className="xl:w-auto flex gap-2 items-center justify-center w-full mx-auto rounded-full py-2 sm:px-11" id="google-signin-button">
      <FcGoogle />
      <span className={`${albert_600.className} cursor-pointer whitespace-nowrap`}>Continue with Google</span>
    </button>
  )
}

