import { CheckCircleIcon, CodeIcon, SunsetIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PartnershipListWrapperSection = () => {

  const partnershipPrograms = [
    {
      icon: <CheckCircleIcon className="w-[18px] h-[18px]" />,
      title: "Affiliate partner program",
      description:
        "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.",
    },
    {
      icon: <CodeIcon className="w-[18px] h-[18px]" />,
      title: "Technology partner program",
      description:
        "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It's simple, safe and secure!",
    },
    {
      icon: <SunsetIcon className="w-[18px] h-[18px]" />,
      title: "Start up growth program",
      description:
        "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16 pt-12 pb-20 px-4 md:px-8 bg-grayscale-01">
      {partnershipPrograms.map((program, index) => (
        <Card
          key={index}
          className="flex-1 border-none shadow-none bg-transparent w-full"
        >
          <CardContent className="flex flex-col items-start gap-3 p-0 w-full">
            <div className="bg-[#6852d61f] inline-flex items-center justify-center p-2.5 rounded-full">
              {program.icon}
            </div>

            <div className="flex flex-col items-start gap-1 w-full">
              <h3 className="w-full text-lg md:text-2xl font-bold text-grayscale-12 mt-[-1.00px]">
                {program.title}
              </h3>

              <p className="w-full text-base md:text-lg opacity-80">
                {program.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};