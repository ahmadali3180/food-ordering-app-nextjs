"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="mt-8">
      <h1 className="text-primary text-4xl text-center mb-4">Register</h1>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>

        <div className="my-4 text-center text-gray-950">
          or Login with social provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="" width={24} height={24} /> Login With
          Google
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
