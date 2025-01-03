"use client";

import { trpc } from "@/app/_trpc/client";
import { Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import { Loader2 } from "lucide-react";
import ServerStatusMenu from "./ServerStatusMenu";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const ServerStatus = () => {
  const { data: serverData, isLoading } = trpc.serverStatus.useQuery();
  const { data: settingsData, isLoading: isSettingsLoading } =
    trpc.settings.useQuery();
  const { data: advancedData, isLoading: isLoadingAdvanced } =
    trpc.advanced.useQuery();
  const { data: ruleData, isLoading: isLoadingRules } = trpc.rules.useQuery();
  console.log(settingsData);
  return (
    <div className="mt-5">
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <div className="flex w-[22.5vw] justify-between">
          <div>
            <h1
              className={cn(
                "uppercase text-sm font-semibold",
                rajdhani.className
              )}
            >
              Players
            </h1>
            <h1
              className={cn(
                "uppercase text-2xl font-semibold",
                rajdhani.className
              )}
            >
              {serverData?.users}/64
            </h1>
          </div>
          <div>
            <h1
              className={cn(
                "uppercase text-sm font-semibold",
                rajdhani.className
              )}
            >
              Ping
            </h1>
            <h1 className={cn("text-2xl font-semibold", rajdhani.className)}>
              {serverData?.ping}ms
            </h1>
          </div>
          <div>
            <h1
              className={cn(
                "uppercase text-sm font-semibold",
                rajdhani.className
              )}
            >
              Tickrate
            </h1>
            <h1 className={cn("text-2xl font-semibold", rajdhani.className)}>
              {serverData?.tickRate}Hz
            </h1>
          </div>
        </div>
      )}
      <div className="mt-4 flex justify-between w-[45vw] gap-8">
        {isSettingsLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ServerStatusMenu heading="settings" data={settingsData!} />
        )}
        {isLoadingAdvanced ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ServerStatusMenu heading="advanced" data={advancedData!} />
        )}
        {isLoadingRules ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ServerStatusMenu heading="Rules" data={ruleData!} />
        )}
      </div>
    </div>
  );
};

export default ServerStatus;
