import React from 'react';
import ShareButton from './ShareButton';

type Props = {};

export default function DetailHeader({
  title,
  updated_at,
  slug,
}: {
  title: string;
  updated_at: string;
  slug: string;
}) {
  return (
    <div className='flex flex-col w-full py-10 max-w-7xl mx-auto gap-4'>
      <h1 className='text-3xl font-semibold w-full max-w-7xl self-center'>
        {title}
      </h1>
      <div className='flex gap-4 items-center'>
        <p className=''>{updated_at}</p>
        <ShareButton />
      </div>
    </div>
  );
}
