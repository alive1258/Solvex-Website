import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = [
  "/images/workGallery/workGallery1.png",
  "/images/workGallery/workGallery2.png",
  "/images/workGallery/workGallery1.png",
  "/images/workGallery/workGallery4.png",
  "/images/workGallery/workGallery3.png",
  "/images/workGallery/workGallery4.png",
  "/images/workGallery/workGallery1.png",
  "/images/workGallery/workGallery4.png",
];

const WorkGallery = () => {
  return (
    <div className="relative mt-5 ">
      <Marquee speed={90} pauseOnHover={true} direction="left">
        {images.map((src, index) => (
          <div
            key={index}
            className="border border-[#3B82F6] bg-[#DBEAFE] p-2 rounded-2xl mx-4"
          >
            <Image
              className="rounded-2xl md:w-full md:h-full h-[200px] w-[250px]"
              src={src}
              alt={`workGallery${index + 1}`}
              height={319}
              width={500}
            />
          </div>
        ))}
      </Marquee>

      {/* Gradient overlay */}
      <div className="absolute hidden  z-50 top-0 left-0 w-full h-full md:flex justify-between pointer-events-none">
        <div className="h-full w-[250px] bg-gradient-to-r from-[#fff] from-[3%] to-transparent to-[99%]" />
        <div className="h-full w-[250px] bg-gradient-to-l from-[#fff] from-[3%] to-transparent to-[99%]" />
      </div>
    </div>
  );
};

export default WorkGallery;
