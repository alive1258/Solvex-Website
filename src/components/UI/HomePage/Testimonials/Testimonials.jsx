import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mike Anderson",
      position: "CTO of CloudSync",
      image: "/images/client/client1.png",
      rating: 5,
      feedback:
        "Working with Solvex was a game-changer. They transformed our outdated e-commerce store into a high-converting, visually stunning platform.",
    },
    {
      id: 2,
      name: "Sarah Thompson",
      position: "CEO of FinTrack",
      image: "/images/client/client2.png",
      rating: 5,
      feedback:
        "Solvex brought our vision to life! Their team is creative, responsive, and truly understood our business needs.",
    },
    {
      id: 3,
      name: "David Lee",
      position: "Founder of GreenHive",
      image: "/images/client/client3.png",
      rating: 5,
      feedback:
        "Fantastic collaboration! Our platform is faster, cleaner, and far more engaging thanks to Solvex's expertise.",
    },
    {
      id: 4,
      name: "Emily Clark",
      position: "Marketing Director at BrightPath",
      image: "/images/client/client4.png",
      rating: 5,
      feedback:
        "Their commitment to quality and detail was outstanding. The new website has significantly boosted our brand image.",
    },
    {
      id: 5,
      name: "Sarah Thompson",
      position: "CEO of FinTrack",
      image: "/images/client/client5.png",
      rating: 5,
      feedback:
        "Solvex brought our vision to life! Their team is creative, responsive, and truly understood our business needs.",
    },
    {
      id: 6,
      name: "David Lee",
      position: "Founder of GreenHive",
      image: "/images/client/client6.png",
      rating: 5,
      feedback:
        "Fantastic collaboration! Our platform is faster, cleaner, and far more engaging thanks to Solvex's expertise.",
    },
  ];

  return (
    <div className=" mt-14 md:px-0 px-5">
      <BadgeLabel text="Testimonials" />
      <h1 className="text-2xl font-bold text-[#3F3F46] mt-6 text-center">
        What Our Clients Say
      </h1>
      <p className="text-[16px] font-medium text-[#71717A] mt-6 w-full max-w-[420px] mx-auto text-center ">
        Our clients love working with us, and their words speak for our success.
        Here’s what they have to say!
      </p>
      {/* section 1  */}

      <div className="mt-12">
        <Marquee
          speed={100}
          direction="left"
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={250}
          pauseOnHover={true}
          style={{
            overflow: "hidden",
          }}
        >
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F9FAFB] md:w-full w-[375px]  md:max-w-[424px] h-[228px] rounded-lg p-4 border border-[#E4E4E7] mx-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    className="rounded-full size-12"
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={48}
                    width={48}
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#52525B]">
                      {testimonial.name}
                    </h4>
                    <p className="font-medium text-sm text-[#71717A]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="border border-[#E4E4E7] flex space-x-1 items-center px-2 py-1 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99994 14.3916L13.4583 16.4833C14.0916 16.8666 14.8666 16.3 14.6999 15.5833L13.7833 11.65L16.8416 8.99997C17.3999 8.51663 17.0999 7.59997 16.3666 7.54163L12.3416 7.19997L10.7666 3.4833C10.4833 2.8083 9.51661 2.8083 9.23327 3.4833L7.65827 7.19163L3.63327 7.5333C2.89994 7.59163 2.59994 8.5083 3.15827 8.99163L6.21661 11.6416L5.29994 15.575C5.13327 16.2916 5.90827 16.8583 6.5416 16.475L9.99994 14.3916Z"
                      fill="#EAB308"
                    />
                  </svg>
                  <p className="text-[#71717A] text-sm font-medium">
                    {testimonial.rating}
                  </p>
                </div>
              </div>

              <h4 className="font-bold mt-8 text-lg text-[#52525B]">
                {testimonial.name}
              </h4>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </Marquee>
      </div>
      {/* section 2  */}

      <div className="mt-8">
        <Marquee
          speed={100}
          direction="right"
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={250}
          pauseOnHover={true}
          style={{
            overflow: "hidden",
          }}
        >
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F9FAFB] md:w-full w-[375px]  md:max-w-[424px] h-[228px] rounded-lg p-4 border border-[#E4E4E7] mx-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    className="rounded-full size-12"
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={48}
                    width={48}
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#52525B]">
                      {testimonial.name}
                    </h4>
                    <p className="font-medium text-sm text-[#71717A]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="border border-[#E4E4E7] flex space-x-1 items-center px-2 py-1 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99994 14.3916L13.4583 16.4833C14.0916 16.8666 14.8666 16.3 14.6999 15.5833L13.7833 11.65L16.8416 8.99997C17.3999 8.51663 17.0999 7.59997 16.3666 7.54163L12.3416 7.19997L10.7666 3.4833C10.4833 2.8083 9.51661 2.8083 9.23327 3.4833L7.65827 7.19163L3.63327 7.5333C2.89994 7.59163 2.59994 8.5083 3.15827 8.99163L6.21661 11.6416L5.29994 15.575C5.13327 16.2916 5.90827 16.8583 6.5416 16.475L9.99994 14.3916Z"
                      fill="#EAB308"
                    />
                  </svg>
                  <p className="text-[#71717A] text-sm font-medium">
                    {testimonial.rating}
                  </p>
                </div>
              </div>

              <h4 className="font-bold mt-8 text-lg text-[#52525B]">
                {testimonial.name}
              </h4>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
