"use client"
import { useEffect, useRef, useState } from "react"
import { supabase } from "@/app/supabase"

type ToggleProps = {
  type: string
  thumbColor?: string
  toggleBgColor?: string
  thumbBorder?: string
  toggleBorder?: string
}

export default function Toggle({ type, thumbColor, toggleBgColor, thumbBorder, toggleBorder }: ToggleProps) {
  const toggleRef = useRef<HTMLInputElement | null>(null)
  const [checked, setChecked] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const fetchChecked = async () => {
      const getUserId = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        return user?.id
      }

      const { data, error } = await supabase
        .from('clients')
        .select(`${type}`)
        .eq('client_id', await getUserId())

      if (error) console.error(error)

      setChecked(data ? (data[0] as any)[type] : false);
    };

    fetchChecked();
  }, []);

  useEffect(() => {
    const setNotification = async () => {
      const getUserId = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        return user?.id
      }

      await supabase
        .from('clients')
        .update({ [type]: toggleRef?.current?.checked })
        .eq('client_id', await getUserId());
    }

    if (checked !== undefined) {
      setNotification();
    }
  }, [checked]);

  function handleOnChange(): void {
    setChecked((prevChecked) => !prevChecked);
  }
  return (
    <label className={`inline-flex h-auto cursor-pointer items-center self-center`}> {/* mb-5*/}
      {checked !== undefined &&
        <input type="checkbox" value="" className="peer sr-only justify-self-center" ref={toggleRef} onChange={handleOnChange} checked={checked} />
      }
      <div className={`peer relative h-5 w-9 rounded-full ${toggleBorder} ${toggleBgColor} after:absolute after:start-[0.8px] after:top-[1.2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-gray-500 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full ${thumbBorder} ${thumbColor} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800`}></div>
    </label>
  );
}

