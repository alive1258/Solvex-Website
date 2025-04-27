const Accordion = ({ accordion, isActive, onClick }) => {
  return (
    <div className="flex items-center space-x-4  justify-baseline w-full">
      <div
        className={`rounded-lg max-w-[805px] w-full bg-[#F4F4F5] p-4 ${
          isActive
            ? "border-2 border-[#2154FF]"
            : "border-2 border-transparent hover:border-[#2154FF]"
        }`}
      >
        <div
          className={` font-medium cursor-pointer  rounded-lg duration-150 ${
            isActive ? "" : "text-[#27272A] group"
          }`}
          onClick={onClick}
        >
          <h1
            className={`md:text-[20px] text-[18px] ${
              isActive ? "border-b pb-1 border-[#D4D4D8]" : ""
            }  font-bold text-[#27272A]`}
          >
            {accordion?.question}
          </h1>
        </div>
        {isActive && (
          <div className="flex gap-1.5 md:gap-3 pt-4">
            <h6 className="text-[16px] text-[#52525B] pr-4">
              {accordion?.answer}
            </h6>
          </div>
        )}
      </div>
      <div
        className={`bg-[#F4F4F5]  hidden cursor-pointer border size-14 md:flex justify-center items-center border-[#E4E4E7] rounded-full`}
        onClick={onClick}
      >
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M6.50195 11H17.502V13H6.50195V11Z" fill="#3F3F46" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
              fill="#3F3F46"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Accordion;
