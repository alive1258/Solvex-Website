import SlideRight from "@/utils/animations/SlideRight";

const QuestionDetails = ({
  accordion,
  isActive,
  onClick,
  index,
  delay = 0,
}) => {
  return (
    <SlideRight
      delay={delay}
      className="flex items-center space-x-4  justify-baseline w-full"
    >
      <div
        className={`max-w-[805px] w-full border-b border-[#D4D4D8] duration-300 transition-all ease-in-out hover:bg-[#F4F4F5]  py-6 px-2`}
      >
        <div
          className={` font-medium cursor-pointer  rounded-lg duration-150 `}
          onClick={onClick}
        >
          <div className="flex items-center justify-between">
            <h1
              className={`text-tertiary-base font-satoshi font-bold text-[18px] md:text-2xl`}
            >
              <span className="mr-1">0{index + 1}.</span>
              <span>{accordion?.question}</span>
            </h1>

            <div
              className={`${
                isActive ? "bg-[#3B82F6]" : "bg-[#F4F4F5]"
              }   cursor-pointer border size-10 
              flex justify-center items-center border-border-base rounded-full`}
            >
              {isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.3498 19.9929L12.2498 19.9999C12.0684 20.0001 11.8931 19.9346 11.7563 19.8154C11.6195 19.6963 11.5305 19.5316 11.5058 19.3519L11.4988 19.2499L11.4998 6.55388L8.27983 9.77488C8.15284 9.90189 7.98449 9.97912 7.80538 9.99252C7.62627 10.0059 7.4483 9.95459 7.30383 9.84788L7.21983 9.77588C7.09255 9.64883 7.01516 9.48028 7.00176 9.30094C6.98836 9.12161 7.03985 8.94343 7.14683 8.79888L7.21883 8.71488L11.7158 4.21488C11.8428 4.08786 12.0112 4.01063 12.1903 3.99724C12.3694 3.98384 12.5474 4.03516 12.6918 4.14188L12.7758 4.21488L17.2798 8.71488C17.4128 8.84888 17.4903 9.02808 17.497 9.21674C17.5036 9.40539 17.4389 9.58961 17.3157 9.73263C17.1925 9.87565 17.0199 9.96695 16.8323 9.98831C16.6448 10.0097 16.456 9.95953 16.3038 9.84788L16.2198 9.77588L12.9998 6.55788L12.9998 19.2499C12.9998 19.4314 12.9338 19.6068 12.8143 19.7434C12.6948 19.88 12.5298 19.9687 12.3498 19.9929Z"
                    fill={isActive ? "#fff" : "#3B82F6"}
                  />
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
                    d="M11.6496 4.007L11.7496 4C11.931 3.99977 12.1063 4.06529 12.2431 4.18444C12.3799 4.30359 12.4689 4.46828 12.4936 4.648L12.5006 4.75L12.4996 17.446L15.7196 14.225C15.8465 14.098 16.0149 14.0208 16.194 14.0074C16.3731 13.994 16.5511 14.0453 16.6956 14.152L16.7796 14.224C16.9068 14.351 16.9842 14.5196 16.9976 14.6989C17.011 14.8783 16.9595 15.0565 16.8526 15.201L16.7806 15.285L12.2836 19.785C12.1566 19.912 11.9882 19.9892 11.8091 20.0026C11.63 20.016 11.452 19.9647 11.3076 19.858L11.2236 19.785L6.71956 15.285C6.5866 15.151 6.50906 14.9718 6.50242 14.7831C6.49577 14.5945 6.56051 14.4103 6.68372 14.2672C6.80692 14.1242 6.97952 14.0329 7.16708 14.0116C7.35463 13.9902 7.54335 14.0403 7.69556 14.152L7.77956 14.224L10.9996 17.442V4.75C10.9996 4.56846 11.0655 4.39311 11.1851 4.25648C11.3046 4.11985 11.4696 4.03121 11.6496 4.007Z"
                    fill="#52525B"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        {isActive && (
          <div className="flex gap-1.5 md:gap-3 pt-4 ">
            <h6 className="text-[16px] text-tertiary-base pr-4">
              {accordion?.answer}
            </h6>
          </div>
        )}
      </div>
    </SlideRight>
  );
};

export default QuestionDetails;
