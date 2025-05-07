"use client";
import React, { useState } from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import PricingPlanCard from "./PricingPlanCard";

const PricingPlans = ({ status = false }) => {
  const categories = ["Monthly", "Yearly"];
  const pricingPlansData = [
    {
      id: 1,
      title: "Starter Plan",
      price: "499",
      des: "For small businesses and startups",
      plan_title: "What’s Included",
      plan: [
        { id: 1, plan_des1: "Custom 3-page website (Home, About, Contact)" },
        { id: 2, plan_des1: "Mobile responsive design" },
        { id: 3, plan_des1: "Basic SEO optimization" },
        { id: 4, plan_des1: "Contact form integration" },
        { id: 5, plan_des1: "Social media integration" },
        { id: 6, plan_des1: "1 round of revision" },
        { id: 7, plan_des1: "Basic loading speed optimization" },
        { id: 8, plan_des1: "Google Maps embedding" },
        { id: 9, plan_des1: "Free consultation" },
      ],
      category: "Monthly",
    },
    {
      id: 2,
      title: "Business Plan",
      price: "999",
      des: "Best for growing businesses",
      plan_title: "What’s Included",
      plan: [
        { id: 1, plan_des1: "Custom 5-page website" },
        { id: 2, plan_des1: "Mobile & tablet responsive" },
        { id: 3, plan_des1: "SEO-ready pages" },
        { id: 4, plan_des1: "Blog integration" },
        { id: 5, plan_des1: "Newsletter setup" },
        { id: 6, plan_des1: "Analytics setup" },
        { id: 7, plan_des1: "Custom icons" },
        { id: 8, plan_des1: "Live chat integration" },
        { id: 9, plan_des1: "Performance optimization" },
        { id: 10, plan_des1: "Email & chat support" },
        { id: 11, plan_des1: "2 months maintenance" },
      ],
      category: "Monthly",
    },
    {
      id: 3,
      title: "Pro Plan",
      price: "1499",
      des: "Perfect for advanced needs",
      plan_title: "What’s Included",
      plan: [
        { id: 1, plan_des1: "Custom 10-page website" },
        { id: 2, plan_des1: "Fully responsive layout" },
        { id: 3, plan_des1: "Advanced SEO setup" },
        { id: 4, plan_des1: "E-commerce integration" },
        { id: 5, plan_des1: "Blog + product showcase" },
        { id: 6, plan_des1: "Multi-language support" },
        { id: 7, plan_des1: "Admin dashboard (basic)" },
        { id: 8, plan_des1: "Database setup" },
        { id: 9, plan_des1: "3 months priority support" },
        { id: 10, plan_des1: "Domain & hosting included" },
        { id: 11, plan_des1: "Ongoing performance monitoring" },
      ],
      category: "Monthly",
    },
    {
      id: 4,
      title: "Starter Yearly",
      price: "4999",
      des: "Affordable yearly plan for starters",
      plan_title: "What’s Included",
      plan: [
        { id: 1, plan_des1: "Custom 3-page website (Home, About, Contact)" },
        { id: 2, plan_des1: "Mobile responsive design" },
        { id: 3, plan_des1: "Basic SEO optimization" },
        { id: 4, plan_des1: "Contact form integration" },
        { id: 5, plan_des1: "Social media integration" },
        { id: 6, plan_des1: "1 round of revision" },
        { id: 7, plan_des1: "Basic loading speed optimization" },
        { id: 8, plan_des1: "Google Maps embedding" },
        { id: 9, plan_des1: "Free consultation" },
        { id: 10, plan_des1: "Email support" },
        { id: 11, plan_des1: "1 year maintenance support" },
      ],
      category: "Yearly",
    },
    {
      id: 5,
      title: "Business Yearly",
      price: "9999",
      des: "Great value for medium-sized businesses",
      plan_title: "What’s Included",
      plan: [
        { id: 1, plan_des1: "Custom 5-page website" },
        { id: 2, plan_des1: "Responsive for all devices" },
        { id: 3, plan_des1: "SEO-optimized content" },
        { id: 4, plan_des1: "Blog + newsletter" },
        { id: 5, plan_des1: "Google Analytics integration" },
        { id: 6, plan_des1: "Custom illustrations" },
        { id: 7, plan_des1: "Live support chat" },
        { id: 8, plan_des1: "Speed optimized assets" },
        { id: 9, plan_des1: "Free SSL & security setup" },
        { id: 10, plan_des1: "Email + chat support" },
        { id: 11, plan_des1: "1 year maintenance & updates" },
      ],
      category: "Yearly",
    },
    {
      id: 6,
      title: "Pro Yearly",
      price: "14999",
      des: "Full-featured solution for large businesses",
      plan_title: "What’s Included",
      plan: [
        { id: 1, plan_des1: "Custom 10+ page website" },
        { id: 2, plan_des1: "Advanced responsiveness" },
        { id: 3, plan_des1: "Professional SEO tools" },
        { id: 4, plan_des1: "E-commerce + payment setup" },
        { id: 5, plan_des1: "Multi-language ready" },
        { id: 6, plan_des1: "CMS integration" },
        { id: 7, plan_des1: "Admin dashboard with analytics" },
        { id: 8, plan_des1: "Advanced database setup" },
        { id: 9, plan_des1: "Performance reports monthly" },
        { id: 10, plan_des1: "24/7 Priority support" },
        { id: 11, plan_des1: "Full-year maintenance & upgrades" },
      ],
      category: "Yearly",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Monthly");
  const filteredData = pricingPlansData?.filter(
    (item) => item.category === selectedCategory
  );
  // className={`absolute ${status === true ? "md:block" : "hidden"}`}
  return (
    <div
      className={`bg-[#FAFAFA] ${
        status === true ? "md:my-14 my-12" : "my-0"
      }  relative overflow-hidden`}
    >
      <div
        className="absolute"
        style={{
          width: "594px",
          height: "4px",
          right: "0px",
          bottom: "0px",
          background:
            "linear-gradient(85deg, #2154FF 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      ></div>
      <div
        className={`absolute ${status === true ? "md:block" : "hidden"}`}
        style={{
          width: "594px",
          height: "4px",
          left: "0px",
          top: "0px",
          background:
            " linear-gradient(85deg, rgba(255, 255, 255, 0.00) 0%, #2154FF 100%)",
        }}
      ></div>
      <div className="container py-14">
        <BadgeLabel text="Pricing Plans" />
        <AnimatedText
          lines={["Flexible Pricing Plans for Every Business"]}
          className="text-2xl font-bold text-primary-base mt-6 text-center w-full md:max-w-[450px] max-w-[230px] mx-auto"
        />
        <AnimatedParagraph
          text=" Choose a plan that fits your goals and budget. No hidden fees — <br />
          just transparent pricing."
          className="text-center w-full max-w-[550px] mx-auto mt-6 text-[16px] font-medium text-primary-base"
          once={false}
          duration={0.8}
          yOffset={100}
        />

        <div className="relative">
          <div className="flex justify-center items-center space-x-6">
            <div className="bg-[#F4F4F5] mt-32 absolute w-[182px] h-[62px]  p-2 border border-border-base rounded-xl flex items-center space-x-4">
              {categories?.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={` transition-all duration-300 ease-in-out ${
                    selectedCategory === cat
                      ? "bg-[#FFF] cursor-pointer border border-border-base rounded-lg px-4 py-2"
                      : "cursor-pointer border border-transparent "
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="md:flex md:absolute md:top-14 md:mt-0 mt-32 md:ml-60 ml-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="mt-4 md:block hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="24"
                viewBox="0 0 60 24"
                fill="none"
              >
                <path
                  d="M2.07354 9.37236C1.52275 9.33175 1.04332 9.74533 1.00271 10.2961L0.340884 19.2718C0.300272 19.8225 0.713852 20.302 1.26464 20.3426C1.81543 20.3832 2.29486 19.9696 2.33547 19.4188L2.92376 11.4405L10.9021 12.0288C11.4529 12.0694 11.9323 11.6558 11.9729 11.105C12.0135 10.5542 11.6 10.0748 11.0492 10.0342L2.07354 9.37236ZM1.24281 11.0229C6.24238 16.8184 15.195 23.3556 25.8188 23.9555C36.5434 24.561 48.6516 19.1048 59.8434 1.5373L58.1566 0.462697C47.231 17.6123 35.7314 22.512 25.9315 21.9586C16.0308 21.3996 7.54205 15.2631 2.75719 9.71646L1.24281 11.0229Z"
                  fill="url(#paint0_linear_224_71)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_224_71"
                    x1="2"
                    y1="12"
                    x2="64.9411"
                    y2="6.69"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#303030" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="35"
                viewBox="0 0 58 35"
                fill="none"
              >
                <path
                  d="M49.8154 0.52738C50.216 0.147239 50.8489 0.163859 51.2291 0.564498L57.4238 7.0933C57.804 7.49394 57.7873 8.12689 57.3867 8.50703C56.9861 8.88717 56.3531 8.87055 55.973 8.46991L50.4665 2.66653L44.6632 8.17296C44.2625 8.5531 43.6296 8.53648 43.2494 8.13584C42.8693 7.7352 42.8859 7.10225 43.2866 6.72211L49.8154 0.52738ZM51.5033 1.27905C51.3024 8.93044 48.5111 19.6586 40.6673 26.8488C32.749 34.1072 19.9221 37.5493 0.136909 31.0363L0.762272 29.1366C20.0768 35.4947 32.0803 32.0071 39.3158 25.3745C46.6258 18.6736 49.3117 8.54935 49.504 1.22656L51.5033 1.27905Z"
                  fill="url(#paint0_linear_2260_6893)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2260_6893"
                    x1="51.5358"
                    y1="2.51481"
                    x2="-0.546951"
                    y2="38.2522"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#303030" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="border animate-[floatPulse_2s_ease-in-out_infinite]  shadow-[0px_0px_20px_0px_rgba(33,84,255,0.3),0px_0px_40px_0px_rgba(156,39,176,0.1)] border-border-base rounded-3xl px-4 py-2 md:rotate-[15deg] md:block hidden    md:relative md:right-2">
              <p className="text-sm font-medium text-primary-base">
                {" "}
                35% OFF on Yearly Plan
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center  md:hidden">
            <div className="border animate-[floatPulse_2s_ease-in-out_infinite] shadow-[0px_0px_20px_0px_rgba(33,84,255,0.3),0px_0px_40px_0px_rgba(156,39,176,0.1)] border-border-base rounded-3xl px-4 py-2 ">
              <p className="text-sm font-medium text-primary-base">
                {" "}
                35% OFF on Yearly Plan
              </p>
            </div>
          </div>
        </div>
        {/*  card section */}
        <div className="md:mt-36 mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {filteredData?.map((item, index) => (
            <PricingPlanCard
              key={item.id}
              index={index}
              item={item}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
