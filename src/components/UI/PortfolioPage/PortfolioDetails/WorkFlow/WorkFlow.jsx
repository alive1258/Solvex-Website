import Image from "next/image";
import React from "react";

import { workflowIconData } from "@/utils/fakeData/workflowIconData";
import WorkFlowIconCard from "./WorkFlowIconCard";

const WorkFlow = () => {
  return (
    <div className="container my-14">
      <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
        {workflowIconData?.map((item, index) => (
          <WorkFlowIconCard item={item} key={index} delay={index * 0.4} />
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
