// postcss.config.js
import purgecss from '@fullhuman/postcss-purgecss';

/** @type {import('postcss').Config} */
const config = {
  plugins: [
    purgecss({
      content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
      css: ['./public/bootstrap.min.css'],
      safelist: {
        standard: [
          /^modal/,
          /^alert/,
          /^btn/,
          /^nav/,
          /^carousel/,
          /^collapse/,
          /^fade/,
          /^show/,
          /^tooltip/,
          /^popover/,
        ],
      },
    }),
  ],
};

export default config;
