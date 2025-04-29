import Blog from "@/components/UI/HomePage/Blog/Blog";
import CaseStudies from "@/components/UI/HomePage/CaseStudies/CaseStudies";
import ContactUs from "@/components/UI/HomePage/ContactUs/ContactUs";
import DigitalFuture from "@/components/UI/HomePage/DigitalFuture/DigitalFuture";
import Faq from "@/components/UI/HomePage/Faq/Faq";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import OurService from "@/components/UI/HomePage/OurService/OurService";
import OurWorkProcess from "@/components/UI/HomePage/OurWorkProcess/OurWorkProcess";
import PricingPlans from "@/components/UI/HomePage/PricingPlans/PricingPlans";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";
import TrustedBrands from "@/components/UI/HomePage/TrustedBrands/TrustedBrands";
import WhoWeAre from "@/components/UI/HomePage/WhoWeAre/WhoWeAre";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurWorkProcess />
      <OurService status={true} />
      <WhoWeAre />
      <CaseStudies />
      <DigitalFuture status={true} />
      <Testimonials />
      <TrustedBrands status={true} />
      <Faq />
      <PricingPlans status={true} />
      <Blog />
      <ContactUs />
    </>
  );
};

export default HomePage;
