import React from 'react';
import PopularPost from './PopularPost';
import RecentPost from './RecentPost';

type Props = {};

export default function Aside({}: Props) {
  return (
    <aside className='border w-full max-w-md'>
      <PopularPost />
      <RecentPost />
    </aside>
  );
}
