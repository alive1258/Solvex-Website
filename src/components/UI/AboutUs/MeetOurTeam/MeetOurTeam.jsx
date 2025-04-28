import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";

// Sample team data
const teamMembers = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "/images/team/team5.png",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "/images/team/team1.png",
  },
  {
    name: "Mike Johnson",
    role: "Frontend Developer",
    image: "/images/team/team2.png",
  },
  {
    name: "Emma Wilson",
    role: "Backend Developer",
    image: "/images/team/team3.png",
  },
  {
    name: "Chris Lee",
    role: "Project Manager",
    image: "/images/team/team4.png",
  },
  {
    name: "Alice Brown",
    role: "Data Scientist",
    image: "/images/team/team7.png",
  },
  {
    name: "David White",
    role: "DevOps Engineer",
    image: "/images/team/team6.png",
  },
  {
    name: "Sophia Harris",
    role: "QA Engineer",
    image: "/images/team/team9.png",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="container mt-14">
      <BadgeLabel text="Meet Our Team" />
      <h1 className="text-2xl font-bold text-[#3F3F46] mt-6 text-center">
        The Creative Minds Behind Solvex
      </h1>
      <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center w-full max-w-[520px] mx-auto">
        We are a diverse group of designers, strategists, and developers, united
        by a shared passion for building transformative digital experiences.
      </p>
      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="group relative w-full cursor-pointer">
            {/* Image with rounded corners */}
            <Image
              className="rounded-xl w-full"
              src={member.image}
              alt={member.name}
              height={375}
              width={312}
            />

            {/* Name and designation */}
            <div className="absolute inset-0 flex flex-row left-0 pb-6 pl-6 rounded-xl items-end opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black group-hover:text-[#FAFAFA] transition-opacity duration-300">
              <div>
                <h3 className="text-2xl font-black uppercase text-[#FAFAFA]">
                  {member.name}
                </h3>
                <p className="text-[16px] font-medium text-[#FAFAFA]">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
