import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = () => {
  const navItems = [
    { label: "Platform", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Developers", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <header className="relative flex w-full items-center justify-between px-8 py-4">
      <img className="h-5 w-auto" alt="Logo" src="/src/pics/logo.png" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-12">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="text-sm text-grayscaledark-12 opacity-[0.84] hover:no-underline"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="link"
          className="text-sm text-grayscaledark-12 opacity-[0.84] hover:no-underline"
        >
          Log in
        </Button>

        <Button className="px-3 py-2 bg-branddark-09 rounded-[10px] text-branddark-12 text-sm relative overflow-hidden">
          <div className="absolute w-8 h-8 -top-3.5 left-[43px] bg-brand-06 rounded-2xl rotate-[145.28deg] blur-[15px] opacity-80" />
          Schedule a demo
        </Button>
      </div>
    </header>
  );
};