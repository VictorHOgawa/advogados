import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_color: "#1E253F",
        primary_light_color: "#5D5A88",
        secondary_color: "#A66E55",
        neutral_color: "#D9D9D9",
        secondary_neutral_color: "#F2F1FA",
        gray: {
          10: "#F4F7FB",
          20: "#EAEEF5",
          30: "#D7DEEA",
          40: "#B7BECD",
          50: "#9DA5B4",
          60: "#8690A2",
          70: "#646E82",
          80: "#4B5362",
          90: "#383D48",
          100: "#21242C",
        },
        red: {
          10: "#FFF5F5",
          20: "#FECDCD",
          30: "#FD9B9B",
          40: "#FF6666",
          50: "#FF3D3D",
          60: "#ED1D1D",
          70: "#C61010",
          80: "#A50D0D",
          90: "#760909",
          100: "#5F0707",
        },
        green: {
          10: "#F2FCF2",
          20: "#BDF5C1",
          30: "#8FEF99",
          40: "#65E673",
          50: "#2BCD3E",
          60: "#25AF36",
          70: "#1F932D",
          80: "#197624",
          90: "#145D1D",
          100: "#104C18",
        },
        yellow: {
          10: "#FFF8E6",
          20: "#FEEFC3",
          30: "#FCD974",
          40: "#FAC734",
          50: "#ECB52B",
          60: "#D6A12E",
          70: "#B7831F",
          80: "#8E6115",
          90: "#70490F",
          100: "#51350B",
        },
      },
    },
    screens: {
      xxs: "200px",
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      "2xl": "1920px",
      "3xl": "2560px",
    },
    fontFamily: {
      archivo: ["archivo", "serif"],
      bigShouldersText: ["Big Shoulders Text", "serif"],
      marcellus: ["Marcellus", "serif"],
    },
  },
  plugins: [],
};
export default config;
