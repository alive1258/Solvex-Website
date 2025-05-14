import ZoomIn from "@/utils/animations/ZoomIn";

import Image from "next/image";
import React from "react";

const BlogDetailSection = () => {
  return (
    <div className="container my-20">
      {/* hero section  */}
      <ZoomIn>
        <div
          className="relative w-full h-[550px] md:h-[700px] rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/blogDetails/blogD1.png')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

          {/* Text Content */}
          <div className="absolute md:bottom-14 bottom-10 md:left-14 left-4 md:right-14 z-10">
            <div>
              <div className="flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-zinc-800/20 backdrop-blur-sm">
                <p className="text-white text-sm">Web Developer</p>
              </div>

              <h1 className="text-[28px] mt-10 md:text-[40px] font-bold text-white leading-tight">
                Top 5 Web Development Trends in 2025
              </h1>

              <div className="mt-10 md:flex items-center space-x-11 md:space-y-0 space-y-3">
                <div className="flex items-center space-x-4">
                  <Image
                    className="rounded-full size-12"
                    src="/images/blogs/author4.png"
                    alt="author1"
                    height={48}
                    width={48}
                  />
                  <div>
                    <h4 className="font-bold text-lg text-white-base">
                      Jane Cooper
                    </h4>
                    <p className="font-medium text-sm text-[#A1A1AA]">
                      Web Developer
                    </p>
                  </div>
                </div>
                <div className="flex md:mt-0 mt-4 space-x-8">
                  <div>
                    <h4 className="font-bold text-lg text-white-base">
                      February 18, 2025
                    </h4>
                    <p className="font-medium text-sm text-[#A1A1AA]">
                      Date Published
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white-base">
                      5 min read
                    </h4>
                    <p className="font-medium text-sm text-[#A1A1AA]">
                      Reading Time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ZoomIn>
    </div>
  );
};

export default BlogDetailSection;
