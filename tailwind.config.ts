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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/assets/Images/schools.jpeg')",
        donate_cta: "url('/assets/Images/donate_cta.png')",
      },
      colors: {
        fz_black: "#0B0706",
        fz_black_2: "#1D2130",
        fz_maroon: "#670752",
        fz_text_grey: "#525560",
        fz_maroon_light: "#ECC3D8",
        brandGray: "#8A8B8A",
        brandGreen: "#0CF308",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        nunito_sans: ["var(--font-nunito_sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
