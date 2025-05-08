"use client";
import React, { useState } from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import PortfolioCard from "./PortfolioCard";

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
      <AnimatedText
        lines={[" Our Work Speaks for Itself"]}
        className="text-2xl font-bold text-primary-base mt-6 text-center w-full md:max-w-[450px] max-w-[230px] mx-auto"
      />
      <AnimatedParagraph
        text="We help brands elevate their digital presence through cutting- edge
        design and technology."
        className="text-center w-full max-w-[550px] mx-auto mt-6 text-[16px] font-medium text-primary-base"
        once={false}
        duration={0.8}
        yOffset={100}
      />

      {/* Category Filters */}
      <div className="my-10 flex justify-center flex-wrap gap-3">
        {categories.map((cat) => (
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

      {/* Case Studies */}
      <div className=" ">
        {filteredData?.slice(0, 5)?.map((item, idx) => (
          <PortfolioCard
            item={item}
            idx={idx}
            key={`${item.id}-${selectedCategory}`}
            delay={idx * 0.3}
          />
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
        <Button content="View More Case Studies" />
      </motion.div>
    </div>
  );
};

export default Portfolio;
