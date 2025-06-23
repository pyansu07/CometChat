import React from "react";

export const HeroTitleSection = () => {
  return (
    <section className="w-full py-16 px-8 md:px-16 xl:px-32 bg-grayscaledark-01 overflow-x-hidden max-w-full">
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="font-xl-heding-dark-max font-[number:var(--xl-heding-dark-max-font-weight)] text-orangedark-09 text-[length:var(--xl-heding-dark-max-font-size)] tracking-[var(--xl-heding-dark-max-letter-spacing)] leading-[var(--xl-heding-dark-max-line-height)] whitespace-nowrap [font-style:var(--xl-heding-dark-max-font-style)]">
          Be a partner
        </h2>
        <h1 className="font-3xl-dark-max font-[number:var(--3xl-dark-max-font-weight)] text-grayscaledark-12 text-[length:var(--3xl-dark-max-font-size)] tracking-[var(--3xl-dark-max-letter-spacing)] leading-[var(--3xl-dark-max-line-height)] [font-style:var(--3xl-dark-max-font-style)]">
          CometChat partner <br/>advantages
        </h1>
      </div>
    </section>
  );
};