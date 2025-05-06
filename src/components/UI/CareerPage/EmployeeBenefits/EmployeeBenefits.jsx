import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";

const EmployeeBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Competitive Salary & Performance Bonuses",
      description:
        "We recognize talent and hard work. Enjoy a competitive salary with performance-based bonuses to reward your contributions.",
      iconBg: "#DBEAFE",
      icon: "/images/career/icons/bag.svg",
    },
    {
      id: 2,
      title: "Remote & Hybrid Work Opportunities",
      description:
        "Work from where you’re most productive. We offer flexible hours and remote options to support your lifestyle.",
      iconBg: "#DCFCE7",
      icon: "/images/career/icons/home.svg",
    },
    {
      id: 3,
      title: "Learning & Development Support",
      description:
        "Stay healthy with our comprehensive medical insurance and wellness programs that support your physical and mental well-being.",
      iconBg: "#FEF9C3",
      icon: "/images/career/icons/book.svg",
    },
    {
      id: 4,
      title: "Paid Time Off & National Holidays",
      description:
        "We invest in your growth. Access courses, certifications, and mentorship to keep your skills sharp and your career growing.",
      iconBg: "#E0F2FE",
      icon: "/images/career/icons/beach.svg",
    },
    {
      id: 5,
      title: "Health & Wellness Programs included",
      description:
        "Recharge with our generous vacation policy, public holiday coverage, and paid leaves for important life events.",
      iconBg: "#FCE7F3",
      icon: "/images/career/icons/hospital.svg",
    },
    {
      id: 6,
      title: "Team Events & Company Retreats",
      description:
        "Build lasting bonds with your teammates through fun team-building activities, off-sites, and company retreats.",
      iconBg: "#EDE9FE",
      icon: "/images/career/icons/events.svg",
    },
    {
      id: 7,
      title: "Family-Friendly Policies for Team",
      description:
        "We support families. Enjoy paid maternity and paternity leave as you welcome new members to your family.",
      iconBg: "#FFE4E6",
      icon: "/images/career/icons/family.svg",
    },
    {
      id: 8,
      title: "Cutting-Edge Tools & Work Setup",
      description:
        "Be celebrated for your contributions with peer-recognition programs and spotlight awards that highlight your impact.",
      iconBg: "#FAE8FF",
      icon: "/images/career/icons/mac.svg",
    },
  ];

  return (
    <div className="bg-[#F4F4F5] mt-14">
      <div className="container py-12">
        <BadgeLabel text="Employee Benefits" />
        <h1 className="text-2xl font-bold text-primary-base mt-6 text-center">
          Employee Benefits at Solvex — Empowering You to Thrive
        </h1>
        <p className="text-[16px] w-full max-w-[560px] mx-auto font-medium text-[#71717A] mt-6 text-center">
          At Solvex, we believe that happy employees create exceptional work.
          That’s why we provide a competitive, flexible, and rewarding benefits
          package designed to support your growth, well-being, and work-life
          balance.
        </p>
        {/* card section  */}
        <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
          {/* card 1  */}
          {benefits?.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#FFF] p-6 rounded-2xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-105"
            >
              <div className="rounded-lg size-14 flex justify-center bg-[#DBEAFE] items-center">
                {/* Replace this static SVG with dynamic icon rendering if needed */}
                <Image height={30} width={30} src={benefit?.icon} alt="icon" />
              </div>
              <h3 className="text-lg mt-4 text-primary-base font-bold">
                {benefit.title}
              </h3>
              <p className="text-[#71717A] text-sm font-medium mt-4">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeBenefits;
