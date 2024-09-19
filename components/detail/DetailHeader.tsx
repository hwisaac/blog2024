import React from 'react';
import ShareButton from './ShareButton';

type Props = {
  title: string;
  updated_at: string;
  slug: string;
  tags: string[];
};

export default function DetailHeader({ title, updated_at, slug, tags }: Props) {
  return (
    <>
      <h1 className='text-4xl font-semibold w-full max-w-7xl self-center mx-auto mt-10 mb-4'>
        {title}
      </h1>
      <div className='flex gap-4 items-center w-full max-w-7xl mx-auto mb-10'>
        <p className='text-sm'>{updated_at.split('T')[0]}</p>
        <ShareButton />
      </div>
      <ul className='flex flex-wrap w-full max-w-7xl mx-auto gap-3 mb-10'>
        {tags.map((tag, index) => (
          <li
            key={`detail-head-${tag}`}
            className='border rounded-full px-3 text-sm bg-slate-100 text-slate-700'>
            #{tag}
          </li>
        ))}
      </ul>
    </>
  );
}
