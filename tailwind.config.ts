import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        cPrimary: '#ff4a75',
        cSecondary: '#e0e0e0',
        cSuccess: '#8778dc',
        cDanger: '#0ed785',
        cWarning: '#ffd581',
        cRed: '#ff5480',
        cPurple: '#9283e0',
        cOrange: '#ffa599',
        cYellow: '#ffd581',
        cViolet: '#fe90ec',
        cBlue: '#27aeff',
        cGreen: '#00dc90',
        cBg: '#f9f9fb',
        cGray: '#e0e0e0',
        cGray1: '#ededed',
        cDarkGray: '#909090',
        tBlack: '#000000',
        tPassive: '#9b9b9b',
        tQuote: '#9283e0',
        tHover: '#ff5480',
      },
    },
  },
  plugins: [],
};
export default config;
