"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function Header() {
  const session = useSession();
  const status = session.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName) {
    if (userName.split(" ").length == 2) {
      var [firstName, lastName] = userName.split(" ");
      userName = `${firstName} ${lastName}`;
    } else if (userName.split(" ").length == 3) {
      var [firstName, middleName, lastName] = userName.split(" ");
      userName = `${middleName}`;
    }
  }

  const handleLogout = async () => {
    await signOut(null, (callback) => callback("/login"));
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

      <nav className="flex gap-6 text-gray-400 font-semibold items-center">
        {status === "authenticated" && (
          <>
            <Link
              href={"/profile"}
              className="hover:text-primary/85 w-full tracking-tighter whitespace-nowrap"
            >
              Hello, {userName}
            </Link>
            <button
              href={"/login"}
              className="bg-primary border-0 text-white px-8 py-2 rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href={"/login"} className="hover:text-primary">
              Login
            </Link>
            <Link
              className="bg-primary border-0 text-white px-8 py-2 rounded-full"
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
