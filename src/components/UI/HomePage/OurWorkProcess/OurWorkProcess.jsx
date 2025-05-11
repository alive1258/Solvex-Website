"use client";
import AnimatedText from "@/components/common/AnimatedText";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideDown from "@/utils/animations/SlideDown";
import SlideRight from "@/utils/animations/SlideRight";
import SlideLeft from "@/utils/animations/SlideLeft";
import SlideUp from "@/utils/animations/SlideUp";
const OurWorkProcess = () => {
  return (
    <div className="container md:mt-20 mt-12">
      <BadgeLabel text="Our Work Process" />

      <AnimatedText
        lines={[
          "A streamlined approach for delivering high-quality",
          "web solutions.",
        ]}
        className="animated-header"
      />

      <div className="md:mt-36 mt-12 flex justify-center items-center">
        <div>
          <div className="work-process-bg">
            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-20 md:gap-y-0 gap-y-8">
                {/* Box 1 with glassmorphism */}
                <SlideDown className="glassmorphism md:bottom-20 md:left-8 left-[170px] relative">
                  <div className="bg-[#10B981] size-12 rounded-full flex justify-center items-center">
                    <Image
                      src="/images/works/work1.svg"
                      height={32}
                      width={32}
                      alt="work"
                    />
                  </div>
                  <h2 className="text-lg pt-6 text-secondary-base font-bold">
                    Discovery & Planning
                  </h2>
                  <p className="text-sm text-tertiary-base font-medium pt-4">
                    Understanding client needs, project goals, and creating a
                    roadmap.
                  </p>
                </SlideDown>

                {/* Box 2 with glassmorphism */}
                <SlideDown className="glassmorphism md:bottom-20 md:left-5 left-[170px] relative">
                  <div className="bg-[#3B82F6] p-3 size-12 rounded-full flex justify-center items-center">
                    <Image
                      src="/images/works/work2.svg"
                      height={32}
                      width={32}
                      alt="work"
                    />
                  </div>
                  <h2 className="text-lg pt-6 text-secondary-base font-bold">
                    Discovery & Planning
                  </h2>
                  <p className="text-sm text-tertiary-base font-medium pt-4">
                    Understanding client needs, project goals, and creating a
                    roadmap.
                  </p>
                </SlideDown>

                {/* Box 3 with glassmorphism */}
                <SlideLeft className="glassmorphism md:mt-8 md:bottom-20 md:-left-32 left-[170px] relative">
                  <div className="bg-[#EAB308] p-3 size-12 rounded-full flex justify-center items-center">
                    <Image
                      src="/images/works/work3.svg"
                      height={32}
                      width={32}
                      alt="work"
                    />
                  </div>
                  <h2 className="text-lg pt-6 text-secondary-base font-bold">
                    Development & Coding
                  </h2>
                  <p className="text-sm text-tertiary-base font-medium pt-4">
                    Understanding client needs, project goals, and creating a
                    roadmap.
                  </p>
                </SlideLeft>

                {/* Box 4 with glassmorphism */}
                <SlideRight className="glassmorphism md:bottom-20 md:mt-8 md:left-[185px] left-[170px] relative">
                  <div className="bg-[#F43F5E] p-3 size-12 rounded-full flex justify-center items-center">
                    <Image
                      src="/images/works/work4.svg"
                      height={32}
                      width={32}
                      alt="work"
                    />
                  </div>
                  <h2 className="text-lg pt-6 text-secondary-base font-bold">
                    Discovery & Planning
                  </h2>
                  <p className="text-sm text-tertiary-base font-medium pt-4">
                    Understanding client needs, project goals, and creating a
                    roadmap.
                  </p>
                </SlideRight>
                {/* Box 5 with glassmorphism */}
                <SlideUp className="glassmorphism md:bottom-20 md:mt-10 md:left-8 left-[170px] relative">
                  <div className="bg-[#84CC16] p-3 size-12 rounded-full flex justify-center items-center">
                    <Image
                      src="/images/works/work5.svg"
                      height={32}
                      width={32}
                      alt="work"
                    />
                  </div>
                  <h2 className="text-lg pt-6 text-secondary-base font-bold">
                    Discovery & Planning
                  </h2>
                  <p className="text-sm text-tertiary-base font-medium pt-4">
                    Understanding client needs, project goals, and creating a
                    roadmap.
                  </p>
                </SlideUp>

                {/* Box 6 with glassmorphism */}
                <SlideUp className="glassmorphism md:bottom-20 md:mt-10 md:left-5 left-[170px] relative">
                  <div className="bg-[#8B5CF6] p-3 size-12 rounded-full flex justify-center items-center">
                    <Image
                      src="/images/works/work6.svg"
                      height={32}
                      width={32}
                      alt="work"
                    />
                  </div>
                  <h2 className="text-lg pt-6 text-secondary-base font-bold">
                    Discovery & Planning
                  </h2>
                  <p className="text-sm text-tertiary-base font-medium pt-4">
                    Understanding client needs, project goals, and creating a
                    roadmap.
                  </p>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkProcess;
