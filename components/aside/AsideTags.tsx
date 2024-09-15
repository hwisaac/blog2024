import React from 'react';

type Props = {};

export default function AsideTags({}: Props) {
  return (
    <section className=' rounded-xl shadow-lg mx-4 mb-4 py-8  bg-white px-6'>
      <p className='font-semibold text-lg  mb-4'>Tags</p>
      <ul className='flex flex-wrap gap-4 px-1'>
        <TagItem text='Machine Learning' />
        <TagItem text='Productivity' />
        <TagItem text='Cryptocurrency' />
        <TagItem text='Psychology' />
        <TagItem text='Money' />
        <TagItem text='Python' />
      </ul>
      <p className='text-sm text-cOrange px-1 mt-4 hover:underline cursor-pointer'>
        See more tags
      </p>
    </section>
  );
}

function TagItem({ text }: any) {
  return <li className='bg-cGray1 rounded-full px-4 py-1 text-sm'>{text}</li>;
}
