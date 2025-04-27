"use client";

import Link from "next/link";
import React, { useState } from "react";
import logoSolvex from "../../../public/images/logo/LogoSolvex.svg";
import Image from "next/image";
import Button from "../UI/Button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const topFunction = () => {
  //   setOpen(!open);
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // };
  const [openModal, setOpenModal] = useState("");

  const toggleModal = (modalName) => {
    setOpenModal((prev) => (prev === modalName ? "" : modalName));
  };

  // Usage
  const isHomeOpen = openModal === "home";
  const isServicesOpen = openModal === "services";
  const isPageOpen = openModal === "page";
  const isPortfolioOpen = openModal === "portfolio";
  const isBlogOpen = openModal === "blog";

  const handleToggle = () => {
    setOpen(!open);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-[500] bg-[#fff] shadow-sm transition-all duration-500 ease-in-out `}
      >
        <div className="max-w-[1440px]  uppercase mx-auto w-full md:px-6 px-5 flex items-center justify-between  h-[96px] text-[#18181B] text-[16px] font-medium">
          <Link href="/">
            <Image
              className="w-[125px] h-10"
              src={logoSolvex}
              height={40}
              width={125}
              alt="logo"
            />
          </Link>

          {/* Hamburger Button for Mobile Start */}
          <button
            className="md:hidden  focus:outline-none"
            onClick={handleSidebar}
            aria-label="Toggle Menu"
          >
            {!open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M6.6665 22.6667H25.3332M6.6665 16H25.3332M6.6665 9.33333H25.3332"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <div className="border size-8  rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2220_5429)">
                    <path
                      d="M9.32945 1.07963C9.43278 0.970382 9.55696 0.882962 9.69466 0.822533C9.83235 0.762103 9.98076 0.729891 10.1311 0.7278C10.2815 0.725709 10.4307 0.753782 10.57 0.810359C10.7094 0.866936 10.8359 0.950869 10.9423 1.0572C11.0486 1.16352 11.1325 1.29009 11.1891 1.42941C11.2457 1.56873 11.2737 1.71798 11.2717 1.86834C11.2696 2.01869 11.2373 2.1671 11.1769 2.3048C11.1165 2.44249 11.0291 2.56667 10.9198 2.67L7.62358 5.96625C7.61921 5.9706 7.61575 5.97578 7.61339 5.98147C7.61102 5.98717 7.60981 5.99327 7.60981 5.99944C7.60981 6.0056 7.61102 6.01171 7.61339 6.0174C7.61575 6.0231 7.61921 6.02827 7.62358 6.03263L10.9198 9.32888C11.0257 9.43302 11.1099 9.55709 11.1676 9.69394C11.2253 9.83078 11.2553 9.9777 11.2559 10.1262C11.2565 10.2747 11.2278 10.4219 11.1712 10.5592C11.1147 10.6965 11.0315 10.8213 10.9265 10.9263C10.8215 11.0313 10.6968 11.1145 10.5595 11.1711C10.4221 11.2277 10.275 11.2565 10.1265 11.2559C9.97798 11.2553 9.83106 11.2253 9.69419 11.1677C9.55733 11.11 9.43324 11.0259 9.32908 10.92L6.03283 7.62375C6.02847 7.61939 6.0233 7.61592 6.01761 7.61356C6.01191 7.6112 6.00581 7.60998 5.99964 7.60998C5.99347 7.60998 5.98737 7.6112 5.98167 7.61356C5.97598 7.61592 5.97081 7.61939 5.96645 7.62375L2.6702 10.92C2.56606 11.0259 2.44199 11.1101 2.30514 11.1678C2.1683 11.2255 2.02138 11.2555 1.87288 11.2561C1.72437 11.2567 1.57721 11.2279 1.43988 11.1714C1.30256 11.1149 1.17779 11.0317 1.07276 10.9267C0.967739 10.8217 0.884544 10.6969 0.827976 10.5596C0.771407 10.4223 0.742586 10.2752 0.743173 10.1267C0.74376 9.97815 0.773744 9.83123 0.831397 9.69437C0.889049 9.55751 0.973228 9.43342 1.07908 9.32925L4.37533 6.033C4.37969 6.02865 4.38316 6.02347 4.38552 6.01778C4.38788 6.01208 4.3891 6.00598 4.3891 5.99981C4.3891 5.99365 4.38788 5.98754 4.38552 5.98185C4.38316 5.97615 4.37969 5.97098 4.37533 5.96663L1.07908 2.67038C0.870913 2.45884 0.754767 2.17362 0.75594 1.87684C0.757114 1.58006 0.875511 1.29577 1.08534 1.08589C1.29517 0.876007 1.57944 0.757543 1.87622 0.756299C2.173 0.755056 2.45825 0.871135 2.66983 1.07925L5.96608 4.3755C5.97043 4.37987 5.97561 4.38333 5.9813 4.38569C5.98699 4.38806 5.9931 4.38927 5.99927 4.38927C6.00543 4.38927 6.01154 4.38806 6.01723 4.38569C6.02293 4.38333 6.0281 4.37987 6.03245 4.3755L9.32945 1.07963Z"
                      fill="#27272A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2220_5429">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            )}
          </button>
          {/* Hamburger Button for Mobile Start */}

          {/* Nav Items Start */}
          <ul
            className={`${
              open
                ? "left-0 top-0 z-50  bg-[#fff]"
                : "-left-full top-0  z-50 bg-[#fff]"
            }  md:static  md:mt-0 mt-24 absolute w-full md:w-auto h-screen md:h-auto bg-[#fff]  flex flex-col md:flex-row md:items-center gap-y-4 gap-x-14  transition-all duration-500 ease-in-out`}
          >
            {/* Home  */}
            <li className="relative md:block hidden group md:border-0 border-b  md:mx-0 mx-5 border-[#E4E4E7] md:pb-0 pb-3">
              <Link href="#">
                <span className="font-medium text-[#18181B] ">Home</span>
                <div className="absolute right-0  md:pb-0 pb-3 md:left-12 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              <ul className="absolute left-0 w-[213px] bg-transparent rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="mt-8">
                  <div className="bg-white space-y-2 shadow-2xl">
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/digital-agency">Digital Agency</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/digital-marketing">Digital Marketing</Link>
                    </li>
                    <li className="px-4 py-2 hover:text-[#3B82F6]">
                      <Link href="/creative-studio">Creative Studio</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            {/* Services */}
            <li className="relative md:block hidden group md:border-0 border-b md:mx-0 mx-5 border-[#E4E4E7] md:pb-0 pb-3">
              <Link href="#">
                <span className="font-medium text-[#18181B]">Services</span>
                <div className="absolute right-0 md:left-[71px] top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              <ul className="sub-menu absolute left-0 w-[213px] bg-transparent rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="mt-10">
                  <div className="bg-white shadow-2xl">
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6] ">
                      <Link href="/service">Service </Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/service-details">Service Details</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            {/* Page */}
            <li className="relative md:block hidden group md:border-0 border-b md:mx-0 mx-5 border-[#E4E4E7] md:pb-0 pb-3">
              <Link href="#">
                <span className="font-medium text-[#18181B]">Page</span>
                <div className="absolute right-0  md:left-10 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              <ul className="sub-menu absolute left-0 w-[213px] bg-transparent rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="mt-10">
                  <div className="bg-white shadow-2xl">
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/team">Team</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/team-details">Team Details</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/career">Career</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/career-details">Career Details</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/faqs">Faqs</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            {/* Portfolio */}
            <li className="relative md:block hidden group md:border-0 border-b md:mx-0 mx-5 border-[#E4E4E7] md:pb-0 pb-3">
              <Link href="#">
                <span className="font-medium text-[#18181B]">Portfolio</span>
                <div className="absolute right-0  md:left-[85px] top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              <ul className="sub-menu absolute left-0 w-[213px] bg-transparent rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="mt-10">
                  <div className="bg-white shadow-2xl">
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/portfolio">Portfolio </Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/portfolio-details">Portfolio Details</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            {/* Blog */}
            <li className="relative md:block hidden group md:border-0 border-b md:mx-0 mx-5 border-[#E4E4E7] md:pb-0 pb-3">
              <Link href="#">
                <span className="font-medium text-[#18181B]">Blog</span>
                <div className="absolute right-0  md:left-10 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      isBlogOpen ? "rotate-180" : ""
                    } group-hover:rotate-180`}
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              <ul
                className={`
             
                delay-150   absolute left-0 w-[213px] bg-transparent rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50`}
              >
                <div className="mt-10">
                  <div
                    className={`
                    
                    bg-white shadow-2xl`}
                  >
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/blog-grid">Blog Gird</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/blog-list">Blog List</Link>
                    </li>
                    <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                  </div>
                </div>

                <div
                  className={`
                     ${
                       isBlogOpen
                         ? "max-h-[500px] opacity-100 mt-4"
                         : "max-h-0 opacity-0"
                     }
                    bg-red-400 z-50 md:hidden shadow-2xl`}
                >
                  <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/blog-grid">Blog Gird</Link>
                  </li>
                  <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/blog-list">Blog List</Link>
                  </li>
                  <li className="px-4 py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </div>
              </ul>
            </li>

            {/*-------- mobile menu-----------  */}
            {/* mobile menu Home  */}
            <li className=" pt-14 md:hidden ">
              <div className="md:border-0 flex justify-between items-center border-b md:mx-0 mx-5 border-[#E4E4E7]  pb-3">
                <span className="font-medium text-[#18181B] ">Home</span>
                <div onClick={() => toggleModal("home")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <ul
                className={`overflow-hidden mx-8 transition-all duration-300 delay-150  ease-in-out ${
                  isHomeOpen
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white space-y-2 shadow-2xl">
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/digital-agency">Digital Agency</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li className=" py-2 hover:text-[#3B82F6]">
                    <Link href="/creative-studio">Creative Studio</Link>
                  </li>
                </div>
              </ul>
            </li>

            {/*------ mobile menu Services --------- */}
            <li className="md:hidden ">
              <div className="md:border-0 flex justify-between items-center border-b md:mx-0 mx-5 border-[#E4E4E7]  pb-3">
                <span className="font-medium text-[#18181B]">Services</span>
                <div onClick={() => toggleModal("services")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <ul
                className={`overflow-hidden mx-8 transition-all duration-300 delay-150  ease-in-out ${
                  isServicesOpen
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className=" bg-white shadow-2xl">
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6] ">
                    <Link href="/service">Service </Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/service-details">Service Details</Link>
                  </li>
                </div>
              </ul>
            </li>
            {/*mobile menu Page */}
            <li className=" md:hidden ">
              <div className="md:border-0 flex justify-between items-center border-b md:mx-0 mx-5 border-[#E4E4E7]  pb-3">
                <span className="font-medium text-[#18181B]">Page</span>
                <div onClick={() => toggleModal("page")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <ul
                className={`overflow-hidden mx-8 transition-all duration-300 delay-150  ease-in-out ${
                  isPageOpen
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white shadow-2xl">
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/team">Team</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/team-details">Team Details</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/career">Career</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/career-details">Career Details</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/faqs">Faqs</Link>
                  </li>
                </div>
              </ul>
            </li>
            {/*mobile menu Portfolio */}
            <li className="md:hidden">
              <div className="md:border-0 flex justify-between items-center border-b md:mx-0 mx-5 border-[#E4E4E7]  pb-3">
                <span className="font-medium text-[#18181B]">Portfolio</span>
                <div onClick={() => toggleModal("portfolio")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <ul
                className={`overflow-hidden mx-8 transition-all duration-300 delay-150  ease-in-out ${
                  isPortfolioOpen
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white shadow-2xl">
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/portfolio">Portfolio </Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/portfolio-details">Portfolio Details</Link>
                  </li>
                </div>
              </ul>
            </li>
            {/*mobile menu Blog */}
            <li className="md:hidden  ">
              <div className="md:border-0 flex justify-between items-center border-b md:mx-0 mx-5 border-[#E4E4E7]  pb-3">
                <span className="font-medium text-[#18181B]">Blog</span>
                <div onClick={() => toggleModal("blog")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      isBlogOpen ? "rotate-180" : ""
                    } group-hover:rotate-180`}
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <ul
                className={`overflow-hidden mx-8 transition-all duration-300 delay-150  ease-in-out ${
                  isBlogOpen
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`
                    
                    bg-white shadow-2xl`}
                >
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/blog-grid">Blog Gird</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/blog-list">Blog List</Link>
                  </li>
                  <li className=" py-2 border-b border-[#E4E4E7] hover:text-[#3B82F6]">
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </div>
              </ul>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                className={`block px-5 py-2 font-medium transition-colors duration-300 `}
              >
                Contact
              </Link>
            </li>
            <li className="mt-4 md:inline-block hidden  md:mt-0">
              <Link href="/get-free-consultation">
                <Button content="Get a Free Consultation" />
              </Link>
            </li>
            <li className="mt-8 mx-5 inline-block md:hidden md:mt-0 border-b pb-3 border-[#E4E4E7]">
              <span>Follow Us</span>
            </li>

            <div className="mt-6 px-5  md:hidden flex items-center space-x-3">
              <div className="size-12 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#E4E4E7] border border-[#D4D4D8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10.1601 7.99998C10.1601 6.79998 9.2001 5.83998 8.0001 5.83998C6.8001 5.83998 5.8401 6.79998 5.8401 7.99998C5.8401 9.19998 6.8001 10.16 8.0001 10.16C9.2001 10.16 10.1601 9.19998 10.1601 7.99998ZM11.2801 7.99998C11.2801 9.83998 9.8401 11.28 8.0001 11.28C6.1601 11.28 4.7201 9.83998 4.7201 7.99998C4.7201 6.15998 6.1601 4.71998 8.0001 4.71998C9.8401 4.71998 11.2801 6.15998 11.2801 7.99998ZM12.1601 4.55998C12.1601 5.03998 11.8401 5.35998 11.3601 5.35998C10.8801 5.35998 10.5601 5.03998 10.5601 4.55998C10.5601 4.07998 10.8801 3.75998 11.3601 3.75998C11.8401 3.75998 12.1601 4.15998 12.1601 4.55998ZM8.0001 2.71998C7.0401 2.71998 5.0401 2.63998 4.2401 2.95998C3.6801 3.19998 3.2001 3.67998 3.0401 4.23998C2.7201 5.03998 2.8001 7.03998 2.8001 7.99998C2.8001 8.95998 2.7201 10.96 3.0401 11.76C3.2001 12.32 3.6801 12.8 4.2401 12.96C5.0401 13.28 7.1201 13.2 8.0001 13.2C8.8801 13.2 10.9601 13.28 11.7601 12.96C12.3201 12.72 12.7201 12.32 12.9601 11.76C13.2801 10.88 13.2001 8.87998 13.2001 7.99998C13.2001 7.11998 13.2801 5.03998 12.9601 4.23998C12.8001 3.67998 12.3201 3.19998 11.7601 3.03998C10.9601 2.63998 8.9601 2.71998 8.0001 2.71998ZM14.4001 7.99998V10.64C14.4001 11.6 14.0801 12.56 13.3601 13.36C12.6401 14.08 11.6801 14.4 10.6401 14.4H5.3601C4.4001 14.4 3.4401 14.08 2.6401 13.36C2.0001 12.64 1.6001 11.68 1.6001 10.64V5.35998C1.6001 4.31998 2.0001 3.35998 2.6401 2.63998C3.4401 1.99998 4.4001 1.59998 5.3601 1.59998H10.6401C11.6001 1.59998 12.5601 1.91998 13.3601 2.63998C14.0001 3.35998 14.4001 4.31998 14.4001 5.35998V7.99998Z"
                    fill="#27272A"
                  />
                </svg>
              </div>
              <div className="size-12 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#E4E4E7] border border-[#D4D4D8]">
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
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2220_5474">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="size-12 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#E4E4E7] border border-[#D4D4D8]">
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
                    fill="#27272A"
                  />
                </svg>
              </div>
              <div className="size-12 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#E4E4E7] border border-[#D4D4D8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.5149 3L8.46281 6.4889L5.82368 3H2L6.56777 8.97225L2.23887 13.92H4.09236L7.43343 10.1018L10.3536 13.92H14.0813L9.31991 7.62519L13.3672 3H11.5149ZM10.8649 12.8112L4.16384 4.05015H5.26531L11.8912 12.8106L10.8649 12.8112Z"
                    fill="#27272A"
                  />
                </svg>
              </div>
              <div className="size-12 hover:bg-[#3B82F6] hover:border-[#3B82F6] rounded-full flex justify-center items-center bg-[#E4E4E7] border border-[#D4D4D8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14 7.99999C14.001 8.79028 13.8453 9.57293 13.5421 10.3027C13.2389 11.0325 12.794 11.695 12.2333 12.2519C11.6771 12.807 11.0169 13.2472 10.2906 13.5471C9.5642 13.8471 8.78585 14.001 7.99999 14C4.6862 14 2.00001 11.3138 2.00001 7.99999C1.99785 6.46152 2.58881 4.98141 3.65 3.8675C4.20987 3.27664 4.88444 2.80626 5.63241 2.48515C6.38038 2.16403 7.18601 1.99895 7.99999 2.00001C8.78585 1.99904 9.5642 2.15292 10.2906 2.45287C11.0169 2.75281 11.6771 3.19294 12.2333 3.7481C12.794 4.30499 13.2389 4.96747 13.5421 5.69726C13.8453 6.42706 14.001 7.20971 14 7.99999Z"
                    stroke="#27272A"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.9989 8.00084C13.1235 8.00084 10.7085 7.67084 8.547 8.61974C6.19891 9.65084 4.49881 11.2504 3.75781 12.2449"
                    stroke="#27272A"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.75 2.43555C6.689 3.30225 8.73799 5.50874 9.49999 7.69934C10.262 9.88993 10.544 12.5833 10.718 13.3498"
                    stroke="#27272A"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.04688 7.2504C3.18027 7.3188 6.18057 7.3803 8.10056 6.5604C10.0206 5.7405 11.6727 4.23241 12.2394 3.75391M2.45067 10.2843C2.97945 11.564 3.93294 12.6225 5.15067 13.2816"
                    stroke="#27272A"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.00001 7.99999C1.99785 6.46152 2.58881 4.98141 3.65 3.8675C4.20987 3.27664 4.88444 2.80626 5.63241 2.48515C6.38038 2.16403 7.18601 1.99895 7.99999 2.00001M10.4 2.4992C11.0834 2.79794 11.7051 3.22147 12.2333 3.7481C12.794 4.30499 13.2389 4.96747 13.5421 5.69726C13.8453 6.42706 14.001 7.20971 14 7.99999C14 8.73859 13.8665 9.44629 13.622 10.1M7.99999 14C8.78585 14.001 9.5642 13.8471 10.2906 13.5471C11.0169 13.2472 11.6771 12.807 12.2333 12.2519"
                    stroke="#27272A"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </ul>
          {/* Nav Items End */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
