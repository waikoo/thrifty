"use client";
import Link from "next/link";
import useProductPagination from "@/app/components/hooks/useProductPagination";

type ProductPaginationProps = {
  productsLength: number;
};

export default function ProductPagination({ productsLength }: ProductPaginationProps) {
  const { currentPage, handleOnChange, getPath, pageValue } = useProductPagination()
  const pages = Math.ceil(productsLength / 20);
  const hidden = currentPage === 1 ? 'hidden' : ''

  return (
    <div className="text-content flex justify-between py-10 pt-20">
      <Link href={getPath('prev')}>
        <span className={`text-content cursor-pointer underline underline-offset-4 ${hidden}`}>PREVIOUS</span>
      </Link>
      <div className="flex items-center gap-2">
        <span>Page:</span>
        <select name="pagination" id="pagination" className="text-bkg" onChange={handleOnChange}>
          {[...Array(pages)].map((_, i) => (
            <option key={`${pageValue}-${i}`} value={pageValue}>
              {pageValue}
            </option>
          ))}
        </select>
        <span>of {pages}</span>
      </div>
      <Link href={getPath('next')}>
        <span className={`cursor-pointer underline underline-offset-4 ${hidden}`}>NEXT</span>
      </Link>
    </div>
  );
}
