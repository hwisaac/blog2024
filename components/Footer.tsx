import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='flex justify-end w-full max-w-7xl mx-auto py-10 mt-16'>
      <section>
        <p>&copy; {new Date().getFullYear()} | All rights reserved.</p>
      </section>
    </footer>
  );
}
