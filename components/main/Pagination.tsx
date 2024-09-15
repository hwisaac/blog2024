import Link from 'next/link';
import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default async function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const PAGE_SIZE = 10;
  const startPage =
    Math.max(0, parseInt(String((currentPage - 1) / PAGE_SIZE)) * PAGE_SIZE) +
    1;
  const endPage = Math.min(startPage + PAGE_SIZE - 1, totalPages);

  const getPreviousPage = () => {
    if (startPage === 1) {
      return 1;
    } else {
      return startPage - 1;
    }
  };

  const getNextPage = () => {
    return endPage + 1;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Link
          href={`?page=${i}`}
          key={i}
          className={`size-14 flex items-center justify-center rounded-full font-semibold text-sm ${
            i === currentPage ? 'bg-cRed text-white' : 'bg-cGray1 text-black'
          }`}>
          {`${i}`.padStart(2, '0')}
        </Link>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='flex items-center justify-center gap-2 mt-4'>
      <Link
        href={`?page=${getPreviousPage()}`}
        className={`size-14 flex items-center justify-center rounded-full bg-[#efefef] text-black disabled:opacity-50 ${
          startPage === 1 && 'hidden'
        }`}>
        <GoChevronLeft />
      </Link>
      {renderPageNumbers()}
      <Link
        href={`?page=${getNextPage()}`}
        className={`size-14 flex items-center justify-center rounded-full bg-[#efefef] text-black disabled:opacity-50 ${
          endPage === totalPages && 'hidden'
        } `}>
        <GoChevronRight />
      </Link>
    </div>
  );
}
