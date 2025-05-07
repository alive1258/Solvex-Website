import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Button from "../../Button/Button";
import AccordionList from "./AccordionList";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import AskQuestion from "./AskQuestion";

const Faq = () => {
  return (
    <div className="container md:my-14 mt-12">
      <BadgeLabel text="Got Questions? We’ve Got Answers!" />
      <AnimatedText
        lines={[" Our Work Speaks for Itself"]}
        className="text-2xl font-bold text-primary-base mt-6 text-center w-full md:max-w-[450px] max-w-[230px] mx-auto"
      />
      <AnimatedParagraph
        text="Have questions about our services? Find quick answers below! If you need
        further assistance, feel free to contact us."
        className="text-center w-full max-w-[550px] mx-auto mt-6 text-[16px] font-medium text-primary-base"
        once={false}
        duration={0.8}
        yOffset={100}
      />

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
