import Aside from '@/components/aside/Aside';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex w-full mx-auto max-w-7xl'>
      <main className='text-red-500 w-full bg-blue-300'>hello world</main>
      <Aside />
    </div>
  );
}
