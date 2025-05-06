import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import React from "react";

const RelatedProduct = () => {
  return (
    <div className="mt-14 bg-[#18181B]">
      <div className="container py-16">
        <div className="md:flex items-center justify-between ">
          <h1 className="text-[32px] text-[#D4D4D8]  font-bold">
            Related Product
          </h1>
          <div className=" uppercase">
            <Button content="view all products" />
          </div>
        </div>
        <div
          className="mt-6 h-[2px] w-full"
          style={{
            background:
              "linear-gradient(90deg, #818181 -0.2%, rgba(0, 0, 0, 0.00) 101.03%)",
          }}
        ></div>

        <div className="mt-6 md:flex items-center justify-center space-x-6">
          <div className="">
            <Image
              src="/images/portfolio/related1.png"
              alt="related1"
              height={500}
              width={500}
              className="w-full h-full rounded-2xl"
            />
            <h3 className="text-[24px] hover:text-[#3B82F6] text-[#D4D4D8] font-bold mt-4">
              Social Media Marketing for TrendyWear
            </h3>
          </div>
          <div className="">
            <Image
              src="/images/portfolio/related2.png"
              alt="related1"
              height={500}
              width={500}
              className="w-full h-full rounded-2xl"
            />
            <h3 className="text-[24px] hover:text-[#3B82F6] text-[#D4D4D8] font-bold mt-4">
              SaaS Website for CloudSync
            </h3>
          </div>
          <div className="">
            <Image
              src="/images/portfolio/related3.png"
              alt="related1"
              height={500}
              width={500}
              className="w-full h-full rounded-2xl"
            />
            <h3 className="text-[24px] hover:text-[#3B82F6] text-[#D4D4D8] font-bold mt-4">
              Healthcare App for Medico+
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
