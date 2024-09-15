import Aside from '@/components/aside/Aside';
import Pagination from '@/components/main/Pagination';
import Posts from '@/components/main/Posts';
import Image from 'next/image';

export default function Home({ searchParams: { page } }: any) {
  const _onPageChange = (page: number) => {};
  return (
    <div className='flex w-full mx-auto max-w-7xl'>
      <main className='text-red-500 w-full bg-white flex flex-col rounded-lg shadow-lg'>
        <Posts />

        <Pagination
          currentPage={Number(page) || 1}
          totalPages={30}
          onPageChange={_onPageChange}
        />
      </main>
      <Aside />
    </div>
  );
}
