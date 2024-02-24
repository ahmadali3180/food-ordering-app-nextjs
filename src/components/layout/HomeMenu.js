import Image from "next/image";
import React from "react";
import { MenuItem } from "../Menu";
import SectionHeader from "./SectionHeader";

function HomeMenu() {
  return (
    <section id="Menu">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[100px] -z-10">
          <Image src={"/sallad1.png"} alt="salad" height={189} width={109} />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image src={"/sallad2.png"} alt="salad" height={195} width={107} />
        </div>
      </div>
      <SectionHeader subHeader={"Check out"} mainHeader={"Menu"} />
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}

export default HomeMenu;
