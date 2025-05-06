const Button = ({ content }) => {
  return (
    <button className="inline-flex uppercase font-medium text-[16px] cursor-pointer h-14 px-6 py-4 justify-center items-center gap-1 rounded-full bg-gradient-to-r from-[#2154FF] to-[#5079FF] text-white-base hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-500">
      {content}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z" fill="white" />
      </svg>
    </button>
  );
};

export default Button;
