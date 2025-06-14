"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  // New state for the PIV Installation dropdown
  const [pivDropdownOpen, setPivDropdownOpen] = useState(false);

  // Function to close both the main menu and the PIV dropdown
  const closeAllMenus = () => {
    setMenuOpen(false);
    setPivDropdownOpen(false);
  };

  return (
    <>
      <header
        data-aos="fade-up"
        className="flex md:hidden items-center justify-between px-3 mt-4 text-white rounded-lg"
      >
        {/* Logo - fixed width, no shrink */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center gap-2 w-[100px]">
            <Image src="/icons/Logo.svg" alt="Logo" width={100} height={70} />
          </div>
        </Link>
        <div className="flex items-center space-x-2">
          <Link href="/contact-us">
            <button className="lt-semibold text-[13px] sm:text-[15px] bg-[#B6E2FB] text-[#010A12] rounded-md px-2 sm:px-3 py-1 h-[40px] whitespace-nowrap flex-shrink-0">
              get a quote
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="focus:outline-none flex-shrink-0"
            aria-label="Open menu"
            // ARIA attributes for menu button
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <Image
              src="/icons/dots.webp"
              alt="Menu Icon"
              height={40}
              width={42}
            />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[100] flex flex-col items-start px-6 py-10 space-y-6 text-[#010A12]">
          <button
            onClick={closeAllMenus} // Close all menus when hitting the main close button
            className="absolute top-[1.3rem] right-[1rem] z-[110]"
            aria-label="Close menu"
          >
            <Image
              src="/icons/Close.svg"
              alt="Close menu"
              width={30}
              height={40}
            />
          </button>

          <Link href="/" onClick={closeAllMenus} className="text-lg">
            Home
          </Link>
          <Link href="/about-us" onClick={closeAllMenus} className="text-lg">
            About Us
          </Link>

          {/* PIV Installation Dropdown Trigger */}
          <div className="w-full">
            {" "}
            {/* Use w-full to make the div span full width for consistent click area */}
            <button
              onClick={() => setPivDropdownOpen(!pivDropdownOpen)}
              className="text-lg flex justify-between items-center w-full focus:outline-none"
              aria-haspopup="true"
              aria-expanded={pivDropdownOpen}
            >
              PIV Installation
              <Image
                src={pivDropdownOpen ? "/icons/up.svg" : "/icons/down.svg"} // Dynamic arrow
                alt={pivDropdownOpen ? "Collapse PIV menu" : "Expand PIV menu"}
                width={10}
                height={16}
                className="transition-transform duration-300" // Smooth rotation
              />
            </button>
            {/* PIV Installation Sub-menu */}
            {pivDropdownOpen && (
              <div className="flex flex-col pl-4 mt-2 space-y-4">
                {" "}
                {/* Indent and add space */}
                <Link
                  href="/piv-installation"
                  onClick={closeAllMenus}
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors" // Smaller font, different color
                >
                  PIV Installation
                </Link>
                <Link
                  href="/how-piv-works"
                  onClick={closeAllMenus}
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors"
                >
                  How PIV Works
                </Link>
                <Link
                  href="/how-piv-helps"
                  onClick={closeAllMenus}
                  className="text-base text-gray-700 hover:text-blue-600 transition-colors"
                >
                  How PIV Helps
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact-us" onClick={closeAllMenus} className="text-lg">
            Contact Us
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-base lt-regular hover:text-white/80 cursor-pointer">
              00 000 00 00
            </span>
            <Link href="/contact-us">
              <button className="bg-white text-[#010A12] text-[13px] lt-semibold px-4 py-2 rounded-md shadow-md hover:bg-white/90 cursor-pointer border border-[#010A12]/18">
                get in touch
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
