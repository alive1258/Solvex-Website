import Button from "@/components/UI/Button/Button";
import BlogCard from "@/components/UI/HomePage/Blog/BlogCard";
import { blogPosts } from "@/utils/fakeData/blogData";
import {
  RiDribbbleLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "@remixicon/react";
import Image from "next/image";
import React from "react";
import TagCard from "./TagCard";
import Tags from "./Tags";
import ShareSocialLink from "@/components/common/ShareSocialLink";

const TagSection = () => {
  return (
    <div className="container my-14 ">
      <div className="border-t  border-[#D4D4D8] ">
        <div className="mt-6 md:flex items-center justify-between">
          <div className="md:flex items-center space-x-4 md:space-y-0 space-y-4">
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
          <div className="md:mt-0 mt-6">
            <div className="flex items-center space-x-4">
              <h4 className="text-primary-base text-2xl font-bold">Share:</h4>
              <ShareSocialLink />
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 grid-cols-1 md:gap-x-24">
          <div className="col-span-2">
            <Tags />
          </div>

          {/* section right side  */}
          <div className="col-span-1 grid grid-cols-1 gap-5 mt-10 md:mt-0 ">
            {blogPosts?.slice(0, 3).map((blog, index) => (
              <TagCard blog={blog} key={blog.id} delay={index * 0.4} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagSection;
