"use client";
import React from "react";
import { motion } from "framer-motion";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Button from "../../Button/Button";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import BlogCard from "./BlogCard";

const Blog = () => {
  // data/blogs.js
  const blogs = [
    {
      id: 1,
      image: "/images/blogs/blog1.png",
      category: "Web Development",
      categoryBg: "#CFFAFE",
      categoryBorder: "#67E8F9",
      categoryText: "#06B6D4",
      date: "February 18, 2025",
      title: "SEO Optimization Tips for 2025",
      description:
        "Explore the emerging trends shaping the future of web development — from AI integrations to progressive ",
      authorImage: "/images/blogs/author2.png",
      authorName: "Ronald Richards",
      authorTitle: "Web Developer",
      readTime: "5 Min Read",
    },
    {
      id: 2,
      image: "/images/blogs/blog2.png",
      category: "SEO & Marketing",
      categoryBg: "#F3E8FF",
      categoryBorder: "#C4B5FD",
      categoryText: "#8B5CF6",
      date: "March 4, 2025",
      title: "Mastering SEO Strategies for 2025",
      description:
        "Learn the most effective SEO and marketing tactics that are redefining search engine success in the new age.",
      authorImage: "/images/blogs/author1.png",
      authorName: "Jenny Wilson",
      authorTitle: "SEO Specialist",
      readTime: "7 Min Read",
    },
    {
      id: 3,
      image: "/images/blogs/blog3.png",
      category: "Tech Trends",
      categoryBg: "#DCFCE7",
      categoryBorder: "#86EFAC",
      categoryText: "#22C55E",
      date: "April 1, 2025",
      title: "Top 10 Technologies to Watch in 2025",
      description:
        "Stay ahead of the curve with these cutting-edge technologies that are transforming industries ",
      authorImage: "/images/blogs/author3.png",
      authorName: "Darlene Robertson",
      authorTitle: "Tech Analyst",
      readTime: "6 Min Read",
    },
  ];

  return (
    <div className="container md:my-14 my-12">
      <BadgeLabel text="Blog" />
      <AnimatedText
        lines={[" News, insights and more"]}
        className="text-2xl font-bold text-primary-base mt-6 text-center w-full md:max-w-[450px] max-w-[230px] mx-auto"
      />
      <AnimatedParagraph
        text=" Stay updated with the latest trends, tips, and technologies in 
        web development and design."
        className="text-center w-full max-w-[550px] mx-auto mt-6 text-[16px] font-medium text-primary-base"
        once={false}
        duration={0.8}
        yOffset={100}
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 mt-12">
        {blogs?.map((blog, index) => (
          <BlogCard blog={blog} key={blog.id} delay={index * 0.3} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Starts lower
        whileInView={{
          opacity: 1,
          y: 0, // Moves up
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.3,
          },
        }}
        viewport={{ once: false }}
        className="py-10 flex justify-center uppercase"
      >
        <Button content="More Blogs" />
      </motion.div>
    </div>
  );
};

export default Blog;
