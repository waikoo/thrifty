"use client"
import { useThemeStore } from "@/state/themeState";
import { getSvgColor } from "@/utils/theme";

function Email() {
  const color = useThemeStore((state) => getSvgColor(state.theme));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="13"
      fill="none"
      viewBox="0 0 16 13"
    >
      <path
        fill={color}
        d="M14.4 0H1.6C.72 0 .008.731.008 1.625L0 11.375C0 12.269.72 13 1.6 13h12.8c.88 0 1.6-.731 1.6-1.625v-9.75C16 .731 15.28 0 14.4 0zm-.32 3.453L8.424 7.044a.798.798 0 01-.848 0L1.92 3.454a.683.683 0 01-.326-.432.701.701 0 01.27-.738.675.675 0 01.776 0L8 5.687l5.36-3.405a.674.674 0 011.06.462.701.701 0 01-.133.526.683.683 0 01-.207.182z"
      ></path>
    </svg>
  );
}

export default Email;
