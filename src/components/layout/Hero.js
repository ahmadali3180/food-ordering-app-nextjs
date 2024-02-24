import Image from "next/image";
import React from "react";
import { Right } from "../Icons";

function Hero() {
  return (
    <section className="hero mt-4" id="Hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold leading-tight">
          Everything <br /> is better <br /> with a{" "}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex gap-2 uppercase bg-primary px-4 py-2 rounded-full text-white  items-center">
            Order Now
            <Right />
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold ">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative ">
        <Image
          src={"/pizza.png"}
          alt="pizza"
          layout={"fill"}
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Hero;
