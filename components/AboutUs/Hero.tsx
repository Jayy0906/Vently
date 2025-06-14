"use client";

import Image from "next/image";
import Link from "next/link";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../Desktopheader";

export default function Home() {
  return (
    <>
      {/* Header - Mobile */}
      <MobileHeader />

      <div className="mt-6 mb-6 mx-4">
        {/* Header: Desktop */}
        <DesktopHeader />

        {/* Main Content */}
        <main
          data-aos="fade-up"
          className="max-w-[1550px] 2xl:max-w-[1905px] mx-auto mt-10 md:mt-14 xl:mt-18 md:px-6 lg:px-8 xl:px-16 2xl:px-0 text-center text-white flex flex-col items-center gap-6"
        >
          {/* Hero Text */}
          <section className="flex flex-col w-full items-center md:max-w-8xl">
            {/* Breadcrumb */}
            <div
              data-aos="fade-up"
              className="flex items-center gap-2 text-[16px] xl:text-[19px] 2xl:text-xl text-[#010A12] mb-2 lt-regular"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Image
                src="/icons/right.svg"
                alt="Arrow Right"
                width={10}
                height={16}
              />
              <Link href="/about-us" className="hover:underline">
                About us
              </Link>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="lt-bold text-[26px] sm:text-[32px] md:text-[3rem] lg:text-[3.9rem] xl:text-[4.4rem] 2xl:text-[5.2rem] leading-tight max-w-[17ch] md:max-w-[48ch] xl:max-w-[48ch] 2xl:max-w-[60ch] text-[#010A12] mb-2 md:mb-4"
            >
              No one wants a sauna at home, say goodbye to moisture!
            </h1>

            <p
              data-aos="fade-up"
              className="text-[16px] xl:text-[19px] 2xl:text-xl max-w-[90%] sm:max-w-[38ch] md:max-w-[47ch] lg:max-w-[62ch] xl:max-w-[68ch] text-[#010A12] mb-6 lt-regular"
            >
              Transform your living space into a dry and comfortable haven, free
              from the clutches of moisture and humidity.
            </p>

            <Link href="/contact-us" className="w-full md:w-auto">
              <button
                data-aos="fade-up"
                type="button"
                className="w-full flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#00101F] text-[16px] lt-semibold rounded-lg px-4 py-4 hover:bg-[#A9D4FF] transition cursor-pointer"
              >
                <span>get a quote</span>
                <Image
                  src="/icons/right-up.svg"
                  alt="arrow"
                  width={10}
                  height={16}
                />
              </button>
            </Link>
          </section>

          {/* Hero Image - Desktop & Tablets */}
          <div
            data-aos="fade-up"
            className="hidden md:block w-[375px] md:w-[740px] lg:w-full xl:w-[1400px] 2xl:w-full mt-6 md:mt-5 drop-shadow-[0_90px_50px_rgba(107,114,128,0.25)] 2xl:px-12"
          >
            <Image
              src="/images/hero-about-us-mobile.webp"
              alt="Smiling family sitting in a living room with natural light"
              className="object-cover brightness-95 w-full h-auto max-h-[1100px] rounded-3xl "
              width={1920}
              height={1080}
              quality={100}
              priority
            />
          </div>

          {/* Hero Image - Mobile */}
          <div className="md:hidden w-full mt-6 rounded-t-xl max-w-[100%]">
            <Image
              src="/images/hero-about-us-mobile1.webp"
              alt="Smiling family sitting in a living room with natural light"
              className="object-cover brightness-95 rounded-[30px] w-full h-auto max-h-[860px]"
              width={1920}
              height={1080}
              quality={100}
              priority
            />
          </div>
        </main>
      </div>
    </>
  );
}
