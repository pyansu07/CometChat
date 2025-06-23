import React from "react";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroTitleSection } from "./sections/HeroTitleSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { PartnerFormSection } from "./sections/PartnerFormSection";
import { PartnershipListWrapperSection } from "./sections/PartnershipListWrapperSection";
import { PartnershipTypesSection } from "./sections/PartnershipTypesSection";
import { PreFooterSection } from "./sections/PreFooterSection";
import { TitleLabelSection } from "./sections/TitleLabelSection/TitleLabelSection";
import Marquee from "../../components/ui/marquee";
import Images from "../../components/global/images";

export const Partners = () => {
  return (
    <div className="w-full min-h-screen bg-[#0B0A17] overflow-x-hidden">
      <main className="w-full">
       
        <section className="w-full">
          <NavigationBarSection />
          <PartnerFormSection />
        </section>

        <section className="w-full flex flex-col items-center justify-center gap-8 py-16 px-0 bg-#0A0914">
          <div className="w-full relative overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              <Images.company1 className="w-32 h-16 mx-8 text-white" />
              <Images.company2 className="w-32 h-16 mx-8 text-white" />
              <Images.company3 className="w-32 h-16 mx-8 text-white" />
              <Images.company4 className="w-32 h-16 mx-8 text-white" />
              <Images.company5 className="w-32 h-16 mx-8 text-white" />
              <Images.company6 className="w-32 h-16 mx-8 text-white" />
              <Images.company7 className="w-32 h-16 mx-8 text-white" />
              <Images.company8 className="w-32 h-16 mx-8 text-white" />
              <Images.company9 className="w-32 h-16 mx-8 text-white" />
              <Images.company10 className="w-32 h-16 mx-8 text-white" />
            </Marquee>
          </div>
        </section>

        <HeroTitleSection />

        <div className="w-full">
          <PartnershipTypesSection />
        </div>

        <TitleLabelSection />

        <PartnershipListWrapperSection />

        <div className="w-full">
          <FaqSection />
        </div>

        <PreFooterSection />

        <FooterSection />
      </main>
    </div>
  );
};