export const carouselTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl: "hidden",
    rightControl: "hidden",
  },
  indicators: {
    active: {
      off: "hidden",
      on: "hidden",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

export const tableTheme = {
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    shadow:
      "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-[#14161A] dark:bg-black",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg border-b border-[#16171A]", 
    },
  },
  head: {
    base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
    cell: {
      base: "bg-[#87CEEB] px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700",
    },
  },
  row: {
    base: "group/row bg-[#14161A] border-collapse", 
    hovered: "hover:bg-gray-800 text-white dark:hover:bg-black",
    striped:
      "odd:bg-[#14161A] even:bg-[#14161A] odd:dark:bg-[#14161A] even:dark:bg-white border-solid  border-[2px]", 
  },
};


export const inputTheme = {
  input: {
    default: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-[14px] text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-gray-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-[14px] text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-gray-500",
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-[14px] font-[400] text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-gray-500",
        md: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-[14px] font-[400] text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-gray-500",
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-[14px] font-[400] text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-gray-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-[14px] font-[400] text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-gray-500",
      },
    },
  },
};
