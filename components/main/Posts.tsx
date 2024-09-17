import Link from 'next/link';
import React from 'react';
import PostCard from './PostCard';

type Props = {};

export default function Posts({}: Props) {
  return (
    <div className='grid grid-cols-2 gap-y-8 gap-x-4 px-6'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
