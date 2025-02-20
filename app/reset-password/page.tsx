"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../supabase";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { albert, albert_600, albert_800, albert_900 } from "@/utils/fonts";
import Logo from "../components/navigation/Logo";

export default function Page() {
  const searchParams = useSearchParams();
  const access_token = searchParams.get("code");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [inputType, setInputType] = useState("password");

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

  const handleClick = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  }

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="fixed top-[50px] left-[50%] translate-x-[-50%]">
        <Logo width="206" className="" />
      </div>

      <div className="">
        <h2 className={`${albert_800.className} text-[#1b1b1b] text-[17px] sm:text-[21px] text-center whitespace-nowrap`} >
          RESET YOUR PASSWORD
        </h2>

        <div className="relative w-[280px] sm:w-[600px] mx-auto">
          <input
            type={inputType}
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`rounded-full border-none mt-[40px] w-full sm:h-[57px] xl:h-auto ${albert.className}`}
          />
          <div className="absolute right-3 top-[55%] sm:top-[39%] xl:top-[55%] translate-y-1/2 cursor-pointer bg-white pl-2" onClick={handleClick}>
            {inputType === "password" ? (<FaEye className="sm:text-[2rem] xl:text-[1rem]" />)
              : (<FaEyeSlash className="sm:text-[2rem] xl:text-[1rem]" />)}
          </div>
        </div>
        <button className={`hidden w-[90%] left-0 right-0 mx-auto block bg-[#0d0d0d] text-[#f9f9f9] text-[13px] sm:text-[20px] xl:text-[13px] xl:mt-[20px] block py-4 rounded-full xl:w-fit xl:px-12 xl:py-3 xl:block ${albert_600.className}`} onClick={handleReset}>RESET PASSWORD</button>

        <p className={`text-[13px] sm:text-[17px] xl:text-[15px] ${albert.className} text-[#1b1b1b]`}>{message}</p>
      </div>

      <button className={`fixed bottom-[20px] w-[90%] left-0 right-0 mx-auto block bg-[#0d0d0d] text-[#f9f9f9] text-[13px] sm:text-[20px] xl:text-[13px] xl:mt-[20px] block py-4 rounded-full xl:w-fit xl:px-12 xl:py-3 xl:hidden ${albert_600.className}`} onClick={handleReset}>RESET PASSWORD</button>
    </div>
  );
}

