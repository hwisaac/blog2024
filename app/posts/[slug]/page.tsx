import DetailHeader from '@/components/detail/DetailHeader';
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

export default function page({ params }: Props) {
  console.log(params.slug);
  const title = '10 Reasons to build your website with WP page builder';
  const content = `- Hi
  - Hello`;
  const updated_at = '2024-01-01';
  return (
    <>
      <DetailHeader title={title} updated_at={updated_at} slug={params.slug} />
      <article className='w-full max-w-7xl mx-auto'>
        <div>{content}</div>
      </article>
    </>
  );
}
