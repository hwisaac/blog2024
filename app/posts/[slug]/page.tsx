import { Metadata, ResolvingMetadata } from 'next';
import Head from 'next/head';
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

export default function page({}: Props) {
  const title = '10 Reasons to build your website with WP page builder';
  const content = `- Hi
  - Hello`;
  const updated_at = '2024-01-01';
  return (
    <>
      <div className='flex flex-col w-full py-10 max-w-7xl mx-auto gap-4'>
        <h1 className='text-3xl font-semibold w-full max-w-7xl self-center'>
          {title}
        </h1>
        <div className='flex gap-4'>
          <p className=''>{updated_at}</p>
          <p>Share</p>
        </div>
      </div>
      <article className='w-full max-w-7xl mx-auto'>
        <div>{content}</div>
      </article>
    </>
  );
}
