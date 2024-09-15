import Aside from '@/components/aside/Aside';
import Pagination from '@/components/main/Pagination';
import Posts from '@/components/main/Posts';
import Image from 'next/image';

export default function Home({ searchParams: { page } }: any) {
  const _onPageChange = (page: number) => {};
  return (
    <div className='flex w-full mx-auto max-w-7xl'>
      <main className='w-full bg-white flex flex-col rounded-lg shadow-lg overflow-hidden pt-6 pb-12 gap-10'>
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
