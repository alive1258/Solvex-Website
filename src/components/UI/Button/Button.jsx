const Button = ({ content }) => {
  return (
    <button className="relative inline-flex group uppercase font-medium text-[16px] cursor-pointer h-14 px-6 py-4 justify-center items-center gap-2 rounded-full bg-gradient-to-r from-[#2154FF] to-[#5079FF] text-white-base hover:opacity-90  overflow-hidden">
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
