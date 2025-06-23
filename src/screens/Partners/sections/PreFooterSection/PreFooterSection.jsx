import React from "react";
import { Button } from "../../../../components/ui/button";

export const PreFooterSection = () => {
  return (
    <section className="relative w-full bg-grayscaledark-01 py-24 overflow-hidden">

      <img
        className="absolute -top-36 -left-36 w-[400px] h-[400px] object-contain z-0 opacity-80"
        alt="Blur Layer Heavy"
        src="/pics/Group 1.png"
      />
      <img
        className="absolute bottom-0 right-0 w-[400px] h-[400px] object-contain z-0 opacity-80"
        alt="Blur Layer Heavy 1"
        src="/pics/comets (1).png"
      />

      <div className="relative w-full h-full">

        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full pt-16 px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-grayscaledark-12 w-full mb-4">
            Get started for free
          </h2>
          <p className="text-lg md:text-2xl text-grayscaledark-12 opacity-80 w-full mb-8">
            Build and test for as long as you need. <br />
            Pick a plan when you're ready.
          </p>
          <div className="flex items-center gap-3 w-full justify-center">
            <Button
              variant="outline"
              className="bg-[#f9f9ff05] border-[#f9f9ff1a] text-grayscaledark-12 font-sm-regular text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]"
            >
              Start free trial
            </Button>
            <Button className="bg-brand-09 text-brand-01 font-sm-regular text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)] relative overflow-hidden">
              <div className="absolute w-10 h-10 top-[-15px] left-[41px] bg-brand-06 rounded-[20px] blur-[20px] opacity-80" />
              <span className="relative z-10">Schedule a demo</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};