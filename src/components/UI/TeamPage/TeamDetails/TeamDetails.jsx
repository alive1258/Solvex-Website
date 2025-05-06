import React from "react";
import ContactUs from "../../HomePage/ContactUs/ContactUs";

import SingleTeamMember from "./SingleTeamMember/SingleTeamMember";
import TeamDetailsBanner from "./TeamDetailsBanner/TeamDetailsBanner";

const TeamDetails = () => {
  return (
    <div>
      <TeamDetailsBanner />
      <SingleTeamMember />
      <ContactUs />
    </div>
  );
};

export default TeamDetails;
