// components/FooterLinkSection.jsx
import React from "react";

const FooterLinkSection = ({ title, links }) => {
  return (
    <div className="md:col-span-1 md:mt-0 mt-10">
      <h2 className="text-[#FAFAFA] font-bold text-lg w-2/3 border-b pb-1 uppercase border-[#3B82F6]">
        {title}
      </h2>
      <div className="mt-10 space-y-4">
        {links.map((text, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.293 7.29279C13.1055 7.48031 13.0002 7.73462 13.0002 7.99979C13.0002 8.26495 13.1055 8.51926 13.293 8.70679L15.586 10.9998H8C7.73478 10.9998 7.48043 11.1051 7.29289 11.2927C7.10536 11.4802 7 11.7346 7 11.9998C7 12.265 7.10536 12.5194 7.29289 12.7069C7.48043 12.8944 7.73478 12.9998 8 12.9998H15.586L13.293 15.2928C13.1055 15.4803 13.0002 15.7346 13.0002 15.9998C13.0002 16.265 13.1055 16.5193 13.293 16.7068C13.4805 16.8943 13.7348 16.9996 14 16.9996C14.2652 16.9996 14.5195 16.8943 14.707 16.7068L19.414 11.9998L14.707 7.29279C14.5195 7.10532 14.2652 7 14 7C13.7348 7 13.4805 7.10532 13.293 7.29279Z"
                  className="fill-[#D4D4D8] group-hover:fill-[#3B82F6]"
                />
              </svg>
              <p className="text-[#D4D4D8] group-hover:text-[#3B82F6] text-[16px] font-medium">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkSection;
