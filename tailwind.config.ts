import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient( at 50%, rgba(255, 255, 255, 0.2), #1D2329 70% )",
      },
      colors: {
        "yin-d-bg": "#1D2329",
      },
    },
  },
  daisyui: {
    themes: [
      {
        "yin-d": {
          primary: "#0EA5E9",

          secondary: "#fff",

          accent: "#1891C7",

          neutral: "#000",

          "base-bg": "#1D2329",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
