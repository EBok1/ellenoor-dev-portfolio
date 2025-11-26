"use client";
import Link from "next/link";
import { useDropdown } from "./hooks/useDropdown";

type MenuItem = {
  href: string;
  label: string;
};

type DropdownProps = {
  onToggle: (value: boolean) => void;
  menuItems: MenuItem[];
};

function Dropdown({ onToggle, menuItems }: DropdownProps) {
  const { isOpen, toggleDropdown, closeDropdown } = useDropdown(onToggle);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <button onClick={toggleDropdown} className="text-lg font-semibold">
        Menu <i className="fa fa-bars pl-1"></i>
      </button>
      {isOpen && (
        <ul className="fixed top-[3.6rem] left-5 right-5 bg-[#fffdf6] shadow-md flex flex-col items-center gap-3 rounded-xl border-[--background] ">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="w-full justify-center items-center flex border-t border-[--background] py-3"
            >
              <Link href={item.href} onClick={closeDropdown}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
