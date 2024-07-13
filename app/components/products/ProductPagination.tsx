"use client";
import Link from "next/link";

import useProductPagination from "@/app/components/hooks/useProductPagination";

type ProductPaginationProps = {
  productsLength: number;
};

export default function ProductPagination({ productsLength }: ProductPaginationProps) {
  const { handleOnChange, getPath, queryParamPageValue } = useProductPagination()
  const pages = Math.ceil(productsLength / 20);
  const disabledStylePrev = queryParamPageValue === 1 ? 'text-[#9d9d9d] cursor-not-allowed' : 'text-t_black'
  const disabledStyleNext = queryParamPageValue === pages ? 'text-[#9d9d9d] cursor-not-allowed' : 'text-t_black'
  const hideOnNoPagination = productsLength < 20 ? 'invisible' : ''

  return (
    <div className="text-content flex justify-between py-10 pt-20">
      <Link href={getPath('prev', queryParamPageValue, pages)}
        scroll={false}
        className={hideOnNoPagination}
      >
        <span className={`underline underline-offset-4 ${disabledStylePrev}`}>PREVIOUS</span>
      </Link>

      <div className="flex items-center gap-2">
        <select name="pagination"
          id="pagination"
          className="text-t_black dark:text-t_white"
          onChange={handleOnChange}
          value={queryParamPageValue}
        >
          {[...Array(pages)].map((_, i) => {
            const optionValue = i + 1

            return (
              <option key={`${optionValue}-${i}`}
                value={optionValue}
              >
                {optionValue}
              </option>
            )
          })}
        </select>

        <span>of {pages}</span>
      </div>

      <Link href={getPath('next', queryParamPageValue, pages)}
        className={hideOnNoPagination}
      >
        <span className={`underline underline-offset-4 ${disabledStyleNext}`}>NEXT</span>
      </Link>
    </div>
  );
}
