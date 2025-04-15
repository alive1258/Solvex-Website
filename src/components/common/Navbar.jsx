"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logoSolvex from "../../../public/images/logo/LogoSolvex.svg";
import Image from "next/image";
import Button from "../UI/Button/Button";

const Navbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(""); // Submenu toggle
  // const topFunction = () => {
  //   setOpen(!open);
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // };

  const handleToggle = () => {
    setOpen(!open);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [openModal, setOpenModal] = useState("");

  const toggleModal = (modalName) => {
    setOpenModal((prev) => (prev === modalName ? "" : modalName));
  };

  const handleNavItemClick = () => {
    if (open) {
      setOpen(false); // close mobile nav
    }
    setOpenDropdown(""); // close submenu
  };

  const isHomeOpen = openModal === "home";
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[500] bg-[#fff] shadow-sm transition-all duration-500 ease-in-out `}
      >
        <div className="max-w-[1440px] mx-auto w-full px-5 md:px-20 flex items-center justify-between space-x-12 h-[80px] md:h-[96px] text-[#18181B] text-[16px]">
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
            className="md:hidden focus:outline-none"
            onClick={handleToggle}
            aria-label="Toggle Menu"
          >
            {open ? (
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
                ? "left-0 top-0 opacity-100 visible"
                : "-left-full top-0 opacity-0 invisible"
            } md:opacity-100  space-x-12 md:visible md:static md:mt-0 mt-20 absolute w-full md:w-auto h-screen md:h-auto bg-[#fff] md:bg-transparent flex flex-col md:flex-row items-center gap-y-4  transition-all duration-500 ease-in-out`}
          >
            <li>
              <div
                // onClick={() => open && handleToggle()}
                onClick={() => toggleModal("home")}
                className={` flex items-center cursor-pointer space-x-1 px-4 font-medium transition-colors duration-300 `}
                // className={` flex items-center space-x-1 px-4  font-medium transition-colors duration-300 `}
              >
                <span> Home</span>
                {isHomeOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      d="M7 14L12 9L17 14"
                      stroke="#27272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <div
                className={` transition-all duration-300 delay-150  ease-in-out ${
                  isHomeOpen
                    ? "max-h-[500px] opacity-100 "
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="bg-white md:absolute mt-2 md:mt-0 md:ml-0 ml-4 md:top-[99px] rounded-md shadow-lg py-2 px-4">
                  <li onClick={handleNavItemClick}>
                    <Link
                      href="/#hero"
                      className="block py-2 px-4 hover:text-primary"
                    >
                      Hero
                    </Link>
                  </li>
                  <li onClick={handleNavItemClick}>
                    <Link
                      href="/#features"
                      className="block py-2 px-4 hover:text-primary"
                    >
                      Features
                    </Link>
                  </li>
                  <li onClick={handleNavItemClick}>
                    <Link
                      href="/#contact"
                      className="block py-2 px-4 hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Service */}
            <li>
              <Link
                href="/service"
                onClick={() => open && handleToggle()}
                className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                  pathname === "/service"
                    ? "text-blue-600 font-semibold"
                    : "text-[#18181B] hover:text-blue-500"
                }`}
              >
                Service
              </Link>
            </li>
            {/* Page */}
            <li>
              <Link
                href="/page"
                onClick={() => open && handleToggle()}
                className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                  pathname === "/service"
                    ? "text-blue-600 font-semibold"
                    : "text-[#18181B] hover:text-blue-500"
                }`}
              >
                Page
              </Link>
            </li>
            {/* portfolio */}
            <li>
              <Link
                href="/portfolio"
                onClick={() => open && handleToggle()}
                className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                  pathname === "/service"
                    ? "text-blue-600 font-semibold"
                    : "text-[#18181B] hover:text-blue-500"
                }`}
              >
                Portfolio
              </Link>
            </li>
            {/* Blog */}
            <li>
              <Link
                href="/blog"
                onClick={() => open && handleToggle()}
                className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                  pathname === "/service"
                    ? "text-blue-600 font-semibold"
                    : "text-[#18181B] hover:text-blue-500"
                }`}
              >
                Blog
              </Link>
            </li>
            {/* Contact */}
            <li>
              <Link
                href="/contact"
                onClick={() => open && handleToggle()}
                className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                  pathname === "/service"
                    ? "text-blue-600 font-semibold"
                    : "text-[#18181B] hover:text-blue-500"
                }`}
              >
                Contact
              </Link>
            </li>
            <li className="mt-4 md:mt-0">
              <Link href="/get-started">
                <Button content="Get a Free Consultation" />
              </Link>
            </li>
          </ul>

          {/* Nav Items End */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
