import React from "react";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import { jobDescriptionData } from "@/utils/fakeData/jobDescriptionData";
import AnimatedText from "@/components/common/AnimatedText";
import JobDescriptionCard from "./JobDescriptionCard";
import SlideUp from "@/utils/animations/SlideUp";

const JobDescription = () => {
  return (
    <div className="container my-16">
      <div>
        <h1 className="text-2xl text-primary-base font-bold">
          Job Description
        </h1>
        <p className="text-[20px] font-medium text-tertiary-base mt-6">
          {jobDescriptionData?.intro}
        </p>
      </div>

      <div>
        {jobDescriptionData?.sections?.map((section, index) => (
          <div className="mt-14" key={index}>
            <AnimatedText
              lines={[section?.title]}
              className="text-2xl text-primary-base font-bold"
            />

            <div className="mt-6 space-y-4">
              {section?.items.map((item, index) => (
                <JobDescriptionCard
                  item={item}
                  key={index}
                  delay={index * 0.4}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <SlideUp>
          <Button content="Apply Now" />
        </SlideUp>
      </div>
    </div>
  );
};

export default JobDescription;
