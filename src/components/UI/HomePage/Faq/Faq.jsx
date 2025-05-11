import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import AccordionList from "./AccordionList";
import AnimatedText from "@/components/common/AnimatedText";
import AskQuestion from "./AskQuestion";
import SlideUp from "@/utils/animations/SlideUp";

const Faq = () => {
  return (
    <div className="container md:my-14 mt-12">
      <BadgeLabel text="Got Questions? We’ve Got Answers!" />
      <AnimatedText
        lines={[" Our Work Speaks for Itself"]}
        className="animated-header"
      />

      <SlideUp>
        <p className="primary-paragraph">
          Have questions about our services? Find quick answers below! If you
          need further assistance, feel free to contact us.
        </p>
      </SlideUp>

      <div className="mt-14 grid md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <AskQuestion />
        </div>
        <div className="col-span-2">
          <AccordionList />
        </div>
      </div>
    </div>
  );
};

export default Faq;
