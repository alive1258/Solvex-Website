import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Button from "../../Button/Button";
import Image from "next/image";

const TrustedBrands = ({ status = false }) => {
  return (
    <div className="bg-[#F4F4F5]  relative overflow-hidden">
      <div
        className={`absolute ${status === true ? "md:block" : "hidden"}`}
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

      <div className="container  md:px-32 md:flex md:py-0  py-12">
        <div className="md:flex md:space-x-[144px] ">
          <div className="flex items-center">
            <div className="md:max-w-[456px] ">
              <p className="text-[#3B82F6] text-sm md:text-start text-center font-medium">
                We Work With the Best
              </p>
              <h1 className="md:text-start text-center text-tertiary-base mt-6 text-2xl font-bold">
                Trusted by Leading Brands & Businesses
              </h1>
              <p className="text-[#71717A] md:text-start text-center mt-6 text-[16px] font-medium">
                We’ve had the privilege of working with some of the world’s most
                innovative companies, helping them scale with cutting-edge
                digital solutions.
              </p>
              <div className="md:mt-14 my-14 md:block flex justify-center  uppercase">
                <Button content="Get a Free Consultation" />
              </div>
            </div>
          </div>
          <div className="flex flex-col  space-y-3">
            {/* card 1  */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#FFF]  w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand1.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  CloudSync{" "}
                </h5>
              </div>
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand1.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  CloudSync{" "}
                </h5>
              </div>
            </div>
            {/* card 2  */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand2.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  CodeCrafters{" "}
                </h5>
              </div>
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand2.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  CodeCrafters{" "}
                </h5>
              </div>
            </div>
            {/* card 3  */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand3.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  TechStore{" "}
                </h5>
              </div>
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand4.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  CloudSync
                </h5>
              </div>
            </div>
            {/* card 4  */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand5.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  TrendyWear
                </h5>
              </div>
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand6.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  TrendyWear
                </h5>
              </div>
            </div>
            {/* card 5  */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand2.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  TechStore{" "}
                </h5>
              </div>
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand1.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  CodeCrafters
                </h5>
              </div>
            </div>
            {/* card 6  */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand4.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  HealthTrack
                </h5>
              </div>
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand6.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  TechStore{" "}
                </h5>
              </div>
            </div>
            {/* card 7  */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand1.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  TechStore{" "}
                </h5>
              </div>
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand2.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  TechStore{" "}
                </h5>
              </div>
            </div>
            {/* card 8  */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand4.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  TechStore{" "}
                </h5>
              </div>
              <div className="bg-[#FFF] w-full  max-w-[224px] rounded-lg flex items-center space-x-2 border border-border-base p-4">
                <Image
                  className=""
                  src="/images/brands/brand6.png"
                  alt="brand1.png"
                  height={32}
                  width={32}
                />
                <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                  HealthTrack
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
