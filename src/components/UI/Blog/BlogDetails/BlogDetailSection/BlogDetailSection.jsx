import Image from "next/image";
import React from "react";

const BlogDetailSection = () => {
  const blogTrends = [
    {
      id: 1,
      title: "Trend 1: AI-Powered Web Development",
      points: [
        "AI-generated code speeds up development.",
        "Chatbots & AI-driven customer interactions enhance UX.",
        "Personalization through AI improves engagement.",
      ],
      description:
        "The web development world is evolving at an unprecedented pace. In 2025, new technologies will transform how websites are built, making them faster, more interactive, and user-friendly. Let’s explore the top five web development trends that will shape the digital landscape this year.",
      images: [
        "/images/blogDetails/blogD2.png",
        "/images/blogDetails/blogD3.png",
      ],
      reverse: false,
    },
    {
      id: 2,
      title: "Trend 2: Progressive Web Apps (PWA)",
      points: [
        "Work offline and load quickly.",
        "Look and feel like native apps.",
        "Better performance on all devices.",
      ],
      description:
        "PWAs combine the best of web and mobile apps, providing users with a fast, app-like experience without requiring downloads. Major brands like Twitter Lite and Pinterest use PWAs to improve performance and boost engagement.",
      images: [
        "/images/blogDetails/blogD4.png",
        "/images/blogDetails/blogD5.png",
      ],
      reverse: true,
    },
    {
      id: 3,
      title: "Trend 3: Voice Search Optimization",
      points: [
        "Users prefer voice assistants like Alexa & Siri.",
        "Voice-friendly UI will dominate future UX design.",
        "SEO will need to adapt to natural language queries.",
      ],
      description:
        "No-code platforms like Webflow, Bubble, and Adalo empower designers and business owners to build websites without coding. They allow faster development cycles, lower costs, and easy customization.",
      images: [
        "/images/blogDetails/blogD6.png",
        "/images/blogDetails/blogD7.png",
      ],
      reverse: false,
    },
    {
      id: 4,
      title: "Trend 4: Motion UI & Microinteractions",
      points: [
        "Animations guide users & improve usability.",
        "Microinteractions increase user satisfaction.",
        "Helps convey real-time feedback clearly.",
      ],
      description:
        "Web 3.0 is the next evolution of the internet, shifting control from corporations to users. Blockchain technology powers secure, transparent, and decentralized applications, ensuring more privacy and control over personal data.",
      images: [
        "/images/blogDetails/blogD8.png",
        "/images/blogDetails/blogD9.png",
      ],
      reverse: true,
    },
    {
      id: 5,
      title: "Trend 5: Cybersecurity-Focused Development",
      points: [
        "Increased data privacy regulations demand secure coding.",
        "Built-in security protocols in frameworks gain popularity.",
        "Developers focus more on vulnerability testing and monitoring.",
      ],
      description:
        "Users expect seamless, interactive experiences online. Motion UI enhances engagement by adding dynamic transitions, hover effects, and scrolling animations, making websites more immersive.",
      images: [
        "/images/blogDetails/blogD10.png",
        "/images/blogDetails/blogD11.png",
      ],
      reverse: false,
    },
  ];

  return (
    <div className="container my-20">
      {/* hero section  */}
      <div
        className="relative w-full h-[550px] md:h-[700px] rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/blogDetails/blogD1.png')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

        {/* Text Content */}
        <div className="absolute md:bottom-14 bottom-10 md:left-14 left-4 md:right-14 z-10">
          <div>
            <div className="flex w-fit items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-zinc-800/20 backdrop-blur-sm">
              <p className="text-white text-sm">Web Developer</p>
            </div>

            <h1 className="text-[28px] mt-10 md:text-[40px] font-bold text-white leading-tight">
              Top 5 Web Development Trends in 2025
            </h1>
            <div className="mt-10 md:flex items-center space-x-11 md:space-y-0 space-y-3">
              <div className="flex items-center space-x-4">
                <Image
                  className="rounded-full size-12"
                  src="/images/blogs/author4.png"
                  alt="author1"
                  height={48}
                  width={48}
                />
                <div>
                  <h4 className="font-bold text-lg text-white-base">
                    Jane Cooper
                  </h4>
                  <p className="font-medium text-sm text-[#A1A1AA]">
                    Web Developer
                  </p>
                </div>
              </div>
              <div className="flex md:mt-0 mt-4 space-x-8">
                <div>
                  <h4 className="font-bold text-lg text-white-base">
                    February 18, 2025
                  </h4>
                  <p className="font-medium text-sm text-[#A1A1AA]">
                    Date Published
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white-base">
                    5 min read
                  </h4>
                  <p className="font-medium text-sm text-[#A1A1AA]">
                    Reading Time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {blogTrends.map((trend, index) => (
        <div key={trend.id} className={`mt-${index === 0 ? "24" : "14"}`}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {!trend.reverse ? (
              <>
                <div className="md:col-span-2">
                  <Image
                    className="w-full h-full md:max-h-[480px] rounded-2xl"
                    src={trend.images[0]}
                    alt="trend image 1"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="md:col-span-1">
                  <Image
                    className="w-full h-full md:max-h-[480px] rounded-2xl"
                    src={trend.images[1]}
                    alt="trend image 2"
                    width={500}
                    height={500}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="md:col-span-1">
                  <Image
                    className="w-full h-full md:max-h-[480px] rounded-2xl"
                    src={trend.images[0]}
                    alt="trend image 1"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="md:col-span-2">
                  <Image
                    className="w-full h-full md:max-h-[480px] rounded-2xl"
                    src={trend.images[1]}
                    alt="trend image 2"
                    width={500}
                    height={500}
                  />
                </div>
              </>
            )}
          </div>

          <div className="mt-11">
            <h1 className="text-2xl text-primary-base font-bold">
              {trend.title}
            </h1>
            <div className="mt-6 space-y-4">
              {trend.points.map((point, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Image
                    src="/images/career/icons/checkBox.svg"
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p className="text-[20px] font-medium text-tertiary-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <p className="text-[20px] font-medium text-tertiary-base">
                {trend.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetailSection;
