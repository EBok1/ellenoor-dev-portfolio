"use client";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";

function Navigation() {
  const [showBorder, setShowBorder] = useState(false);
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Articles", href: "/articles" },
  ];

  return (
    <>
      <div
        className={`sm:hidden flex justify-end items-center bg-[#fffdf6] rounded-md shadow-md mx-5 mt-5 p-2 float-right ${
          showBorder
            ? "border border-transparent rounded-b-none"
            : "border border-transparent"
        }`}
      >
        <Dropdown onToggle={setShowBorder} menuItems={menuItems} />
      </div>

      <nav className="hidden sm:flex justify-between items-center bg-[#fffdf6] rounded-md shadow-md mx-5 mt-5 pl-3 pr-5">

        <div className="flex gap-20">
          {menuItems.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              className="hover:text-blue-500"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-5">
          {menuItems.slice(3).map((item) => (
            <Link
              key={item.href}
              className="hover:text-blue-500"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
