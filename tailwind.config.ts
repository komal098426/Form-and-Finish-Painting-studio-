import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f0eee7",
        ink: "#292a26",
        moss: "#69725d",
        clay: "#c87556",
      },
    },
  },
  plugins: [],
};

export default config;
