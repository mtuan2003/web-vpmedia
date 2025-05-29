import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind3,
} from "unocss";

export default defineConfig({
  theme: {
    breakpoints: {
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      custom: "900px", // Thêm breakpoint tùy chỉnh
    },
  },
  shortcuts: {
    // shortcuts to multiple utilities
    row: "flex flex-wrap mt-[calc(-1*var(0))] mr-[calc(-.5*var(1.5rem))]  ml-[calc(-.5*var(1.5rem))]",
    // category select
    "category-33": "lg:flex-[0_0_auto] lg:w-33.33333333% px-3",
    "section-category":
      "first-mt-0px px-25px py-30px rounded-[5px] bg-[rgb(11,11,49,0.05)] mt-35px",
    "h3-category":
      'before:content-[""] before:absolute before:bottom--1px before:left-0 before:w-50px before:h-1px before:bg-[#142b73]',
    "h3-line":
      "relative text-22px pb-10px mb-30px capitalize border-b-1px border-b-solid border-b-[#ffffff]",
    "category-li": "bg-[#142b73] my-4 rounded-md",
    "category-li-last": "bg-[#142b73] rounded-md",
    "category-a":
      "font-600 no-underline text-[#ffffff] rounded !py-3 !px-15px text-15px block rounded-[5px] transition-all transition-ease-[ease] transition-duration-350ms",
    "category-a-hover": "hover:color-[#ffffff] hover:bg-[#3e57d0]",
    // random css page-title-content
    "page-title-area":
      '[background-position-x:50%] [background-position-y:50%] relative z-1 bg-[position:center-center] bg-[length:cover] bg-no-repeat h-450px bg-[url(/src/assets/img/page-title-bg.jpg)] before:content-[""] before:absolute before:-z-1 before:h-[100%] before:w-[100%] before:left-0 before:top-0 before:op-50 before:bg-[#030821]',
    "d-table": "!table w-100% h-100%",
    "d-table-cell": "!table-cell align-middle",
    "li-page-title":
      'before:content-[""] before:absolute before:right--13px before:top-11px before:w-6px before:h-6px before:rounded-[50%] before:bg-[#ec5a26]',
    // about us
    "col-50": "!flex-[0_0_auto] !w-[50%]",
    "col-100": "!flex-[0_0_auto] !w-[100%]",
    "hire-before":
      'before:content-[""] before:absolute before:z--1 before:left-0 before:top-0 before:h-100% before:w-100% before:bg-[#03030c] before:opacity-60',
    "form-input":
      "bg-[#ffffff] border-none h-55px text-16px border-l-3px border-l-solid border-l-[#142b73] shadow-[0px_5px_30px_0px_rgba(148,146,245,0.15)]",
    "form-focus":
      "focus:border-l-3px focus:border-l-solid focus:border-l-[#142b73] focus:shadow-[none]",
    "col-33lg": "lg:!flex-[0_0_auto] lg:!w-33.33333333%",
    "col-41lg": "lg:!flex-[0_0_auto] lg:!w-41.66666667%",
    "col-50lg": "lg:!flex-[0_0_auto] lg:!w-50%",
    "col-58lg": "lg:!flex-[0_0_auto] lg:!w-58.33333333%",
    "col-66lg": "lg:!flex-[0_0_auto] lg:!w-66.66666667%",
    "col-50md": "md:!flex-[0_0_auto] md:!w-50%",
    "col-50maxlgsm": "max-lg:!flex-[0_0_auto] max-lg:!w-50% max-sm:!w-100%",
    container:
      "2xl:max-w-1320px xl:max-w-1140px lg:max-w-960px md:max-w-720px sm:max-w-540px w-100% px-0.75rem mx-auto",
      'rotate-icon' : 'hover:[transform:translateY(-10px)]',
      'rotate-icon2' : 'hover:[transform:rotateY(180deg)]',
  },
  presets: [
    presetAttributify(),
    presetIcons(),
    presetWebFonts(),
    presetWind3(),
  ],
  preflights: [
    {
      getCSS: () => `
      *, *:before, *:after {
        box-sizing: inherit;
      }

      * {
        scroll-behavior: inherit !important;
      }

      html, body {
        height: auto;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        box-sizing: border-box;
          line-height: 1.5;
      }

      body {
        padding: 0;
        margin: 0;
        font-size: 16px;
        font-family: 'Quicksand', sans-serif;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: 3px;
      }

      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      a {
        text-decoration: none;
        transition: 0.4s;
        outline: 0 !important;
        color: #0b0b31;
      }

        a:hover {
          text-decoration: none;
          color: #142b73;
        }

      p {
        font-size: 16px;
        line-height: 1.8;
        color: #5f5f5f;
        margin-bottom: 15px;
        font-weight: 400;
        letter-spacing: 0.3px;
        font-family: 'Quicksand', sans-serif;
      }

        p:last-child {
          margin-bottom: 0;
        }
        h1 {
            font-size: calc(1.375rem + 1.5vw)
        }

        @media (min-width: 1200px) {
            h1 {
                font-size:2.5rem
            }
        }

        h2 {
            font-size: calc(1.325rem + .9vw)
        }

        @media (min-width: 1200px) {
            h2 {
                font-size:2rem
            }
        }

        h3 {
            font-size: calc(1.3rem + .6vw)
        }

        @media (min-width: 1200px) {
            h3 {
                font-size:1.75rem
            }
        }

        h4 {
            font-size: calc(1.275rem + .3vw)
        }

        @media (min-width: 1200px) {
            h4 {
                font-size:1.5rem
            }
        }

        h5 {
            font-size: 1.25rem
        }

        h6 {
            font-size: 1rem
        }
        h1,h2,h3,h4,h5,h6 {
          margin-top: 0;
          margin-bottom: .5rem;
          font-weight: 500;
	        line-height: 1.4;
	        font-family: 'Quicksand', sans-serif;
        }

        p {
            margin-top: 0;
            margin-bottom: 1rem
        }
        button,input,optgroup,select,textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit
        }
        
        img,svg {
            vertical-align: middle
        }
        /* vietnamese */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 400;
          src: url(/src/assets/font-quicksand/vietnamese.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 400;
          src: url(/src/assets/font-quicksand/latin-ext.woff2) format('woff2');
          unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 400;
          src: url(/src/assets/font-quicksand/latin.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 500;
          src: url(/src/assets/font-quicksand/vietnamese.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 500;
          src: url(/src/assets/font-quicksand/latin-ext.woff2) format('woff2');
          unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 500;
          src: url(/src/assets/font-quicksand/latin.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 600;
          src: url(/src/assets/font-quicksand/vietnamese.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 600;
          src: url(/src/assets/font-quicksand/latin-ext.woff2) format('woff2');
          unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 600;
          src: url(/src/assets/font-quicksand/latin.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 700;
          src: url(/src/assets/font-quicksand/vietnamese.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 700;
          src: url(/src/assets/font-quicksand/latin-ext.woff2) format('woff2');
          unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-weight: 700;
          src: url(/src/assets/font-quicksand/latin.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* greater than */
        .row>* {
          flex-shrink: 0;
          width: 100%;
          max-width: 100%;
          padding-right: 1rem;
        }
      `,
    },
  ],
});
