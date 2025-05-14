import React from "react";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import Button from "../../Button/Button";
import WorkGallery from "../WorkGallery/WorkGallery";
import AnimatedText from "@/components/common/AnimatedText";
import SlideUp from "@/utils/animations/SlideUp";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mobile-hero-section-bg  md:relative  overflow-hidden">
      <div className="hero-section-bg">
        {/* BLURRED BLUE EFFECT SHAPE 1 */}
        <div className="blurred-blue-shape-1" />

        {/* BLURRED BLUE EFFECT SHAPE 2  */}
        <div className="blurred-blue-shape-2" />

        {/* START HERO  CONTENT  */}
        <div className="pt-12 container ">
          <AnimatedText
            lines={[
              "We Build Scalable & High-",
              "Performance Websites",
              "That Convert",
            ]}
            className="text-secondary-base text-center font-bold uppercase w-full max-w-[900px] mx-auto md:text-[64px] text-[28px]"
          />

          <AnimatedParagraph
            text="We specialize in designing and developing fast, secure, and user-friendly websites that drive business growth. From startups to enterprises, we create web solutions that make an impact."
            className="text-center w-full max-w-[900px] mx-auto pt-12 md:text-2xl text-[16px] font-medium text-primary-base"
            once={false}
            duration={0.8}
            yOffset={100}
          />

          <SlideUp>
            <div className="py-10 flex justify-center uppercase">
              <Link href="/portfolio">
                <Button content="View Our Work" />
              </Link>
            </div>
          </SlideUp>
        </div>
        {/* END HERO  CONTENT */}

        {/* WORK GALLERY SECTION */}
        <WorkGallery />
      </div>
    </section>
  );
};

export default HeroSection;
