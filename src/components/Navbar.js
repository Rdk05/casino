'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";  // Use `usePathname` from next/navigation

const Navbar = () => {
  const pathname = usePathname();  // Get the current pathname using `usePathname` from next/navigation

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Contact us", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "T&C", path: "/T&C" },
    { label: "Refund Policy", path: "/refund-policy" },
    { label: "Legality", path: "/legality" },
  ];

  return (
    <nav className="bg-[#121217] px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/logo.jpg" alt="Logo" className="h-14 w-auto" />
      </div>

      {/* Centered nav links */}
      <div className="bg-[#65596d] rounded-full px-6 py-2 flex items-center space-x-6">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <span
              className={`cursor-pointer px-4 py-1 rounded-md font-medium ${
                pathname === item.path
                  ? "bg-purple-400 text-white"
                  : "text-white hover:text-purple-300"
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
