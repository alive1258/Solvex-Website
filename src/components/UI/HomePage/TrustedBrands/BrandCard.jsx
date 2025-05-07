import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const BrandCard = () => {
  const brands = [
    { name: "CloudSync", img: "/images/brands/brand1.png" },
    { name: "CodeCrafters", img: "/images/brands/brand2.png" },
    { name: "TechStore", img: "/images/brands/brand3.png" },
    { name: "TrendyWear", img: "/images/brands/brand5.png" },
    { name: "HealthTrack", img: "/images/brands/brand4.png" },
    { name: "CloudSync", img: "/images/brands/brand1.png" },
    { name: "TechStore", img: "/images/brands/brand4.png" },
    { name: "TechStore", img: "/images/brands/brand6.png" },
  ];
  const BrandCard = ({ name, img }) => (
    <div className="bg-[#FFF] w-full max-w-[224px] space-y-2.5 rounded-lg flex items-center space-x-2 border border-border-base p-4">
      <Image src={img} alt={name} height={32} width={32} />
      <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
        {name}
      </h5>
    </div>
  );
  return (
    <div>
      <div className="flex space-x-6">
        {/* Left (scrolling up) */}
        <div className="w-[240px] ">
          <Marquee direction="up" speed={100}>
            <div className="flex flex-col space-y-4">
              {brands.map((brand, index) => (
                <BrandCard key={`up-${index}`} {...brand} />
              ))}
            </div>
          </Marquee>
        </div>

        {/* Right (scrolling down) */}
        <div className="w-[240px]  ">
          <Marquee direction="down" speed={100}>
            <div className="flex flex-col space-y-4">
              {brands.map((brand, index) => (
                <BrandCard key={`down-${index}`} {...brand} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
