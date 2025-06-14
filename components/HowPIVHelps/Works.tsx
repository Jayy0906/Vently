import Image from "next/image";
import Link from "next/link";

export default function works() {
  return (
    <div
      data-aos="fade-up"
      className={`px-4 sm:px-10 md:px-6 lg:px-12 xl:px-11 2xl:px-12 py-16 mt-6 md:mt-4 lg:mt-16 max-w-[1440px] 2xl:max-w-[1905px] mx-auto overflow-x-hidden`}
    >
      {/* Content + Image Section */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row lg:items-stretch items-center justify-between gap-10 md:gap-14 2xl:gap-28">
        {/* Text Content */}
        <div className="w-full md:w-full lg:w-1/3 lg:flex lg:flex-col lg:justify-between">
          <h1
            data-aos="fade-up"
            className="text-[30px] md:text-4xl lg:text-[42px] 2xl:text-[54px] text-[#010A12] lt-semibold leading-tight mb-4 2xl:mb-0"
          >
            How a PIV Unit Works:
          </h1>
          <p
            data-aos="fade-up"
            className="text-[#010A12] text-[17px] 2xl:text-[20px] leading-relaxed mb-6 lg:mb-50 xl:mb-99 2xl:mb-86"
          >
            Quietly installed in your loft or attic, our PIV units draw fresh
            air from outside, passing it through advanced filters. The filtered
            air gently circulates throughout your home, displacing stale air
            through natural gaps and vents, ensuring continuous ventilation with
            minimal energy usage.
          </p>
          <Link href="/contact-us">
            <button
              type="button"
              className="w-full /* Default for sm */
                       md:w-full /* Full width for md screens */
                       lg:lg:w-[170px]
                       flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#010A12] text-[16px] 2xl:text-[20px] px-5 py-4 lt-semibold rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 cursor-pointer"
            >
              get in touch
              <Image
                src="/icons/right-up.svg"
                alt="Arrow icon"
                width={10}
                height={15}
              />
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="hidden md:block w-full md:w-full lg:w-2/3 drop-shadow-[0_30px_50px_rgba(107,114,128,0.25)]">
          <Image
            src="/images/fitted.webp"
            alt="Vent-Axia Pozidry Pro Heated System device"
            className="w-full 2xl:w-[full] 2xl:h-[60vh] rounded-2xl object-cover"
            width={1400}
            height={600}
            priority
          />
        </div>
      </div>

      {/* Mobile-only image */}
      <div className="md:hidden mt-8">
        <Image
          src="/images/fitted.webp"
          alt="Pozidry Pro Heated System - mobile view"
          className="w-full rounded-2xl object-cover shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]"
          width={1200}
          height={600}
          priority
        />
      </div>
      <hr className="hidden md:block border-t border-gray-300 mt-10" />
    </div>
  );
}
