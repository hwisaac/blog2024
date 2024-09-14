import React from 'react';

type Props = {};

export default function PopularPost({}: Props) {
  return (
    <section className=' rounded-xl shadow-lg flex flex-col items-center m-4 py-8  bg-white'>
      <p className='font-semibold mb-6 text-lg'>POPULAR POST</p>
      <ul className='flex flex-col gap-8 '>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </ul>
    </section>
  );
}

function PostItem() {
  return (
    <li className='flex gap-4 '>
      <div className='size-16 bg-gray-300 rounded-lg shrink-0'>img</div>
      <div className='h-16 w-[300px] '>
        <p className='text-slate-400 font-semibold text-sm truncate'>
          DESIGN PROCESS
        </p>
        <p className='font-semibold w-[280px]  truncate text-base'>
          Our 15 favorite websites from August Our 15 favorite websites from abc
          dadf adf adsf 321 asdf1 ad
        </p>
      </div>
    </li>
  );
}
