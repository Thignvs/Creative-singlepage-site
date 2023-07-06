/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '60%': '60%',
    },
    fontFamily: {
      'sans': '"Commissioner", sans-serif;',
    },
    colors: {
      'Red': '#F94F4F',
      'RedHover':'#FF9393',
      'BlackHover': '#434356',
      'BgBlack': '#191921',
      'White': '#FFFFFF',
      'TextBlack': '#000000',
    },
    extend: {
      backgroundImage: {
        'heroBgTablet': 'url("/src/assets/tablet/image-hero.jpg")',
        'heroBgDesktop': 'url("/src/assets/desktop/image-hero.jpg")',
      },
    },
  },
  plugins: [],
}