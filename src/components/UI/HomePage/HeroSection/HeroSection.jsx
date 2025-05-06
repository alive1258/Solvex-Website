import Button from "../../Button/Button";
import WorkGallery from "../WorkGallery/WorkGallery";

const HeroSection = () => {
  return (
    <div className="mobile-hero-section-bg  md:relative  overflow-hidden">
      <div className="hero-section-bg">
        {/* Blurred Blue Effect Shape 1 */}
        <div
          style={{
            width: "600px",
            height: "116px",
            transform: "rotate(14.814deg)",
            flexShrink: 0,
            borderRadius: "600px",
            opacity: 0.3,
            background: "#3B82F6",
            filter: "blur(100px)",
          }}
          className="absolute md:block hidden top-10 -left-32"
        />

        {/* Blurred Blue Effect Shape 2 */}
        <div
          style={{
            width: "600px",
            height: "316px",
            transform: "rotate(20.582deg)",
            flexShrink: 0,
            borderRadius: "600px",
            opacity: 0.3,
            background: "#3B82F6",
            filter: "blur(100px)",
          }}
          className="md:absolute md:block hidden top-20 -left-32"
        />

        {/* Blurred Blue Effect Shape 3 */}
        <div
          style={{
            width: "600px",
            height: "616px",
            transform: "rotate(20.582deg)",
            flexShrink: 0,
            borderRadius: "600px",
            opacity: 0.3,
            background: "#3B82F6",
            filter: "blur(100px)",
          }}
          className="md:absolute md:block hidden top-28 -left-32"
        />

        {/* Main Content */}
        <div className="pt-12 container ">
          <h1 className="text-secondary-base md:text-[64px] w-full max-w-[900px] mx-auto text-[32px] font-bold uppercase text-center ">
            We Build Scalable & High- Performance Websites That Convert
          </h1>
          <p className="text-center w-full max-w-[900px] mx-auto pt-12 md:text-2xl text-[16px] font-medium text-primary-base">
            We specialize in designing and developing fast, secure, and
            user-friendly websites that drive business growth. From startups to
            enterprises, we create web solutions that make an impact.
          </p>

          <div className="py-10 flex justify-center uppercase">
            <Button content="View Our Work" />
          </div>
        </div>
        <WorkGallery />
      </div>
    </div>
  );
};

export default HeroSection;
