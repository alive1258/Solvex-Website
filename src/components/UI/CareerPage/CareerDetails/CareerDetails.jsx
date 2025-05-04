import DigitalFuture from "../../HomePage/DigitalFuture/DigitalFuture";
import CareerDetailsBanner from "./CareerDetailsBanner/CareerDetailsBanner";
import CareerDetailsHero from "./CareerDetailsHero/CareerDetailsHero";

const CareerDetails = () => {
  return (
    <>
      <CareerDetailsBanner />
      <CareerDetailsHero />
      <DigitalFuture status={true} />
    </>
  );
};

export default CareerDetails;
