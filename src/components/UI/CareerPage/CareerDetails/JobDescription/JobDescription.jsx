import React from "react";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";

const JobDescription = () => {
  const jobDescriptionData = {
    intro:
      "We’re looking for a passionate and creative Senior UI/UX Designer who loves designing intuitive, beautiful, and engaging digital experiences. If you have an eye for detail, a passion for problem-solving, and a love for Figma, this role is for you!",
    sections: [
      {
        title: "Responsibilities",
        items: [
          "Lead UI/UX design projects from ideation to implementation",
          "Create wireframes, prototypes, and high-fidelity UI designs",
          "Conduct user research, usability testing, and data-driven improvements",
          "Collaborate with developers, project managers, and stakeholders",
          "Stay up-to-date with design trends and emerging technologies",
        ],
      },
      {
        title: "Skills & Qualifications",
        items: [
          "Strong experience with Figma, Adobe XD, Sketch",
          "Understanding of User-Centered Design (UCD) principles",
          "Knowledge of HTML, CSS (Basic knowledge is a plus!)",
          "Experience in user research and usability testing",
          "Ability to work in a fast-paced, team-oriented environment",
          "Motion graphics skills (After Effects, Lottie)",
          "Experience with Webflow, WordPress, or Shopify",
          "Previous experience in SaaS or E-commerce industries",
        ],
      },
      {
        title: "Perks & Benefits",
        items: [
          "Competitive Salary",
          "Remote & Hybrid Work Options",
          "Learning & Growth Opportunities",
          "Health & Wellness Benefits",
          "Exciting, Global-Level Projects",
          "Team Events & Annual Retreats",
        ],
      },
      {
        title: "How to Apply?",
        items: [
          "Step 1: Click the “Apply Now” button",
          "Step 2: Submit your resume + portfolio (if applicable)",
          "Step 3: HR will review & contact shortlisted candidates",
          "Step 4: Interview & skill assessment (if required)",
          "Step 5: Offer & onboarding",
        ],
      },
    ],
  };

  return (
    <div className="container my-16">
      <div>
        <h1 className="text-2xl text-primary-base font-bold">
          Job Description
        </h1>
        <p className="text-[20px] font-medium text-tertiary-base mt-6">
          {jobDescriptionData?.intro}
        </p>
      </div>

      <div>
        {jobDescriptionData?.sections?.map((section, index) => (
          <div className="mt-14" key={index}>
            <h1 className="text-2xl text-primary-base font-bold">
              {section?.title}
            </h1>
            <div className="mt-6 space-y-4">
              {section?.items.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <Image
                    src="/images/career/icons/checkBox.svg"
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p className="text-[20px] font-medium text-tertiary-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button content="Apply Now" />
      </div>
    </div>
  );
};

export default JobDescription;
