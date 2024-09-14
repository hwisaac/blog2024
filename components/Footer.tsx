import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='border flex justify-end w-full max-w-6xl mx-auto py-10'>
      <section>
        <p>&copy; {new Date().getFullYear()} | All rights reserved.</p>
      </section>
    </footer>
  );
}
