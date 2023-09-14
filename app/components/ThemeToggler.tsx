"use client";
import { useSearchParams } from "next/navigation";
import { MouseEvent } from "react";

const ThemeToggler = (): JSX.Element => {
  const sParams = useSearchParams();
  console.log("from ThemeToggler");
  console.log(sParams.get("theme"));
  // const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
  // clickHandler(e);
  // };

  return (
    <section className="">
      <button
        className="bg-white dark:bg-zinc-500"
        data-value="light"
        // onClick={handleButtonClick}
      >
        Light
      </button>
      <button
        data-value="dark"
        className="bg-zinc-500 dark:bg-white text-cyan-50"
        // onClick={handleButtonClick}
      >
        Dark
      </button>
    </section>
  );
};

export default ThemeToggler;
