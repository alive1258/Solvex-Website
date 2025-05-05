"use client";
import Image from "next/image";
import React, { useState } from "react";

const AllBlogGrid = () => {
  const categories = [
    "All",
    "Design & UI/UX",
    "Digital Marketing",
    "Web Development",
    "Business & Startup Growth",
    "Case Studies & Success Stories",
    "Creative Inspiration",
  ];

  const blogPosts = [
    {
      id: 1,
      image: "/images/blogs/blog1.png",
      category: "Web Development",
      categoryColor: "bg-[#CFFAFE] border-[#67E8F9] text-[#06B6D4]",
      date: "February 18, 2025",
      title: "How to Optimize Your Website for SEO in 2025",
      excerpt:
        "Explore the emerging trends shaping the future of web development — from AI integrations to progressive web apps...",
      author: {
        name: "Ronald Richards",
        role: "Web Developer",
        image: "/images/blogs/author2.png",
      },
      readTime: "5 Min Read",
    },
    {
      id: 2,
      image: "/images/blogs/blog2.png",
      category: "Digital Marketing",
      categoryColor: "bg-[#F3E8FF] border-[#C4B5FD] text-[#8B5CF6]",
      date: "March 8, 2025",
      title: "Top 10 SEO Trends You Need to Know in 2025",
      excerpt:
        "Uncover SEO techniques that will dominate 2025—from voice search optimization to AI-driven content strategies.",
      author: {
        name: "Annette Black",
        role: "SEO Specialist",
        image: "/images/blogs/author1.png",
      },
      readTime: "4 Min Read",
    },
    {
      id: 3,
      image: "/images/blogs/blog3.png",
      category: "Design & UI/UX",
      categoryColor: "bg-[#FEF3C7] border-[#FCD34D] text-[#F59E0B]",
      date: "April 2, 2025",
      title: "UI/UX Principles That Boost User Engagement",
      excerpt:
        "Learn how great UI/UX can increase engagement, retention, and user satisfaction with real-world design examples.",
      author: {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        image: "/images/blogs/author3.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 4,
      image: "/images/blogs/blog4.png",
      category: "Business & Startup Growth",
      categoryColor: "bg-[#DCFCE7] border-[#86EFAC] text-[#22C55E]",
      date: "May 10, 2025",
      title: "E-Commerce Trends in 2025: What You Need to Know",
      excerpt:
        "Discover how AI personalization, voice search, and AR/VR are shaping the future of online shopping.",
      author: {
        name: "Wade Warren",
        role: "E-Commerce Strategist",
        image: "/images/blogs/author4.png",
      },
      readTime: "7 Min Read",
    },
    {
      id: 5,
      image: "/images/blogs/blog5.png",
      category: "Web Development",
      categoryColor: "bg-[#E0F2FE] border-[#7DD3FC] text-[#0284C7]",
      date: "June 15, 2025",
      title: "The Best Web Development Tools of 2025",
      excerpt:
        "From AI-based code assistants to the latest front-end frameworks, see what tools developers are loving this year.",
      author: {
        name: "Jenny Wilson",
        role: "Tech Reviewer",
        image: "/images/blogs/author5.png",
      },
      readTime: "5 Min Read",
    },
    {
      id: 6,
      image: "/images/blogs/blog6.png",
      category: "Web Development",
      categoryColor: "bg-[#FEE2E2] border-[#FCA5A5] text-[#EF4444]",
      date: "July 1, 2025",
      title: "How to Improve Website Speed and Core Web Vitals",
      excerpt:
        "Get actionable tips for improving page load times, reducing layout shifts, and optimizing assets.",
      author: {
        name: "Bessie Cooper",
        role: "Performance Engineer",
        image: "/images/blogs/author6.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 7,
      image: "/images/blogs/blog4.png",
      category: "Digital Marketing",
      categoryColor: "bg-[#F3E8FF] border-[#C4B5FD] text-[#8B5CF6]",
      date: "July 5, 2025",
      title: "Social Media Strategies for 2025",
      excerpt:
        "New platforms, new rules. Learn how to dominate social media with AI-assisted content and analytics.",
      author: {
        name: "Leslie Alexander",
        role: "Digital Marketer",
        image: "/images/blogs/author2.png",
      },
      readTime: "5 Min Read",
    },
    {
      id: 8,
      image: "/images/blogs/blog5.png",
      category: "Design & UI/UX",
      categoryColor: "bg-[#FEF3C7] border-[#FCD34D] text-[#F59E0B]",
      date: "July 10, 2025",
      title: "Typography Matters: Fonts That Convert",
      excerpt:
        "Choosing the right typeface can be a game-changer for engagement. Here's how to get it right.",
      author: {
        name: "Albert Flores",
        role: "UI Designer",
        image: "/images/blogs/author4.png",
      },
      readTime: "4 Min Read",
    },
    {
      id: 9,
      image: "/images/blogs/blog6.png",
      category: "Business & Startup Growth",
      categoryColor: "bg-[#DCFCE7] border-[#86EFAC] text-[#22C55E]",
      date: "July 15, 2025",
      title: "How Startups Can Leverage Data in 2025",
      excerpt:
        "Harnessing real-time data is crucial for scaling. Learn how to turn metrics into momentum.",
      author: {
        name: "Guy Hawkins",
        role: "Startup Advisor",
        image: "/images/blogs/author6.png",
      },
      readTime: "7 Min Read",
    },
    {
      id: 10,
      image: "/images/blogs/blog1.png",
      category: "Case Studies & Success Stories",
      categoryColor: "bg-[#E0E7FF] border-[#A5B4FC] text-[#4F46E5]",
      date: "August 1, 2025",
      title: "How We Grew Our SaaS Revenue 10x in One Year",
      excerpt:
        "Behind-the-scenes of a SaaS company's rapid growth story, fueled by strategic decisions.",
      author: {
        name: "Floyd Miles",
        role: "CEO & Founder",
        image: "/images/blogs/author1.png",
      },
      readTime: "8 Min Read",
    },
    {
      id: 14,
      image: "/images/blogs/blog2.png",
      category: "Digital Marketing",
      categoryColor: "bg-[#F3E8FF] border-[#C4B5FD] text-[#8B5CF6]",
      date: "March 11, 2025",
      title: "SEO in 2025: What You Need to Know",
      excerpt:
        "Explore the evolving algorithms, voice search trends, and what it takes to rank in 2025.",
      author: {
        name: "Annette Black",
        role: "SEO Specialist",
        image: "/images/blogs/author1.png",
      },
      readTime: "5 Min Read",
    },
    {
      id: 15,
      image: "/images/blogs/blog3.png",
      category: "Web Development",
      categoryColor: "bg-[#CFFAFE] border-[#67E8F9] text-[#06B6D4]",
      date: "March 14, 2025",
      title: "Progressive Web Apps: Are They the Future?",
      excerpt:
        "Learn how PWAs combine the best of web and mobile to deliver fast, offline-first experiences.",
      author: {
        name: "Ronald Richards",
        role: "Web Developer",
        image: "/images/blogs/author2.png",
      },
      readTime: "7 Min Read",
    },
    {
      id: 16,
      image: "/images/blogs/blog4.png",
      category: "Creative Inspiration",
      categoryColor: "bg-[#E0F2FE] border-[#7DD3FC] text-[#0284C7]",
      date: "March 17, 2025",
      title: "Design Thinking for Daily Life",
      excerpt:
        "Use design principles to improve problem-solving, planning, and even communication.",
      author: {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        image: "/images/blogs/author3.png",
      },
      readTime: "5 Min Read",
    },
    {
      id: 17,
      image: "/images/blogs/blog5.png",
      category: "Case Studies & Success Stories",
      categoryColor: "bg-[#FEF3C7] border-[#FCD34D] text-[#F59E0B]",
      date: "March 20, 2025",
      title: "The Rebrand That Tripled Revenue",
      excerpt:
        "See how a complete brand overhaul helped a mid-tier SaaS company skyrocket growth.",
      author: {
        name: "Wade Warren",
        role: "E-Commerce Strategist",
        image: "/images/blogs/author4.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 18,
      image: "/images/blogs/blog6.png",
      category: "UI/UX Design",
      categoryColor: "bg-[#FEF3C7] border-[#FCD34D] text-[#F59E0B]",
      date: "March 23, 2025",
      title: "Mobile UX Trends to Watch",
      excerpt:
        "Dive into the latest mobile-first design patterns and UI shifts in 2025.",
      author: {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        image: "/images/blogs/author3.png",
      },
      readTime: "5 Min Read",
    },
    {
      id: 19,
      image: "/images/blogs/blog1.png",
      category: "Business & Startup Growth",
      categoryColor: "bg-[#DCFCE7] border-[#86EFAC] text-[#22C55E]",
      date: "March 26, 2025",
      title: "How to Build a Winning SaaS Funnel",
      excerpt:
        "Turn free trial users into loyal subscribers with these SaaS funnel strategies.",
      author: {
        name: "Wade Warren",
        role: "E-Commerce Strategist",
        image: "/images/blogs/author4.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 20,
      image: "/images/blogs/blog2.png",
      category: "Digital Marketing",
      categoryColor: "bg-[#F3E8FF] border-[#C4B5FD] text-[#8B5CF6]",
      date: "March 29, 2025",
      title: "Influencer Campaigns That Actually Work",
      excerpt:
        "Analyze real-life influencer campaigns and what made them go viral.",
      author: {
        name: "Jenny Wilson",
        role: "Tech Reviewer",
        image: "/images/blogs/author5.png",
      },
      readTime: "4 Min Read",
    },
    {
      id: 21,
      image: "/images/blogs/blog3.png",
      category: "Creative Inspiration",
      categoryColor: "bg-[#E0F2FE] border-[#7DD3FC] text-[#0284C7]",
      date: "April 1, 2025",
      title: "Mood Boards: Your Secret Creative Tool",
      excerpt:
        "How building visual references can streamline design and align your team.",
      author: {
        name: "Annette Black",
        role: "SEO Specialist",
        image: "/images/blogs/author1.png",
      },
      readTime: "5 Min Read",
    },
    {
      id: 22,
      image: "/images/blogs/blog4.png",
      category: "Web Development",
      categoryColor: "bg-[#CFFAFE] border-[#67E8F9] text-[#06B6D4]",
      date: "April 4, 2025",
      title: "Optimizing Performance in React 19",
      excerpt:
        "Explore the new features and best practices for a faster React experience.",
      author: {
        name: "Ronald Richards",
        role: "Web Developer",
        image: "/images/blogs/author2.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 23,
      image: "/images/blogs/blog5.png",
      category: "Business & Startup Growth",
      categoryColor: "bg-[#DCFCE7] border-[#86EFAC] text-[#22C55E]",
      date: "April 7, 2025",
      title: "Bootstrapping vs. Raising Capital",
      excerpt:
        "Weigh the pros and cons of self-funding versus investor-backed growth.",
      author: {
        name: "Wade Warren",
        role: "E-Commerce Strategist",
        image: "/images/blogs/author4.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 24,
      image: "/images/blogs/blog6.png",
      category: "Web Development",
      categoryColor: "bg-[#CFFAFE] border-[#67E8F9] text-[#06B6D4]",
      date: "March 29, 2025",
      title: "Server Components in Next.js: What You Need to Know",
      excerpt:
        "A beginner-friendly guide to understanding and using the new Server Components in Next.js.",
      author: {
        name: "Ronald Richards",
        role: "Web Developer",
        image: "/images/blogs/author2.png",
      },
      readTime: "7 Min Read",
    },
    {
      id: 25,
      image: "/images/blogs/blog1.png",
      category: "UI/UX Design",
      categoryColor: "bg-[#FEF3C7] border-[#FCD34D] text-[#F59E0B]",
      date: "April 1, 2025",
      title: "Color Psychology in UX Design",
      excerpt:
        "Learn how color choices can influence user emotions and decision-making.",
      author: {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        image: "/images/blogs/author3.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 26,
      image: "/images/blogs/blog2.png",
      category: "Business & Startup Growth",
      categoryColor: "bg-[#DCFCE7] border-[#86EFAC] text-[#22C55E]",
      date: "April 4, 2025",
      title: "Product-Market Fit: How to Find It and Keep It",
      excerpt:
        "The key signs of product-market fit and strategies to retain it during scaling.",
      author: {
        name: "Wade Warren",
        role: "E-Commerce Strategist",
        image: "/images/blogs/author4.png",
      },
      readTime: "5 Min Read",
    },
    {
      id: 27,
      image: "/images/blogs/blog3.png",
      category: "Creative Inspiration",
      categoryColor: "bg-[#E0F2FE] border-[#7DD3FC] text-[#0284C7]",
      date: "April 7, 2025",
      title: "The Art of Storytelling in Design",
      excerpt: "How great storytelling can elevate your visual and UX design.",
      author: {
        name: "Jenny Wilson",
        role: "Tech Reviewer",
        image: "/images/blogs/author5.png",
      },
      readTime: "4 Min Read",
    },
    {
      id: 28,
      image: "/images/blogs/blog4.png",
      category: "Digital Marketing",
      categoryColor: "bg-[#F3E8FF] border-[#C4B5FD] text-[#8B5CF6]",
      date: "April 10, 2025",
      title: "Influencer Marketing Trends in 2025",
      excerpt:
        "Explore the platforms, strategies, and metrics driving influencer ROI this year.",
      author: {
        name: "Annette Black",
        role: "SEO Specialist",
        image: "/images/blogs/author1.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 29,
      image: "/images/blogs/blog5.png",
      category: "Case Studies & Success Stories",
      categoryColor: "bg-[#FEF3C7] border-[#FCD34D] text-[#F59E0B]",
      date: "April 13, 2025",
      title: "How a Local Brand Went Global in 6 Months",
      excerpt:
        "The marketing, design, and logistics that made a local business an international hit.",
      author: {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        image: "/images/blogs/author3.png",
      },
      readTime: "6 Min Read",
    },
    {
      id: 30,
      image: "/images/blogs/blog6.png",
      category: "Web Development",
      categoryColor: "bg-[#CFFAFE] border-[#67E8F9] text-[#06B6D4]",
      date: "April 16, 2025",
      title: "5 Web Performance Metrics Every Dev Should Monitor",
      excerpt:
        "Stay ahead of the curve with the most critical speed and usability indicators.",
      author: {
        name: "Ronald Richards",
        role: "Web Developer",
        image: "/images/blogs/author2.png",
      },
      readTime: "7 Min Read",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((item) => item.category === selectedCategory);

  return (
    <div className="container md:my-14 my-12">
      <h1 className="text-2xl font-bold text-[#3F3F46] mt-6 text-center">
        News, insights and more
      </h1>
      <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center">
        Stay updated with the latest trends, tips, and technologies in <br />
        web development and design.
      </p>
      {/* Category Filters */}
      <div className="my-10 flex justify-center flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`border cursor-pointer text-sm rounded-3xl px-6 py-2 font-medium transition-all duration-300 ease-in-out ${
              selectedCategory === cat
                ? "text-[#fff] bg-[#3B82F6] border-[#3B82F6]"
                : "text-[#52525B] border-[#71717A] hover:text-[#3B82F6] hover:border-[#3B82F6]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
        {filteredData?.slice(0, 6).map((post) => (
          <div
            key={post.id}
            className="border group cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 border-[#E4E4E7] bg-white p-4 rounded-2xl"
          >
            <Image
              className="rounded-2xl shadow-lg"
              src={post.image}
              alt={post.title}
              height={240}
              width={500}
            />
            <div className="mt-6 flex justify-between items-center">
              <div
                className={`border rounded-[99px] w-fit px-3 py-1.5 ${post.categoryColor}`}
              >
                <p className="text-sm font-medium">{post.category}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#F4F4F5] rounded-lg flex justify-center items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                  >
                    <path
                      d="M7.99967 1.33301C11.6817 1.33301 14.6663 4.31767 14.6663 7.99967C14.6663 11.6817 11.6817 14.6663 7.99967 14.6663C4.31767 14.6663 1.33301 11.6817 1.33301 7.99967C1.33301 4.31767 4.31767 1.33301 7.99967 1.33301ZM7.99967 3.99967C8.16296 3.9997 8.32057 4.05965 8.44259 4.16815C8.56461 4.27666 8.64257 4.42617 8.66167 4.58834L8.66634 4.66634V7.72367L10.471 9.52834C10.5906 9.64831 10.66 9.8093 10.6652 9.9786C10.6703 10.1479 10.6109 10.3128 10.4988 10.4399C10.3868 10.5669 10.2306 10.6465 10.062 10.6626C9.89341 10.6787 9.725 10.6299 9.59101 10.5263L9.52834 10.471L7.52834 8.47101C7.42473 8.36731 7.35818 8.23234 7.33901 8.08701L7.33301 7.99967V4.66634C7.33301 4.48953 7.40325 4.31996 7.52827 4.19494C7.65329 4.06991 7.82286 3.99967 7.99967 3.99967Z"
                      fill="#71717A"
                    />
                  </svg>
                </div>
                <p className="text-[#71717A] text-[16px] font-medium">
                  {post.date}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-[#27272A] group-hover:text-[#3B82F6] font-bold text-2xl">
                {post.title}
              </h1>
              <p className="mt-6 text-[#71717A] text-[16px] font-medium">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    className="rounded-full size-12"
                    src={post.author.image}
                    alt={post.author.name}
                    height={48}
                    width={48}
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#52525B]">
                      {post.author.name}
                    </h4>
                    <p className="font-medium text-sm text-[#71717A]">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <div className="bg-[#F4F4F5] px-4 py-2 rounded-lg">
                  <p className="text-[#71717A] text-sm font-medium">
                    {post.readTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center items-center">
        <div className="flex items-center space-x-4">
          <div className="border bg-[#fff] hover:bg-[#3B82F6] cursor-pointer hover:text-[#fff] duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">1</p>
          </div>
          <div className="border bg-[#fff] hover:bg-[#3B82F6] cursor-pointer hover:text-[#fff] duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">2</p>
          </div>
          <div className="border bg-[#fff] hover:bg-[#3B82F6] cursor-pointer hover:text-[#fff] duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">3</p>
          </div>
          <div className="border bg-[#fff] hover:bg-[#3B82F6] cursor-pointer hover:text-[#fff] duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">4</p>
          </div>
          <div className="border bg-[#fff] hover:bg-[#3B82F6] cursor-pointer hover:text-[#fff] duration-300 transition-all ease-in-out text-[#71717A] border-[#D4D4D8] rounded-[6px] size-10 flex justify-center items-center">
            <p className=" text-lg font-medium">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogGrid;
