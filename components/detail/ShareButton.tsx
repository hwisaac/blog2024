import React from 'react';
import { IoMdShare } from 'react-icons/io';

type Props = {};

export default function ShareButton({}: Props) {
  return (
    <button className='border rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer'>
      <IoMdShare size={20} />
    </button>
  );
}
