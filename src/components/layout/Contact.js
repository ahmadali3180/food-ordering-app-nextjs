import React from "react";
import { SectionHeader } from "../layout";
function Contact() {
  return (
    <section className="text-center my-8" id="Contact">
      <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
      <div className="mt-8">
        <a
          className="text-4xl text-gray-500 underline"
          href="tel:+923181817231"
        >
          +92 318 181 7231
        </a>
      </div>
    </section>
  );
}

export default Contact;
