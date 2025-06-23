import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  const platformData = {
    features: [
      "Chat & Messaging",
      "Voice & Video Calls",
      "Security & Compliance",
      "Extensions",
      "Features at a glance",
      "Webhooks & Bots",
      "Moderation",
      "Analytics & Insights",
    ],
    implementation: ["Widgets", "UI Kits", "SDKs & APIs"],
    technologies: [
      "React Chat SDK & API",
      "Angular Chat SDK & API",
      "Vue Chat SDK & API",
      "IOS Swift Chat SDK & API",
      "Android Kotlin Chat SDK & API",
      "Android Java Chat SDK & API",
      "React Native Chat SDK & API",
      "Ionic/Capacitor Chat SDK & API",
      "WordPress Chat SDK & API",
      "Lavarel/PHP Chat SDK & API",
      "Flutter Chat SDK & API",
      "Next.js Chat SDK & API",
    ],
  };

  const solutionsData = {
    useCases: [
      "Social Community",
      "Marketplace",
      "Healthcare",
      "Education",
      "Virtual Events",
      "On-Demand Service",
      "Dating Apps",
      "Gaming",
    ],
    organizationType: ["Enterprise", "Startups"],
  };

  const developersData = {
    techDocs: [
      "React",
      "Angular",
      "Vue",
      "IOS Swift",
      "Android Kotlin",
      "Android Java",
      "React Native",
      "Ionic/Capacitor",
      "WordPress",
      "Lavarel/PHP",
      "Flutter",
      "Next.js",
    ],
    documentation: [
      "Documentation",
      "Product updates",
      "Tutorials",
      "Open-source Apps",
      "Product status",
      "Glossary",
    ],
  };

  const resourcesData = [
    "Customer stories",
    "Blog",
    "Give feedback",
    "Community forum",
    "Help center",
    "Partners",
  ];

  const competitorsData = [
    "SendBird",
    "GetStream",
    "Applozic",
    "Twilio",
    "PubNub",
  ];

  const companyData = [
    "About us",
    "Careers",
    "Partners",
    "Pricing",
    "Chat with us",
  ];

  const socialMedia = [
    { name: "Facebook", icon: <FacebookIcon className="w-4 h-4" /> },
    { name: "LinkedIn", icon: <LinkedinIcon className="w-4 h-4" /> },
    { name: "Instagram", icon: <InstagramIcon className="w-4 h-4" /> },
    { name: "Twitter", icon: <TwitterIcon className="w-4 h-4" /> },
    { name: "GitHub", icon: <GithubIcon className="w-4 h-4" /> },
  ];

  // Accordion state for mobile
  const [open, setOpen] = useState(null);

  // Helper for mobile accordion
  const renderAccordionSection = (title, content, idx) => (
    <div className="border-b border-[#232136]">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-branddark-09 font-semibold text-lg focus:outline-none"
        onClick={() => setOpen(open === idx ? null : idx)}
      >
        <span>{title}</span>
        <span className="text-xl">{open === idx ? '-' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-[1000px] py-2' : 'max-h-0 py-0'}`}>
        {content}
      </div>
    </div>
  );

  // Mobile accordion content for each section
  const mobileSections = [
    {
      title: 'Platform',
      content: (
        <div className="pl-2 flex flex-col gap-2 text-sm text-grayscaledark-12">
          <div className="font-bold text-white/70">Features</div>
          {platformData.features.map((f, i) => <div key={i}>{f}</div>)}
          <div className="mt-2 font-bold text-white/70">Implementation</div>
          {platformData.implementation.map((f, i) => <div key={i}>{f}</div>)}
          <div className="mt-2 font-bold text-white/70">Technologies</div>
          {platformData.technologies.map((f, i) => <div key={i}>{f}</div>)}
        </div>
      )
    },
    {
      title: 'Solutions',
      content: (
        <div className="pl-2 flex flex-col gap-2 text-sm text-grayscaledark-12">
          <div className="font-bold text-white/70">By Use cases</div>
          {solutionsData.useCases.map((f, i) => <div key={i}>{f}</div>)}
          <div className="mt-2 font-bold text-white/70">By Organization Type</div>
          {solutionsData.organizationType.map((f, i) => <div key={i}>{f}</div>)}
        </div>
      )
    },
    {
      title: 'Developers',
      content: (
        <div className="pl-2 flex flex-col gap-2 text-sm text-grayscaledark-12">
          <div className="font-bold text-white/70">Technologies documentation</div>
          {developersData.techDocs.map((f, i) => <div key={i}>{f}</div>)}
          <div className="mt-2 font-bold text-white/70">Documentation</div>
          {developersData.documentation.map((f, i) => <div key={i}>{f}</div>)}
        </div>
      )
    },
    {
      title: 'Resources',
      content: (
        <div className="pl-2 flex flex-col gap-2 text-sm text-grayscaledark-12">
          {resourcesData.map((f, i) => <div key={i}>{f}</div>)}
        </div>
      )
    },
    {
      title: 'Competitors',
      content: (
        <div className="pl-2 flex flex-col gap-2 text-sm text-grayscaledark-12">
          {competitorsData.map((f, i) => <div key={i}>{f}</div>)}
        </div>
      )
    },
    {
      title: 'Company',
      content: (
        <div className="pl-2 flex flex-col gap-2 text-sm text-grayscaledark-12">
          {companyData.map((f, i) => <div key={i}>{f}</div>)}
        </div>
      )
    },
  ];

  return (
    <footer className="w-full bg-grayscaledark-01 pt-14 pb-10">
      <div className="w-full px-8">
        {/* Mobile Accordion */}
        <div className="md:hidden block">
          <div className="mb-4">
            <span className="text-2xl font-bold text-white">comet<span className="text-white/80">chat</span></span>
          </div>
          {mobileSections.map((section, idx) => renderAccordionSection(section.title, section.content, idx))}
        </div>
        {/* Mobile Social Media Section */}
        <div className="block md:hidden mt-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              {socialMedia.map((social, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  {social.icon}
                  <span className="text-xs mt-1">{social.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="text-xs text-white/70">2023 © CometChat</span>
              <div className="flex gap-2">
                <span className="text-xs text-white/90">Terms of Use</span>
                <span className="text-xs text-white/90">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col items-start gap-14 w-full">
          {/* <img className="w-full" alt="Logo" src="/logo-1.svg" /> */}

          <div className="flex flex-col gap-10 w-full">
            <div className="flex gap-20 py-0 w-full">
              {/* Platform Column */}
              <div className="flex flex-col gap-4 flex-1 w-full">
                <h3 className="text-lg md:text-2xl font-bold text-branddark-09">
                  Platform
                </h3>

                <div className="flex flex-col items-start gap-8">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="text-white md:text-lg opacity-70 font-semibold">
                      Features
                    </div>

                    {platformData.features.map((feature, index) => (
                      <div
                        key={`feature-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div
                          className={`text-base md:text-lg opacity-90 ${feature === "Moderation" ? "font-sm-medium font-[number:var(--sm-medium-font-weight)] text-grayscaledark-12 text-[length:var(--sm-medium-font-size)] tracking-[var(--sm-medium-letter-spacing)] leading-[var(--sm-medium-line-height)]" : "font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)]"} whitespace-nowrap [font-style:var(--sm-regular-font-style)]`}
                        >
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="text-white md:text-lg opacity-70 font-semibold">
                      Implementation
                    </div>

                    {platformData.implementation.map((item, index) => (
                      <div
                        key={`implementation-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div className="text-base md:text-lg opacity-90 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] whitespace-nowrap [font-style:var(--sm-regular-font-style)]">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start gap-4">
                    <div className="text-white md:text-lg opacity-70 font-semibold">
                      Technologies
                    </div>

                    {platformData.technologies.map((tech, index) => (
                      <div
                        key={`tech-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div className="text-base md:text-lg opacity-90 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] whitespace-nowrap [font-style:var(--sm-regular-font-style)]">
                          {tech}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Column */}
              <div className="flex flex-col gap-4 flex-1 w-full">
                <h3 className="text-lg md:text-2xl font-bold text-branddark-09">
                  Solutions
                </h3>

                <div className="flex flex-col w-[199px] items-start gap-8">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="text-white md:text-lg opacity-70 font-semibold">
                      By Use cases
                    </div>

                    {solutionsData.useCases.map((useCase, index) => (
                      <div
                        key={`usecase-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div
                          className={`text-base md:text-lg opacity-90 ${useCase === "Virtual Events" ? "[font-family:'Inter',Helvetica] font-normal text-grayscaledark-12 text-sm leading-[14px]" : "font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)]"} whitespace-nowrap [font-style:var(--sm-regular-font-style)]`}
                        >
                          {useCase === "Virtual Events" ? (
                            <span className="text-base md:text-lg font-[number:var(--sm-medium-font-weight)] text-[#f9f9ff] tracking-[var(--sm-medium-letter-spacing)] leading-[var(--sm-medium-line-height)] font-sm-medium [font-style:var(--sm-medium-font-style)] text-[length:var(--sm-medium-font-size)]">
                              Virtual Events{" "}
                            </span>
                          ) : (
                            useCase
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="text-white md:text-lg opacity-70 font-semibold">
                      By Organization Type
                    </div>

                    {solutionsData.organizationType.map((orgType, index) => (
                      <div
                        key={`orgtype-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div className="text-base md:text-lg opacity-90 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] whitespace-nowrap [font-style:var(--sm-regular-font-style)]">
                          {orgType}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Developers Column */}
              <div className="flex flex-col gap-4 flex-1 w-full">
                <h3 className="text-lg md:text-2xl font-bold text-branddark-09">
                  Developers
                </h3>

                <div className="flex flex-col items-start gap-8 w-full">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="text-white md:text-lg opacity-70 font-semibold">
                      Technologies documentation
                    </div>

                    {developersData.techDocs.map((tech, index) => (
                      <div
                        key={`techdoc-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div className="text-base md:text-lg opacity-90 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] whitespace-nowrap [font-style:var(--sm-regular-font-style)]">
                          {tech}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="text-white md:text-lg opacity-70 font-semibold">
                      Documentation
                    </div>

                    {developersData.documentation.map((doc, index) => (
                      <div
                        key={`doc-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div className="text-base md:text-lg opacity-90 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                          {doc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resources, Competitors, Company Column */}
              <div className="flex flex-col gap-10 flex-1 w-full">
                {/* Resources Section */}
                <div className="flex flex-col w-[198.67px] items-start gap-[17px]">
                  <h3 className="text-lg md:text-2xl font-bold text-branddark-09">
                    Resources
                  </h3>

                  <div className="flex flex-col w-[199px] gap-4 mr-[-0.33px]">
                    {resourcesData.map((resource, index) => (
                      <div
                        key={`resource-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div className="text-base md:text-lg opacity-90 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                          {resource}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitors Section */}
                <div className="flex flex-col w-[198.67px] items-start gap-[18px]">
                  <h3 className="text-lg md:text-2xl font-bold text-branddark-09">
                    Competitors
                  </h3>

                  <div className="flex flex-col w-[199px] gap-4 mr-[-0.33px]">
                    {competitorsData.map((competitor, index) => (
                      <div
                        key={`competitor-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div className="text-base md:text-lg opacity-90 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                          {competitor}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Section */}
                <div className="flex flex-col w-[189.33px] items-start gap-[18px]">
                  <h3 className="text-lg md:text-2xl font-bold text-branddark-09">
                    Company
                  </h3>

                  <div className="flex flex-col gap-4 w-full">
                    {companyData.map((item, index) => (
                      <div
                        key={`company-${index}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <div className="text-base md:text-lg opacity-90 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Separator className="w-full h-px" />

            <div className="flex items-center justify-between py-0 w-full">
              <div className="flex items-start gap-6">
                <div className="text-white md:text-lg opacity-70">
                  2023 © CometChat
                </div>

                <div className="flex gap-[22px]">
                  <div className="flex items-start gap-2.5">
                    <div className="text-white md:text-lg opacity-90">
                      Terms of Use
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="text-white md:text-lg opacity-90">
                      Privacy Policy
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                {socialMedia.map((social, index) => (
                  <div
                    key={`social-${index}`}
                    className="flex items-center gap-1 text-white"
                  >
                    {social.icon}
                    <div className="text-white md:text-lg opacity-90">
                      {social.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};