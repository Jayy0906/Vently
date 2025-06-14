import Image from "next/image";
import Link from "next/link";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../Desktopheader";

export default function Home() {
  return (
    <>
      {/* Header - Mobile */}
      <MobileHeader />

      <div className={`mt-6 mb-6 lg:mx-6 mx-4`}>
        {/* Header: Desktop */}
        <DesktopHeader />

        {/* Main Content */}
        <main
          data-aos="fade-up"
          className="relative max-w-[1440px] 2xl:max-w-[1905px] mx-auto mt-10 md:mt-14 xl:mt-18 md:px-2 xl:px-6 2xl:px-6 text-center text-white flex flex-col items-center lg:items-start gap-6"
        >
          {/* Hero Text */}
          <section className="flex flex-col items-center lg:items-start max-w-8xl w-full md:w-auto">
            {/* Breadcrumb */}
            <div
              data-aos="fade-up"
              className="flex items-center gap-2 text-[16px] xl:text-[19px] 2xl:text-xl text-[#010A12] mb-2"
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
              <Link href="/piv-installation" className="hover:underline">
                PIV Installation
              </Link>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-[27px] md:text-[3rem] lg:text-[4.5rem] leading-tight lt-semibold max-w-[18ch] md:max-w-[48ch] text-[#010A12] md:mt-8 lg:mt-0"
            >
              PIV Unit Installation
            </h1>

            <p
              data-aos="fade-up"
              className="text-[16px] xl:text-[19px] 2xl:text-xl max-w-[40ch] md:max-w-[51ch] text-[#010A12]"
            >
              Brilliant At Combating Dampness, Condensation & Indoor Air Quality
            </p>

            {/* Button for Mobile/Tablet */}
            <div className="w-full md:auto">
              <Link href="/contact-us">
              <button
                data-aos="fade-up"
                type="button"
                className="lg:hidden w-full flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#010A12] text-[16px] lt-semibold rounded-lg px-4 py-3 mt-8 hover:bg-[#A9D4FF] transition cursor-pointer"
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
            </div>
          </section>

          {/* Desktop Button */}
          <Link href="/contact-us">
            <button
              data-aos="fade-up"
              type="button"
              className="hidden lg:flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#010A12] text-[16px] lt-semibold rounded-lg px-4 py-3 hover:bg-[#A9D4FF] transition cursor-pointer
                       absolute bottom-5 right-6 2xl:right-1 z-10"
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
        </main>
        <hr
          data-aos="fade-up"
          className="border-t border-gray-300 mt-10 md:mt-6"
        />
      </div>
    </>
  );
}
