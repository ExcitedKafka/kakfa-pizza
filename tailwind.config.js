/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  //会覆盖已有内容
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    //保留原有内容 增加拓展内容
    extend: {
      colors: {
        pizza: "#123456",
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
