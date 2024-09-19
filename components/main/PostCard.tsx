import { Post } from '@/app/page';
import Link from 'next/link';
import React from 'react';

type Props = { post: Post };

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className=' w-[380px] rounded-lg hover:shadow-xl transition-all p-4 border border-transparent hover:border-gray-200 '>
      <div className='bg-cGray1 w-full h-[200px] rounded-lg'></div>
      <ul className='flex gap-2 w-full flex-wrap text-xs mt-2 mb-4'>
        {post.tags.map((tag) => (
          <li key={`post-card-${tag}`} className='text-gray-400'>
            #{tag}
          </li>
        ))}
      </ul>
      <p className='font-semibold text-lg mb-4 truncate'>{post.title}</p>
      <p className='card-summary text-sm text-gray-600 whitespace-normal '>
        {post.summary}
      </p>
    </Link>
  );
}
