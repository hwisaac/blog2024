import React from 'react';

type Props = {
  text: string;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  outlined?: boolean;
};

const commonStyle = `rounded-lg px-4 py-1 font-semibold transition-all `;
export default function GeneralButton({ text, type, outlined }: Props) {
  switch (type) {
    case 'primary':
      return (
        <button
          className={`${commonStyle} ${
            outlined
              ? 'bg-white text-cPrimary border-2 border-cPrimary hover:bg-cRed/10'
              : 'bg-cPrimary text-white '
          }`}>
          {text}
        </button>
      );
    case 'secondary':
      return (
        <button
          className={`${commonStyle} ${
            outlined
              ? 'bg-white text-[#909090] border-2 border-cGray hover:bg-gray-100'
              : 'bg-cSecondary text-slate-900 '
          }`}>
          {text}
        </button>
      );
    case 'success':
      return (
        <button
          className={`${commonStyle} ${
            outlined
              ? 'bg-white text-cSuccess border-2 border-cSuccess hover:bg-cSuccess/10'
              : 'bg-cSuccess text-white '
          }`}>
          {text}
        </button>
      );
    case 'danger':
      return (
        <button
          className={`${commonStyle} ${
            outlined
              ? 'bg-white text-cDanger border-2 border-cDanger hover:bg-cDanger/10'
              : 'bg-cDanger text-white '
          }`}>
          {text}
        </button>
      );
    case 'warning':
      return (
        <button
          className={`${commonStyle} ${
            outlined
              ? 'bg-white text-cWarning border-2 border-cYellow hover:bg-cYellow/10'
              : 'bg-cWarning text-white '
          }`}>
          {text}
        </button>
      );
    default:
      return (
        <button
          className={`${commonStyle} ${
            outlined
              ? 'bg-white text-cPrimary border-2 border-cPrimary hover:bg-cRed/10'
              : 'bg-cPrimary text-white '
          }`}>
          {text}
        </button>
      );
  }
}
