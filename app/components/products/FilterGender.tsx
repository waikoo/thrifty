"use client";
import { ChangeEvent } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function FilterGender() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onChange(e: ChangeEvent<HTMLFieldSetElement>) {
    const newParams = new URLSearchParams(searchParams);
    const value = (e.target as unknown as HTMLInputElement).value;

    const existingValues = newParams.get('category')?.split(',') || [];

    if (existingValues.includes(value)) {
      const newValues = existingValues.filter(val => val !== value)
      newValues.length > 0
        ? newParams.set('category', newValues.join(','))
        : newParams.delete('category')
    } else {
      existingValues.push(value)
      newParams.set('category', existingValues.join(','))
    }
    router.push(`${pathname}?${newParams.toString()}`);
  }


  return (
    <main className="flex flex-col">
      <fieldset
        onChange={onChange}
        className="flex flex-col">
        <label htmlFor="men" className="">
          <input
            type="checkbox"
            defaultChecked={searchParams.get("category") === 'men'}
            value="men"
            id="men"
          />
          Men
        </label>
        <label htmlFor="women" className="">
          <input
            type="checkbox"
            defaultChecked={searchParams.get("category") === 'women'}
            value="women"
            id="women"
          />
          Women
        </label>
        <label htmlFor="kids" className="">
          <input
            type="checkbox"
            defaultChecked={searchParams.get("category") === 'kids'}
            value="kids"
            id="kids"
          />
          Kids
        </label>
      </fieldset>
    </main>
  );
}
