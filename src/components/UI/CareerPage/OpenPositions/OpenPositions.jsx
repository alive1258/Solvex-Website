import React from "react";

const OpenPositions = () => {
  const jobData = [
    {
      id: 1,
      type: "Remote/On-site",
      title: "Senior UI/UX Designer",
      description:
        "We’re looking for a creative UI/UX designer with a passion for user-centric design. If Figma is your playground, let’s talk!",
    },
    {
      id: 2,
      type: "On-site",
      title: "Frontend Developer",
      description:
        "Seeking a skilled React developer to build modern web interfaces using Tailwind and Next.js.",
    },
    {
      id: 3,
      type: "Remote",
      title: "Backend Developer",
      description:
        "We're hiring a Node.js expert to build scalable backend services and APIs for high-performance apps.",
    },
    {
      id: 4,
      type: "Hybrid",
      title: "Project Manager",
      description:
        "Manage and coordinate software teams, ensuring projects are delivered on time with high quality.",
    },
    {
      id: 5,
      type: "Remote/On-site",
      title: "Graphic Designer",
      description:
        "Creative graphic designer needed to craft beautiful branding, digital assets, and illustrations.",
    },
    {
      id: 6,
      type: "On-site",
      title: "QA Engineer",
      description:
        "Detail-oriented QA engineer to develop testing strategies and maintain product quality across platforms.",
    },
  ];

  return (
    <div className="container my-14">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0.06%, #3B82F6 26.53%, #3B82F6 68.99%, rgba(255, 255, 255, 0.00) 99.96%)",
        }}
      >
        <h1 className="md:text-2xl text-[16px] font-bold text-[#FFF] py-3 text-center">
          Open Positions — Join Our Team at Solvex!
        </h1>
      </div>

      <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* card 1  */}
        {jobData?.map((job, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300 bg-white-base shadow-[0px_0px_96px_0px_rgba(59,130,246,0.16)]"
          >
            <div className="bg-[#F4F4F5] rounded-full px-4 py-2 w-fit">
              <p className="text-[#71717A] text-sm font-medium text-center">
                {job?.type}
              </p>
            </div>
            <h3 className="text-lg mt-4 font-bold text-primary-base">
              {job?.title}
            </h3>
            <p className="text-[#71717A] text-[16px] font-medium mt-4">
              {job?.description}
            </p>

            <div className="mt-4 w-fit">
              <button className="bg-[#18181B] cursor-pointer hover:bg-[#3B82F6] text-sm text-white px-6 py-3 rounded-full transition-all duration-300">
                Job Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenPositions;
