import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[4.5rem] bg-zinc-500/15 border-r-[1.5px] border-white/35 min-h-[100vh] fixed left-0 top-0">
      <div className="flex flex-col">
        <Image
          src="/side-menu__games.png"
          height={195}
          width={50}
          alt="side-menu-image_1"
          className="mt-32"
        />
        <div className="ml-4 mt-2">
          <Image
            src="/side-menu__other.png"
            height={201}
            width={35}
            alt="side-menu-image_1"
          />
        </div>
        <Image
          src="/side-menu__misc.png"
          height={70}
          width={91}
          style={{ scale: "1.5" }}
          alt="side-menu-image_1"
          className="ml-10 mt-32"
        />
      </div>
    </div>
  );
};

export default Sidebar;
