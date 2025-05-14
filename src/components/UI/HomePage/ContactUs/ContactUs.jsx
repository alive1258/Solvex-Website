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
  RiFacebookLine,
  RiInstagramFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiLinkedinLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTwitterXLine,
} from "@remixicon/react";

const ContactUs = () => {
  return (
    <div className="bg-[#FAFAFA]  relative overflow-hidden">
      <div
        className="absolute"
        style={{
          width: "594px",
          height: "4px",
          left: "0px",
          top: "0px",
          background:
            " linear-gradient(85deg, rgba(255, 255, 255, 0.00) 0%, #2154FF 100%)",
        }}
      ></div>
      <div className="container py-14">
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

        <div className="mt-12 grid md:grid-cols-5 gap-6">
          {/* section left  */}
          <SlideLeft className="md:col-span-2 ">
            <div className="bg-white-base p-6 w-full rounded-xl border border-border-base">
              <h1 className="text-secondary-base md:text-[32px] text-[28px] uppercase text-center font-bold">
                get in touch
              </h1>
              <div className="mt-10 space-y-8">
                {/* contact 1 */}
                <div className="contact-border ">
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
                {/* contact 2 */}
                <div className="contact-border ">
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
                {/* contact 3 */}
                <div className="contact-border ">
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
            {/* follow us on  */}
            <div className="bg-white-base p-6 mt-6 rounded-xl border border-border-base">
              <h1 className="text-secondary-base border-b pb-1 border-border-base text-[28px] uppercase text-center font-bold">
                follow us on
              </h1>

              <div className="mt-6   flex items-center justify-center space-x-3">
                <div className="follow-us-social-icon group">
                  <RiFacebookFill
                    size={24}
                    className="text-[#3B82F6] group-hover:text-white duration-300 transition-all ease-in-out"
                  />
                </div>
                <div className="follow-us-social-icon group">
                  <RiInstagramLine
                    size={24}
                    className="text-[#3B82F6] group-hover:text-white duration-300 transition-all ease-in-out"
                  />
                </div>
                <div className="follow-us-social-icon group">
                  <RiLinkedinFill
                    size={24}
                    className="text-[#3B82F6] group-hover:text-white duration-300 transition-all ease-in-out"
                  />
                </div>
                <div className="follow-us-social-icon group">
                  <RiTwitterXLine
                    size={24}
                    className="text-[#3B82F6] group-hover:text-white duration-300 transition-all ease-in-out"
                  />
                </div>
                <div className="follow-us-social-icon group">
                  <RiDribbbleLine
                    size={24}
                    className="text-[#3B82F6] group-hover:text-white duration-300 transition-all ease-in-out"
                  />
                </div>
              </div>
            </div>
          </SlideLeft>

          {/* section right  */}
          <SlideRight
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,

              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
            className="md:col-span-3"
          >
            <div className="bg-white-base md:p-6 rounded-xl border border-border-base">
              <div className=" mt-3 p-4">
                <form>
                  <div>
                    <label
                      htmlFor="fname"
                      className="text-secondary-base text-lg font-medium"
                    >
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter Full Name"
                      className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label
                        htmlFor="fname"
                        className="text-secondary-base text-lg font-medium"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <br />
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter Email Address "
                        className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fname"
                        className="text-secondary-base text-lg font-medium"
                      >
                        Phone Number
                      </label>
                      <br />
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter Phone Number"
                        className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-3 relative">
                    <label
                      htmlFor="serviceType"
                      className="text-secondary-base text-lg font-medium"
                    >
                      Project/Service Type{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <br />
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

                    {/* Custom Arrow Icon */}
                    <div className="pointer-events-none absolute right-4 top-[58%] transform -translate-y-1/2 text-[#A1A1AA]">
                      <RiArrowDownSLine size={23} />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label
                      htmlFor="Massage"
                      className="text-secondary-base text-lg font-medium"
                    >
                      Massage
                    </label>
                    <br />
                    <textarea
                      id="Massage"
                      name="Massage"
                      placeholder="Enter Massage"
                      className="border border-border-base p-4 w-full mt-1 mb-3 rounded-lg"
                      rows={4}
                    />
                  </div>

                  <div className="mt-2">
                    <Button content="Send Massage" />
                  </div>
                </form>
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
      ;
    </div>
  );
};

export default ContactUs;
