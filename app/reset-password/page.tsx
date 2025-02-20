"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../supabase";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const access_token = searchParams.get("code");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    if (!access_token) {
      setMessage("Invalid or missing token.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password successfully updated!");
    }
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleReset}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
}

