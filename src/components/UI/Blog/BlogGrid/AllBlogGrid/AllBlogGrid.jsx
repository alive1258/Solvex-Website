"use client";
import AnimatedText from "@/components/common/AnimatedText";
import BlogCard from "@/components/UI/HomePage/Blog/BlogCard";
import { blogPosts } from "@/utils/fakeData/blogData";
import { blogGridCategories } from "@/utils/fakeData/blogGridCategories";
import React, { useState } from "react";

const AllBlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts?.filter((item) => item.category === selectedCategory);

  return (
    <div className="container md:my-14 my-12">
      <AnimatedText
        lines={["News, insights and more"]}
        className="animated-header"
      />
      <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center">
        Stay updated with the latest trends, tips, and technologies in <br />
        web development and design.
      </p>
      {/* Category Filters */}
      <div className="my-10 flex justify-center flex-wrap gap-3">
        {blogGridCategories?.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`border cursor-pointer text-sm rounded-3xl px-6 py-2 font-medium transition-all duration-300 ease-in-out ${
              selectedCategory === cat
                ? "text-white-base bg-[#3B82F6] border-[#3B82F6]"
                : "text-tertiary-base border-[#71717A] hover:text-[#3B82F6] hover:border-[#3B82F6]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
        {filteredData?.slice(0, 6).map((blog, index) => (
          <BlogCard blog={blog} key={blog.id} delay={index * 0.4} />
        ))}
      </div>

      <div className="mt-20 flex justify-center items-center">
        <div className="flex items-center space-x-4">
          <div className="group border bg-white-base hover:bg-[#3B82F6] cursor-pointer hover:text-white-base duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M11 12.75L7.25 9L11 5.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#71717A] group-hover:text-white"
              />
            </svg>
          </div>

          <div className="border bg-white-base hover:bg-[#3B82F6] cursor-pointer hover:text-white-base duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">1</p>
          </div>
          <div className="border bg-white-base hover:bg-[#3B82F6] cursor-pointer hover:text-white-base duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">2</p>
          </div>
          <div className="border bg-white-base hover:bg-[#3B82F6] cursor-pointer hover:text-white-base duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">3</p>
          </div>
          <div className="border bg-white-base hover:bg-[#3B82F6] cursor-pointer hover:text-white-base duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">4</p>
          </div>
          <div className="border bg-white-base hover:bg-[#3B82F6] cursor-pointer hover:text-white-base duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">5</p>
          </div>
          <div className="group border bg-white-base hover:bg-[#3B82F6] cursor-pointer hover:text-white-base duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M8 12.75L11.75 9L8 5.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#71717A] group-hover:text-white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogGrid;
