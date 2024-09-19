import React from 'react';
import GeneralButton from './common/GeneralButton';
import CircleButton from './common/CircleButton';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';

type Props = {};

export default function Header() {
  return (
    <header className=' w-full max-w-7xl mx-auto flex flex-wrap justify-between items-end py-8'>
      {/* <Image src={logo} alt='logo' width={30} height={30} /> */}
      <Link href={'/'} className='font-black text-4xl cursor-pointer'>
        B
      </Link>
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
    <li
      className={`${
        isActive ? 'text-cRed' : ''
      } font-semibold group cursor-pointer`}>
      <a className='relative '>
        {text}
        <div className='w-0 h-[1px] bg-cRed group-hover:w-full transition-all' />
      </a>
    </li>
  );
}