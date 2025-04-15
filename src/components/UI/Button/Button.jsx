const Button = ({ content }) => {
  return (
    <button className="inline-flex cursor-pointer h-14 px-6 py-4 justify-center items-center gap-1 rounded-full bg-gradient-to-r from-[#2154FF] to-[#5079FF] text-[#fff] hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-500">
      {content}
    </button>
  );
};

export default Button;
