import React from "react";
import { Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";
interface PropsTypes {
  data: Record<string, string | number>;
  heading: string;
}
const rajdhani = Rajdhani({
  weight: ["400", "300", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

const ServerStatusMenu = ({ data, heading }: PropsTypes) => {
  return (
    <div className="mt-4 min-w-[33%] overflow-auto">
      <h1 className={cn("text-sm uppercase", rajdhani.className)}>{heading}</h1>
      <div className="mt-3">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="px-4">
            <div
              className="border-b-[1px] flex justify-between py-1 hover:bg-white hover:text-black px-2"
              style={{ fontSize: "16px", lineHeight: "24px" }}
            >
              <span className={cn("uppercase font-medium", rajdhani.className)}>
                {key}
              </span>{" "}
              <span className={cn("uppercase font-medium", rajdhani.className)}>
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerStatusMenu;
