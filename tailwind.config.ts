import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#043878",
        lightblue: "#4F9CF9",
        eggwhite: "#FDFDFD",
        accent: "#FFE492",
        black: "#212529",
      },
    },
  },
  plugins: [],
};
export default config;
