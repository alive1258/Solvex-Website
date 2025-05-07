// const Button = ({ content }) => {
//   return (
//     <button className="relative inline-flex group uppercase font-medium text-[16px] cursor-pointer h-14 px-6 py-4 justify-center items-center gap-1 rounded-full bg-gradient-to-r from-[#2154FF] to-[#5079FF] text-white-base hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-500 overflow-hidden">
//       {content}

//       {/* Default icon (hidden on hover) */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         className="block opacity-100 group-hover:opacity-0 group-hover:hidden transition-opacity duration-300"
//       >
//         <path d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z" fill="white" />
//       </svg>

//       {/* Hover icon (visible on hover only) */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="25"
//         height="24"
//         viewBox="0 0 25 24"
//         fill="none"
//         className="hidden opacity-0  group-hover:opacity-100 group-hover:block  transition-all ease-in-out duration-500"
//       >
//         <path
//           d="M5.16699 10.9999H16.753L12.253 6.49994L13.667 5.08594L20.581 11.9999L13.667 18.9139L12.253 17.4999L16.753 12.9999H5.16699V10.9999Z"
//           fill="white"
//         />
//       </svg>
//     </button>
//   );
// };

// export default Button;

const Button = ({ content }) => {
  return (
    <button className="relative inline-flex group uppercase font-medium text-[16px] cursor-pointer h-14 px-6 py-4 justify-center items-center gap-2 rounded-full bg-gradient-to-r from-[#2154FF] to-[#5079FF] text-white-base hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-500 overflow-hidden">
      <span className="z-10">{content}</span>

      {/* Icon wrapper */}
      <span className="relative w-6 h-6 ml-2 flex items-center justify-center">
        {/* Default icon with rotation on hover */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="transform transition-all duration-300 ease-in-out group-hover:rotate-45"
        >
          <path
            d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
};

export default Button;
