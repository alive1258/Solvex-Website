import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Button from "../../Button/Button";
import AnimatedText from "@/components/common/AnimatedText";
import BlogCard from "./BlogCard";
import SlideUp from "@/utils/animations/SlideUp";
import { blogs } from "@/utils/fakeData/blogData";

const Blog = () => {
  return (
    <div className="container md:my-14 my-12">
      <BadgeLabel text="Blog" />
      <AnimatedText
        lines={[" News, insights and more"]}
        className="animated-header"
      />

      <SlideUp>
        <p className="primary-paragraph">
          Stay updated with the latest trends, tips, and technologies in web
          development and design.
        </p>
      </SlideUp>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 mt-12">
        {blogs?.map((blog, index) => (
          <BlogCard blog={blog} key={blog.id} delay={index * 0.4} />
        ))}
      </div>
      <SlideUp className="py-10 flex justify-center uppercase">
        <Button content="More Blogs" />
      </SlideUp>
    </div>
  );
};

export default Blog;
