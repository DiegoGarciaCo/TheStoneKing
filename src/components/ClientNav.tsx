"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNav from "./mobileNav";

export default function ClientNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <div className="flex flex-col">
        <div className="ml-auto z-20 pt-3 pr-10">
          <Button
            buttonStyle="btn-mobile md:hidden"
            buttonSize="btn-md"
            type="button"
            text={isOpen ? "X" : "☰"}
            onClick={toggleMenu}
          />
        </div>
        <MobileNav setIsOpen={setIsOpen} />
      </div>
    );
  }

  return (
    <nav
      className={`flex justify-around items-center p-3  bg-transparent w-full z-10 text-white ${
        pathname !== "/" ? "active" : " absolute top-0 left-0"
      }`}
    >
      <div>
        <h2 className="text-xl font-bold">The Stone King</h2>
      </div>
      <div>
        <ul className="md:flex gap-8 hidden font-bold text-[#ffffffd1]">
          <li
            className={`hover:text-[#9a9a9a] transition-all ease-in-out duration-300 ${
              pathname === "/" ? "text-white" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-[#9a9a9a] transition-all ease-in-out duration-300 ${
              pathname === "/about" ? "text-white" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`hover:text-[#9a9a9a] transition-all ease-in-out duration-300 ${
              pathname === "/services" ? "text-white" : ""
            }`}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={`hover:text-[#9a9a9a] transition-all ease-in-out duration-300 ${
              pathname === "/process" ? "text-white" : ""
            }`}
          ></li>
        </ul>
      </div>
      <div>
        <Button
          buttonStyle="btn-outline hidden md:block"
          buttonSize="btn-md"
          type="button"
          text={<Link href="/contact">Contact Us</Link>}
        />
        <Button
          buttonStyle="btn-mobile md:hidden"
          buttonSize="btn-md"
          type="button"
          text={isOpen ? "✖" : "☰"}
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
}
