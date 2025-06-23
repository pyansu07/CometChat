import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
const NewIcon = "/pics/new.png";

export const PartnershipTypesSection = () => {

  const partnershipBenefits = [
    // First row
    {
      icon: NewIcon,
      iconAlt: "Scale",
      title: "Free credits",
      description: "Empowering partners to scale.",
    },
    {
      icon: NewIcon,
      iconAlt: "Coins",
      title: "Revenue share",
      description: "Get monthly recurring revenues when you refer clients.",
    },
    {
      icon: NewIcon,
      iconAlt: "Stand",
      title: "Training and mentoring sessions",
      description: "Enabling partners to deliver the best experience.",
    },
    // Second row
    {
      icon: NewIcon,
      iconAlt: "Code square",
      title: "Special developer access",
      description:
        "Get an all-access account to build unlimited PoCs for your clients.",
    },
    {
      icon: NewIcon,
      iconAlt: "Clock",
      title: "Reduced time",
      description:
        "Deliver your products much faster with our partners' programs.",
    },
    {
      icon: NewIcon,
      iconAlt: "Bar chart square",
      title: "Value addition to your users",
      description: "We need a 2 line text here",
    },
    // Third row
    {
      icon: NewIcon,
      iconAlt: "Book closed",
      title: "Knowledge sessions",
      description: "Access to product and market sessions.",
    },
    {
      icon: NewIcon,
      iconAlt: "Help circle",
      title: "On-demand support",
      description: "Technical assistance for implementation.",
    },
    {
      icon: NewIcon,
      iconAlt: "Coins hand",
      title: "Significant passive income",
      description: "We need a 2 line text here",
    },
  ];

  // Group benefits into rows of 3 for layout
  const rows = [
    partnershipBenefits.slice(0, 3),
    partnershipBenefits.slice(3, 6),
    partnershipBenefits.slice(6, 9),
  ];

  return (
    <section className="w-full py-12 pb-20 px-8 bg-grayscaledark-01 flex flex-col gap-16 overflow-x-hidden max-w-full">
      {rows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex flex-col md:flex-row gap-8 md:gap-16 w-full"
        >
          {row.map((benefit, index) => (
            <Card
              key={`benefit-${rowIndex}-${index}`}
              className="bg-transparent border-none w-full flex-1"
            >
              <CardContent className="p-0 flex flex-col gap-3 w-full">
                <div className="bg-[#ff7f3e1f] inline-flex items-center justify-center p-2.5 rounded-full w-fit">
                  <img
                    className="w-[18px] h-[18px]"
                    alt={benefit.iconAlt}
                    src={benefit.icon}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-lg md:text-2xl font-bold text-grayscaledark-12">
                    {benefit.title}
                  </h3>
                  <p className="text-white md:text-lg opacity-80">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </section>
  );
};