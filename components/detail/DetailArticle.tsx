import { RelatedPostType } from '@/app/posts/[slug]/page';
import React from 'react';

type Props = {
  content: string;
};

export default function DetailArticle({ content }: Props) {
  return (
    <article
      dangerouslySetInnerHTML={{ __html: content }}
      className='w-full max-w-7xl mx-auto detail-post'></article>
  );
}
