import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUsPage() {
  return (
    <section
      data-aos="fade-up"
      id="why-us"
      className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-12 pb-10 mt-20 md:mt-0 lg:mt-20 mx-auto max-w-[1550px] 2xl:max-w-[1905px]"
    >
      <h2
        data-aos="fade-up"
        className="text-[30px] md:text-4xl lg:text-[42px] 2xl:text-[54px] lt-semibold text-[#010A12] mb-8"
      >
        Why choose us?
      </h2>

      <div className="border-t border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
        {/* Column 1 */}
        <div className="px-2 py-6 md:py-0 md:px-8 mt-4 flex flex-col">
          <h3
            data-aos="fade-up"
            className="lt-semibold text-[#010A12] text-xl md:text-[20px] 2xl:text-[28px] mb-3"
          >
            Pricing Overview
          </h3>
          <p
            data-aos="fade-up"
            className="lt-normal text-[16px] 2xl:text-[18px] text-[#010A12] leading-relaxed"
          >
            Enjoy a straightforward, all-inclusive price of £795. Choose to pay
            upfront or split your payment into 3 easy instalments via PayPal.
          </p>

          <div className="flex-grow" />

          <Image
            data-aos="fade-up"
            alt="Smiling family of four standing outside their house"
            className="mt-6 md:mt-10 lg:mt-6 md:mb-20 w-full drop-shadow-[0_90px_50px_rgba(107,114,128,0.25)] rounded-xl"
            height={300}
            src="/images/Pricing Overview.webp"
            width={400}
            priority
          />

          {/* Mobile Button */}
          <div data-aos="fade-up" className="md:hidden mt-10">
            <Link href="/contact-us">
              <button
                className="bg-[#B6E2FB] hover:bg-[#a0d8ff] text-[#010A12] text-[16px] lt-semibold rounded-md px-[23px] py-3 flex items-center space-x-2 transition-colors duration-200 cursor-pointer w-full justify-center"
                type="button"
              >
                <span>Get started risk-free</span>
                <Image
                  src="/icons/right-up.svg"
                  alt="Arrow pointing right and up"
                  width={10}
                  height={16}
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className="px-2 py-6 md:py-0 md:px-8 md:mt-4 flex flex-col">
          <h3
            data-aos="fade-up"
            className="lt-semibold text-[#010A12] text-xl md:text-[20px] 2xl:text-[28px] mb-3"
          >
            Complete Installation Package
          </h3>
          <p
            data-aos="fade-up"
            className="lt-normal text-[16px] 2xl:text-[18px] text-[#010A12] leading-relaxed"
          >
            This all-inclusive offer features expert installation, thorough
            condensation evaluation, a 5-year warranty, and top-tier priority
            support.
          </p>

          <div className="flex-grow" />

          <Image
            data-aos="fade-up"
            alt="Close-up of a person’s hands using a yellow power drill"
            className="mt-6 md:mt-10 lg:mt-6 w-full object-cover drop-shadow-[0_90px_50px_rgba(107,114,128,0.25)] rounded-xl"
            height={300}
            src="/images/5.webp"
            width={400}
            priority
          />

          {/* Mobile Button */}
          <div data-aos="fade-up" className="md:hidden mt-10">
            <Link href="/contact-us">
              <button
                className="bg-[#B6E2FB] hover:bg-[#a0d8ff] text-[#010A12] text-[16px] lt-semibold rounded-md px-[21px] py-3 flex items-center space-x-2 transition-colors duration-200 cursor-pointer w-full justify-center"
                type="button"
              >
                <span>Find your local installer</span>
                <Image
                  src="/icons/right-up.svg"
                  alt="Arrow pointing right and up"
                  width={10}
                  height={16}
                />
              </button>
            </Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block mt-7 flex justify-center">
            <Link href="/contact-us">
              <button
                className="bg-[#B6E2FB] hover:bg-[#a0d8ff] text-[#010A12] text-[16px] 2xl:text-[18px] lt-semibold rounded-md px-4 py-4 flex items-center space-x-2 transition-colors duration-200 cursor-pointer w-auto justify-center mx-auto"
                type="button"
              >
                <span>get started risk-free</span>
                <Image
                  src="/icons/right-up.svg"
                  alt="Arrow pointing right and up"
                  width={10}
                  height={16}
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Column 3 */}
        <div className="px-2 py-6 md:py-0 md:px-8 mt-4 flex flex-col">
          <h3
            data-aos="fade-up"
            className="lt-semibold text-[#010A12] text-xl md:text-[20px] 2xl:text-[28px] mb-3"
          >
            No Upfront Costs
          </h3>
          <p
            data-aos="fade-up"
            className="lt-normal text-[16px] 2xl:text-[18px] text-[#010A12] leading-relaxed"
          >
            Experience a completely risk-free service with no deposit required.
            Payment is due on the day of service.
          </p>

          <div className="flex-grow" />

          <Image
            data-aos="fade-up"
            alt="Smiling family of four standing outside their house"
            className="mt-6 md:mt-10 lg:mt-6 md:mb-20 w-full object-cover drop-shadow-[0_90px_50px_rgba(107,114,128,0.25)] rounded-xl"
            height={300}
            src="/images/6.webp"
            width={400}
            priority
          />

          {/* Mobile Button */}
          <div data-aos="fade-up" className="md:hidden mt-10">
            <Link href="/contact-us">
              <button
                className="bg-[#B6E2FB] hover:bg-[#a0d8ff] text-[#010A12] text-[16px] lt-semibold rounded-md px-[22px] py-3 flex items-center space-x-2 transition-colors duration-200 cursor-pointer w-full justify-center"
                type="button"
              >
                <span>Book your free survey</span>
                <Image
                  src="/icons/right-up.svg"
                  alt="Arrow pointing right and up"
                  width={10}
                  height={16}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
