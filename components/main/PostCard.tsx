import Link from 'next/link';
import React from 'react';

type Props = {};

export default function PostCard({}: Props) {
  return (
    <Link
      href={`/`}
      className=' w-[370px] rounded-lg hover:shadow-xl transition-all pb-4'>
      <div className='bg-cGray1 w-[370px] h-[200px] rounded-lg'></div>
      <ul className='flex gap-2 w-full flex-wrap text-xs mt-2 mb-4'>
        <li className='text-cRed'>#python</li>
        <li>#javascript</li>
        <li>#golang</li>
        <li>#python</li>
        <li>#javascript</li>
        <li>#golang</li>
        <li>#python</li>
      </ul>
      <p className='font-semibold text-lg mb-4 truncate'>
        How to Reinstall WordPress: 5 Different Methods Depending on your needs
      </p>
      <p className='card-summary text-balance text-sm text-gray-600'>
        New Yorkers are facing the winter chill with less warmth this year as
        the city's most revered soup stand unexpectedly shutters, following a
        series of events that have left the community puzzled.
      </p>
    </Link>
  );
}
