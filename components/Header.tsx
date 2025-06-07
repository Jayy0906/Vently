"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Header Section Mobile */}
      <header data-aos="fade-up" className="flex md:hidden items-center justify-between px-3 mt-4 text-white rounded-lg white">
        <div className="flex items-center gap-2">
          <Image src="/icons/Logo.svg" alt="Logo" width={100} height={70} />
        </div>
        <button className="lt-semibold text-[15px] bg-[#B6E2FB] text-[#010A12] rounded-md px-3 py-1 h-[50px] ml-22">
          get a quote
        </button>
        <Image src="/icons/dots.webp" alt="" height={50} width={50} />
      </header>

      {/* Main Section */}
      <div data-aos="fade-up" className="w-full mx-auto overflow-x-hidden py-8 max-w-[1440px] 2xl:max-w-[1600px] px-2 md:px-4 lg:px-4 xl:px-4 2xl:px-6">
        <div  className=" relative md:h-full lg:h-full xl:h-full h-[360px] 2xl:h-full flex flex-col justify-end">
          <Image
            src="/images/hero.webp"
            alt="Family on couch"
            fill
            priority
            className="object-cover object-center rounded-3xl"
          />

          {/* Navbar */}
          <header data-aos="fade-up" className="hidden md:block fixed top-0 left-0 right-0 z-50 md:px-3 lg:px-6 xl:px-6 py-3 2xl:py-4 mt-8 bg-black/30 backdrop-blur-md rounded-b-2xl md:w-[700px] lg:w-[930px] xl:w-[1200px] mx-auto">
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between text-white font-light tracking-wide">
              {/* Left - Logo + Nav */}
              <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2 text-white text-lg font-semibold">
                  <Image
                    src="/icons/logo.svg"
                    alt="house"
                    width={76}
                    height={46}
                  />
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-white/30" />

                {/* Nav links */}
                <nav className="flex items-center gap-6 text-[16px] lt-regular relative">
                  <a href="/about-us" className="hover:text-white/80">
                    about us
                  </a>

                  {/* Dropdown wrapper */}
                  <div className="relative group">
                    <button className="flex items-center gap-1 hover:text-white/80 cursor-pointer">
                      piv installation
                      <Image
                        src="/icons/down-white.svg"
                        alt="Dropdown arrow"
                        width={10}
                        height={16}
                      />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full mt-8 w-56 border-2 border-black bg-black/30 backdrop-blur-md text-white text-base rounded-xl shadow-lg py-3 px-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                      <a
                        href="/piv-installation"
                        className="block hover:text-white/80"
                      >
                        PIV Installation
                      </a>
                      <a
                        href="/how-piv-works"
                        className="block hover:text-white/80"
                      >
                        How PIV works
                      </a>
                      <a
                        href="/how-piv-helps"
                        className="block hover:text-white/80"
                      >
                        How PIV helps
                      </a>
                    </div>
                  </div>

                  <a href="/contact-us" className="hover:text-white/80">
                    contact us
                  </a>
                </nav>
              </div>

              {/* Right - Phone and CTA */}
              <div className="flex items-center gap-4">
                <span className="text-sm lt-regular hover:text-white/80 cursor-pointer">
                  00 000 00 00
                </span>
                <button className="bg-white text-[#010A12] text-sm lt-semibold px-4 py-2 rounded-md shadow-md hover:bg-white/90 cursor-pointer">
                  get in touch
                </button>
              </div>
            </div>
          </header>

          {/* Hero Content aligned at bottom */}
          <div className="relative z-20 flex flex-col md:flex-row justify-between items-stretch md:items-end px-4 md:px-6 pb-4 md:mb-8 gap-12 md:gap-8">
            {/* Left: Text */}
            <div data-aos="fade-up" className="max-w-[82ch] 2xl:max-w-[99ch] text-white">
              <h1 className="text-[29px] md:text-3xl lg:text-[62.90px] 2xl:text-[80px] lt-bold leading-tight lg:mb-6 md:mb-3 mb-2">
                Say goodbye to damp & condensation forever!
              </h1>
              <hr className="hidden md:block border-gray-200 py-2" />
              <p className="text-base md:text-base 2xl:text-lg mb-0 md:mb-6 lt-regular">
                Trusted Nationwide PIV Installation — from{" "}
                <strong>only £795</strong> fully fitted.
              </p>
              <button className="hidden md:block bg-white text-[#010A12] px-6 py-3 rounded-lg lt-semibold text-sm md:text-base hover:bg-white/90 cursor-pointer">
                get in touch
              </button>
            </div>

            {/* Right: Form - Desktop */}
            <div data-aos="fade-up" className="hidden md:block bg-white text-[#010A12] p-6 rounded-2xl w-full max-w-sm md:max-w-xs shadow-xl md:mt-26 lg:mt-22 xl:mt-55 2xl:mt-95 2xl:max-w-md 2xl:h-[430px]   ">
              <h2 className="text-lg 2xl:text-2xl lt-regular mb-2">
                Want to get rid of dampness?
              </h2>
              <p className="text-sm text-gray-600 mb-4">Fill out the form</p>
              <button className="w-full bg-blue-200 hover:bg-blue-300 text-[#010A12] lt-semibold py-3 rounded mb-4 rounded-xl cursor-pointer">
                get a quote
              </button>
              <hr className="border-gray-300 py-3" />
              <div className="mb-4">
                <label className="block text-sm mb-1">share your name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border rounded-xl border-gray-300 rounded px-3 py-3 text-sm"
                />
              </div>
              <button className="w-full bg-black text-white py-3 rounded mb-4 lt-semibold rounded-xl cursor-pointer">
                ask for a return call
              </button>
              <hr className="border-gray-300 py-3" />
              <p className="text-[15px] text-gray-600">
                Or, call our team at 00 0000 00 00
              </p>
              <p className="text-[12px] text-gray-500">
                By submitting your details, you agree to our{" "}
                <a href="#" className="underline hover:text-[#010A12]/80">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form - Mobile */}
      <div data-aos="fade-up" className="md:hidden px-4">
        <div className="bg-white text-[#010A12] p-6 rounded-2xl w-full mt-10 shadow-2xl">
          <h2 className="text-lg font-semibold mb-2">
            Want to get rid of dampness?
          </h2>
          <p className="text-sm text-gray-600 mb-4">Fill out the form</p>

          <button className="w-full bg-blue-200 hover:bg-blue-300 text-[#010A12] lt-semibold py-2 rounded mb-4 rounded-xl cursor-pointer">
            get a quote
          </button>

          <hr className="border-gray-300 py-3" />

          <div className="mb-4">
            <label className="block text-sm mb-1">share your name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-xl border-gray-300 rounded px-3 py-3 text-sm"
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded mb-4 lt-semibold rounded-xl cursor-pointer">
            ask for a return call
          </button>
          <hr className="border-gray-300 py-3" />

          <p className="text-[15px] text-gray-600">
            Or, call our team at 00 0000 00 00
          </p>
          <p className="text-[11px] text-gray-500">
            By submitting your details, you agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
