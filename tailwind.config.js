import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/**/*.blade.php",
    "./resources/js/**/*.tsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        primary: {
          DEFAULT: "oklch(var(--primary))",
        },
        success: {
            DEFAULT: "oklch(var(--success))",
        },
        desctructive: {
          DEFAULT: "hsl(var(--desctructive))",
          foreground: "hsl(var(--desctructive-foreground))",
        },
      },
    },
  },

  plugins: [forms],
};
