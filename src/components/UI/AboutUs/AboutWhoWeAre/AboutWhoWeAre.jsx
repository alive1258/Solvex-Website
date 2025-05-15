import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import { stats } from "@/utils/fakeData/starsData";
import StatsCard from "./StatsCard";
import AnimatedText from "@/components/common/AnimatedText";
import SlideUp from "@/utils/animations/SlideUp";

const AboutWhoWeAre = () => {
  return (
    <div className="container my-14">
      <BadgeLabel text="Who We Are" />
      <AnimatedText
        lines={[" A Passionate Team of Innovators & Developers."]}
        className="animated-header"
      />

      <SlideUp>
        <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center w-full max-w-[520px] mx-auto">
          We are a team of dedicated professionals committed to building digital
          solutions that help businesses thrive. With years of experience, we
          deliver cutting-edge websites, applications, and UI/UX designs
          tailored to our clients' needs.
        </p>
      </SlideUp>
      <div className="mt-14">
        <Image
          src="/images/workGallery/team.png"
          alt="workGallery1"
          width={1000} // real image width in px
          height={1100} // real image height in px
          quality={90} // good balance of quality and size
          layout="responsive" // responsive layout with aspect ratio maintained
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="mt-14 ">
        <div className="md:flex items-start space-x-6 md:space-y-0 space-y-12">
          {stats?.map((stat, index) => (
            <StatsCard stat={stat} key={stat.id} index={index} stats={stats} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutWhoWeAre;
