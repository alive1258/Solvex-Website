import BadgeLabel from "@/components/UI/BadgeLabel/BadgeLabel";
import Image from "next/image";
import React from "react";

const DesignProcess = () => {
  const features = [
    {
      id: 1,
      main_title: "Wireframing & Prototyping",
      steps: [
        {
          title: "Homepage",
          description: "Focus on featured products, new arrivals, and deals.",
        },
        {
          title: "Category Pages",
          description: "Intuitive filter systems — price, brand, and ratings.",
        },
        {
          title: "Product Pages",
          description:
            "High-res images, detailed descriptions, and “Add to Cart” CTAs.",
        },
        {
          title: "Checkout Flow",
          description: "3-step checkout process for speed and simplicity.",
        },
      ],
      tools: [
        { name: "Figma", icon: "/images/portfolio/figma.svg" },
        { name: "Adobe XD", icon: "/images/portfolio/adobe.svg" },
      ],
      note: "Make it dynamic with a 3-card ID use",
      image: "/images/portfolio/wireframming.png",
    },
    {
      id: 2,
      main_title: "UI/UX Design",
      steps: [
        {
          title: "Color Palette",
          description:
            "Dark blue and electric yellow — conveying tech innovation.",
        },
        {
          title: "Typography",
          description:
            "Futuristic fonts like Montserrat paired with sans-serif for readability.",
        },
        {
          title: "Microinteractions",
          description:
            "Added hover effects on buttons, animations for loading screens, and smooth scrolling.",
        },
        {
          title: "Product Cards",
          description:
            "Clean grids with quick-view options and wishlist buttons.",
        },
      ],
      tools: [
        { name: "Figma", icon: "/images/portfolio/figma.svg" },
        { name: "Adobe XD", icon: "/images/portfolio/adobe.svg" },
      ],
      note: "Keep everything pixel-perfect",
      image: "/images/portfolio/uiux.png",
    },
    {
      id: 3,
      main_title: "Development & Integration",
      steps: [
        {
          title: "Platform",
          description: "Built on Shopify for flexibility and scalability.",
        },
        {
          title: "Payment Integration",
          description:
            "Integrated Stripe, PayPal, and Apple Pay for seamless transactions.",
        },
        {
          title: "Speed Optimization",
          description:
            "Used lazy loading, compressed images, and clean code to achieve a 1.2s page load time.",
        },
        {
          title: "SEO",
          description:
            "Implemented meta tags, structured data, and optimized product descriptions.",
        },
      ],
      tools: [
        { name: "HTML", icon: "/images/portfolio/htmlIcon.svg" },
        { name: "Css3", icon: "/images/portfolio/css3Icon.svg" },
        { name: "Javascript", icon: "/images/portfolio/javascriptIcon.svg" },
      ],
      note: "Mobile-first is preferred",
      image: "/images/portfolio/intergration.png",
    },
  ];

  // Collect unique tools from all features

  return (
    <div className="container mt-24">
      <BadgeLabel text="design process " />
      <h1 className="text-2xl font-bold text-primary-base mt-6 text-center">
        From Concept to Conversion — A Strategic Design Journey
      </h1>
      <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center w-full max-w-[420px] mx-auto">
        Our design process blends creativity, data, and user insights — crafting
        a seamless shopping experience for TechStore Inc.’s e-commerce platform.
      </p>

      <div className="mt-16 space-y-24">
        {features.map((feature, idx) => {
          return (
            <div
              key={feature.id}
              className={`grid lg:grid-cols-2 grid-cols-1 gap-10 items-center`}
            >
              {/* Content Side */}
              <div className={`${idx % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
                <h1 className="text-2xl font-bold text-primary-base">
                  {feature.main_title}
                </h1>

                {feature.steps.map((step, i) => (
                  <div key={i} className="flex space-x-4 mt-6">
                    <div className="mt-2">
                      {/* Dot Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="24"
                        viewBox="0 0 16 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2103_2835)">
                          <circle
                            cx="2.14369"
                            cy="21.4286"
                            r="10.0714"
                            fill="#3B82F6"
                          />
                          <circle
                            cx="12.108"
                            cy="0.964425"
                            r="11.0357"
                            fill="#3B82F6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2103_2835">
                            <rect width="15.4286" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[20px] font-bold text-[#71717A]">
                        {step.title}
                      </h5>
                      <p className="text-lg font-medium text-primary-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Tools */}
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #3B82F6 0.04%, rgba(255, 255, 255, 0.00) 98.09%)",
                  }}
                  className="mt-12"
                >
                  <h5 className="text-[20px] font-medium text-white px-4 py-2">
                    Tools Used:
                  </h5>
                </div>

                <div className="mt-6 flex flex-wrap gap-6 items-center">
                  {feature.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-6 h-6"
                      />
                      <span className="text-primary-base text-lg font-medium">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className={`${idx % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
                <Image
                  className="object-cover w-full h-full max-h-[550px] rounded-2xl"
                  src={feature.image}
                  alt={feature.main_title}
                  width={500}
                  height={400}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-24 grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="col-span-2">
          <Image
            className="object-cover w-full h-full md:min-h-[480px] rounded-2xl"
            src="/images/portfolio/festure1.png"
            alt="festure1.png"
            width={500}
            height={400}
          />
        </div>

        <div className="col-span-2 grid lg:grid-cols-2 grid-cols-1 gap-10">
          <Image
            className="object-cover w-full h-full md:max-h-[480px] rounded-2xl"
            src="/images/portfolio/festure1.png"
            alt="festure1.png"
            width={500}
            height={400}
          />
          <Image
            className="object-cover w-full h-full md:min-h-[480px] rounded-2xl"
            src="/images/portfolio/festure1.png"
            alt="festure1.png"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
