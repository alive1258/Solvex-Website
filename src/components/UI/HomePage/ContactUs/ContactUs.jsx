"use client";
import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Button from "../../Button/Button";
import AnimatedText from "@/components/common/AnimatedText";
import SlideUp from "@/utils/animations/SlideUp";
import SlideLeft from "@/utils/animations/SlideLeft";
import SlideRight from "@/utils/animations/SlideRight";

import {
  RiArrowDownSLine,
  RiDribbbleLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTwitterXLine,
} from "@remixicon/react";

// ======================= START CONTACT US SECTION =======================
const ContactUs = () => {
  return (
    <div className="bg-[#FAFAFA] relative overflow-hidden w-full">
      {/* Decorative Gradient Top Line */}
      <div className="custom-gradient-line"></div>

      <div className="container py-14">
        {/* Section Header */}
        <BadgeLabel text="Contact Us" />
        <AnimatedText
          lines={["Let’s Work Together to Build Something Great"]}
          className="text-2xl font-bold text-primary-base mt-6 text-center mx-auto max-w-full sm:max-w-lg"
        />
        <SlideUp>
          <p className="text-center w-full max-w-[550px] mx-auto mt-6 text-[16px] font-medium text-primary-base">
            Have a project in mind, or just want to chat? Drop us a line — we’d
            love to hear from you.
          </p>
        </SlideUp>

        {/* ======================= START GRID WRAPPER ======================= */}
        <div className="mt-12 grid md:grid-cols-5 gap-6">
          {/* ======================= START LEFT CONTACT INFO ======================= */}
          <SlideLeft className="md:col-span-2">
            {/* Contact Details Box */}
            <div className="bg-white-base p-6 w-full rounded-xl border border-border-base">
              <h1 className="text-secondary-base md:text-[32px] text-[28px] uppercase text-center font-bold">
                Get In Touch
              </h1>

              <div className="mt-10 space-y-8">
                {/* Contact Item 1 */}
                <div className="contact-border">
                  <div className="contact-icon">
                    <RiPhoneLine size={24} className="text-[#3B82F6]" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-secondary-base uppercase text-lg font-bold">
                      Phone Number
                    </h5>
                    <p className="text-tertiary-base text-[16px]">
                      +123 456 789
                    </p>
                  </div>
                </div>

                {/* Contact Item 2 */}
                <div className="contact-border">
                  <div className="contact-icon">
                    <RiMailLine size={24} className="text-[#3B82F6]" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-secondary-base uppercase text-lg font-bold">
                      E-mail Address
                    </h5>
                    <p className="text-tertiary-base text-[16px]">
                      hello@solvexagency.com
                    </p>
                  </div>
                </div>

                {/* Contact Item 3 */}
                <div className="contact-border">
                  <div className="contact-icon">
                    <RiMapPinLine size={24} className="text-[#3B82F6]" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-secondary-base uppercase text-lg font-bold">
                      Location
                    </h5>
                    <p className="text-tertiary-base text-[16px]">
                      123 Creative Street, New York, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="bg-white-base p-6 mt-6 rounded-xl border border-border-base">
              <h1 className="text-secondary-base border-b pb-1 border-border-base text-[28px] uppercase text-center font-bold">
                Follow Us On
              </h1>

              <div className="mt-6 flex items-center justify-center space-x-3">
                {[
                  RiFacebookFill,
                  RiInstagramLine,
                  RiLinkedinFill,
                  RiTwitterXLine,
                  RiDribbbleLine,
                ].map((Icon, index) => (
                  <div key={index} className="follow-us-social-icon group">
                    <Icon
                      size={24}
                      className="text-[#3B82F6] group-hover:text-white transition-all duration-300 ease-in-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          </SlideLeft>
          {/* ======================= END LEFT CONTACT INFO ======================= */}

          {/* ======================= START RIGHT FORM ======================= */}
          <SlideRight className="md:col-span-3">
            <div className="bg-white-base md:p-6 rounded-xl border border-border-base">
              <div className="mt-3 p-4">
                <form>
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fname"
                      className="text-secondary-base text-lg font-medium"
                    >
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter Full Name"
                      className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-secondary-base text-lg font-medium"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address"
                        className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-secondary-base text-lg font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone Number"
                        className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="mt-3 relative">
                    <label
                      htmlFor="serviceType"
                      className="text-secondary-base text-lg font-medium"
                    >
                      Project/Service Type{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      className="appearance-none border border-border-base cursor-pointer focus:outline-none p-4 w-full mt-1 mb-3 rounded-lg pr-10"
                      defaultValue=""
                    >
                      <option
                        className="opacity-50 text-[#A1A1AA]"
                        value=""
                        disabled
                      >
                        Select Project/Service Type
                      </option>
                      <option value="web">Website Development</option>
                      <option value="app">Mobile App Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[58%] transform -translate-y-1/2 text-[#A1A1AA]">
                      <RiArrowDownSLine size={23} />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-3">
                    <label
                      htmlFor="message"
                      className="text-secondary-base text-lg font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter Message"
                      className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-2">
                    <Button content="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </SlideRight>
          {/* ======================= END RIGHT FORM ======================= */}
        </div>
        {/* ======================= END GRID WRAPPER ======================= */}
      </div>
    </div>
  );
};

export default ContactUs;
// ======================= END CONTACT US SECTION =======================
