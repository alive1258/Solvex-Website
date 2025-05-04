import Image from "next/image";
import React from "react";

const CareerGallery = () => {
  return (
    <div className="py-14  overflow-hidden">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 relative container ">
        {/* section 1  */}
        <div
          className="absolute rounded-full opacity-50 blur-[175px] z-0 "
          style={{
            width: "364px",
            height: "364px",
            left: "140px",
            top: "20px",
            backgroundColor: "#84CC16",
          }}
        ></div>
        {/* Fuchsia Glow - Right Side */}
        <div
          className="absolute rounded-full opacity-50 blur-[175px] z-0"
          style={{
            width: "364px",
            height: "364px",
            right: "140px",
            top: "20px",
            backgroundColor: "#D946EF",
          }}
        ></div>

        <div className="grid-cols-2 grid gap-6 z-50 overflow-hidden">
          <Image
            src="/images/career/career6.png"
            alt="Career Image 3"
            width={500}
            height={200}
            className="w-full h-full max-h-[268px] object-cover rounded-lg"
          />
          <div className="row-span-2">
            <Image
              src="/images/career/career2.png"
              alt="Career Image 3"
              width={500}
              height={200}
              className="w-full h-full max-h-[560px] object-cover rounded-lg"
            />
          </div>

          <Image
            src="/images/career/career1.png"
            alt="Career Image 3"
            width={500}
            height={200}
            className="w-full h-full max-h-[268px] object-cover rounded-lg"
          />
        </div>
        {/* section 2  */}
        <div className="grid-cols-2 grid  gap-6 w-full z-50">
          <div className="col-span-2 ">
            <Image
              src="/images/career/career3.png"
              alt="Career Image 3"
              width={500}
              height={200}
              className="w-full max-h-[296px] h-full object-cover rounded-lg"
            />
          </div>
          <Image
            src="/images/career/career4.png"
            alt="Career Image 3"
            width={500}
            height={200}
            className="w-full h-full max-h-[268px] object-cover rounded-lg"
          />

          <Image
            src="/images/career/career5.png"
            alt="Career Image 3"
            width={500}
            height={200}
            className="w-full h-full max-h-[268px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerGallery;
