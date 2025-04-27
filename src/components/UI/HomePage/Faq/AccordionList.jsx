"use client";
import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";

const AccordionList = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any unused item within 30 days for a full refund. Please keep the original packaging and receipt.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 3-5 business days depending on your location.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries. Shipping fees and delivery times may vary based on destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you’ll receive an email with a tracking link to monitor its delivery progress.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Orders can be modified or canceled within 2 hours of placement. Please contact our support team immediately for assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, PayPal, and Apple Pay.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@example.com or call us at +123-456-7890.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@example.com or call us at +123-456-7890.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@example.com or call us at +123-456-7890.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@example.com or call us at +123-456-7890.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordionClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" space-y-4 h-[500px] overflow-y-scroll">
      {faqs?.length &&
        faqs?.map((accordion, index) => (
          <Accordion
            key={index}
            accordion={accordion}
            isActive={activeIndex === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
    </div>
  );
};

export default AccordionList;
