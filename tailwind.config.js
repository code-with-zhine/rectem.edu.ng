// const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.500"),
            h2: {
              color: theme("colors.gray.600"),
            },
            h3: {
              color: theme("colors.gray.600"),
            },
            h4: {
              color: theme("colors.gray.600"),
            },
            h5: {
              color: theme("colors.gray.600"),
            },
            a: {
              color: "red",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
