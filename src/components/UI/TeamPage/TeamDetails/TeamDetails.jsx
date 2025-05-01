import React from "react";
import ContactUs from "../../HomePage/ContactUs/ContactUs";
import AboutBanner from "../../AboutUs/AboutBanner/AboutBanner";
import SingleTeamMember from "./SingleTeamMember/SingleTeamMember";

const TeamDetails = () => {
  return (
    <div>
      <AboutBanner />
      <SingleTeamMember />
      <ContactUs />
    </div>
  );
};

export default TeamDetails;
