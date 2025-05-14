import SlideUp from "@/utils/animations/SlideUp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TagCard = ({ blog, delay = 0 }) => {
  return (
    <>
      <SlideUp delay={delay}>
        <Link href={`blog-grid/${blog.id}`} className="group">
          <div className="border group cursor-pointer border-border-base bg-white-base p-4 rounded-2xl flex flex-col h-full">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                className="w-full rounded-2xl shadow-lg hover:scale-105 duration-500 overflow-hidden ease-[cubic-bezier(0.4,0,0.2,1)] transition-transform object-cover h-full"
                src={blog?.image}
                alt={blog?.title}
                height={240}
                width={500}
              />
            </div>

            {/* Category */}
            <div className="mt-6 flex justify-between items-center">
              <div
                className="rounded-[99px] w-fit px-3 py-1.5 border"
                style={{
                  backgroundColor: blog?.categoryBg,
                  borderColor: blog?.categoryBorder,
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: blog?.categoryText }}
                >
                  {blog?.category}
                </p>
              </div>
            </div>

            {/* Title + excerpt (this grows) */}
            <div className="mt-6 ">
              <h1 className="text-secondary-base group-hover:text-[#3B82F6] font-bold text-2xl">
                {blog?.title}
              </h1>
              <p className="mt-6 text-[#71717A] text-[16px] font-medium">
                {blog?.excerpt}
              </p>
            </div>
          </div>
        </Link>
      </SlideUp>
    </>
  );
};

export default TagCard;
