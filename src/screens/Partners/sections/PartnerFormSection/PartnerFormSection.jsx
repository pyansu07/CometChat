import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const PartnerFormSection = () => {

  const glowingOrbs = [
    {
      size: "w-[33px] h-8",
      position: "top-64 left-[1304px]",
      opacity: "opacity-60",
      subtractSrc: "/src/pics/star.png",
    },
    {
      size: "w-[51px] h-[50px]",
      position: "top-[195px] left-28",
      opacity: "opacity-20",
      subtractSrc: "/src/pics/star.png",
    },
    {
      size: "w-[18px] h-[18px]",
      position: "top-[282px] left-[296px]",
      opacity: "opacity-40",
      subtractSrc: "/src/pics/star.png",
    },
    {
      size: "w-[18px] h-[18px]",
      position: "top-64 left-[907px]",
      opacity: "opacity-40",
      subtractSrc: "/src/pics/star.png",
    },
    {
      size: "w-[24px] h-[24px]",
      position: "top-[120px] right-[80px]",
      opacity: "opacity-50",
      subtractSrc: "/src/pics/star.png",
    },
    {
      size: "w-[40px] h-[40px]",
      position: "bottom-[150px] left-[60px]",
      opacity: "opacity-30",
      subtractSrc: "/src/pics/star.png",
    },
    {
      size: "w-[20px] h-[20px]",
      position: "top-[350px] right-[200px]",
      opacity: "opacity-70",
      subtractSrc: "/src/pics/star.png",
    },
    {
      size: "w-[30px] h-[30px]",
      position: "bottom-[80px] right-[120px]",
      opacity: "opacity-60",
      subtractSrc: "/src/pics/star.png",
    },
    {
      size: "w-[15px] h-[15px]",
      position: "top-[50px] left-[200px]",
      opacity: "opacity-40",
      subtractSrc: "/src/pics/star.png",
    },
  ];

  return (
    <section className="relative w-full bg-grayscaledark-01 py-16 px-0 flex flex-col md:flex-row items-center md:items-start justify-center gap-6 overflow-hidden max-w-full">
      <img
        className="absolute -top-100 -right-100 w-[10001px] h-[1000px] object-contain z-0 opacity-80 mix-blend-lighten"
        alt="1"
        src="/src/pics/Mask group.png"
      />
      <img
        className="absolute bottom-0 right-0 w-[400px] h-[400px] object-contain z-0 opacity-80 mix-blend-lighten"
        alt="2"
        src="/src/pics/comets (1).png"
      />
      <img
        className="absolute bottom-0 -right-10  w-[300px] h-[300px] object-contain z-0 opacity-60 mix-blend-lighten"
        alt="3"
        src="/src/pics/comets (5).png"
      />
      <img
        className="absolute bottom-0 -left-28 w-[500px] h-[500px] object-contain z-0 opacity-60 mix-blend-lighten"
        alt="4"
        src="/src/pics/Comets (4).png"
      />
      <img
        className="absolute -bottom-16 left-0 w-[800px] h-[800px] object-contain z-0 opacity-60 mix-blend-lighten"
        alt="5"
        src="/src/pics/Comets (1).png"
      />
      {glowingOrbs.map((orb, idx) => (
        <img
          key={idx}
          className={`absolute ${orb.position} ${orb.size} ${orb.opacity} z-0`}
          src={orb.subtractSrc}
          alt={`orb-${idx}`}
        />
      ))}
      <div className="relative z-10 flex-[1.2] flex flex-col justify-center items-start gap-6 max-w-xl">
        <h1 className="font-3xl-dark-max font-[number:var(--3xl-dark-max-font-weight)] text-grayscaledark-12 text-[length:var(--3xl-dark-max-font-size)] tracking-[var(--3xl-dark-max-letter-spacing)] leading-[var(--3xl-dark-max-line-height)] [font-style:var(--3xl-dark-max-font-style)] mb-2">
          Join the CometChat<br />partner universe
        </h1>
        <p className="opacity-[0.74] font-xl-body-max font-[number:var(--xl-body-max-font-weight)] text-grayscaledark-12 text-[length:var(--xl-body-max-font-size)] tracking-[var(--xl-body-max-letter-spacing)] leading-[var(--xl-body-max-line-height)] [font-style:var(--xl-body-max-font-style)] mb-4">
          Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
        </p>
      </div>
      <div className="relative z-10 flex-[1.1] flex justify-start w-full max-w-xl">
        <Card className="w-full bg-[#f9f9ff14] rounded-3xl border border-solid border-[#f9f9ff0a] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
          <CardHeader>
            <CardTitle className="font-2xl-dark-max font-[number:var(--2xl-dark-max-font-weight)] text-grayscaledark-12 text-[length:var(--2xl-dark-max-font-size)] tracking-[var(--2xl-dark-max-letter-spacing)] leading-[var(--2xl-dark-max-line-height)] [font-style:var(--2xl-dark-max-font-style)]">
              Became a partner
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-1.5">
              <label className="opacity-[0.74] font-md-light font-[number:var(--md-light-font-weight)] text-grayscaledark-12 text-[length:var(--md-light-font-size)] tracking-[var(--md-light-letter-spacing)] leading-[var(--md-light-line-height)] [font-style:var(--md-light-font-style)]">
                Full name
              </label>
              <Input
                className="bg-[#f9f9ff05] rounded-[14px] border border-solid border-[#f9f9ff1a] h-[50px] px-4 py-[13px] text-grayscaledark-12 opacity-[0.64] font-md-light"
                placeholder="Type your name here..."
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="opacity-[0.74] font-md-light font-[number:var(--md-light-font-weight)] text-grayscaledark-12 text-[length:var(--md-light-font-size)] tracking-[var(--md-light-letter-spacing)] leading-[var(--md-light-line-height)] [font-style:var(--md-light-font-style)]">
                Email address
              </label>
              <div className="flex items-center gap-2 px-4 py-[13px] bg-[#f9f9ff05] rounded-[14px] border border-solid border-[#f9f9ff1a]">
                <MailIcon className="w-4 h-4" />
                <Input
                  className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-grayscaledark-12 opacity-[0.64] font-md-light"
                  placeholder="Type your emailsomething..."
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="opacity-[0.74] font-md-light font-[number:var(--md-light-font-weight)] text-grayscaledark-12 text-[length:var(--md-light-font-size)] tracking-[var(--md-light-letter-spacing)] leading-[var(--md-light-line-height)] [font-style:var(--md-light-font-style)]">
                Companies name
              </label>
              <Input
                className="bg-[#f9f9ff05] rounded-[14px] border border-solid border-[#f9f9ff1a] h-[50px] px-4 py-[13px] text-grayscaledark-12 opacity-[0.64] font-md-light"
                placeholder="Type you company's name"
              />
            </div>

            <Button className="relative px-4 py-3 bg-branddark-09 rounded-xl text-brand-01 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
              <div className="absolute w-10 h-10 top-[-15px] left-[41px] bg-brand-06 rounded-[20px] blur-[20px] opacity-80" />
              <span className="relative">Submit application</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};