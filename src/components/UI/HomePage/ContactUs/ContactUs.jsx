"use client";
import React from "react";
import { motion } from "framer-motion";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Button from "../../Button/Button";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";

const ContactUs = () => {
  return (
    <div className="bg-[#FAFAFA]  relative overflow-hidden">
      <div
        className="absolute"
        style={{
          width: "594px",
          height: "4px",
          left: "0px",
          top: "0px",
          background:
            " linear-gradient(85deg, rgba(255, 255, 255, 0.00) 0%, #2154FF 100%)",
        }}
      ></div>
      <div className="container py-14">
        <BadgeLabel text="Contact Us" />
        <AnimatedText
          lines={["Let’s Work Together to Build Something Great"]}
          className="text-2xl font-bold text-primary-base mt-6 text-center w-full md:max-w-[450px] max-w-[230px] mx-auto"
        />
        <AnimatedParagraph
          text="Have a project in mind, or just want to chat? Drop us a line — we’d
          love to hear from you."
          className="text-center w-full max-w-[550px] mx-auto mt-6 text-[16px] font-medium text-primary-base"
          once={false}
          duration={0.8}
          yOffset={100}
        />

        <div className="mt-12 grid md:grid-cols-5 gap-6">
          {/* section left  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: -0,

              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
            className="md:col-span-2 "
          >
            <div className="bg-white-base p-6 rounded-xl border border-border-base">
              <h1 className="text-secondary-base text-[32px] uppercase text-center font-bold">
                get in touch
              </h1>
              <div className="mt-10">
                {/* contact 1 */}
                <div className="border border-border-base p-4 rounded-lg flex items-center space-x-4">
                  <div className="flex justify-center p-4 w-fit items-center border border-[#3B82F6] rounded-lg bg-[#EFF6FF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.6292 13.8914L17.0852 13.4384L16.0262 12.3744L15.5722 12.8274L16.6292 13.8914ZM18.6142 13.2484L20.5252 14.2874L21.2402 12.9694L19.3302 11.9314L18.6142 13.2484ZM20.8922 16.3514L19.4722 17.7644L20.5292 18.8274L21.9492 17.4154L20.8922 16.3514ZM18.6062 18.2184C17.1562 18.3544 13.4062 18.2334 9.34417 14.1954L8.28617 15.2584C12.7182 19.6654 16.9372 19.8814 18.7462 19.7124L18.6062 18.2184ZM9.34417 14.1954C5.47317 10.3454 4.83117 7.10845 4.75117 5.70345L3.25317 5.78845C3.35317 7.55645 4.14817 11.1444 8.28617 15.2584L9.34417 14.1954ZM10.7192 8.01545L11.0062 7.72945L9.95017 6.66645L9.66317 6.95145L10.7192 8.01545ZM11.2342 4.09445L9.97417 2.41045L8.77317 3.31045L10.0332 4.99345L11.2342 4.09445ZM5.73317 2.04345L4.16317 3.60345L5.22117 4.66745L6.79017 3.10745L5.73317 2.04345ZM10.1912 7.48345C9.66117 6.95145 9.66117 6.95145 9.66117 6.95345H9.65917L9.65617 6.95745C9.60865 7.00536 9.5661 7.05796 9.52917 7.11445C9.47517 7.19445 9.41617 7.29945 9.36617 7.43245C9.24445 7.77577 9.21412 8.14486 9.27817 8.50345C9.41217 9.36845 10.0082 10.5114 11.5342 12.0294L12.5922 10.9654C11.1632 9.54545 10.8232 8.68145 10.7602 8.27345C10.7302 8.07945 10.7612 7.98345 10.7702 7.96145C10.7762 7.94811 10.7762 7.94612 10.7702 7.95545C10.7613 7.96925 10.7512 7.98229 10.7402 7.99445L10.7302 8.00445L10.7202 8.01345L10.1912 7.48345ZM11.5342 12.0294C13.0612 13.5474 14.2102 14.1394 15.0762 14.2714C15.5192 14.3394 15.8762 14.2854 16.1472 14.1844C16.299 14.1289 16.4408 14.0492 16.5672 13.9484L16.6172 13.9034L16.6242 13.8974L16.6272 13.8944L16.6282 13.8924C16.6282 13.8924 16.6292 13.8914 16.1002 13.3594C15.5702 12.8274 15.5732 12.8264 15.5732 12.8264L15.5752 12.8244L15.5772 12.8224L15.5832 12.8174L15.5932 12.8074L15.6312 12.7774C15.6405 12.7714 15.6382 12.7721 15.6242 12.7794C15.5992 12.7884 15.5012 12.8194 15.3042 12.7894C14.8902 12.7254 14.0202 12.3854 12.5922 10.9654L11.5342 12.0294ZM9.97417 2.40945C8.95417 1.04945 6.95017 0.833448 5.73317 2.04345L6.79017 3.10745C7.32217 2.57845 8.26617 2.63345 8.77317 3.31045L9.97417 2.40945ZM4.75217 5.70445C4.73217 5.35845 4.89117 4.99645 5.22117 4.66845L4.16217 3.60445C3.62517 4.13845 3.20217 4.89445 3.25317 5.78845L4.75217 5.70445ZM19.4722 17.7644C19.1982 18.0384 18.9022 18.1924 18.6072 18.2194L18.7462 19.7124C19.4812 19.6434 20.0822 19.2734 20.5302 18.8284L19.4722 17.7644ZM11.0062 7.72945C11.9912 6.75045 12.0642 5.20345 11.2352 4.09545L10.0342 4.99445C10.4372 5.53345 10.3772 6.24045 9.94917 6.66745L11.0062 7.72945ZM20.5262 14.2884C21.3432 14.7324 21.4702 15.7784 20.8932 16.3524L21.9512 17.4154C23.2912 16.0824 22.8782 13.8594 21.2412 12.9704L20.5262 14.2884ZM17.0852 13.4394C17.4692 13.0574 18.0872 12.9634 18.6152 13.2494L19.3312 11.9324C18.2472 11.3424 16.9032 11.5054 16.0272 12.3754L17.0852 13.4394Z"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-secondary-base text-lg font-bold">
                      Phone Number
                    </h5>
                    <p className="text-tertiary-base text-[16px]">
                      +123 456 789
                    </p>
                  </div>
                </div>
                {/* contact 2 */}
                <div className="border mt-8 border-border-base p-4 rounded-lg flex items-center space-x-4">
                  <div className="flex justify-center p-4 w-fit items-center border border-[#3B82F6] rounded-lg bg-[#EFF6FF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.1816 3.5H6.68164C4.4725 3.5 2.68164 5.29086 2.68164 7.5V16.5C2.68164 18.7091 4.4725 20.5 6.68164 20.5H17.1816C19.3908 20.5 21.1816 18.7091 21.1816 16.5V7.5C21.1816 5.29086 19.3908 3.5 17.1816 3.5Z"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2.72852 7.58984L9.93352 11.7198C10.5373 12.0702 11.223 12.2547 11.921 12.2547C12.6191 12.2547 13.3047 12.0702 13.9085 11.7198L21.1335 7.58984"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-secondary-base text-lg font-bold">
                      E-mail Address
                    </h5>
                    <p className="text-tertiary-base text-[16px]">
                      hello@solvexagency.com
                    </p>
                  </div>
                </div>
                {/* contact 3 */}
                <div className="border mt-8 border-border-base p-4 rounded-lg flex items-center space-x-4">
                  <div className="flex justify-center p-4 w-fit items-center border border-[#3B82F6] rounded-lg bg-[#EFF6FF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5.84292 4.56789C7.47586 2.93495 9.6906 2.01758 11.9999 2.01758C14.3092 2.01758 16.524 2.93495 18.1569 4.56789C19.7899 6.20083 20.7072 8.41557 20.7072 10.7249C20.7072 13.0342 19.7899 15.249 18.1569 16.8819L16.9699 18.0559C16.0953 18.9146 14.9599 20.0186 13.5639 21.3679C13.1443 21.7736 12.5836 22.0004 11.9999 22.0004C11.4163 22.0004 10.8555 21.7736 10.4359 21.3679L6.94592 17.9719C6.50592 17.5412 6.13826 17.1779 5.84292 16.8819C5.03434 16.0734 4.39293 15.1135 3.95532 14.0571C3.51771 13.0006 3.29248 11.8684 3.29248 10.7249C3.29248 9.58142 3.51771 8.44914 3.95532 7.39272C4.39293 6.3363 5.03434 5.37642 5.84292 4.56789ZM17.0969 5.62989C16.4277 4.96061 15.6332 4.42969 14.7588 4.06746C13.8844 3.70522 12.9472 3.51875 12.0008 3.51871C10.0893 3.51861 8.2561 4.27785 6.90442 5.62939C5.55275 6.98093 4.79333 8.81407 4.79324 10.7255C4.79314 12.637 5.55238 14.4702 6.90392 15.8219L8.39092 17.2889C9.20959 18.0902 10.2389 19.0902 11.4789 20.2889C11.6187 20.4244 11.8056 20.5002 12.0002 20.5004C12.1948 20.5006 12.3819 20.4251 12.5219 20.2899L15.9169 16.9879C16.3856 16.5279 16.7789 16.1392 17.0969 15.8219C17.7663 15.1526 18.2972 14.3581 18.6595 13.4836C19.0217 12.6092 19.2082 11.6719 19.2082 10.7254C19.2082 9.77886 19.0217 8.84161 18.6595 7.96714C18.2972 7.09268 17.7663 6.29914 17.0969 5.62989ZM11.9999 7.99889C12.3987 7.99161 12.7949 8.06387 13.1655 8.21144C13.536 8.35901 13.8734 8.57894 14.158 8.85837C14.4426 9.13781 14.6686 9.47115 14.8229 9.83893C14.9772 10.2067 15.0567 10.6016 15.0567 11.0004C15.0567 11.3992 14.9772 11.7941 14.8229 12.1618C14.6686 12.5296 14.4426 12.863 14.158 13.1424C13.8734 13.4218 13.536 13.6418 13.1655 13.7893C12.7949 13.9369 12.3987 14.0092 11.9999 14.0019C11.2134 13.9875 10.4639 13.665 9.91269 13.1037C9.36152 12.5423 9.05271 11.7871 9.05271 11.0004C9.05271 10.2137 9.36152 9.45844 9.91269 8.89712C10.4639 8.33579 11.2134 8.01325 11.9999 7.99889ZM11.9999 9.49889C11.7995 9.49372 11.6 9.52873 11.4133 9.60186C11.2266 9.67499 11.0565 9.78476 10.9129 9.9247C10.7693 10.0646 10.6552 10.2319 10.5772 10.4167C10.4993 10.6014 10.4592 10.7999 10.4592 11.0004C10.4592 11.2009 10.4993 11.3994 10.5772 11.5841C10.6552 11.7689 10.7693 11.9361 10.9129 12.0761C11.0565 12.216 11.2266 12.3258 11.4133 12.3989C11.6 12.4721 11.7995 12.5071 11.9999 12.5019C12.3885 12.4877 12.7565 12.3234 13.0264 12.0434C13.2963 11.7635 13.4471 11.3898 13.4471 11.0009C13.4471 10.612 13.2963 10.2383 13.0264 9.95837C12.7565 9.67843 12.3885 9.51408 11.9999 9.49989"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-secondary-base text-lg font-bold">
                      Location
                    </h5>
                    <p className="text-tertiary-base text-[16px]">
                      123 Creative Street, New York, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* follow us on  */}
            <div className="bg-white-base p-6 mt-6 rounded-xl border border-border-base">
              <h1 className="text-secondary-base border-b pb-1 border-border-base text-[28px] uppercase text-center font-bold">
                follow us on
              </h1>

              <div className="mt-6   flex items-center justify-center space-x-3">
                <div className="size-14 duration-300 transition-all ease-in-out group cursor-pointer hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#EFF6FF] border border-[#3B82F6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#3B82F6] group-hover:text-white"
                  >
                    <path
                      d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17.5 6.51002L17.51 6.49902"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="size-14 duration-300 transition-all ease-in-out group cursor-pointer hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#EFF6FF] border border-[#3B82F6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16.435 12.667H15.3337C14.0763 12.667 13.4483 12.667 13.0577 13.0577C12.667 13.4483 12.667 14.0763 12.667 15.3337V26.667C12.667 27.9243 12.667 28.5523 13.0577 28.943C13.4483 29.3337 14.0763 29.3337 15.3337 29.3337H16.0003C17.2577 29.3337 17.8857 29.3337 18.2763 28.943C18.667 28.5523 18.667 27.9243 18.667 26.667V22.0003C18.667 19.791 19.371 18.0003 21.451 18.0003C22.491 18.0003 23.3337 18.8963 23.3337 20.0003V26.0003C23.3337 27.2577 23.3337 27.8857 23.7243 28.2763C24.115 28.667 24.743 28.667 26.0003 28.667H26.6657C27.9217 28.667 28.551 28.667 28.9417 28.2763C29.331 27.8857 29.3323 27.2577 29.3323 26.0017L29.3337 18.667C29.3337 15.3523 26.1817 12.667 23.063 12.667C21.287 12.667 19.703 13.5363 18.667 14.8977C18.667 14.0577 18.667 13.6377 18.4843 13.3257C18.3688 13.1282 18.2044 12.9639 18.007 12.8483C17.695 12.6657 17.275 12.6657 16.435 12.6657M6.00033 12.667H5.33366C4.07633 12.667 3.44833 12.667 3.05766 13.0577C2.66699 13.4483 2.66699 14.0763 2.66699 15.3337V26.667C2.66699 27.9243 2.66699 28.5523 3.05766 28.943C3.44833 29.3337 4.07633 29.3337 5.33366 29.3337H6.00033C7.25766 29.3337 7.88566 29.3337 8.27632 28.943C8.66699 28.5523 8.66699 27.9243 8.66699 26.667V15.3337C8.66699 14.0763 8.66699 13.4483 8.27632 13.0577C7.88566 12.667 7.25766 12.667 6.00033 12.667ZM8.66699 5.66699C8.66699 6.46264 8.35092 7.2257 7.78831 7.78831C7.2257 8.35092 6.46264 8.66699 5.66699 8.66699C4.87134 8.66699 4.10828 8.35092 3.54567 7.78831C2.98306 7.2257 2.66699 6.46264 2.66699 5.66699C2.66699 4.87134 2.98306 4.10828 3.54567 3.54567C4.10828 2.98306 4.87134 2.66699 5.66699 2.66699C6.46264 2.66699 7.2257 2.98306 7.78831 3.54567C8.35092 4.10828 8.66699 4.87134 8.66699 5.66699Z"
                      // stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="currentColor"
                      className="text-[#3B82F6] group-hover:text-white"
                    />
                  </svg>
                </div>
                <div className="size-14 duration-300 transition-all ease-in-out group cursor-pointer hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#EFF6FF] border border-[#3B82F6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9842 5.05067C15.2967 3.73786 17.0771 3.00022 18.9335 3H22.5335C22.7987 3 23.0531 3.10536 23.2406 3.29289C23.4281 3.48043 23.5335 3.73478 23.5335 4V8.8C23.5335 9.06522 23.4281 9.31957 23.2406 9.50711C23.0531 9.69464 22.7987 9.8 22.5335 9.8H18.9335C18.9072 9.8 18.8812 9.80517 18.857 9.81522C18.8327 9.82528 18.8106 9.84001 18.7921 9.85858C18.7735 9.87715 18.7588 9.8992 18.7487 9.92346C18.7387 9.94773 18.7335 9.97374 18.7335 10V12.6H22.5335C22.6855 12.5999 22.8356 12.6345 22.9722 12.7011C23.1089 12.7677 23.2285 12.8646 23.3221 12.9844C23.4157 13.1042 23.4807 13.2438 23.5123 13.3925C23.5438 13.5412 23.5411 13.6952 23.5042 13.8427L22.3042 18.6427C22.25 18.8591 22.1251 19.0512 21.9492 19.1884C21.7733 19.3256 21.5566 19.4001 21.3335 19.4H18.7335V28C18.7335 28.2652 18.6281 28.5196 18.4406 28.7071C18.2531 28.8946 17.9987 29 17.7335 29H12.9335C12.6683 29 12.4139 28.8946 12.2264 28.7071C12.0389 28.5196 11.9335 28.2652 11.9335 28V19.4H9.3335C9.06828 19.4 8.81393 19.2946 8.62639 19.1071C8.43885 18.9196 8.3335 18.6652 8.3335 18.4V13.6C8.3335 13.4687 8.35936 13.3386 8.40962 13.2173C8.45987 13.096 8.53353 12.9858 8.62639 12.8929C8.71925 12.8 8.82949 12.7264 8.95081 12.6761C9.07214 12.6259 9.20217 12.6 9.3335 12.6H11.9335V10C11.9337 8.14357 12.6714 6.36325 13.9842 5.05067ZM18.9335 5C17.6074 5 16.3356 5.52678 15.398 6.46447C14.4603 7.40215 13.9335 8.67392 13.9335 10V13.6C13.9335 13.8652 13.8281 14.1196 13.6406 14.3071C13.4531 14.4946 13.1987 14.6 12.9335 14.6H10.3335V17.4H12.9335C13.1987 17.4 13.4531 17.5054 13.6406 17.6929C13.8281 17.8804 13.9335 18.1348 13.9335 18.4V27H16.7335V18.4C16.7335 18.1348 16.8389 17.8804 17.0264 17.6929C17.2139 17.5054 17.4683 17.4 17.7335 17.4H20.5522L21.2522 14.6H17.7335C17.4683 14.6 17.2139 14.4946 17.0264 14.3071C16.8389 14.1196 16.7335 13.8652 16.7335 13.6V10C16.7335 9.41652 16.9653 8.85695 17.3779 8.44437C17.7904 8.03179 18.35 7.8 18.9335 7.8H21.5335V5H18.9335Z"
                      className="text-[#3B82F6] group-hover:text-white"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="size-14 duration-300 transition-all ease-in-out group cursor-pointer hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#EFF6FF] border border-[#3B82F6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-[#3B82F6] group-hover:text-white"
                    fill="currentColor"
                  >
                    <g clipPath="url(#clip0_2749_7987)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.753 4.659C19.8395 4.56011 19.9056 4.44516 19.9477 4.32071C19.9897 4.19626 20.0069 4.06475 19.9981 3.93368C19.9893 3.80261 19.9548 3.67455 19.8965 3.55682C19.8383 3.43908 19.7574 3.33398 19.6585 3.2475C19.5596 3.16102 19.4447 3.09487 19.3202 3.05282C19.1958 3.01077 19.0642 2.99364 18.9332 3.00242C18.8021 3.01119 18.6741 3.0457 18.5563 3.10396C18.4386 3.16223 18.3335 3.24311 18.247 3.342L13.137 9.182L8.8 3.4C8.70685 3.2758 8.58607 3.175 8.44721 3.10557C8.30836 3.03614 8.15525 3 8 3H4C3.81429 3 3.63225 3.05171 3.47427 3.14935C3.31629 3.24698 3.18863 3.38668 3.10557 3.55279C3.02252 3.71889 2.98736 3.90484 3.00404 4.08981C3.02072 4.27477 3.08857 4.45143 3.2 4.6L9.637 13.182L4.247 19.342C4.16053 19.4409 4.09437 19.5558 4.05232 19.6803C4.01027 19.8047 3.99314 19.9363 4.00192 20.0673C4.01069 20.1984 4.0452 20.3264 4.10347 20.4442C4.16173 20.5619 4.24261 20.667 4.3415 20.7535C4.44039 20.84 4.55534 20.9061 4.67979 20.9482C4.80424 20.9902 4.93575 21.0074 5.06682 20.9986C5.19789 20.9898 5.32595 20.9553 5.44368 20.897C5.56142 20.8388 5.66652 20.7579 5.753 20.659L10.863 14.818L15.2 20.6C15.2931 20.7242 15.4139 20.825 15.5528 20.8944C15.6916 20.9639 15.8448 21 16 21H20C20.1857 21 20.3678 20.9483 20.5257 20.8507C20.6837 20.753 20.8114 20.6133 20.8944 20.4472C20.9775 20.2811 21.0126 20.0952 20.996 19.9102C20.9793 19.7252 20.9114 19.5486 20.8 19.4L14.363 10.818L19.753 4.659ZM16.5 19L6 5H7.5L18 19H16.5Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2749_7987">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="size-14 duration-300 transition-all ease-in-out group cursor-pointer hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#EFF6FF] border border-[#3B82F6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-[#3B82F6] group-hover:text-white"
                  >
                    <path
                      d="M28 16C28.0019 17.5806 27.6907 19.1459 27.0842 20.6055C26.4777 22.065 25.5881 23.39 24.4666 24.5038C23.3542 25.6141 22.0339 26.4944 20.5811 27.0942C19.1284 27.6941 17.5717 28.0019 16 28C9.3724 28 4.00001 22.6276 4.00001 16C3.99569 12.923 5.17763 9.96283 7.30001 7.735C8.41974 6.55328 9.76887 5.61251 11.2648 4.97029C12.7608 4.32807 14.372 3.9979 16 4.00001C17.5717 3.99807 19.1284 4.30584 20.5811 4.90573C22.0339 5.50562 23.3542 6.38588 24.4666 7.4962C25.5881 8.60998 26.4777 9.93493 27.0842 11.3945C27.6907 12.8541 28.0019 14.4194 28 16Z"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.9997 16.0007C26.2489 16.0007 21.419 15.3407 17.096 17.2385C12.3998 19.3007 8.99958 22.4999 7.51758 24.4889"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5 4.87207C13.378 6.60547 17.476 11.0185 19 15.3997C20.524 19.7808 21.088 25.1676 21.436 26.7006"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.09229 14.5008C6.35908 14.6376 12.3597 14.7606 16.1997 13.1208C20.0397 11.481 23.3439 8.46481 24.4772 7.50781M4.89988 20.5686C5.95744 23.128 7.86442 25.245 10.2999 26.5632"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.00001 16C3.99569 12.923 5.17763 9.96283 7.30001 7.735C8.41974 6.55328 9.76887 5.61251 11.2648 4.97029C12.7608 4.32807 14.372 3.9979 16 4.00001M20.8 4.99841C22.1668 5.59588 23.4102 6.44295 24.4666 7.4962C25.5881 8.60998 26.4777 9.93493 27.0842 11.3945C27.6907 12.8541 28.0019 14.4194 28 16C28 17.4772 27.733 18.8926 27.244 20.2M16 28C17.5717 28.0019 19.1284 27.6941 20.5811 27.0942C22.0339 26.4944 23.3542 25.6141 24.4666 24.5038"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* section right  */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,

              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
            className="md:col-span-3"
          >
            <div className="bg-white-base md:p-6 rounded-xl border border-border-base">
              <div className=" mt-3 p-4">
                <form>
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
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
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
                    <div>
                      <label
                        htmlFor="fname"
                        className="text-secondary-base text-lg font-medium"
                      >
                        Phone Number:
                      </label>
                      <br />
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter Phone Number"
                        className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-3 relative">
                    <label
                      htmlFor="serviceType"
                      className="text-secondary-base text-lg font-medium"
                    >
                      Project/Service Type *
                    </label>
                    <br />
                    <select
                      id="serviceType"
                      name="serviceType"
                      className="appearance-none border border-border-base cursor-pointer focus:outline-none p-4 w-full mt-1 mb-3 rounded-lg pr-10"
                      defaultValue=""
                    >
                      <option
                        className="opacity-50 text-[#A1A1AA]"
                        value=""
                        disabled
                      >
                        Select Project/Service Type
                      </option>
                      <option value="web">Website Development</option>
                      <option value="app">Mobile App Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other</option>
                    </select>

                    {/* Custom Arrow Icon */}
                    <div className="pointer-events-none absolute right-4 top-[58%] transform -translate-y-1/2 text-[#A1A1AA]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 10L12 15L17 10"
                          stroke="#A1A1AA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
                    <Button content="Send Massage" />
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ContactUs;
