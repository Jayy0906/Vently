import Image from "next/image";
import Link from "next/link";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../Desktopheader";

export default function UnderstandSectionHeader() {
  return (
    <>
      {/* Header - Mobile */}
      <MobileHeader />

      <div className={`mt-6 mb-6 md:mx-6 mx-4`}>
        {/* Header: Desktop */}
        <DesktopHeader />

        {/* Main Content */}
        <main
          data-aos="fade-up"
          className="relative max-w-[1440px] 2xl:max-w-[1905px] mx-auto mt-10 md:mt-14 xl:mt-18 px-0 lg:px-6 xl:px-6 text-center text-white flex flex-col items-center lg:items-start gap-6"
        >
          {/* Hero Text */}
          <section className="flex flex-col items-center lg:items-start w-full ">
            {/* Breadcrumb */}
            <div
              data-aos="fade-up"
              className="flex items-center gap-2 text-[16px] lg:text-[21px] xl:text-[19px] 2xl:text-xl text-[#010A12] mb-2"
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
              <Link href="/understand-the-risks" className="hover:underline">
                understand the risks
              </Link>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-[27px] md:text-[3rem] lg:text-[4.5rem] leading-tight lt-semibold max-w-[20ch] md:max-w-[20ch] lg:max-w-[17ch] text-center lg:text-start  text-[#010A12] md:mt-8 lg:mt-0"
            >
              Why Choose Positive Input Ventilation (PIV)?
            </h1>

            <p
              data-aos="fade-up"
              className="text-[16px] lg:text-[21px] xl:text-[19px] 2xl:text-xl max-w-[40ch] md:max-w-[51ch] text-[#010A12] mb-"
            >
              Brilliant At Combating Dampness, Condensation & Indoor Air Quality
            </p>

            {/* Button for Mobile/Tablet */}
            {/* Button Wrapper */}
            <div className="w-full max-w-none">
              <Link href="/contact-us">
                <button
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
                       absolute bottom-5 lg:right-6 xl:right-6 z-10"
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
          className="hidden md:block border-t border-gray-300 mt-6"
        />
      </div>
    </>
  );
}
