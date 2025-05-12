import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Button from "../../Button/Button";
import Link from "next/link";
import { teamMembers } from "@/utils/fakeData/teamMembers";
import TeamMemberCard from "./TeamMemberCard";
import SlideUp from "@/utils/animations/SlideUp";
import AnimatedText from "@/components/common/AnimatedText";

// Sample team data

const MeetOurTeam = ({ status = false }) => {
  return (
    <div className="bg-[#FAFAFA] relative">
      {/* Bottom Gradient Line */}
      <div
        className={`absolute ${status === true ? "md:block" : "hidden"}`}
        style={{
          width: "594px",
          height: "4px",
          left: "0px",
          bottom: "0px",
          background:
            "linear-gradient(85deg, rgba(255, 255, 255, 0.00) 0%, #2154FF 100%)",
        }}
      ></div>
      <div className="container py-14">
        <BadgeLabel text="Meet Our Team" />

        <AnimatedText
          lines={["The Creative Minds Behind Solvex"]}
          className="animated-header"
        />
        <SlideUp>
          <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center w-full max-w-[520px] mx-auto">
            We are a diverse group of designers, strategists, and developers,
            united by a shared passion for building transformative digital
            experiences.
          </p>
        </SlideUp>
        <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
          {(status ? teamMembers?.slice(0, 8) : teamMembers).map(
            (member, index) => (
              <TeamMemberCard key={index} member={member} delay={index * 0.4} />
            )
          )}
        </div>
        {status === true ? (
          <div className="mt-14 flex justify-center uppercase">
            <Link href="/team">
              {" "}
              <Button content="View All Team Members" />
            </Link>
          </div>
        ) : (
          <div className="mt-14 flex justify-center uppercase">
            <Button content="See More Team Members" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetOurTeam;
