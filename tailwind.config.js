module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      blue: "0px 20px 20px -15px rgba(28, 128, 214, 0.81) ",
      "blue-md": "0px 20px 40px -15px rgba(28, 128, 214, 0.81) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5665",
        600: "#0B132A",
      },
      blue: {
        100: "#E2F1FF",
        500: "#1C80D6",
        300: "#7FB9EB",
      },
      green: {
        500: "#2FAB73",
      },
      white: {
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
      red: "crimson",
    },
    extend: {
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
