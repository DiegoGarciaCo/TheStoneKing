import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const pathname = usePathname();
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav>
      <div
        className={
          "md:hidden transition-opacity duration-500 ease-in-out opacity-100 visible absolute top-0 left-0 bg-slate-300 w-full h-screen z-10 fade-in-30"
        }
      >
        <ul className="md:hidden font-bold flex flex-col justify-center h-screen items-center text-{#0d144f} text-2xl">
          <li
            className={`hover:text-white m-3 transition-all ease-in-out duration-300 ${
              pathname === "/" ? "text-white" : ""
            }`}
          >
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li
            className={`hover:text-white m-3 transition-all ease-in-out duration-300 ${
              pathname === "/about" ? "text-white" : ""
            }`}
          >
            <Link href="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li
            className={`hover:text-white m-3 transition-all ease-in-out duration-300 ${
              pathname === "/services" ? "text-white" : ""
            }`}
          >
            <Link href="/services" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li
            className={`hover:text-white m-3 transition-all ease-in-out duration-300 ${
              pathname === "/process" ? "text-[#0d144f]" : ""
            }`}
          ></li>
          <li
            className={`hover:text-white m-3 transition-all ease-in-out duration-300 ${
              pathname === "/contact" ? "text-white" : ""
            }`}
          >
            <Link href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
