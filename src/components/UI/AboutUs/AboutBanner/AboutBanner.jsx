// "use client";
// import Link from "next/link";
// import React from "react";
// import { usePathname } from "next/navigation";

// // Capitalize function
// const formatPageName = (path) => {
//   if (path === "/") return "Home";
//   const cleaned = path.replace("/", "").replaceAll("-", " ");
//   return cleaned
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// const AboutBanner = () => {
//   const pathname = usePathname();

//   const pageName = formatPageName(pathname);

//   return (
//     <div className="about-us-section-bg md:h-[338px] h-[150px]">
//       <div className="bg-[#000] opacity-70 w-full h-full">
//         <div className="container flex h-full justify-center items-center">
//           <div className="z-50 text-white">
//             <h1 className="md:text-[48px] text-[#FAFAFA] text-center uppercase font-extrabold">
//               {pageName}
//             </h1>
//             <div className="flex justify-center items-center mt-3">
//               <div className="bg-[#27272A] w-fit px-4 py-2 rounded-3xl flex items-center justify-center space-x-2">
//                 <Link href="/">
//                   <span className="text-[#A1A1AA] text-[16px] font-medium">
//                     Home
//                   </span>
//                 </Link>
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 18 18"
//                     fill="none"
//                   >
//                     <path
//                       d="M7.5 12.75L11.25 9L7.5 5.25"
//                       stroke="white"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//                 <span className="text-[#FAFAFA] text-[16px] font-medium">
//                   {pageName}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutBanner;
"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// Format a single breadcrumb segment (e.g., "web-design" → "Web Design")
const formatSegment = (segment) => {
  return segment
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const AboutBanner = () => {
  const pathname = usePathname(); // e.g., /services/web-development
  const pathSegments = pathname.split("/").filter(Boolean); // ["services", "web-development"]

  return (
    <div className="about-us-section-bg md:h-[338px] h-[150px]">
      <div className="bg-[#000] opacity-70 w-full h-full">
        <div className="container flex h-full justify-center items-center">
          <div className="z-50 text-white text-center">
            {/* Page Title (last segment) */}

            <h1 className="md:text-[48px] text-[#FAFAFA] text-center uppercase font-extrabold">
              {pathSegments}
            </h1>

            {/* Breadcrumb */}
            <div className="flex justify-center items-center mt-3">
              <div className="bg-[#27272A] w-fit px-4 py-2 rounded-3xl flex items-center space-x-2">
                {/* Always start with Home */}
                <Link href="/">
                  <span className="text-[#A1A1AA] text-[16px] font-medium">
                    Home
                  </span>
                </Link>

                {pathSegments.map((segment, index) => {
                  const href = "/" + pathSegments.slice(0, index + 1).join("/");
                  const isLast = index === pathSegments.length - 1;
                  return (
                    <React.Fragment key={index}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M7.5 12.75L11.25 9L7.5 5.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {isLast ? (
                        <span className="text-[#FAFAFA] text-[16px] font-medium">
                          {formatSegment(segment)}
                        </span>
                      ) : (
                        <Link href={href}>
                          <span className="text-[#A1A1AA] text-[16px] font-medium hover:underline">
                            {formatSegment(segment)}
                          </span>
                        </Link>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
