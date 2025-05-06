import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import React from "react";

const TagSection = () => {
  return (
    <div className="container my-14 ">
      <div className="  border-t  border-[#D4D4D8] ">
        <div className="mt-6 md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h4 className="text-primary-base text-2xl font-bold">Tags:</h4>
            <div className="flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full   bg-[#D4D4D8] ">
              <p className="text-primary-base text-lg">Web Design</p>
            </div>
            <div className="flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full   bg-[#D4D4D8] ">
              <p className="text-primary-base text-lg">Web Development</p>
            </div>
            <div className="flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full   bg-[#D4D4D8] ">
              <p className="text-primary-base text-lg">Web Tips</p>
            </div>
          </div>
          {/* Share  */}
          <div>
            <div className="flex items-center space-x-4">
              <h4 className="text-primary-base text-2xl font-bold">Share:</h4>
              <div className=" flex items-center space-x-3">
                <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.1601 7.99998C10.1601 6.79998 9.2001 5.83998 8.0001 5.83998C6.8001 5.83998 5.8401 6.79998 5.8401 7.99998C5.8401 9.19998 6.8001 10.16 8.0001 10.16C9.2001 10.16 10.1601 9.19998 10.1601 7.99998ZM11.2801 7.99998C11.2801 9.83998 9.8401 11.28 8.0001 11.28C6.1601 11.28 4.7201 9.83998 4.7201 7.99998C4.7201 6.15998 6.1601 4.71998 8.0001 4.71998C9.8401 4.71998 11.2801 6.15998 11.2801 7.99998ZM12.1601 4.55998C12.1601 5.03998 11.8401 5.35998 11.3601 5.35998C10.8801 5.35998 10.5601 5.03998 10.5601 4.55998C10.5601 4.07998 10.8801 3.75998 11.3601 3.75998C11.8401 3.75998 12.1601 4.15998 12.1601 4.55998ZM8.0001 2.71998C7.0401 2.71998 5.0401 2.63998 4.2401 2.95998C3.6801 3.19998 3.2001 3.67998 3.0401 4.23998C2.7201 5.03998 2.8001 7.03998 2.8001 7.99998C2.8001 8.95998 2.7201 10.96 3.0401 11.76C3.2001 12.32 3.6801 12.8 4.2401 12.96C5.0401 13.28 7.1201 13.2 8.0001 13.2C8.8801 13.2 10.9601 13.28 11.7601 12.96C12.3201 12.72 12.7201 12.32 12.9601 11.76C13.2801 10.88 13.2001 8.87998 13.2001 7.99998C13.2001 7.11998 13.2801 5.03998 12.9601 4.23998C12.8001 3.67998 12.3201 3.19998 11.7601 3.03998C10.9601 2.63998 8.9601 2.71998 8.0001 2.71998ZM14.4001 7.99998V10.64C14.4001 11.6 14.0801 12.56 13.3601 13.36C12.6401 14.08 11.6801 14.4 10.6401 14.4H5.3601C4.4001 14.4 3.4401 14.08 2.6401 13.36C2.0001 12.64 1.6001 11.68 1.6001 10.64V5.35998C1.6001 4.31998 2.0001 3.35998 2.6401 2.63998C3.4401 1.99998 4.4001 1.59998 5.3601 1.59998H10.6401C11.6001 1.59998 12.5601 1.91998 13.3601 2.63998C14.0001 3.35998 14.4001 4.31998 14.4001 5.35998V7.99998Z"
                      className="text-[#71717A] group-hover:text-white"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2220_5474)">
                      <path
                        d="M8.21798 6.33398H7.66732C7.03865 6.33398 6.72465 6.33398 6.52932 6.52932C6.33398 6.72465 6.33398 7.03865 6.33398 7.66732V13.334C6.33398 13.9627 6.33398 14.2767 6.52932 14.472C6.72465 14.6673 7.03865 14.6673 7.66732 14.6673H8.00065C8.62932 14.6673 8.94332 14.6673 9.13865 14.472C9.33398 14.2767 9.33398 13.9627 9.33398 13.334V11.0007C9.33398 9.89598 9.68598 9.00065 10.726 9.00065C11.246 9.00065 11.6673 9.44865 11.6673 10.0007V13.0007C11.6673 13.6293 11.6673 13.9433 11.8626 14.1387C12.058 14.334 12.372 14.334 13.0007 14.334H13.3333C13.9613 14.334 14.276 14.334 14.4713 14.1387C14.666 13.9433 14.6667 13.6293 14.6667 13.0013L14.6673 9.33398C14.6673 7.67665 13.0913 6.33398 11.532 6.33398C10.644 6.33398 9.85198 6.76865 9.33398 7.44932C9.33398 7.02932 9.33398 6.81932 9.24265 6.66332C9.18488 6.56461 9.10269 6.48242 9.00398 6.42465C8.84798 6.33332 8.63798 6.33332 8.21798 6.33332M3.00065 6.33398H2.66732C2.03865 6.33398 1.72465 6.33398 1.52932 6.52932C1.33398 6.72465 1.33398 7.03865 1.33398 7.66732V13.334C1.33398 13.9627 1.33398 14.2767 1.52932 14.472C1.72465 14.6673 2.03865 14.6673 2.66732 14.6673H3.00065C3.62932 14.6673 3.94332 14.6673 4.13865 14.472C4.33398 14.2767 4.33398 13.9627 4.33398 13.334V7.66732C4.33398 7.03865 4.33398 6.72465 4.13865 6.52932C3.94332 6.33398 3.62932 6.33398 3.00065 6.33398ZM4.33398 2.83398C4.33398 3.23181 4.17595 3.61334 3.89464 3.89464C3.61334 4.17595 3.23181 4.33398 2.83398 4.33398C2.43616 4.33398 2.05463 4.17595 1.77332 3.89464C1.49202 3.61334 1.33398 3.23181 1.33398 2.83398C1.33398 2.43616 1.49202 2.05463 1.77332 1.77332C2.05463 1.49202 2.43616 1.33398 2.83398 1.33398C3.23181 1.33398 3.61334 1.49202 3.89464 1.77332C4.17595 2.05463 4.33398 2.43616 4.33398 2.83398Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                        className="text-[#71717A] group-hover:text-white"
                        //   fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2220_5474">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.99135 2.52533C7.64764 1.86893 8.5378 1.50011 9.46602 1.5H11.266C11.3986 1.5 11.5258 1.55268 11.6196 1.64645C11.7133 1.74021 11.766 1.86739 11.766 2V4.4C11.766 4.53261 11.7133 4.65979 11.6196 4.75355C11.5258 4.84732 11.3986 4.9 11.266 4.9H9.46602C9.45288 4.9 9.43988 4.90259 9.42775 4.90761C9.41561 4.91264 9.40459 4.92 9.39531 4.92929C9.38602 4.93858 9.37865 4.9496 9.37363 4.96173C9.3686 4.97386 9.36602 4.98687 9.36602 5V6.3H11.266C11.342 6.29996 11.4171 6.31725 11.4854 6.35055C11.5537 6.38386 11.6135 6.43231 11.6603 6.49221C11.7071 6.55211 11.7396 6.6219 11.7554 6.69626C11.7712 6.77062 11.7698 6.84759 11.7513 6.92133L11.1513 9.32133C11.1243 9.42954 11.0618 9.52559 10.9739 9.59421C10.8859 9.66282 10.7776 9.70006 10.666 9.7H9.36602V14C9.36602 14.1326 9.31334 14.2598 9.21957 14.3536C9.1258 14.4473 8.99862 14.5 8.86602 14.5H6.46602C6.33341 14.5 6.20623 14.4473 6.11246 14.3536C6.01869 14.2598 5.96602 14.1326 5.96602 14V9.7H4.66602C4.53341 9.7 4.40623 9.64732 4.31246 9.55355C4.21869 9.45979 4.16602 9.33261 4.16602 9.2V6.8C4.16602 6.73434 4.17895 6.66932 4.20408 6.60866C4.2292 6.548 4.26603 6.49288 4.31246 6.44645C4.35889 6.40002 4.41401 6.36319 4.47467 6.33806C4.53534 6.31293 4.60035 6.3 4.66602 6.3H5.96602V5C5.96613 4.07178 6.33495 3.18163 6.99135 2.52533ZM9.46602 2.5C8.80297 2.5 8.16709 2.76339 7.69825 3.23223C7.22941 3.70107 6.96602 4.33696 6.96602 5V6.8C6.96602 6.93261 6.91334 7.05979 6.81957 7.15355C6.7258 7.24732 6.59862 7.3 6.46602 7.3H5.16602V8.7H6.46602C6.59862 8.7 6.7258 8.75268 6.81957 8.84645C6.91334 8.94021 6.96602 9.06739 6.96602 9.2V13.5H8.36602V9.2C8.36602 9.06739 8.41869 8.94021 8.51246 8.84645C8.60623 8.75268 8.73341 8.7 8.86602 8.7H10.2753L10.6253 7.3H8.86602C8.73341 7.3 8.60623 7.24732 8.51246 7.15355C8.41869 7.05979 8.36602 6.93261 8.36602 6.8V5C8.36602 4.70826 8.48191 4.42847 8.6882 4.22218C8.89449 4.01589 9.17428 3.9 9.46602 3.9H10.766V2.5H9.46602Z"
                      className="text-[#71717A] group-hover:text-white"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M11.5149 3L8.46281 6.4889L5.82368 3H2L6.56777 8.97225L2.23887 13.92H4.09236L7.43343 10.1018L10.3536 13.92H14.0813L9.31991 7.62519L13.3672 3H11.5149ZM10.8649 12.8112L4.16384 4.05015H5.26531L11.8912 12.8106L10.8649 12.8112Z"
                      className="text-[#71717A] group-hover:text-white"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#71717A] group-hover:text-white"
                  >
                    <path
                      d="M14 7.99999C14.001 8.79028 13.8453 9.57293 13.5421 10.3027C13.2389 11.0325 12.794 11.695 12.2333 12.2519C11.6771 12.807 11.0169 13.2472 10.2906 13.5471C9.5642 13.8471 8.78585 14.001 7.99999 14C4.6862 14 2.00001 11.3138 2.00001 7.99999C1.99785 6.46152 2.58881 4.98141 3.65 3.8675C4.20987 3.27664 4.88444 2.80626 5.63241 2.48515C6.38038 2.16403 7.18601 1.99895 7.99999 2.00001C8.78585 1.99904 9.5642 2.15292 10.2906 2.45287C11.0169 2.75281 11.6771 3.19294 12.2333 3.7481C12.794 4.30499 13.2389 4.96747 13.5421 5.69726C13.8453 6.42706 14.001 7.20971 14 7.99999Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.9989 8.00084C13.1235 8.00084 10.7085 7.67084 8.547 8.61974C6.19891 9.65084 4.49881 11.2504 3.75781 12.2449"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.75 2.43555C6.689 3.30225 8.73799 5.50874 9.49999 7.69934C10.262 9.88993 10.544 12.5833 10.718 13.3498"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.04688 7.2504C3.18027 7.3188 6.18057 7.3803 8.10056 6.5604C10.0206 5.7405 11.6727 4.23241 12.2394 3.75391M2.45067 10.2843C2.97945 11.564 3.93294 12.6225 5.15067 13.2816"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.00001 7.99999C1.99785 6.46152 2.58881 4.98141 3.65 3.8675C4.20987 3.27664 4.88444 2.80626 5.63241 2.48515C6.38038 2.16403 7.18601 1.99895 7.99999 2.00001M10.4 2.4992C11.0834 2.79794 11.7051 3.22147 12.2333 3.7481C12.794 4.30499 13.2389 4.96747 13.5421 5.69726C13.8453 6.42706 14.001 7.20971 14 7.99999C14 8.73859 13.8665 9.44629 13.622 10.1M7.99999 14C8.78585 14.001 9.5642 13.8471 10.2906 13.5471C11.0169 13.2472 11.6771 12.807 12.2333 12.2519"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="currentColor"
                      className="text-[#71717A] group-hover:text-white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 grid-cols-1 gap-x-24">
          <div className="col-span-2">
            <div
              style={{
                boxShadow: "0px 0px 96px 0px rgba(59, 130, 246, 0.16)",
              }}
              className="p-6  rounded-2xl border border-border-base bg-white"
            >
              <div className="flex items-center space-x-4">
                <Image
                  className="rounded-full size-20"
                  src="/images/blogs/author4.png"
                  alt="author"
                  height={88}
                  width={88}
                />
                <div>
                  <h4 className="font-bold text-2xl text-secondary-base">
                    Ethan Carter
                  </h4>
                  <p className="font-medium text-lg text-[#71717A]">
                    Senior Web Developer
                  </p>
                </div>
              </div>
              <p className="font-medium text-lg mt-8 text-primary-base">
                Ethan Carter is a Senior Web Developer at Solvex with over 8
                years of experience in front-end and back-end technologies.
                Passionate about AI-driven web development, he specializes in
                creating high-performance, user-friendly websites. When he's not
                coding, Ethan enjoys mentoring junior developers and exploring
                the latest tech innovations.
              </p>
              <div>
                <div className="mt-8">
                  <div className=" flex items-center space-x-3">
                    <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10.1601 7.99998C10.1601 6.79998 9.2001 5.83998 8.0001 5.83998C6.8001 5.83998 5.8401 6.79998 5.8401 7.99998C5.8401 9.19998 6.8001 10.16 8.0001 10.16C9.2001 10.16 10.1601 9.19998 10.1601 7.99998ZM11.2801 7.99998C11.2801 9.83998 9.8401 11.28 8.0001 11.28C6.1601 11.28 4.7201 9.83998 4.7201 7.99998C4.7201 6.15998 6.1601 4.71998 8.0001 4.71998C9.8401 4.71998 11.2801 6.15998 11.2801 7.99998ZM12.1601 4.55998C12.1601 5.03998 11.8401 5.35998 11.3601 5.35998C10.8801 5.35998 10.5601 5.03998 10.5601 4.55998C10.5601 4.07998 10.8801 3.75998 11.3601 3.75998C11.8401 3.75998 12.1601 4.15998 12.1601 4.55998ZM8.0001 2.71998C7.0401 2.71998 5.0401 2.63998 4.2401 2.95998C3.6801 3.19998 3.2001 3.67998 3.0401 4.23998C2.7201 5.03998 2.8001 7.03998 2.8001 7.99998C2.8001 8.95998 2.7201 10.96 3.0401 11.76C3.2001 12.32 3.6801 12.8 4.2401 12.96C5.0401 13.28 7.1201 13.2 8.0001 13.2C8.8801 13.2 10.9601 13.28 11.7601 12.96C12.3201 12.72 12.7201 12.32 12.9601 11.76C13.2801 10.88 13.2001 8.87998 13.2001 7.99998C13.2001 7.11998 13.2801 5.03998 12.9601 4.23998C12.8001 3.67998 12.3201 3.19998 11.7601 3.03998C10.9601 2.63998 8.9601 2.71998 8.0001 2.71998ZM14.4001 7.99998V10.64C14.4001 11.6 14.0801 12.56 13.3601 13.36C12.6401 14.08 11.6801 14.4 10.6401 14.4H5.3601C4.4001 14.4 3.4401 14.08 2.6401 13.36C2.0001 12.64 1.6001 11.68 1.6001 10.64V5.35998C1.6001 4.31998 2.0001 3.35998 2.6401 2.63998C3.4401 1.99998 4.4001 1.59998 5.3601 1.59998H10.6401C11.6001 1.59998 12.5601 1.91998 13.3601 2.63998C14.0001 3.35998 14.4001 4.31998 14.4001 5.35998V7.99998Z"
                          className="text-[#71717A] group-hover:text-white"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2220_5474)">
                          <path
                            d="M8.21798 6.33398H7.66732C7.03865 6.33398 6.72465 6.33398 6.52932 6.52932C6.33398 6.72465 6.33398 7.03865 6.33398 7.66732V13.334C6.33398 13.9627 6.33398 14.2767 6.52932 14.472C6.72465 14.6673 7.03865 14.6673 7.66732 14.6673H8.00065C8.62932 14.6673 8.94332 14.6673 9.13865 14.472C9.33398 14.2767 9.33398 13.9627 9.33398 13.334V11.0007C9.33398 9.89598 9.68598 9.00065 10.726 9.00065C11.246 9.00065 11.6673 9.44865 11.6673 10.0007V13.0007C11.6673 13.6293 11.6673 13.9433 11.8626 14.1387C12.058 14.334 12.372 14.334 13.0007 14.334H13.3333C13.9613 14.334 14.276 14.334 14.4713 14.1387C14.666 13.9433 14.6667 13.6293 14.6667 13.0013L14.6673 9.33398C14.6673 7.67665 13.0913 6.33398 11.532 6.33398C10.644 6.33398 9.85198 6.76865 9.33398 7.44932C9.33398 7.02932 9.33398 6.81932 9.24265 6.66332C9.18488 6.56461 9.10269 6.48242 9.00398 6.42465C8.84798 6.33332 8.63798 6.33332 8.21798 6.33332M3.00065 6.33398H2.66732C2.03865 6.33398 1.72465 6.33398 1.52932 6.52932C1.33398 6.72465 1.33398 7.03865 1.33398 7.66732V13.334C1.33398 13.9627 1.33398 14.2767 1.52932 14.472C1.72465 14.6673 2.03865 14.6673 2.66732 14.6673H3.00065C3.62932 14.6673 3.94332 14.6673 4.13865 14.472C4.33398 14.2767 4.33398 13.9627 4.33398 13.334V7.66732C4.33398 7.03865 4.33398 6.72465 4.13865 6.52932C3.94332 6.33398 3.62932 6.33398 3.00065 6.33398ZM4.33398 2.83398C4.33398 3.23181 4.17595 3.61334 3.89464 3.89464C3.61334 4.17595 3.23181 4.33398 2.83398 4.33398C2.43616 4.33398 2.05463 4.17595 1.77332 3.89464C1.49202 3.61334 1.33398 3.23181 1.33398 2.83398C1.33398 2.43616 1.49202 2.05463 1.77332 1.77332C2.05463 1.49202 2.43616 1.33398 2.83398 1.33398C3.23181 1.33398 3.61334 1.49202 3.89464 1.77332C4.17595 2.05463 4.33398 2.43616 4.33398 2.83398Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="currentColor"
                            className="text-[#71717A] group-hover:text-white"
                            //   fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2220_5474">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.99135 2.52533C7.64764 1.86893 8.5378 1.50011 9.46602 1.5H11.266C11.3986 1.5 11.5258 1.55268 11.6196 1.64645C11.7133 1.74021 11.766 1.86739 11.766 2V4.4C11.766 4.53261 11.7133 4.65979 11.6196 4.75355C11.5258 4.84732 11.3986 4.9 11.266 4.9H9.46602C9.45288 4.9 9.43988 4.90259 9.42775 4.90761C9.41561 4.91264 9.40459 4.92 9.39531 4.92929C9.38602 4.93858 9.37865 4.9496 9.37363 4.96173C9.3686 4.97386 9.36602 4.98687 9.36602 5V6.3H11.266C11.342 6.29996 11.4171 6.31725 11.4854 6.35055C11.5537 6.38386 11.6135 6.43231 11.6603 6.49221C11.7071 6.55211 11.7396 6.6219 11.7554 6.69626C11.7712 6.77062 11.7698 6.84759 11.7513 6.92133L11.1513 9.32133C11.1243 9.42954 11.0618 9.52559 10.9739 9.59421C10.8859 9.66282 10.7776 9.70006 10.666 9.7H9.36602V14C9.36602 14.1326 9.31334 14.2598 9.21957 14.3536C9.1258 14.4473 8.99862 14.5 8.86602 14.5H6.46602C6.33341 14.5 6.20623 14.4473 6.11246 14.3536C6.01869 14.2598 5.96602 14.1326 5.96602 14V9.7H4.66602C4.53341 9.7 4.40623 9.64732 4.31246 9.55355C4.21869 9.45979 4.16602 9.33261 4.16602 9.2V6.8C4.16602 6.73434 4.17895 6.66932 4.20408 6.60866C4.2292 6.548 4.26603 6.49288 4.31246 6.44645C4.35889 6.40002 4.41401 6.36319 4.47467 6.33806C4.53534 6.31293 4.60035 6.3 4.66602 6.3H5.96602V5C5.96613 4.07178 6.33495 3.18163 6.99135 2.52533ZM9.46602 2.5C8.80297 2.5 8.16709 2.76339 7.69825 3.23223C7.22941 3.70107 6.96602 4.33696 6.96602 5V6.8C6.96602 6.93261 6.91334 7.05979 6.81957 7.15355C6.7258 7.24732 6.59862 7.3 6.46602 7.3H5.16602V8.7H6.46602C6.59862 8.7 6.7258 8.75268 6.81957 8.84645C6.91334 8.94021 6.96602 9.06739 6.96602 9.2V13.5H8.36602V9.2C8.36602 9.06739 8.41869 8.94021 8.51246 8.84645C8.60623 8.75268 8.73341 8.7 8.86602 8.7H10.2753L10.6253 7.3H8.86602C8.73341 7.3 8.60623 7.24732 8.51246 7.15355C8.41869 7.05979 8.36602 6.93261 8.36602 6.8V5C8.36602 4.70826 8.48191 4.42847 8.6882 4.22218C8.89449 4.01589 9.17428 3.9 9.46602 3.9H10.766V2.5H9.46602Z"
                          className="text-[#71717A] group-hover:text-white"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="group cursor-pointer size-10 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-border-base border border-[#D4D4D8]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M11.5149 3L8.46281 6.4889L5.82368 3H2L6.56777 8.97225L2.23887 13.92H4.09236L7.43343 10.1018L10.3536 13.92H14.0813L9.31991 7.62519L13.3672 3H11.5149ZM10.8649 12.8112L4.16384 4.05015H5.26531L11.8912 12.8106L10.8649 12.8112Z"
                          className="text-[#71717A] group-hover:text-white"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-[#3B82F6] text-2xl font-bold border-b border-[#D4D4D8] pb-4">
                2 Comments
              </h2>

              <div className="mt-8 pb-8 border-b border-[#D4D4D8]">
                <div className="flex   space-x-4">
                  <Image
                    className="rounded-full mt-1 size-12"
                    src="/images/blogs/author5.png"
                    alt="author1"
                    height={48}
                    width={48}
                  />
                  <div>
                    <h4 className="font-bold text-[20px] text-secondary-base">
                      John Doe
                    </h4>
                    <p className="font-medium text-sm text-[#71717A]">
                      12 July 2025
                    </p>

                    <p className="text-primary-base text-lg mt-6">
                      I totally agree! AI-powered coding assistants will
                      definitely revolutionize web development. Great insights!
                    </p>
                    <div className="flex mt-6 items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M7.50024 12H3.75024V15.75M10.5002 6H14.2502V2.25M3.4375 6.75255C3.85801 5.71175 4.56207 4.80978 5.46966 4.14917C6.37724 3.48856 7.45289 3.09564 8.57256 3.01538C9.69223 2.93512 10.8113 3.17055 11.8038 3.69496C12.7963 4.21937 13.6212 5.0119 14.1858 5.98209M14.5634 11.2478C14.1429 12.2886 13.4388 13.1906 12.5313 13.8512C11.6237 14.5118 10.5491 14.9042 9.42944 14.9845C8.30977 15.0647 7.18979 14.8293 6.19727 14.3049C5.20474 13.7805 4.37936 12.9881 3.8147 12.0179"
                          stroke="#3B82F6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-[#3B82F6] text-lg font-medium">
                        Reply
                      </p>
                    </div>
                    <div className="mt-10 border-b-2 border-dashed border-[#D4D4D8] w-full"></div>
                  </div>
                </div>
                {/* reply section  */}
                <div className="flex ml-20 mt-8  space-x-4">
                  <Image
                    className="rounded-full mt-1 size-12"
                    src="/images/blogs/author3.png"
                    alt="author1"
                    height={48}
                    width={48}
                  />
                  <div>
                    <h4 className="font-bold text-[20px] text-secondary-base">
                      John Doe
                    </h4>
                    <p className="font-medium text-sm text-[#71717A]">
                      12 July 2025
                    </p>

                    <p className="text-primary-base text-lg mt-6">
                      I totally agree! AI-powered coding assistants will
                      definitely revolutionize web development. Great insights!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-[#3B82F6] uppercase text-2xl font-bold">
                  leave a comment
                </h2>
                <div className="bg-white-base mt-12 p-7  rounded-xl border border-border-base">
                  <div className=" mt-3 ">
                    <form>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div>
                          <label
                            htmlFor="fname"
                            className="text-secondary-base text-lg font-medium"
                          >
                            Full name:
                          </label>
                          <br />
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Enter Full Name"
                            className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="fname"
                            className="text-secondary-base text-lg font-medium"
                          >
                            Email Address *
                          </label>
                          <br />
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Enter Email Address "
                            className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                          />
                        </div>
                      </div>

                      <div className="mt-3">
                        <label
                          htmlFor="Massage"
                          className="text-secondary-base text-lg font-medium"
                        >
                          Massage:
                        </label>
                        <br />
                        <textarea
                          id="Massage"
                          name="Massage"
                          placeholder="Enter Massage"
                          className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                          rows={4}
                        />
                      </div>

                      <div className="mt-2">
                        <Button content="Submit now" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section right side  */}
          <div className="col-span-1">
            <div className="space-y-8">
              {/* card 1  */}
              <div className="border h-full max-h-[492px]  group cursor-pointer hover:scale-105 transition-all ease-in-out duration-300  border-border-base group bg-white-base p-4 rounded-2xl">
                <Image
                  className="rounded-2xl shadow-lg"
                  src="/images/blogs/blog1.png"
                  alt="workGallery1"
                  height={240}
                  width={500}
                />
                <div className="mt-5 flex justify-between items-center">
                  <div className="border  rounded-[99px] w-fit bg-[#CFFAFE] border-[#67E8F9] px-3 py-1.5">
                    <p className="text-[#06B6D4] text-sm font-medium">
                      Web Development
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#F4F4F5] rounded-lg flex justify-center items-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99967 1.33301C11.6817 1.33301 14.6663 4.31767 14.6663 7.99967C14.6663 11.6817 11.6817 14.6663 7.99967 14.6663C4.31767 14.6663 1.33301 11.6817 1.33301 7.99967C1.33301 4.31767 4.31767 1.33301 7.99967 1.33301ZM7.99967 2.66634C6.58519 2.66634 5.22863 3.22824 4.22844 4.22844C3.22824 5.22863 2.66634 6.58519 2.66634 7.99967C2.66634 9.41416 3.22824 10.7707 4.22844 11.7709C5.22863 12.7711 6.58519 13.333 7.99967 13.333C9.41416 13.333 10.7707 12.7711 11.7709 11.7709C12.7711 10.7707 13.333 9.41416 13.333 7.99967C13.333 6.58519 12.7711 5.22863 11.7709 4.22844C10.7707 3.22824 9.41416 2.66634 7.99967 2.66634ZM7.99967 3.99967C8.16296 3.9997 8.32057 4.05965 8.44259 4.16815C8.56461 4.27666 8.64257 4.42617 8.66167 4.58834L8.66634 4.66634V7.72367L10.471 9.52834C10.5906 9.64831 10.66 9.8093 10.6652 9.9786C10.6703 10.1479 10.6109 10.3128 10.4988 10.4399C10.3868 10.5669 10.2306 10.6465 10.062 10.6626C9.89341 10.6787 9.725 10.6299 9.59101 10.5263L9.52834 10.471L7.52834 8.47101C7.42473 8.36731 7.35818 8.23234 7.33901 8.08701L7.33301 7.99967V4.66634C7.33301 4.48953 7.40325 4.31996 7.52827 4.19494C7.65329 4.06991 7.82286 3.99967 7.99967 3.99967Z"
                          fill="#71717A"
                        />
                      </svg>
                    </div>
                    <p className="text-[#71717A]  text-[16px] font-medium">
                      February 18, 2025
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="text-secondary-base group-hover:text-[#3B82F6] font-bold text-2xl">
                    How to Optimize Your Website for SEO in 2025
                  </h1>
                  <p className="mt-5 text-[#71717A] text-[16px] font-medium">
                    Explore the emerging trends shaping the future of web
                    development — from AI integrations to progressive web
                    apps...
                  </p>
                </div>
              </div>
              {/* card 2  */}
              <div className="border h-full max-h-[492px]  group cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 border-border-base group bg-white-base p-4 rounded-2xl">
                <Image
                  className="rounded-2xl shadow-lg"
                  src="/images/blogs/blog2.png"
                  alt="workGallery1"
                  height={240}
                  width={500}
                />
                <div className="mt-5 flex justify-between items-center">
                  <div className="border  rounded-[99px] w-fit bg-[#F3E8FF] border-[#C4B5FD] px-3 py-1.5">
                    <p className="text-[#8B5CF6] text-sm font-medium">
                      SEO & Marketing
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#F4F4F5] rounded-lg flex justify-center items-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99967 1.33301C11.6817 1.33301 14.6663 4.31767 14.6663 7.99967C14.6663 11.6817 11.6817 14.6663 7.99967 14.6663C4.31767 14.6663 1.33301 11.6817 1.33301 7.99967C1.33301 4.31767 4.31767 1.33301 7.99967 1.33301ZM7.99967 2.66634C6.58519 2.66634 5.22863 3.22824 4.22844 4.22844C3.22824 5.22863 2.66634 6.58519 2.66634 7.99967C2.66634 9.41416 3.22824 10.7707 4.22844 11.7709C5.22863 12.7711 6.58519 13.333 7.99967 13.333C9.41416 13.333 10.7707 12.7711 11.7709 11.7709C12.7711 10.7707 13.333 9.41416 13.333 7.99967C13.333 6.58519 12.7711 5.22863 11.7709 4.22844C10.7707 3.22824 9.41416 2.66634 7.99967 2.66634ZM7.99967 3.99967C8.16296 3.9997 8.32057 4.05965 8.44259 4.16815C8.56461 4.27666 8.64257 4.42617 8.66167 4.58834L8.66634 4.66634V7.72367L10.471 9.52834C10.5906 9.64831 10.66 9.8093 10.6652 9.9786C10.6703 10.1479 10.6109 10.3128 10.4988 10.4399C10.3868 10.5669 10.2306 10.6465 10.062 10.6626C9.89341 10.6787 9.725 10.6299 9.59101 10.5263L9.52834 10.471L7.52834 8.47101C7.42473 8.36731 7.35818 8.23234 7.33901 8.08701L7.33301 7.99967V4.66634C7.33301 4.48953 7.40325 4.31996 7.52827 4.19494C7.65329 4.06991 7.82286 3.99967 7.99967 3.99967Z"
                          fill="#71717A"
                        />
                      </svg>
                    </div>
                    <p className="text-[#71717A] text-[16px] font-medium">
                      February 18, 2025
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="text-secondary-base group-hover:text-[#3B82F6]  font-bold text-2xl">
                    Top 5 Web Development Trends in 2025
                  </h1>
                  <p className="mt-5 text-[#71717A] text-[16px] font-medium">
                    Explore the emerging trends shaping the future of web
                    development — from AI integrations to progressive web
                    apps...
                  </p>
                </div>
              </div>
              {/* card 3  */}
              <div className="border h-full max-h-[492px]  group cursor-pointer hover:scale-105 transition-all ease-in-out duration-300  border-border-base group bg-white-base p-4 rounded-2xl">
                <Image
                  className="rounded-2xl shadow-lg"
                  src="/images/blogs/blog3.png"
                  alt="workGallery1"
                  height={240}
                  width={500}
                />
                <div className="mt-5 flex justify-between items-center">
                  <div className="border  rounded-[99px] w-fit bg-[#E0E7FF] border-[#A5B4FC] px-3 py-1.5">
                    <p className="text-[#6366F1] text-sm font-medium">
                      UI/UX Design
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#F4F4F5] rounded-lg flex justify-center items-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99967 1.33301C11.6817 1.33301 14.6663 4.31767 14.6663 7.99967C14.6663 11.6817 11.6817 14.6663 7.99967 14.6663C4.31767 14.6663 1.33301 11.6817 1.33301 7.99967C1.33301 4.31767 4.31767 1.33301 7.99967 1.33301ZM7.99967 2.66634C6.58519 2.66634 5.22863 3.22824 4.22844 4.22844C3.22824 5.22863 2.66634 6.58519 2.66634 7.99967C2.66634 9.41416 3.22824 10.7707 4.22844 11.7709C5.22863 12.7711 6.58519 13.333 7.99967 13.333C9.41416 13.333 10.7707 12.7711 11.7709 11.7709C12.7711 10.7707 13.333 9.41416 13.333 7.99967C13.333 6.58519 12.7711 5.22863 11.7709 4.22844C10.7707 3.22824 9.41416 2.66634 7.99967 2.66634ZM7.99967 3.99967C8.16296 3.9997 8.32057 4.05965 8.44259 4.16815C8.56461 4.27666 8.64257 4.42617 8.66167 4.58834L8.66634 4.66634V7.72367L10.471 9.52834C10.5906 9.64831 10.66 9.8093 10.6652 9.9786C10.6703 10.1479 10.6109 10.3128 10.4988 10.4399C10.3868 10.5669 10.2306 10.6465 10.062 10.6626C9.89341 10.6787 9.725 10.6299 9.59101 10.5263L9.52834 10.471L7.52834 8.47101C7.42473 8.36731 7.35818 8.23234 7.33901 8.08701L7.33301 7.99967V4.66634C7.33301 4.48953 7.40325 4.31996 7.52827 4.19494C7.65329 4.06991 7.82286 3.99967 7.99967 3.99967Z"
                          fill="#71717A"
                        />
                      </svg>
                    </div>
                    <p className="text-[#71717A] text-[16px] font-medium">
                      February 18, 2025
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="text-secondary-base group-hover:text-[#3B82F6] font-bold text-2xl">
                    The Power of UI/UX: Why Design Matters for Your Business
                  </h1>
                  <p className="mt-5 text-[#71717A] text-[16px] font-medium">
                    Explore the emerging trends shaping the future of web
                    development — from AI integrations to progressive web
                    apps...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagSection;
