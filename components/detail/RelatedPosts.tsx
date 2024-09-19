import { RelatedPostType } from '@/app/posts/[slug]/page';
import { getImageUrl } from '@/lib/getImageUrl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  related_post_1: RelatedPostType;
  related_post_2: RelatedPostType;
};

export default function RelatedPosts({
  related_post_1,
  related_post_2,
}: Props) {
  if (!related_post_1 && !related_post_2) return null;

  return (
    <div className='w-full max-w-7xl mx-auto my-10'>
      <p className='text-cRed font-semibold text-sm my-2'>Related Post</p>
      <div className='w-full flex flex-col sm:flex-row gap-2'>
        <RelatedPostCard related_post={related_post_1} />
        <RelatedPostCard related_post={related_post_2} />
      </div>
    </div>
  );
}

function RelatedPostCard({ related_post }: { related_post: RelatedPostType }) {
  if (!related_post) return null;

  const { id, slug, title, summary, thumbnail, views } = related_post;

  return (
    <Link
      href={`/posts/${slug}`}
      className='w-full h-32 flex rounded overflow-hidden cursor-pointer hover:shadow group hover:bg-slate-200 border transition-colors'>
      {thumbnail && (
        <div className='size-32 bg-slate-500 relative shrink-0'>
          <Image
            src={getImageUrl(thumbnail)}
            alt={title}
            fill
            objectFit='cover'
            className='group-hover:scale-105 transition-all'
          />
        </div>
      )}
      <div className='grow-0 flex flex-col w-full items-start justify-center p-4'>
        <p className='font-semibold text-xl '>{title}</p>
      </div>
    </Link>
  );
}
