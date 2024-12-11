"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ClientNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <ul className="md:flex gap-8 hidden font-bold">
          <li
            className={`hover:text-white transition-all ease-in-out duration-300 ${
              pathname === "/" ? "text-[#0d144f]" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-white transition-all ease-in-out duration-300 ${
              pathname === "/about" ? "text-[#0d144f]" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`hover:text-white transition-all ease-in-out duration-300 ${
              pathname === "/services" ? "text-[#0d144f]" : ""
            }`}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={`hover:text-white transition-all ease-in-out duration-300 ${
              pathname === "/process" ? "text-[#0d144f]" : ""
            }`}
          ></li>
        </ul>
      </div>
      <div>
        <Button
          buttonStyle="btn-primary hidden md:block"
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
