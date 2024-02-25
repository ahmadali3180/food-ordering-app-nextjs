"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setUserCreated(false);
    setError(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  };

  return (
    <section className="mt-8">
      <h1 className="text-primary text-4xl text-center mb-16">Register</h1>

      {userCreated && (
        <div className="my-4 text-center">
          User Created.
          <br />
          Now you can{" "}
          <Link className="underline text-primary" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occured.
          <br />
          Please try again.
        </div>
      )}

      {creatingUser && (
        <div className="my-4 text-center text-lg">Loading...</div>
      )}

      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          disabled={creatingUser}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={creatingUser}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={creatingUser} type="submit">
          Register
        </button>
        <div className="my-4 text-center text-gray-600 text-sm">
          or Login with social provider
        </div>
        <button disabled={creatingUser} className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="" width={24} height={24} /> Login With
          Google
        </button>
      </form>
      <div className="text-center mt-12 text-gray-500 text-sm">
        Existing account?{" "}
        <Link className="underline text-primary" href={"/login"}>
          Login Here &raquo;
        </Link>
      </div>
    </section>
  );
}

export default RegisterPage;
