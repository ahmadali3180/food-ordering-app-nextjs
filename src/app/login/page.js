"use client";
import Image from "next/image";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signIn("credentials", { email, password });
    setLoading(false);
  };
  return (
    <section className="mt-8">
      <h1 className="text-primary text-4xl text-center mb-16">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          disabled={loading}
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={loading}
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={loading} type="submit">
          Login
        </button>
        <div className="my-4 text-center text-gray-600 text-sm">
          or Login with social provider
        </div>
        <button disabled={loading} className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="" width={24} height={24} /> Login With
          Google
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
