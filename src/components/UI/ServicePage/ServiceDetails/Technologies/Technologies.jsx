import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  const technologiesData = [
    {
      id: 1,
      title: "Front-End",
      items: [
        { id: 1, name: "React.Js", icon: "/images/technologies/react.svg" },
        { id: 2, name: "Vue.Js", icon: "/images/technologies/vue.svg" },
        { id: 3, name: "Angular", icon: "/images/technologies/angularjs.svg" },
      ],
    },
    {
      id: 2,
      title: "Back-End",
      items: [
        { id: 1, name: "Node.Js", icon: "/images/technologies/nodejs.svg" },
        { id: 2, name: "Laravel", icon: "/images/technologies/laravel.svg" },
        { id: 3, name: "Django", icon: "/images/technologies/django.svg" },
      ],
    },
    {
      id: 3,
      title: "CMS",
      items: [
        {
          id: 1,
          name: "WordPress",
          icon: "/images/technologies/wordpress.svg",
        },
        { id: 2, name: "Webflow", icon: "/images/technologies/webflow.svg" },
        { id: 3, name: "Strapi", icon: "/images/technologies/strapi.svg" },
      ],
    },
    {
      id: 4,
      title: "Databases",
      items: [
        { id: 1, name: "MongoDB", icon: "/images/technologies/mongodb.svg" },
        {
          id: 2,
          name: "PostgreSQL",
          icon: "/images/technologies/postgresql.svg",
        },
        { id: 3, name: "MySQL", icon: "/images/technologies/mysql.svg" },
      ],
    },
    {
      id: 5,
      title: "E-commerce",
      items: [
        { id: 1, name: "Shopify", icon: "/images/technologies/shopify.svg" },
        {
          id: 2,
          name: "WooCommerce",
          icon: "/images/technologies/woocommerce.svg",
        },
      ],
    },
    {
      id: 6,
      title: "Hosting",
      items: [
        { id: 1, name: "AWS", icon: "/images/technologies/aws.svg" },
        { id: 2, name: "Vercel", icon: "/images/technologies/vercel.svg" },
        { id: 3, name: "Netlify", icon: "/images/technologies/netlify.svg" },
      ],
    },
  ];

  return (
    <div className="bg-[#F4F4F5]">
      <div className="container py-14">
        <h1 className="text-[40px] font-bold  md:text-start text-center text-secondary-base">
          Technologies We Master
        </h1>
        <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6">
          {technologiesData?.map((techGroup, idx) => (
            <div
              key={techGroup?.id}
              className="bg-[#FFF] px-4  py-6 rounded-2xl relative"
            >
              <h5 className="text-[#3B82F6] text-lg font-bold">
                {techGroup?.title}
              </h5>

              <div className="mt-10">
                <>
                  <div className="flex  md:gap-x-8  gap-x-3 items-center ">
                    {techGroup.items.map((item) => (
                      <div
                        key={item.id} // ensure unique key if IDs are not unique
                        className="bg-white-base shadow-md py-6 px-4 rounded-lg border border-border-base md:flex  justify-center items-center space-x-2 w-full max-w-[184px]"
                      >
                        <div className="md:block flex items-center justify-center">
                          <Image
                            src={item?.icon}
                            alt={item?.name}
                            height={24}
                            width={25}
                          />
                        </div>
                        <p className="text-secondary-base text-lg font-medium md:text-start text-center">
                          {item?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
