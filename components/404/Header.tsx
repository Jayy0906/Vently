"use client";

import Image from "next/image";
import Link from "next/link";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../Desktopheader";

export default function NotFound() {
  return (
    <>
      {/* Header - Mobile */}
      <MobileHeader />

      <div className="mt-6 mb-6 md:mx-6 mx-2">
        {/* Header: Desktop */}
        <DesktopHeader />

        {/* Main Content (404 Page Specific) */}
        <main
          data-aos="fade-up"
          className="max-w-[1550px] mx-auto mt-10 md:mt-14 xl:mt-18 md:px-6 lg:px-0 xl:px-16 2xl:px-24 text-center text-white flex flex-col items-center gap-6"
        >
          {/* Hero Text */}
          <section className="flex flex-col items-center max-w-8xl w-full md:w-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[16px] xl:text-[19px] 2xl:text-xl text-[#010A12] mb-2 lt-regular">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Image
                src="/icons/right.svg"
                alt="Arrow Right"
                width={10}
                height={16}
              />
              <span className="hover:underline">404</span>
            </div>

            {/* Heading */}
            <h1 className="lt-semibold text-[27px] md:text-[3rem] lg:text-[3.9rem] xl:text-[5rem] 2xl:text-[5.2rem] leading-tight max-w-[17ch] md:max-w-[34ch] lg:max-w-[48ch] xl:max-w-[48ch] 2xl:max-w-[60ch] text-[#010A12] mb-2 md:mb-4">
              404
            </h1>

            <p className="text-[16px] xl:text-[19px] 2xl:text-xl max-w-[36ch] md:max-w-[47ch] lg:max-w-[46ch] xl:max-w-[66ch] text-[#010A12] mb-6 lt-regular">
              Oops! It seems like the page you were looking for doesn&apos;t
              exist. Don&apos;t worry, though! You can head back to our
              homepage.
            </p>

            <Link
              href="/"
              className="w-full md:w-auto flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#00101F] text-[16px] lt-semibold rounded-lg px-4 py-3 hover:bg-[#A9D4FF] transition cursor-pointer"
            >
              <span>back to homepage</span>
              <Image
                src="/icons/right-up.svg"
                alt="arrow"
                width={10}
                height={16}
              />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
