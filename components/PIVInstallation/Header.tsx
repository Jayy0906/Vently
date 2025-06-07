import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header: Mobile */}
      <header data-aos="fade-up" className="flex md:hidden items-center justify-between px-4 mt-4 text-white">
        <Image src="/icons/Logo.svg" alt="Logo" width={100} height={60} />
        <button className="text-sm lt-semibold bg-[#B6E2FB] text-[#010A12] rounded-md px-3 ml-18 py-1 h-[50px]">
          get a quote
        </button>
        <Image src="/icons/dots.webp" alt="menu" width={50} height={50} />
      </header>

      <div className={`mt-6 mb-6 mx-6`}>
        {/* Header: Desktop */}
        <header data-aos="fade-up" className="hidden md:block fixed top-0 left-0 right-0 z-50 md:px-3 lg:px-6 xl:px-6 py-3 2xl:py-4 mt-8 bg-black/30 backdrop-blur-md rounded-b-2xl rounded-t-2xl md:w-[700px] lg:w-[930px] xl:w-[1200px] mx-auto">
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

        {/* Main Content */}
        <main data-aos="fade-up" className="relative max-w-[1440px] mx-auto mt-10 md:mt-18 lg:mt-34 xl:mt-38 px-4 md:px-6 text-center text-white flex flex-col items-center lg:items-start gap-6">
          {/* Hero Text */}
          <section className="flex flex-col items-center lg:items-start max-w-8xl">
            {/* Breadcrumb */}
            <div data-aos="fade-up" className="flex items-center gap-2 text-xs md:text-sm text-[#010A12] mb-2">
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
            <h1 data-aos="fade-up" className="text-[27px] md:text-[3rem] lg:text-[4.5rem] leading-tight lt-semibold max-w-[18ch] md:max-w-[48ch] text-[#010A12] md:mt-8 lg:mt-0">
              PIV Unit Installation
            </h1>

            <p data-aos="fade-up" className="text-xs md:text-sm max-w-[40ch] md:max-w-[51ch] text-[#010A12] mb-">
              Brilliant At Combating Dampness, Condensation & Indoor Air Quality
            </p>

            {/* Button for Mobile/Tablet - Moved inside the section as it's part of the content flow */}
            <button data-aos="fade-up"
              type="button"
              className="lg:hidden w-[340px] md:w-auto flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#010A12] text-sm lt-semibold rounded-lg px-4 py-3 mt-8 hover:bg-[#A9D4FF] transition cursor-pointer"
            >
              <span>get a quote</span>
              <Image
                src="/icons/right-up.svg"
                alt="arrow"
                width={10}
                height={16}
              />
            </button>
          </section>

          {/* Desktop Button - Absolutely positioned at bottom right */}
          <button data-aos="fade-up"
            type="button"
            className="hidden lg:flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#010A12] text-sm lt-semibold rounded-lg px-4 py-3 hover:bg-[#A9D4FF] transition cursor-pointer
                       absolute bottom-5 right-6 z-10"
          >
            <span>get a quote</span>

            <Image
              src="/icons/right-up.svg"
              alt="arrow"
              width={10}
              height={16}
            />
          </button>
        </main>
        <hr data-aos="fade-up" className="border-t border-gray-300 mt-10" />
      </div>
    </>
  );
}
