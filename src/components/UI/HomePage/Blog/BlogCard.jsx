"use client";
import React from "react";
import SlideUp from "@/utils/animations/SlideUp";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div className="border   group cursor-pointer border-border-base bg-white-base p-4 rounded-2xl flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl">
        {/* START BLOG IMAGE */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            className="w-full rounded-2xl shadow-lg hover:scale-105 duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] object-cover h-full"
            src={blog?.image}
            alt={blog?.title}
            height={240}
            width={500}
          />
        </div>
        {/* END BLOG IMAGE */}

        {/* START BLOG CATEGORY BADGE */}
        <div className="mt-6 flex justify-between items-center">
          <div
            className={`rounded-[99px] w-fit px-3 py-1.5 border text-sm font-medium ${blog?.categoryColor}`}
          >
            {blog?.category}
          </div>
        </div>
        {/* END BLOG CATEGORY BADGE */}

        {/* START BLOG TITLE AND EXCERPT */}
        <div className="mt-6">
          <Link href={`blog-grid/${blog.id}`}>
            <h2 className="text-secondary-base group-hover:text-[#3B82F6] font-bold text-2xl capitalize">
              {blog?.title}
            </h2>
          </Link>
          <p className="mt-6 text-[#71717A] text-[16px] font-medium">
            {blog?.excerpt}
          </p>
        </div>
        {/* END BLOG TITLE AND EXCERPT */}

        {/* START BLOG AUTHOR AND READING TIME */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                className="rounded-full size-12"
                src={blog.author.image}
                alt={blog.author.name}
                height={48}
                width={48}
              />
              <div>
                <h4 className="font-bold text-lg text-tertiary-base capitalize">
                  {blog?.author?.name}
                </h4>
                <p className="font-medium text-sm text-[#71717A] capitalize">
                  {blog?.author?.role}
                </p>
              </div>
            </div>
            <div className="bg-[#F4F4F5] px-4 py-2 rounded-lg">
              <p className="text-[#71717A] text-sm font-medium">
                {blog?.readTime}
              </p>
            </div>
          </div>
        </div>
        {/* START BLOG AUTHOR AND READING TIME */}
      </div>
    </SlideUp>
  );
};

export default BlogCard;
