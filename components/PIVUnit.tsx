import Image from "next/image";
import Link from "next/link";

export default function PIVUnitProblems() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="px-4 md:px-6 lg:px-10 xl:px-10 2xl:px-12 max-w-[1550px] 2xl:max-w-[1905px]  mx-auto overflow-x-hidden      "
      >
        {/* Header Section */}
        <div
          data-aos="fade-up"
          className="flex justify-between items-center mb-10 mt-14 md:mt-18 lg:mt-18"
        >
          <h1
            data-aos="fade-up"
            className="text-[30px] md:text-4xl lg:text-[42px] 2xl:text-[54px] lt-semibold text-[#010A12] leading-[40px] md:flex-1 max-w-[18ch] md:max-w-4xl"
          >
            A PIV unit can solve these problems:
          </h1>
          {/* Button */}
          <Link href="/how-piv-helps">
            <button
              data-aos="fade-up"
              aria-label="learn more"
              className="lt-semibold hidden md:flex bg-[#B6E2FB] text-[#010A12] text-[16px] 2xl:text-[18px] leading-[24px] rounded-lg px-5 py-3 items-center gap-2 hover:bg-[#a0d8ff] transition-colors duration-200 cursor-pointer"
              type="button"
            >
              learn more
              <Image
                src="/icons/right-up.svg"
                alt="Right up arrow"
                width={10}
                height={16}
              />
            </button>
          </Link>
        </div>

        <hr
          data-aos="fade-up"
          className="border-[#e5e7eb] -mt-5 my-4 md:hidden block"
        />

        <div className="flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-10 xl:gap-8">
          <div className="order-1 md:order-none flex-1 max-w-lg md:max-w-xs lg:max-w-2xl xl:max-w-xl 2xl:max-w-2xl">
            <div
              aria-labelledby="protect-home-title"
              className="md:bg-white md:rounded-xl md:border md:border-gray-200 p-0 md:p-6 md:shadow-sm mb-10"
              role="region"
            >
              <h2
                data-aos="fade-up"
                className="text-[20px] md:text-[22px] 2xl:text-[28px] lt-semibold text-[#010A12] leading-[28px] mb-3"
                id="protect-home-title"
              >
                Protect Your Home from Mold and Mildew
              </h2>
              <p
                data-aos="fade-up"
                className="hidden md:block lt-normal text-[#010A12] text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[24px] mb-4"
              >
                Prevent mold and mildew before they start. Our PIV systems
                maintain ideal humidity levels, significantly reducing
                mold-friendly conditions. Protect your family&apos;s health and
                your home&apos;s value.
              </p>

              <p
                data-aos="fade-up"
                className="md:hidden lt-normal text-[#010A12] text-[17px] leading-[24px] mb-4"
              >
                Enjoy a straightforward, all-inclusive price of £795. Choose to
                pay upfront or split your payment into 3 easy instalments via
                PayPal.
              </p>
              <a
                data-aos="fade-up"
                className="hidden md:flex text-[16px] 2xl:text-[18px] lt-semibold text-[#010A12] leading-[20px] text-center items-center gap-1 hover:underline transition-colors duration-200"
                href="#"
              >
                eliminate dampness now
                <Image
                  className="hidden md:block"
                  src="/icons/right-up.svg"
                  alt="Right up arrow"
                  width={10}
                  height={16}
                />
              </a>
            </div>

            {/* TABLET/DESKTOP NAVIGATION LINKS */}
            <nav
              aria-label="Other problems PIV unit can solve"
              className="hidden md:block lt-semibold space-y-10 text-gray-500 mt-10 text-[22px] 2xl:text-[30px] ml-6"
            >
              <a
                className="leading-[28px] hover:underline block transition-colors duration-200"
                href="#"
              >
                Allergy and Pollen Relief
              </a>
              <a
                className="leading-[28px] hover:underline block transition-colors duration-200"
                href="#"
              >
                Mold and Mildew Prevention
              </a>
              <a
                className="leading-[28px] hover:underline block transition-colors duration-200"
                href="#"
              >
                Cleaner Indoor Air
              </a>
              <a
                className="leading-[28px] hover:underline block transition-colors duration-200"
                href="#"
              >
                Better Respiratory Health
              </a>
            </nav>
          </div>

          {/* Right Column - Image ( xl & above ) */}
          <div className="hidden xl:flex order-2 md:order-none bg-[#B6E2FB] rounded-3xl p-10 md:p-6 lg:p-18 -mt-10 md:mt-0 flex justify-center items-center flex-1">
            <Image
              alt="Smiling family of four standing in front of a house, father, mother, daughter, and son"
              className="shadow-[0_30px_100px_-20px_var(--tw-shadow-color)] shadow-gray-600 rounded-3xl w-[300px] h-[280px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] object-contain"
              // className="shadow-[0_60px_180px_-20px_var(--tw-shadow-color)] shadow-gray-400 rounded-3xl w-[300px] h-[280px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] object-contain"
              height={600}
              src="/images/1.webp"
              width={900}
              priority
            />
          </div>

          {/* Right Column - Image ( lg & below ) */}
          <div className="xl:hidden order-2 md:order-none bg-[#B6E2FB] rounded-3xl p-10 md:p-4 lg:p-18 -mt-10 md:mt-0 flex justify-center items-center flex-1">
            <Image
              alt="Smiling family of four standing in front of a house, father, mother, daughter, and son"
              className="shadow-[0_80px_80px_-77px_var(--tw-shadow-color)] shadow-gray-600 rounded-sm w-[300px] h-[280px] md:h-[330px] md:w-[350px] lg:h-[500px] lg:w-[500px] object-fill"
              height={600}
              src="/images/1.webp"
              width={900}
              priority
            />
          </div>

          {/* MOBILE-SPECIFIC "learn more" button: Order 2 on mobile */}
          <div
            data-aos="fade-up"
            className="order-3 md:hidden flex justify-center"
          >
            <button
              aria-label="learn more"
              className="bg-[#B6E2FB] text-[#010A12] text-[16px] lt-semibold leading-[24px] rounded-lg w-full px-18 py-3 flex text-center items-center justify-center gap-2 hover:underline transition-colors duration-200 cursor-pointer whitespace-nowrap"
              type="button"
            >
              Eliminate Dampness Now
              <Image
                src="/icons/right-up.svg"
                alt="Right up arrow"
                width={10}
                height={16}
              />
            </button>
          </div>

          {/* MOBILE-SPECIFIC NAVIGATION LINKS: Order 3 on mobile */}
          <div className="order-4 md:hidden flex-1">
            <hr className="border-[#e5e7eb] my-3 block -mt-2 md:-mt-0" />{" "}
            <nav
              aria-label="Other problems PIV unit can solve"
              className="space-y-6 text-gray-400 lt-semibold"
            >
              <a
                className="text-[18px] leading-[28px] hover:underline block transition-colors duration-200"
                href="#"
              >
                Allergy and Pollen Reliefrotect Your Home from Mold and Mildew
              </a>
              <hr className="border-[#e5e7eb] my-3 block" />
              <a
                className="text-[18px] leading-[28px] hover:underline block transition-colors duration-200"
                href="#"
              >
                Mold and Mildew Prevention
              </a>
              <hr className="border-[#e5e7eb] my-3 block" />
              <a
                className="text-[18px] leading-[28px] hover:underline block transition-colors duration-200"
                href="#"
              >
                Cleaner Indoor Air
              </a>
              <hr className="border-[#e5e7eb] my-3 block" />
              <a
                className="text-[18px] leading-[28px] hover:underline block transition-colors duration-200"
                href="#"
              >
                Better Respiratory Health
              </a>
              <hr className="border-[#e5e7eb] my-3 block" />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
