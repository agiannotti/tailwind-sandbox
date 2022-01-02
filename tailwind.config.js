module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      // padding: "1rem",
      // default breakpoints but with 40px removed
      //
      // notice how the color changes at 768px but
      // the container size changes at 728px
      screens: {
        sm: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "1396px",
      },
    },
  },
  plugins: [],
};
