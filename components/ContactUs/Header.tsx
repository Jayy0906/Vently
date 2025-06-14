import Image from "next/image";
import Link from "next/link";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../Desktopheader";

export default function Home() {
  return (
    <>
      {/* Header - Mobile */}
      <MobileHeader />

      <div className={`mt-6 mb-6 mx-6`}>
        {/* Header: Desktop */}
        <DesktopHeader />

        {/* Main Content */}
        <main
          data-aos="fade-up"
          className="z-0 max-w-[1550px] mx-auto mt-10 md:mt-14 xl:mt-18 px-4 md:px-6 text-center text-white flex flex-col items-center gap-6"
        >
          {/* Hero Text */}
          <section className="flex flex-col items-center max-w-8xl">
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
              <Link href="/about-us" className="hover:underline">
                Contact
              </Link>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-[27px] md:text-[2.8rem] lg:text-[4.5rem] leading-tight lt-semibold max-w-[18ch] md:max-w-[24ch] lg:max-w-[48ch] text-[#010A12] mb-2 md:mb-4"
            >
              Contact us
            </h1>

            <p
              data-aos="fade-up"
              className="text-[16px] xl:text-[19px] 2xl:text-xl max-w-[40ch] md:max-w-[47ch] lg:max-w-[62ch] xl:max-w-[62ch] text-[#010A12] mb-6"
            >
              Please complete the enquiry form below, and we will get in touch
              with you shortly.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
