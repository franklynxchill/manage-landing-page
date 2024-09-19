/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '992px',
      xl: '1124px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        varyLightGray: 'hsl(0, 0%, 98%)',
        buttonHover: 'hsla(12, 88%, 59%, .8)'
      },
      fontFamily: {
        primary: ["Be Vietnam Pro, sans-serif"],
      },
      backgroundImage: {
        sectionDesktop: "url('/assets/images/bg-simplify-section-desktop.svg')",
        sectionMobile: "url('/assets/images/bg-simplify-section-mobile.svg')",
        tabletPattern: "url('/assets/images/bg-tablet-pattern.svg')",
      }
    },
  },
  plugins: [],
}

