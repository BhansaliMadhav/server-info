import { cn } from "@/lib/utils";
import { Rajdhani } from "next/font/google";
import React from "react";

const rajdhani = Rajdhani({
  weight: ["400", "300", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

const MapPool = () => {
  const titles = [
    "CONQUEST LARGE DAWNBREAKER",
    "CONQUEST LARGE PROPAGANDA",
    "CONQUEST LARGE OPERATION LOCKER",
    "CONQUEST LARGE LANCANG DAM",
    "CONQUEST LARGE SIEGE OF SHANGHAI",
    "CONQUEST LARGE PROPAGANDA",
    "CONQUEST LARGE SIEGE OF SHANGHAI",
    "CONQUEST LARGE GOLMUD RAILWAY",
    "CONQUEST LARGE DAWNBREAKER",
    "CONQUEST LARGE PROPAGANDA",
    "CONQUEST LARGE OPERATION LOCKER",
    "CONQUEST LARGE LANCANG DAM",
    "CONQUEST LARGE SIEGE OF SHANGHAI",
    "CONQUEST LARGE GOLMUD RAILWAY",
    "CONQUEST LARGE PROPAGANDA",
    "CONQUEST LARGE SIEGE OF SHANGHAI",
  ];

  return (
    <div className="mt-10 max-w-[60vw]">
      <h1 className={cn(rajdhani.className, "text-white uppercase mb-6")}>
        Map rotation
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {titles.map((title, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden bg-black/20 aspect-video flex flex-col transition-transform transition-colors duration-300 ease-in-out hover:bg-white hover:text-black hover:-translate-y-1"
          >
            {/* Image part */}
            <div
              className="flex-1"
              style={{
                backgroundImage: "url('/dawnbreaker.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Title part */}
            <div className="py-2 text-left pl-2 max-w-40">
              <h2
                className={cn(
                  rajdhani.className,
                  "text-sm md:text-base font-bold uppercase"
                )}
              >
                {title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <h1 className={cn("uppercase", rajdhani.className)}>
        Repeated images for the sake of simplicity
      </h1>
    </div>
  );
};

export default MapPool;
