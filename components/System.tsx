import Image from "next/image";

export default function System() {
  return (
    <div data-aos="fade-up"
      className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-12 md:mt-10 max-w-[1440px]  2xl:max-w-[1600px]        mx-auto overflow-x-hidden">
      {/* Top section: Text and Desktop button */}
      <div className="flex flex-col md:flex-row md:items-start lg:items-end md:justify-between mb-6 md:mb-10">
        {/* Text */}
        <div className="max-w-4xl">
          <h1 data-aos="fade-up" className="hidden md:block text-[25px] lt-semibold text-[#010A12] md:text-4xl lg:text-[42px] leading-tight mb-2">
            Vent-Axia Pozidry Pro Heated System
          </h1>
          <h1 data-aos="fade-up" className="md:hidden text-[25px] lt-semibold text-[#010A12] leading-tight mb-2">
            Vent-Axia Pozidry Pro Heated System choose us?
          </h1>
          <p data-aos="fade-up" className="text-[#0A1B2A] text-base lg:text-[17px] leading-relaxed max-w-[70ch]">
            This top-tier heated PIV system ensures cozy, energy-saving
            ventilation throughout the year. It can cut down condensation by as
            much as 90%, operates efficiently, runs quietly, and keeps indoor
            temperatures just right.
          </p>
        </div>

        {/* Desktop Button (hidden on mobile) */}
        <div data-aos="fade-up" className="hidden md:block mt-6 md:mt-0">
          <button
            className="flex items-center justify-center gap-2 bg-[#B6E2FB] text-[#010A12] text-sm lt-semibold px-5 py-3 rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 whitespace-nowrap cursor-pointer"
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
        </div>
      </div>

      {/* Mobile image */}
      <div data-aos="fade-up" className="md:hidden block mb-6">
        <Image
          alt="Vent-Axia Pozidry Pro Heated System device"
          className="h-80 w-full rounded-2xl object-cover"
          height={800}
          src="/images/33.webp"
          width={1200}
          priority
        />
      </div>

      {/* Mobile Button */}
      <div data-aos="fade-up" className="md:hidden flex justify-center">
        <button
          className="flex items-center justify-center gap-2 bg-[#B6E2FB] lt-semibold text-[#010A12] text-sm px-5 py-3 rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 whitespace-nowrap w-full"
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
      </div>

      {/* Desktop image */}
      <div className="hidden md:block -mx-6 sm:-mx-10 md:-mx-4 lg:-mx-5 relative h-[400px] md:h-[500px] lg:h-[900px] rounded-4xl overflow-hidden ">
        <Image
          alt="Vent-Axia Pozidry Pro Heated System device"
          className="object-cover"
          src="/images/33.webp"
          priority
          layout="fill"
        />
      </div>
    </div>
  );
}
