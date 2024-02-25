"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const session = useSession();
  const status = session.status;

  const handleLogout = async () => {
    signOut();
  };
  return (
    <header className="flex justify-between items-center">
      <nav className="flex gap-8 text-gray-400 font-semibold items-center">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          SK PIZZA
        </Link>
        <Link className="hover:text-primary" href={"/"}>
          Home
        </Link>
        <Link className="hover:text-primary" href={"#Menu"}>
          Menu
        </Link>
        <Link className="hover:text-primary" href={"#About"}>
          About
        </Link>
        <Link className="hover:text-primary" href={"#Contact"}>
          Contact
        </Link>
      </nav>

      <nav className="flex gap-4 text-gray-400 font-semibold items-center">
        {status === "authenticated" && (
          <button
            href={"/login"}
            className="bg-primary text-white px-8 py-2 rounded-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        {status !== "authenticated" && (
          <>
            <Link href={"/login"} className="hover:text-primary">
              Login
            </Link>
            <Link
              className="bg-primary text-white px-8 py-2 rounded-full"
              href={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
