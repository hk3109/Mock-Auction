/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@zinnect/ui-render/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        "left-menu": "260px",
      },
      maxWidth: {
        "left-menu": "260px",
      },
      colors: {
        base: {
          background: "rgba(var(--base-background), 100)", // white
          card: "rgba(var(--base-card), 100)", // white
          popover: "rgba(var(--base-popover), 100)", // white
          muted: "rgba(var(--base-muted), 100)", // white

          accent: "rgba(var(--base-accent), 100)", // blue
          border: "rgba(var(--base-border), 100)", // gray
          input: "rgba(var(--base-input), 100)", // gray
          focus: "rgba(var(--base-focus-ring), 100)", // blue
          transparent: "rgba(var(--base-background), 0.5)",
          foreground: "rgba(var(--base-foreground), 100)", // black
          cardForeground: "rgba(var(--base-card-foreground), 100)", // black
          popoverForeground: "rgba(var(--base-popover-foreground), 100)", // black
          mutedForeground: "rgba(var(--base-muted-foreground), 100)", // black

          primary: {
            DEFAULT: "rgba(var(--base-primary), 100)", // blue
            hover: "rgba(var(--base-primary-hover), 100)", // blue
            disable: "rgba(var(--base-primary-disable), 100)", // blue
            100: "rgba(var(--base-primary), 0.1)", // blue
            200: "rgba(var(--base-primary), 0.2)", // blue
            300: "rgba(var(--base-primary), 0.3)", // blue
            400: "rgba(var(--base-primary), 0.4)", // blue
            500: "rgba(var(--base-primary), 0.5)", // blue
            600: "rgba(var(--base-primary), 0.6)", // blue
            700: "rgba(var(--base-primary), 0.7)", // blue
            800: "rgba(var(--base-primary), 0.8)", // blue
            900: "rgba(var(--base-primary), 0.9)", // blue
          },

          primaryForeground: "rgba(var(--base-primary-foreground), 100)", // white
          primaryForegroundHover:
            "rgba(var(--base-primary-foreground-hover), 100)", // white
          primaryForegroundDisable:
            "rgba(var(--base-primary-foreground-disable), 100)", // white

          secondary: {
            DEFAULT: "rgba(var(--base-foreground), 100)", // black
            hover: "rgba(var(--base-secondary-hover), 100)", // blue
            disable: "rgba(var(--base-secondary-disable), 100)", // blue
            100: "rgba(var(--base-foreground), 0.1)", // black
            200: "rgba(var(--base-foreground), 0.2)", // black
            300: "rgba(var(--base-foreground), 0.3)", // black
            400: "rgba(var(--base-foreground), 0.4)", // black
            500: "rgba(var(--base-foreground), 0.5)", // black
            600: "rgba(var(--base-foreground), 0.6)", // black
            700: "rgba(var(--base-foreground), 0.7)", // black
            800: "rgba(var(--base-foreground), 0.8)", // black
            900: "rgba(var(--base-foreground), 0.9)", // black
          },

          secondaryForeground: "rgba(var(--base-secondary-foreground), 100)", // black
          secondaryForegroundHover:
            "rgba(var(--base-secondary-foreground-hover), 100)", // black
          secondaryForegroundDisable:
            "rgba(var(--base-secondary-foreground-disable), 100)", // black

          accentForeground: "rgba(var(--base-accent-foreground), 100)", // blue
        },
        semantic: {
          destructive: "rgba(var(--semantic-destructive), 100)", // red
          destructiveHover: "rgba(var(--semantic-destructive-hover))", // red
          destructiveDisable: "rgba(var(--semantic-destructive-disable), 0.5)", // red

          success: "rgba(var(--semantic-success), 100)", // green
          successHover: "rgba(var(--semantic-success-hover), 0.8)", // green
          successDisable: "rgba(var(--semantic-success-disable), 0.5)", // green

          warning: "rgba(var(--semantic-warning), 100)", // yellow
          warningHover: "rgba(var(--semantic-warning-hover), 0.8)", // yellow
          warningDisable: "rgba(var(--semantic-warning-disable), 0.5)", // yellow

          info: "rgba(var(--semantic-info), 100)", // blue
          infoHover: "rgba(var(--semantic-info-hover), 0.8)", // blue
          infoDisable: "rgba(var(--semantic-info-disable), 0.5)", // blue
        },
        muted: {
          DEFAULT: "rgba(var(--base-muted), 100)", // white
          foreground: "rgba(var(--base-muted-foreground), 100)", // black
        },
        accent: {
          DEFAULT: "rgba(var(--base-accent), 100)", // blue
          foreground: "rgba(var(--base-accent-foreground), 100)", // blue
        },
        popover: {
          DEFAULT: "rgba(var(--base-popover), 100)", // white
          foreground: "rgba(var(--base-popover-foreground), 100)", // black
        },
        card: {
          DEFAULT: "rgba(var(--base-card), 100)", // white
          foreground: "rgba(var(--base-card-foreground), 100)", // black
        },
      },
    },
  },
  plugins: [animate],
};

// colors: {
//   border: "rgba(var(--base-border), 100)",
//   input: "rgba(var(--base-input), 100)",
//   ring: "rgba(var(--base-focus-ring), 100)",
//   background: "rgba(var(--base-background), 100)",
//   foreground: "rgba(var(--base-foreground), 100)",
//   primary: {
//     DEFAULT: "rgba(var(--base-primary), 100)",
//     foreground: "rgba(var(--base-primary-foreground), 100)",
//   },
//   secondary: {
//     DEFAULT: "rgba(var(--base-secondary), 100)",
//     foreground: "rgba(var(--base-secondary-foreground), 100)",
//   },
//   destructive: {
//     DEFAULT: "rgba(var(--semantic-destructive), 100)",
//     foreground: "rgba(var(--base-foreground), 100)",
//   },
//   muted: {
//     DEFAULT: "rgba(var(--base-muted), 100)",
//     foreground: "rgba(var(--base-muted-foreground), 100)",
//   },
//   accent: {
//     DEFAULT: "rgba(var(--base-accent), 100)",
//     foreground: "rgba(var(--base-accent-foreground), 100)",
//   },
//   popover: {
//     DEFAULT: "rgba(var(--base-popover), 100)",
//     foreground: "rgba(var(--base-popover-foreground), 100)",
//   },
//   card: {
//     DEFAULT: "rgba(var(--base-card), 100)",
//     foreground: "rgba(var(--base-card-foreground), 100)",
//   },
// },