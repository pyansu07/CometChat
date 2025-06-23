import React from "react";

export const TitleLabelSection = () => {
  return (
    <section className="flex flex-col items-start gap-2.5 py-16 px-8 w-full bg-white">
      <div className="flex flex-col items-start gap-3 w-full">
        <h3 className="text-xl md:text-2xl font-semibold text-brand-09">
          Our programs
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold text-grayscale-12 ">
          Types of partnerships <br/>programs
        </h2>
      </div>
    </section>
  );
};