import React from "react";
import AboutBanner from "../../AboutUs/AboutBanner/AboutBanner";
import CustomSolutions from "./CustomSolutions/CustomSolutions";
import OurSolutions from "./OurSolutions/OurSolutions";
import DigitalFuture from "../../HomePage/DigitalFuture/DigitalFuture";
import PricingPlans from "../../HomePage/PricingPlans/PricingPlans";
import ChooseSolves from "./ChooseSolves/ChooseSolves";

const ServiceDetails = () => {
  return (
    <div>
      <AboutBanner />
      <CustomSolutions />
      <OurSolutions />
      <ChooseSolves />
      <PricingPlans />
      <DigitalFuture />
    </div>
  );
};

export default ServiceDetails;
