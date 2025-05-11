import SlideUp from "@/utils/animations/SlideUp";

import Image from "next/image";

const BlogCard = ({ blog, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div className="border group cursor-pointer  border-border-base bg-white-base p-4 rounded-2xl">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            className="w-full rounded-2xl shadow-lg hover:scale-105 duration-500 overflow-hidden ease-[cubic-bezier(0.4,0,0.2,1)] transition-transform  object-cover h-full "
            src={blog.image}
            alt={blog.title}
            height={240}
            width={500}
          />
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div
            className="rounded-[99px] w-fit px-3 py-1.5 border"
            style={{
              backgroundColor: blog.categoryBg,
              borderColor: blog.categoryBorder,
            }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: blog.categoryText }}
            >
              {blog.category}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-secondary-base group-hover:text-[#3B82F6] font-bold text-2xl">
            {blog.title}
          </h1>
          <p className="mt-6 text-[#71717A] text-[16px] font-medium">
            {blog.description}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                className="rounded-full size-12"
                src={blog.authorImage}
                alt={blog.authorName}
                height={48}
                width={48}
              />
              <div>
                <h4 className="font-bold text-lg text-tertiary-base">
                  {blog.authorName}
                </h4>
                <p className="font-medium text-sm text-[#71717A]">
                  {blog.authorTitle}
                </p>
              </div>
            </div>
            <div className="bg-[#F4F4F5] px-4 py-2 rounded-lg">
              <p className="text-[#71717A] text-sm font-medium">
                {blog.readTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default BlogCard;
