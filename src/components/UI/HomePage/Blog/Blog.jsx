import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Button from "../../Button/Button";

const Blog = () => {
  return (
    <div className="container md:my-14 my-12">
      <BadgeLabel text="Blog" />
      <h1 className="text-2xl font-bold text-[#3F3F46] mt-6 text-center">
        News, insights and more
      </h1>
      <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center">
        Stay updated with the latest trends, tips, and technologies in <br />{" "}
        web development and design.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 mt-12">
        {/* card 1  */}
        <div className="border  group cursor-pointer hover:scale-105 transition-all ease-in-out duration-300  border-[#E4E4E7] group bg-[#fff] p-4 rounded-2xl">
          <Image
            className="rounded-2xl shadow-lg"
            src="/images/blogs/blog1.png"
            alt="workGallery1"
            height={240}
            width={500}
          />
          <div className="mt-6 flex justify-between items-center">
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
          <div className="mt-6">
            <h1 className="text-[#27272A] group-hover:text-[#3B82F6] font-bold text-2xl">
              How to Optimize Your Website for SEO in 2025
            </h1>
            <p className="mt-6 text-[#71717A] text-[16px] font-medium">
              Explore the emerging trends shaping the future of web development
              — from AI integrations to progressive web apps...
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  className="rounded-full size-12 "
                  src="/images/blogs/author2.png"
                  alt="workGallery1"
                  height={48}
                  width={48}
                />
                <div>
                  <h4 className="font-bold text-lg text-[#52525B]">
                    Ronald Richards
                  </h4>
                  <p className="font-medium text-sm text-[#71717A]">
                    Web Developer
                  </p>
                </div>
              </div>
              <div className=" bg-[#F4F4F5]  px-4 py-2 rounded-lg">
                <p className="text-[#71717A]  text-sm font-medium">
                  5 Min Read
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card 2  */}
        <div className="border group cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 border-[#E4E4E7] group bg-[#fff] p-4 rounded-2xl">
          <Image
            className="rounded-2xl shadow-lg"
            src="/images/blogs/blog2.png"
            alt="workGallery1"
            height={240}
            width={500}
          />
          <div className="mt-6 flex justify-between items-center">
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
          <div className="mt-6">
            <h1 className="text-[#27272A] group-hover:text-[#3B82F6]  font-bold text-2xl">
              Top 5 Web Development Trends in 2025
            </h1>
            <p className="mt-6 text-[#71717A] text-[16px] font-medium">
              Explore the emerging trends shaping the future of web development
              — from AI integrations to progressive web apps...
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  className="rounded-full size-12 "
                  src="/images/blogs/author3.png"
                  alt="workGallery1"
                  height={48}
                  width={48}
                />
                <div>
                  <h4 className="font-bold text-lg text-[#52525B]">
                    {" "}
                    Mike Anderson
                  </h4>
                  <p className="font-medium text-sm text-[#71717A]">
                    SEO & Marketing
                  </p>
                </div>
              </div>
              <div className=" bg-[#F4F4F5]  px-4 py-2 rounded-lg">
                <p className="text-[#71717A]  text-sm font-medium">
                  8 Min Read
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card 3  */}
        <div className="border group cursor-pointer hover:scale-105 transition-all ease-in-out duration-300  border-[#E4E4E7] group bg-[#fff] p-4 rounded-2xl">
          <Image
            className="rounded-2xl shadow-lg"
            src="/images/blogs/blog3.png"
            alt="workGallery1"
            height={240}
            width={500}
          />
          <div className="mt-6 flex justify-between items-center">
            <div className="border  rounded-[99px] w-fit bg-[#E0E7FF] border-[#A5B4FC] px-3 py-1.5">
              <p className="text-[#6366F1] text-sm font-medium">UI/UX Design</p>
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
          <div className="mt-6">
            <h1 className="text-[#27272A] group-hover:text-[#3B82F6] font-bold text-2xl">
              The Power of UI/UX: Why Design Matters for Your Business
            </h1>
            <p className="mt-6 text-[#71717A] text-[16px] font-medium">
              Explore the emerging trends shaping the future of web development
              — from AI integrations to progressive web apps...
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  className="rounded-full size-12 "
                  src="/images/blogs/Author1.png"
                  alt="workGallery1"
                  height={48}
                  width={48}
                />
                <div>
                  <h4 className="font-bold text-lg text-[#52525B]">
                    Bessie Cooper
                  </h4>
                  <p className="font-medium text-sm text-[#71717A]">
                    UI/UX Design
                  </p>
                </div>
              </div>
              <div className=" bg-[#F4F4F5]  px-4 py-2 rounded-lg">
                <p className="text-[#71717A]  text-sm font-medium">
                  6 Min Read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex justify-center uppercase">
        <Button content=" More Blogs" />
      </div>
    </div>
  );
};

export default Blog;
