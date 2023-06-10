/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "green-offset": {
          "0%, 100%": { outline: "2px solid transparent" },
          "50%": { outline: "2px solid theme(colors.green.500)" },
        },
      },
      animation: {
        "green-offset": "green-offset 0.5s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
