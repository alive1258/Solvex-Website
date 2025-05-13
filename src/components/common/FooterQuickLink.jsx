import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";

const FooterQuickLink = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Support", href: "/contact" },
  ];

  return (
    <section>
      <div className="md:col-span-1 md:mt-0 mt-10">
        <h2 className="text-[#FAFAFA] font-bold text-lg w-3/4 border-b pb-1 uppercase border-[#3B82F6]">
          Quick links
        </h2>
        <div className="mt-10 space-y-4">
          {links.map((link, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-center gap-2">
                <RiArrowRightLine
                  size={18}
                  className="fill-[#D4D4D8] group-hover:fill-[#3B82F6] transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
                <Link
                  href={link.href}
                  className="text-[#D4D4D8] group-hover:text-[#3B82F6] text-[16px] font-medium"
                >
                  {link.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterQuickLink;
