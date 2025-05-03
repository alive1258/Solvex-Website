"use client";
import React, { useState } from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Button from "../../Button/Button";

const categories = [
  "All",
  "Web Design",
  "Branding",
  "Marketing",
  "SEO",
  "Mobile Apps",
];

const caseStudiesData = [
  {
    id: 1,
    company: "TechStore Inc.",
    title: "E-Commerce Website for TechStore",
    description:
      "TechStore, a leading electronics retailer, needed a modern e-commerce website to improve their online presence and boost sales.",
    image: "/images/caseStudies/case1.png",
    logo: "/images/caseStudies/logo1.png",
    tags: ["Web Design"],
    category: "Web Design",
  },
  {
    id: 2,
    company: "GreenLeaf Branding",
    title: "Brand Identity for Eco Startup",
    description:
      "We helped GreenLeaf build a strong brand identity including logo, colors, and typography.",
    image: "/images/caseStudies/case2.png",
    logo: "/images/caseStudies/logo2.png",
    tags: ["Branding"],
    category: "Branding",
  },
  {
    id: 3,
    company: "FinVault",
    title: "Secure Fintech App Development",
    description:
      "FinVault needed a secure mobile app for managing digital wallets.",
    image: "/images/caseStudies/case3.png",
    logo: "/images/caseStudies/logo3.png",
    tags: ["Mobile Apps"],
    category: "Branding",
  },
  {
    id: 4,
    company: "LegalEase",
    title: "Document Automation Platform",
    description: "Legal document creation tool with e-signature and templates.",
    image: "/images/caseStudies/case10.png",
    logo: "/images/caseStudies/logo1.png",
    tags: ["Branding"],
    category: "Branding",
  },
  {
    id: 5,
    company: "UrbanSpace",
    title: "Real Estate Listing Website",
    description:
      "Feature-rich platform for real estate listings with map and filters.",
    image: "/images/caseStudies/case5.png",
    logo: "/images/caseStudies/logo2.png",
    tags: ["SEO"],
    category: "Marketing",
  },
  {
    id: 6,
    company: "Bloom Cosmetics",
    title: "Product Launch Campaign Website",
    description:
      "Marketing site with product previews, video stories, and influencers.",
    image: "/images/caseStudies/case11.png",
    logo: "/images/caseStudies/logo2.png",
    tags: ["Marketing"],
    category: "Marketing",
  },
  {
    id: 7,

    company: "EduSpark",
    title: "E-Learning Platform for Students",
    description:
      "E-learning platform for quizzes, live classes, and performance analytics.",
    image: "/images/caseStudies/case1.png",
    logo: "/images/caseStudies/logo3.png",
    tags: ["Mobile Apps", "Branding"],
    category: "Branding",
  },
  {
    id: 8,

    company: "Cafe Aroma",
    title: "Digital Menu & Ordering System",
    description:
      "We built an in-house ordering system with contactless interface.",
    image: "/images/caseStudies/case7.png",
    logo: "/images/caseStudies/logo1.png",
    tags: ["Mobile Apps"],
    category: "Mobile Apps",
  },
  {
    id: 9,
    company: "QuickDelivery",
    title: "Logistics Tracking App",
    description: "Mobile app for real-time GPS tracking and delivery updates.",
    image: "/images/caseStudies/case9.png",
    logo: "/images/caseStudies/logo3.png",
    tags: ["Mobile Apps"],
    category: "SEO",
  },
  {
    id: 10,

    company: "HealthTrack",
    title: "Health Monitoring Dashboard UI",
    description:
      "We designed a fitness dashboard for real-time health tracking.",
    image: "/images/caseStudies/case4.png",
    logo: "/images/caseStudies/logo1.png",
    tags: ["Web Design"],
    category: "Web Design",
  },
  {
    id: 11,

    company: "PixelWorks Studio",
    title: "Portfolio Website for Creatives",
    description:
      "A stunning portfolio site to showcase creative works and VFX.",
    image: "/images/caseStudies/case8.png",
    logo: "/images/caseStudies/logo2.png",
    tags: ["Web Design"],
    category: "Web Design",
  },
  {
    id: 12,
    company: "Wanderly Tours",
    title: "Travel Booking Website Redesign",
    description:
      "We redesigned Wanderly’s site with focus on UX and conversion.",
    image: "/images/caseStudies/case13.png",
    logo: "/images/caseStudies/logo1.png",
    tags: ["Web Design"],
    category: "Web Design",
  },
  {
    id: 13,

    company: "Nexa Analytics",
    title: "Big Data Dashboard Interface",
    description:
      "Real-time data visualizations from massive analytics datasets.",
    image: "/images/caseStudies/case12.png",
    logo: "/images/caseStudies/logo3.png",
    tags: ["SEO"],
    category: "SEO",
  },
  {
    id: 14,
    company: "SmartBuild Co.",
    title: "Construction Project Tracker",
    description: "Construction site management dashboard with task tracking.",
    image: "/images/caseStudies/case14.png",
    logo: "/images/caseStudies/logo2.png",
    tags: ["SEO", "Mobile Apps"],
    category: "Mobile Apps",
  },
  {
    id: 15,
    company: "StyleHive",
    title: "Fashion Marketplace Platform",
    description: "Multi-vendor marketplace with payment and order management.",
    image: "/images/caseStudies/case15.png",
    logo: "/images/caseStudies/logo3.png",
    tags: ["Mobile Apps", "SEO"],
    category: "Mobile Apps",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? caseStudiesData
      : caseStudiesData.filter((item) => item.category === selectedCategory);

  return (
    <div className="container md:my-14 my-20">
      <BadgeLabel text="Portfolio" />
      <h1 className="text-2xl font-bold text-[#3F3F46] mt-6 text-center">
        Our Work Speaks for Itself
      </h1>
      <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center w-full max-w-[420px] mx-auto">
        We help brands elevate their digital presence through cutting- edge
        design and technology.
      </p>

      {/* Category Filters */}
      <div className="my-10 flex justify-center flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`border cursor-pointer rounded-3xl px-6 py-2 font-medium transition-all duration-300 ease-in-out ${
              selectedCategory === cat
                ? "text-[#fff] bg-[#3B82F6] border-[#3B82F6]"
                : "text-[#52525B] border-[#71717A] hover:text-[#3B82F6] hover:border-[#3B82F6]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies */}
      <div className=" ">
        {filteredData?.slice(0, 5)?.map((item, idx) => (
          <div
            key={item.id}
            className="bg-[#F5F5F4] p-6 my-8 grid md:grid-cols-2 grid-cols-1 gap-8 rounded-2xl"
          >
            {/* IMAGE SIDE */}
            <div className={`${idx % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
              <Image
                className="rounded-2xl w-full h-full"
                src={item?.image}
                alt={item?.company}
                height={384}
                width={500}
              />
            </div>

            {/* TEXT SIDE */}
            <div className={`${idx % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
              <div className="flex items-center gap-x-4 mt-8">
                <Image
                  className="size-10"
                  src={item?.logo}
                  alt={item?.logo}
                  height={40}
                  width={40}
                />
                <h4 className="text-[#27272A] md:text-2xl text-[20px] font-bold">
                  {item?.company}
                </h4>
              </div>
              <h1 className="text-[#3F3F46] md:text-[32px] text-2xl mt-10 font-bold">
                {item?.title}
              </h1>
              <p className="text-[#71717A] text-[16px] mt-6 font-medium">
                {item?.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {item?.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="border cursor-pointer transition-all duration-300 ease-in-out text-[#52525B] hover:text-[#3B82F6] rounded-3xl hover:border-[#3B82F6] border-[#71717A] px-4 py-2 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-x-2 mt-9 border-b hover:border-[#3B82F6] border-[#71717A] w-fit">
                <p className="text-[#71717A] uppercase font-bold cursor-pointer text-sm hover:text-[#3B82F6]">
                  View Live Project
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="cursor-pointer"
                >
                  <path
                    d="M14 16L18 12M18 12L14 8M18 12H6"
                    className="stroke-[#71717A] hover:stroke-[#3B82F6] transition-all duration-300 ease-in-out"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex justify-center uppercase">
        <Button content="View More Case Studies" />
      </div>
    </div>
  );
};

export default Portfolio;
