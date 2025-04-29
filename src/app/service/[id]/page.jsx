import ServiceDetails from "@/components/UI/ServicePage/ServiceDetails/ServiceDetails";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <ServiceDetails id={id} />
    </div>
  );
};

export default ServiceDetailsPage;
