import Image from "next/image";
import Link from "next/link";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../Desktopheader";

export default function Home() {
  return (
    <>
      {/* Header - Mobile */}
      <MobileHeader />

      <div className="mt-6 mb-6 md:mx-6 mx-4">
        {/* Header: Desktop */}
        <DesktopHeader />

        {/* Main Content */}
        <main
          data-aos="fade-up"
          className="max-w-[1550px] 2xl:max-w-[1905px] mx-auto mt-10 md:mt-14 lg:mt-14 xl:mt-18 md:px-6 lg:px-0 xl:px-16 2xl:px-20 text-center text-white flex flex-col items-center gap-6"
        >
          {/* Hero Text */}
          <section className="flex flex-col items-center max-w-8xl w-full md:w-auto">
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
                How PIV works
              </Link>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="lt-semibold text-[31px] md:text-[2.7rem] lg:text-[3.9rem] xl:text-[5rem] 2xl:text-[5.2rem] leading-tight max-w-[18ch] md:max-w-[34ch] lg:max-w-[29ch] xl:max-w-[48ch] 2xl:max-w-[100ch] text-[#010A12] mb-2 md:mb-4"
            >
              Revitalize Your Home with a Positive Input Ventilation (PIV)
              System
            </h1>

            <p
              data-aos="fade-up"
              className="text-[16px] xl:text-[19px] 2xl:text-xl max-w-[36ch] md:max-w-[47ch] lg:max-w-[47ch] xl:max-w-[68ch] text-[#010A12] mb-6 lt-regular"
            >
              Installing a PIV unit dramatically improves your home&apos;s air
              quality, comfort, and health by addressing these five common
              issues.
            </p>

            <div className="w-full md:w-auto">
              <Link href="/contact-us">
                <button
                  data-aos="fade-up"
                  type="button"
                  className="w-full md:w-auto flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#00101F] text-[16px] lt-semibold rounded-lg px-4 py-3 hover:bg-[#A9D4FF] transition cursor-pointer"
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
        </main>
      </div>
    </>
  );
}
