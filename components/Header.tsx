import React from 'react';
import GeneralButton from './common/GeneralButton';
import CircleButton from './common/CircleButton';
import { FaSearch } from 'react-icons/fa';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='border w-full max-w-6xl mx-auto flex flex-wrap justify-between py-8'>
      <div>LOGO</div>
      <nav className='flex gap-16'>
        <ul className='flex items-center gap-16'>
          <MenuItem text='Popular' />
          <MenuItem text='New' isActive />
          <MenuItem text='Reading List' />
          <MenuItem text='Topics' />
          <MenuItem text='Subscribe' />
        </ul>
        <FaSearch className='text-[20px] cursor-pointer' />
      </nav>
    </header>
  );
}

function MenuItem({ text, isActive }: { text: string; isActive?: boolean }) {
  return (
    <li className={`${isActive ? 'text-cRed' : ''} font-semibold group`}>
      <a className='relative cursor-pointer'>
        {text}
        <div className='w-0 h-[1px] bg-cRed group-hover:w-full transition-all' />
      </a>
    </li>
  );
}