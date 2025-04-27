"use client";
import React, { useState } from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";

const PricingPlans = () => {
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

  return (
    <div className="bg-[#FAFAFA] md:my-14 my-12 relative overflow-hidden">
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
        className="absolute"
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
        <h1 className="text-2xl font-bold text-[#3F3F46] mt-6 text-center">
          Flexible Pricing Plans for Every Business
        </h1>
        <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center">
          Choose a plan that fits your goals and budget. No hidden fees — <br />{" "}
          just transparent pricing.
        </p>
        <div className="relative">
          <div className="flex justify-center items-center space-x-6">
            <div className="bg-[#F4F4F5] mt-32 absolute w-[182px] h-[62px]  p-2 border border-[#E4E4E7] rounded-xl flex items-center space-x-4">
              {categories?.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={` transition-all duration-300 ease-in-out ${
                    selectedCategory === cat
                      ? "bg-[#FFF] cursor-pointer border border-[#E4E4E7] rounded-lg px-4 py-2"
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
            <div className="border border-[#E4E4E7] rounded-3xl px-4 py-2 md:rotate-[15deg] md:block hidden    md:relative md:right-2">
              <p className="text-sm font-medium text-[#3F3F46]">
                {" "}
                35% OFF on Yearly Plan
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center  md:hidden">
            <div className="border border-[#E4E4E7] rounded-3xl px-4 py-2 ">
              <p className="text-sm font-medium text-[#3F3F46]">
                {" "}
                35% OFF on Yearly Plan
              </p>
            </div>
          </div>
        </div>
        {/*  card section */}
        <div className="md:mt-36 mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {filteredData?.map((item, index) => (
            <div
              key={item?.id}
              className="border border-[#D4D4D8] rounded-2xl bg-[#fff] "
            >
              <div className="bg-[#F4F4F5] rounded-t-2xl p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-[#27272A] text-2xl">
                    {item?.title}
                  </h3>
                  {index === 1 && (
                    <div className="border rounded-[99px] bg-[#DBEAFE] border-[#3B82F6] px-3 py-1.5">
                      <p className="text-[#3B82F6] text-sm font-medium">
                        Most Popular
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center ">
                  <h1 className="font-bold text-[#27272A] text-[32px]">
                    ${item?.price}
                  </h1>
                  <div className="font-medium text-[#3F3F46] text-[16px] mt-4 flex space-x-0.5">
                    <span> /</span>
                    <div className="lowercase">
                      <span>per </span>
                      {item?.category}
                    </div>
                  </div>
                </div>
                <p className="font-medium text-[#27272A] text-lg mt-6 ">
                  {item?.des}
                </p>
                <div className="mt-12 flex justify-center items-center">
                  <button
                    className={` ${
                      index === 1
                        ? "bg-gradient-to-r from-[#2154FF] to-[#5079FF] text-[#fff]"
                        : "bg-[#000]"
                    } inline-flex w-full uppercase font-medium text-[16px] cursor-pointer h-14 px-6 py-4 justify-center items-center gap-1 rounded-full   text-[#fff] hover:opacity-90 focus:ring-4 focus:outline-none`}
                  >
                    get started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className=" p-6">
                <h5 className="text-[#27272A] font-bold text-lg">
                  {item?.plan_title}
                </h5>
                <div className="mt-4 space-y-4">
                  {item?.plan?.map((pla) => (
                    <div key={pla?.id} className="flex items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                          fill="url(#paint0_linear_224_141)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_224_141"
                            x1="3"
                            y1="21"
                            x2="22.3622"
                            y2="19.3908"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#2154FF" />
                            <stop offset="1" stopColor="#5079FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <p className="text-[#3F3F46] font-medium text-[16px]">
                        {pla?.plan_des1}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
