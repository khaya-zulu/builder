/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translatey(-20px) rotate(5deg)",
          },
          "100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
        },
        "float-1": {
          "0%": {
            transform: "translateY(0px) translatex(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translatey(-20px) translatex(-10px) rotate(-360deg)",
          },
          "100%": {
            transform: "translateY(0px) translatex(0px) rotate(0deg)",
          },
        },
        "float-2": {
          "0%": {
            transform: "translateY(0px) translatex(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translatey(-40px) translatex(20px) rotate(-20deg)",
          },
          "100%": {
            transform: "translateY(0px) translatex(0px) rotate(0deg)",
          },
        },
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        "float-1": "float-1 15s ease-in infinite",
        "float-2": "float-2 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
