
import React from "react";
import { cn } from "../lib/utils";
import Glowingeffect from "../components/ui/Glowingeffect";

const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: "lucide:box",
    title: "Unbox Endless Possibilities",
    description:
      "Open up Inspira UI to discover so many features, you’ll wonder if you’ve wandered into a magical subscription for infinite goodies.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: "lucide:settings",
    title: "Crank the Dials to Eleven",
    description:
      "We packed Inspira UI with enough customizable settings to keep you tweaking forever. If it’s broken, you probably forgot to flip one more switch!",
  },
  {
    area: "md:[grid-area:2/1/3/7] lg:[grid-area:1/5/3/8]",
    icon: "lucide:music",
    title: "Dance Your Way to Better UI",
    description:
      "Forget dull interfaces—Inspira UI brings your Vue and Nuxt apps to life with animations so smooth, you’ll wonder!",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: "lucide:sparkles",
    title: "Spark a Little Magic",
    description:
      "Make your interface shine brighter than your future. Inspira UI turns that dull design into an enchanting experience—fairy dust included!",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: "lucide:search",
    title: "Seek and You Shall Find",
    description:
      "Our search is so advanced it might unearth your lost socks. Just don’t blame us when you realize they don’t match!",
  },
];

const GlowCard = () => (
  <ul className="grid grid-cols-1 grid-rows-none gap-4 overflow-auto xl:max-h-[56rem] xl:grid-rows-2 lg:gap-4 md:grid-cols-12 md:grid-rows-3">
    {gridItems.map((item) => (
      <li key={item.title} className={cn("min-h-[14rem] list-none", item.area)}>
        <div
          className="rounded-2.5xl relative h-full p-2 md:rounded-3xl md:p-3 bg-black"
          style={{
            border: "",
            borderImage: "linear-gradient(90deg, #00ffea, #8f00ff) 1"
          }}
        >
          <Glowingeffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            blur={16}
            borderWidth={2}
            variant="dark"
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {/* Replace with your icon component or SVG. For now, just show the icon name. */}
                <span className="size-4 text-white">{item.icon}</span>
              </div>
              <div className="space-y-3">
                <h3 className="-tracking-4 text-balance pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-white md:text-2xl/[1.875rem]">
                  {item.title}
                </h3>
                <h2 className="font-sans text-sm/[1.125rem] text-white md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  {item.description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default GlowCard;