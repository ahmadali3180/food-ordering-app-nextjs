import React from "react";
import { SectionHeader } from "../layout";
import Image from "next/image";
function About() {
  return (
    <section className="text-center my-16" id="About">
      <SectionHeader subHeader={"Our Story"} mainHeader={"About us"} />
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[50px] -z-10 scale-[1.1]">
          <Image src={"/sallad1.png"} alt="pizza" height={189} width={109} />
        </div>

        <div className="absolute right-0 top-[274px] -z-10">
          <Image src={"/pizza.png"} alt="piiza" height={225} width={225} />
        </div>
      </div>
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          Welcome to SK Pizza, where passion for pizza meets culinary
          craftsmanship! Nestled in the heart of the bustling city, SK Pizza is
          more than just a restaurant; it's an authentic Italian experience.
        </p>
        <p>
          At SK Pizza, we believe that great pizza starts with the finest
          ingredients and a dedication to traditional methods. Our dough is
          handcrafted daily, using a time-honored recipe that results in the
          perfect balance of chewiness and crispiness. Each pizza is topped with
          only the freshest produce, premium meats, and artisanal cheeses,
          creating flavors that dance on your palate with every bite.
        </p>
        <p>
          Whether you're joining us for a quick lunch, a family dinner, or a
          casual gathering with friends, our warm and inviting atmosphere will
          make you feel right at home. Our friendly staff is dedicated to
          ensuring that every visit to SK Pizza is a memorable one, filled with
          delicious food and genuine hospitality. Come experience the taste of
          Italy at SK Pizza Pizza, where every slice tells a story of tradition,
          quality, and passion for great food. Buon appetito!
        </p>
      </div>
    </section>
  );
}

export default About;
