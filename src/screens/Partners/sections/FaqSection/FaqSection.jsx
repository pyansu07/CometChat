import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSection = () => {
  const faqItems = [
    {
      question: "This is a frequently asked question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
      defaultOpen: true,
    },
    {
      question: "This is a frequently asked question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
      defaultOpen: false,
    },
    {
      question:
        "This is a very long frequently asked question about our services with more than one line?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
      defaultOpen: false,
    },
    {
      question: "This is a frequently asked question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
      defaultOpen: false,
    },
    {
      question: "This is a question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
      defaultOpen: false,
    },
    {
      question: "This is a question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-grayscale-01 overflow-hidden px-8">
      {/* Left gradient blur effect */}
      <div className="absolute w-[534px] h-[457px] top-[301px] left-0 rounded-[267px/228.5px] blur-[180px] bg-[linear-gradient(290deg,rgba(252,184,168,1)_0%,rgba(185,104,164,1)_48%,rgba(117,108,246,1)_100%)] opacity-30" />

      {/* Right gradient blur effect */}
      <div className="absolute w-[544px] h-[469px] top-[179px] right-0 rounded-[272px/234.5px] blur-[200px] bg-[linear-gradient(290deg,rgba(252,184,168,1)_0%,rgba(185,104,164,1)_48%,rgba(117,108,246,1)_100%)] opacity-20" />

      <div className="flex flex-col items-center gap-3 mb-16 w-full">
        <h3 className="text-lg md:text-xl font-semibold text-orange-09">
          FAQ's
        </h3>
        <h2 className="text-4xl md:text-4xl font-bold text-grayscale-12 w-full text-center">
          We want to help you <br />with all your doubts
        </h2>
      </div>

      <div className="w-1/2 mx-auto">
        <Accordion type="single" collapsible defaultValue="item-0">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-item-${index}`}
              value={`item-${index}`}
              className="mb-4 rounded-[20px] border border-solid border-[#14131d0a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(20,19,29,0.02)_0%,rgba(20,19,29,0.02)_100%)]"
            >
              <AccordionTrigger className="px-6 py-6 hover:no-underline text-lg md:text-2xl font-semibold">
                <span className="flex-1 text-left">
                  {item.question}
                </span>

              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-base md:text-lg">
                <p className="opacity-80">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};