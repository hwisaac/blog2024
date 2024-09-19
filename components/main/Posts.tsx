import Link from 'next/link';
import React from 'react';
import PostCard from './PostCard';
import { Post } from '@/app/page';

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <div className='grid grid-cols-2 gap-y-8 gap-x-4 px-6'>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
