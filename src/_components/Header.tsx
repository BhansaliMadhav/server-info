import { ChevronLeft, Star } from "lucide-react";
import React from "react";
import { Roboto_Condensed } from "next/font/google";
import { cn } from "@/lib/utlis";
import { Button } from "@/components/ui/button";

const roboto_Condensed = Roboto_Condensed({ subsets: ["latin-ext"] });

const Header = () => {
  return (
    <div className="">
      <div className="flex">
        <div>
          <ChevronLeft className="w-6 h-6 text-white/20 hover:text-white/70" />
        </div>
        <div>
          <h1 className="font-semibold ml-4 hover:scale-105 cursor-default text-sm pt-[0.125rem] inline text-white/80 hover:text-white">
            MULTIPLAYER
            <span className="ml-2"> /</span>
          </h1>
        </div>
        <div>
          <h1 className="font-semibold ml-4 hover:scale-105 cursor-default text-sm pt-[0.125rem] inline text-white/80 hover:text-white">
            SERVER BROWSER
            <span className="ml-2"> /</span>
          </h1>
        </div>
      </div>
      <h1
        className={cn(
          "ml-10 text-4xl cursor-default uppercase",
          roboto_Condensed.className
        )}
      >
        SERVER INFO
      </h1>
      <div
        className={cn("mt-[4.5rem] max-w-[32vw]", roboto_Condensed.className)}
        style={{}}
      >
        <h1
          style={{ letterSpacing: "3" }}
          className="uppercase text-white text-2xl"
        >
          ! RC3-BASEMAPS
        </h1>
        <p className="uppercase inline-block mt-2">
          🇺🇸 conquest large - Lancang Dam - Custom - 60 hz
        </p>
        <p className="mt-2 text-sm">
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d
        </p>
      </div>
      <div className="mt-8 gap-4 flex">
        <Button
          className={cn("uppercase font-medium", roboto_Condensed.className)}
          variant={"ghost"}
          size={"large_custom"}
          style={{ letterSpacing: "3" }}
        >
          join
        </Button>
        <Button
          className={cn("uppercase font-medium", roboto_Condensed.className)}
          variant={"ghost"}
          size={"large_custom"}
          style={{ letterSpacing: "3" }}
        >
          spectate
        </Button>
        <Button
          className={cn("uppercase font-medium", roboto_Condensed.className)}
          variant={"ghost"}
          size={"large_custom"}
          style={{ letterSpacing: "3" }}
        >
          join as commander
        </Button>
        <Button
          className={cn("uppercase font-medium", roboto_Condensed.className)}
          variant={"ghost"}
          size={"large_custom"}
          style={{ letterSpacing: "3" }}
        >
          <Star className="h-5 w-5 fill-white" /> 13672
        </Button>
      </div>
    </div>
  );
};

export default Header;
