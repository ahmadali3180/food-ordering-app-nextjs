import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link className="text-primary font-semibold text-2xl" href={""}>
        SK PIZZA
      </Link>
      <nav className="flex gap-8 text-gray-400 font-semibold items-center">
        <Link className="" href={""}>
          Home
        </Link>
        <Link className="" href={""}>
          Menu
        </Link>
        <Link className="" href={""}>
          About
        </Link>
        <Link className="" href={""}>
          Contact
        </Link>
        <Link
          className="bg-primary text-white px-8 py-2 rounded-full"
          href={""}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
