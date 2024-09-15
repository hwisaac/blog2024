import React from 'react';
import PopularPost from './PopularPost';
import RecentPost from './RecentPost';
import AsideTags from './AsideTags';

type Props = {};

export default function Aside({}: Props) {
  return (
    <aside className='w-full max-w-md flex flex-col gap-4'>
      <AsideTags />
      <PopularPost />
      <RecentPost />
    </aside>
  );
}
