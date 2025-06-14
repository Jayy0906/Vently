"use client";

import Image from "next/image";
import Link from "next/link";

export default function DesktopHeader() {
  return (
    <header
      data-aos="fade-up"
      className="relative z-50 hidden md:block top-0 left-0 right-0 md:px-3 lg:px-6 xl:px-6 py-3 2xl:py-4 mt-8 mb-6 mx-6 bg-black/50 backdrop-blur-md rounded-b-2xl rounded-t-2xl md:w-[690px] lg:w-[930px] xl:w-[1100px] 2xl:w-[1300px] mx-auto"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between text-white font-light tracking-wide">
        {/* Left - Logo + Nav */}
        <div className="flex items-center md:gap-4 lg:gap-8">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 text-white text-lg font-semibold">
              <Image src="/icons/logo.svg" alt="house" width={76} height={46} />
            </div>
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-white/30" />

          {/* Nav links */}
          <nav className="flex items-center gap-6 text-[16px] lt-regular relative">
            <Link href="/about-us" className="hover:text-white/80">
              about us
            </Link>

            {/* Dropdown wrapper */}
            <div className="relative group">
              <div className="relative">
                <button className="flex items-center gap-1 hover:text-white/80 cursor-pointer">
                  piv installation
                  <Image
                    src="/icons/down-white.svg"
                    alt="Dropdown arrow"
                    width={10}
                    height={16}
                  />
                </button>

                {/* Transparent spacer to prevent dropdown from closing */}
                <div className="absolute left-0 top-full h-8 w-full pointer-events-none" />

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-8 w-56 border-2 border-black bg-black/30 backdrop-blur-md text-white text-base rounded-xl shadow-lg py-3 px-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-500 z-50">
                  <Link
                    href="/piv-installation"
                    className="block hover:text-white/80"
                  >
                    PIV Installation
                  </Link>
                  <Link
                    href="/how-piv-works"
                    className="block hover:text-white/80"
                  >
                    How PIV works
                  </Link>
                  <Link
                    href="/how-piv-helps"
                    className="block hover:text-white/80"
                  >
                    How PIV helps
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact-us" className="hover:text-white/80">
              contact us
            </Link>
          </nav>
        </div>

        {/* Right - Phone and CTA */}
        <div className="flex items-center gap-4">
          <span className="text-sm lt-regular hover:text-white/80 cursor-pointer">
            00 000 00 00
          </span>
          <Link href="/contact-us">
            <button className="bg-white text-[#010A12] text-sm lt-semibold px-4 py-2 rounded-md shadow-md hover:bg-white/90 cursor-pointer">
              get in touch
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
