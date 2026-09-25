"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Workout", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className={isActive ? "text-brand font-bold" : "text-gray-300 hover:text-white"}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
