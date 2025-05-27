import { defineConfig, presetAttributify, presetIcons, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig({
  theme: {
    breakpoints: {
      xs: "420px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
      custom: "900px" // Thêm breakpoint tùy chỉnh
    }
  },
  shortcuts: {
    // shortcuts to multiple utilities
    'row':'flex flex-wrap mt-[calc(-1*var(0))] mr-[calc(-.5*var(1.5rem))]  ml-[calc(-.5*var(1.5rem))]',
    // category select
    'category-33':'lg:flex-[0_0_auto] lg:w-33.33333333% px-3',
    'section-category':'first-mt-0px px-25px py-30px rounded-[5px] bg-[rgb(11,11,49,0.05)] mt-35px',
    'h3-category':'before:content-[""] before:absolute before:bottom--1px before:left-0 before:w-50px before:h-1px before:bg-[#142b73]',
    'h3-line':'relative text-22px pb-10px mb-30px capitalize border-b-1px border-b-solid border-b-[#ffffff]',
    'category-li':'bg-[#142b73] my-4 rounded-md',
    'category-li-last':'bg-[#142b73] rounded-md',
    'category-a': 'font-600 no-underline text-[#ffffff] rounded !py-3 !px-15px text-15px block rounded-[5px] transition-all transition-ease-[ease] transition-duration-350ms',
    'category-a-hover': 'hover:color-[#ffffff] hover:bg-[#3e57d0]',
    // random css page-title-content
    'page-title-area' : 'relative z-1 bg-[position:center-center] bg-[length:cover] bg-no-repeat h-450px bg-[url(/src/assets/img/page-title-bg.jpg)] before:content-[""] before:absolute before:-z-1 before:h-[100%] before:w-[100%] before:left-0 before:top-0 before:op-50 before:bg-[#030821]',
    'd-table' : '!table w-100% h-100%',
    'd-table-cell' : '!table-cell align-middle',
    'li-page-title' : 'before:content-[""] before:absolute before:right--13px before:top-11px before:w-6px before:h-6px before:rounded-[50%] before:bg-[#ec5a26]',
    // about us
    'col-50' : '!flex-[0_0_auto] !w-[50%]',
    'col-100' : '!flex-[0_0_auto] !w-[100%]',
    'hire-before' : 'before:content-[""] before:absolute before:z--1 before:left-0 before:top-0 before:h-100% before:w-100% before:bg-[#03030c] before:opacity-60',
    'form-input' : 'bg-[#ffffff] border-none h-55px text-16px border-l-3px border-l-solid border-l-[#142b73] shadow-[0px_5px_30px_0px_rgba(148,146,245,0.15)]',
    'form-focus' : 'focus:border-l-3px focus:border-l-solid focus:border-l-[#142b73] focus:shadow-[none]',
    'col-33lg' : 'lg:!flex-[0_0_auto] lg:!w-33.33333333%',
    'col-41lg' : 'lg:!flex-[0_0_auto] lg:!w-41.66666667%',
    'col-50lg' : 'lg:!flex-[0_0_auto] lg:!w-50%',
    'col-58lg' : 'lg:!flex-[0_0_auto] lg:!w-58.33333333%',
    'col-66lg' : 'lg:!flex-[0_0_auto] lg:!w-66.66666667%',
    'col-50md' : 'md:!flex-[0_0_auto] md:!w-50%',
    'col-50maxlgsm' : 'max-lg:!flex-[0_0_auto] max-lg:!w-50% max-sm:!w-100%',
    // 'button-one' : 'hover:text-[#ffffff] focus:text-[#ffffff] px-35px py-14px text-4 mr-5 rounded-3px font-600 text-[#142b73] z-1 overflow-hidden text-center inline-block relative bg-[#ffffff] [border:none] [transition:0.4s] [box-shadow:0_7px_25px_rgb(123,104,238,0.25)]',
    // 'button-one-span' : 'hover:w-225% hover:h-562.5px focus:w-225% focus:h-562.5px absolute block w-0 h-0 rounded-50% bg-[#3e57d0] [transition:width_0.5s_ease-in-out,_height_0.5s_ease-in-out] [transform:translate(-50%,-50%)] z--1 rounded-30px'
    // 'btn-default': 'hover:text-[#ffffff] focus:text-[#ffffff] border-none relative inline-block text-center overflow-hidden z-1 text-[#ffffff] bg-[#142b73] transition-all duration-400 rounded-[3px] font-600 text-16px pl-35px pr-35px pt-14px pb-14px shadow-[0_7px_25px_rgb(123,104,238,0.25)]',

  },
  presets: [
    presetAttributify(),
    presetIcons(),
    presetWebFonts(),
    presetWind3()
  ]
})