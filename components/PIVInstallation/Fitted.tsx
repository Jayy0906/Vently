import Image from "next/image";
import Link from "next/link";

export default function Fitted() {
  return (
    <div
      className={`px-4 sm:px-10 md:px-6 lg:px-12 xl:px-12 2xl:px-12 py-10 lg:mt-0 max-w-[1905px] mx-auto overflow-x-hidden`}
    >
      {/* Content + Image Section */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row lg:items-stretch items-center justify-between gap-10 md:gap-14">
        {/* Text Content */}
        <div className="order-two  md:order-none w-full md:w-full lg:w-1/3 lg:flex lg:flex-col lg:justify-between pb-0 lg:pb-22">
          <h1 className="text-[30px] md:text-4xl lg:text-[38px] xl:text-[42px] 2xl:text-[54px] text-[#010A12] lt-semibold leading-tight mb-4 lg:mb-0 xl:mb-4 2xl:mb-0">
            Where Are PIV Units Fitted?
          </h1>
          <p className="text-[#010A12] text-[17px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] leading-relaxed mb-6 lg:mb-22 xl:mb-20 2xl:mb-20">
            Our mission is as straightforward as a cat walking on a keyboard,
            yet it carries a weighty significance: to deliver clean, fresh, and
            revitalizing indoor air for everyone: yes, even for that one guy who
            insists on cooking fish in the microwave. We firmly believe that
            every breath should be as pure as a mountain spring and free from
            pollutants and allergens, because who wants to inhale the remnants
            of last week’s takeout? The PIVTeam is passionately dedicated to
            turning this lofty vision into reality, one whiff of fresh air at a
            time, while dodging the occasional dust bunny and the existential
            crisis of indoor air quality.
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
        <div className="order-first md:order-none w-full md:w-full lg:w-2/3 xl:w-[740px] md:mb-14 lg:mb-0 pb-18 md:pb-0 drop-shadow-[0_20px_50px_rgba(107,114,128,0.25)]">
          <Image
            src="/images/fitted.webp"
            alt="Vent-Axia Pozidry Pro Heated System device"
            className="w-full rounded-2xl object-cover xl:h-[560px] "
            width={1400}
            height={600}
            priority
          />
        </div>
      </div>
    </div>
  );
}
