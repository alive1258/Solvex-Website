import DigitalFuture from "../HomePage/DigitalFuture/DigitalFuture";
import CareerBanner from "./CareerBanner/CareerBanner";
import CareerGallery from "./CareerGallery/CareerGallery";
import EmployeeBenefits from "./EmployeeBenefits/EmployeeBenefits";

const CareerPage = () => {
  return (
    <>
      <CareerBanner />
      <CareerGallery />
      <EmployeeBenefits />
      <DigitalFuture status={true} />
    </>
  );
};

export default CareerPage;
