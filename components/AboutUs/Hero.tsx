import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header: Mobile */}
      <header data-aos="fade-up" className="flex md:hidden items-center justify-between px-4 mt-4 text-white">
        <Image src="/icons/Logo.svg" alt="Logo" width={100} height={60} />
        <button className="text-sm lt-semibold bg-[#B6E2FB] text-black rounded-md px-3 ml-18 py-1 h-[50px]">
          get a quote
        </button>
        <Image src="/icons/dots.webp" alt="menu" width={50} height={50} />
      </header>

      <div className="mt-6 mb-6 mx-6">
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
        <main data-aos="fade-up" className="max-w-[1550px] mx-auto mt-10 md:mt-28 xl:mt-42 px-4 md:px-6 lg:px-0 xl:px-16 2xl:px-24 text-center text-white flex flex-col items-center gap-6">
          {/* Hero Text */}
          <section className="flex flex-col items-center max-w-8xl">
            {/* Breadcrumb */}
            <div data-aos="fade-up" className="flex items-center gap-2 text-xs md:text-sm text-black mb-2 lt-regular">
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
            <h1 data-aos="fade-up" className="lt-semibold text-[27px] md:text-[3rem] lg:text-[3.9rem] xl:text-[5rem] 2xl:text-[5.2rem] leading-tight max-w-[17ch] md:max-w-[34ch] lg:max-w-[48ch] xl:max-w-[48ch] 2xl:max-w-[60ch] text-[#010A12] mb-2 md:mb-4">
              No one wants a sauna at home, say goodbye to moisture!
            </h1>

            <p data-aos="fade-up" className="text-xs md:text-[15px] lg:text-[21px] xl:text-[19px] 2xl:text-xl max-w-[38ch] md:max-w-[47ch] lg:max-w-[46ch] xl:max-w-[68ch] text-black mb-6 lt-regular">
              Transform your living space into a dry and comfortable haven, free
              from the clutches of moisture and humidity.
            </p>

            <button data-aos="fade-up"
              type="button"
              className="w-[340px] md:w-auto flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#00101F] text-sm lt-semibold rounded-lg px-4 py-3 hover:bg-[#A9D4FF] transition cursor-pointer"
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

          {/* Hero Image - Desktop & Tablets */}
          <div data-aos="fade-up" className="hidden md:block w-[375px] md:w-[740px] lg:w-full xl:w-[1400px] 2xl:w-[1550px] mt-6 md:mt-5 rounded-t-xl shadow-[0px_10px_40px_rgba(0,0,0,0.2)]">
            <Image
              src="/images/hero-about-us-mobile.webp"
              alt="Smiling family sitting in a living room with natural light"
              className="object-cover brightness-95 rounded-[30px] w-full h-auto max-h-[860px]"
              width={1920}
              height={1080}
              quality={100}
              priority
            />
          </div>

          {/* Hero Image - Mobile */}
          <div className="md:hidden w-[375px] px-4 mt-6 rounded-t-xl">
            <Image
              src="/images/hero-about-us-mobile.webp"
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
