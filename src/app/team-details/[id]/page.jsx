import TeamDetails from "@/components/UI/TeamPage/TeamDetails/TeamDetails";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <TeamDetails id={id} />
    </div>
  );
};

export default ServiceDetailsPage;
