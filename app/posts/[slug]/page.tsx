import DetailArticle from '@/components/detail/DetailArticle';
import DetailHeader from '@/components/detail/DetailHeader';
import IncreaseViewCount from '@/components/detail/IncreaseViewCount';
import RelatedPosts from '@/components/detail/RelatedPosts';
import { API_URL } from '@/lib/urls';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  return {
    title: slug,
  };
}

export type RelatedPostType = null | {
  id: number;
  slug: string;
  title: string;
  summary: string;
  thumbnail: null | string;
  views: number;
};
interface PostDetail {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  summary: string;
  views: number;
  thumbnail: null | string;
  tags: string[];
  content: string;
  related_post_1: RelatedPostType;
  related_post_2: RelatedPostType;
}

export default async function page({ params }: Props) {
  const detail: PostDetail = await fetch(
    `${API_URL}/api/posts/${params.slug}/`,
    {
      cache: 'no-cache',
    }
  ).then((res) => res.json());
  console.log('--------------', detail);
  return (
    <>
      <IncreaseViewCount slug={params.slug} />
      <DetailHeader
        title={detail?.title ?? ''}
        updated_at={detail?.updated_at ?? ''}
        slug={params?.slug ?? ''}
        tags={detail?.tags ?? ''}
      />
      <DetailArticle content={detail?.content ?? ''} />
      <RelatedPosts
        related_post_1={detail?.related_post_1}
        related_post_2={detail?.related_post_2}
      />
    </>
  );
}
