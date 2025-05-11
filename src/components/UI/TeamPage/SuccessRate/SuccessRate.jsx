import React from "react";

const SuccessRate = () => {
  const cards = [
    {
      id: 1,
      count: "15 +",
      title: "Designers",
      description:
        "Crafting sleek, user-friendly interfaces that speak louder than words.",
    },
    {
      id: 2,
      count: "25 +",
      title: "Developers",
      description:
        "Turning ideas into high-performance web and mobile applications.",
    },
    {
      id: 3,
      count: "10 +",
      title: "Countries",
      description:
        "Driving growth through data-driven digital marketing strategies.",
    },
    {
      id: 4,
      count: "100 +",
      title: "Countries",
      description: "Ensuring seamless project delivery on time, every time.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] relative">
      {/* Bottom Gradient Line */}
      <div
        className="absolute md:block hidden"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`px-4 text-center md:text-left ${
                index !== cards.length - 1 ? "md:border-r-[3px]" : ""
              }`}
              style={
                index !== cards.length - 1
                  ? {
                      borderImage:
                        "linear-gradient(180deg, #3B82F6 -2.76%, rgba(255,255,255,0) 103.04%) 1",
                    }
                  : {}
              }
            >
              <h3 className="text-[48px]  text-[#3B82F6] font-bold">
                {card.count}
              </h3>
              <h5 className="text-[20px] uppercase font-bold mt-4 text-secondary-base">
                {card.title}
              </h5>
              <p className="text-sm font-medium mt-4 text-[#71717A]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessRate;
