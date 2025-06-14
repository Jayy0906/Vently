import Image from "next/image";
import Link from "next/link";

export default function System() {
  return (
    <div className="px-4 md:px-6 lg:px-10 xl:px-10 2xl:px-12 md:mt-10 max-w-[1550px]  2xl:max-w-[1905px]        mx-auto overflow-x-hidden">
      {/* Top section: Text and Desktop button */}
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row md:items-start lg:items-end md:justify-between mb-6 md:mb-10"
      >
        {/* Text */}
        <div className="max-w-4xl md:max-w-[47ch] lg:max-w-4xl xl:max-w-[87ch] 2xl:max-w-[100ch]">
          <h1
            data-aos="fade-up"
            className="hidden md:block text-[25px] lt-semibold text-[#010A12] md:text-4xl lg:text-[42px] 2xl:text-[54px] leading-tight mb-2"
          >
            Vent-Axia Pozidry Pro Heated System
          </h1>
          <h1
            data-aos="fade-up"
            className="md:hidden text-[25px] lt-semibold text-[#010A12] leading-tight mb-2"
          >
            Vent-Axia Pozidry Pro Heated System choose us?
          </h1>
          <p
            data-aos="fade-up"
            className="text-[#010A12] text-[16px] md:text-[17px] 2xl:text-[18px] leading-relaxed max-w-[70ch] xl:max-w-[80ch]"
          >
            This top-tier heated PIV system ensures cozy, energy-saving
            ventilation throughout the year. It can cut down condensation by as
            much as 90%, operates efficiently, runs quietly, and keeps indoor
            temperatures just right.
          </p>
        </div>

        {/* Desktop Button */}
        <div data-aos="fade-up" className="hidden md:block mt-6 md:mt-0">
          <Link href="/how-piv-works">
            <button
              className="flex items-center justify-center gap-2 bg-[#B6E2FB] text-[#010A12] text-[16px] 2xl:text-[18px] lt-semibold px-5 py-4 rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 whitespace-nowrap cursor-pointer"
              type="button"
            >
              discover the pozidry pro
              <Image
                src="/icons/right-up.svg"
                alt="Arrow icon"
                width={10}
                height={15}
              />
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile image */}
      <div className="md:hidden block mb-6">
        <Image
          alt="Vent-Axia Pozidry Pro Heated System device"
          className="h-80 w-full rounded-2xl"
          height={800}
          src="/images/33.webp"
          width={1200}
          priority
        />
      </div>

      {/* Mobile Button */}
      <div className="md:hidden  justify-center w-full">
        <Link href="/how-piv-works">
        <button
          className="flex items-center justify-center gap-2 bg-[#B6E2FB] lt-semibold text-[#010A12] text-[16px] px-5 py-3 rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 whitespace-nowrap w-full"
          type="button"
        >
          Discover the Pozidry Pro
          <Image
            src="/icons/right-up.svg"
            alt="Arrow icon"
            width={10}
            height={15}
          />
        </button>
        </Link>
      </div>

      {/* Desktop image */}
      <div className="hidden md:block -mx-6 sm:-mx-10 md:-mx-4 lg:-mx-5 relative h-[400px] md:h-[500px] lg:h-[900px] rounded-4xl overflow-hidden ">
        <Image
          alt="Vent-Axia Pozidry Pro Heated System device"
          className=""
          src="/images/33.webp"
          priority
          layout="fill"
        />
      </div>
    </div>
  );
}
