import Image from "next/image";
import Link from "next/link";

export default function OurMission() {
  return (
    <div
      data-aos="fade-up"
      className="px-4 sm:px-10 md:px-6 lg:px-18 xl:px-14 2xl:px-20 py-10 md:mt-16 xl:mt-30 max-w-[1550px] 2xl:max-w-[1905px] mx-auto overflow-x-hidden"
    >
      {/* Content + Image Section */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between gap-10 md:gap-20 xl:pb-20">
        {/* Text Content */}
        <div className="w-full md:w-full lg:w-1/3">
          <h1
            data-aos="fade-up"
            className="text-[30px] lt-semibold md:text-4xl lg:text-[46px] 2xl:text-[54px] text-[#0A1B2A] leading-tight mb-4 md:mb-0 xl:mb-0"
          >
            Our mission
          </h1>
          <p
            data-aos="fade-up"
            className="hidden md:block text-[#010A12] text-[17px] 2xl:text-[18px] leading-relaxed mb-6 md:mb-10 lg:mb-6 xl:mb-8"
          >
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
          <p
            data-aos="fade-up"
            className="md:hidden text-[#010A12] text-[17px] leading-relaxed mb-6"
          >
            Dampness and condensation are significant problems that affect more
            than 1 in 5 homes throughout the UK. These issues can lead to the
            growth of mold, which not only damages the structure of the home but
            also poses serious health risks. Residents may experience a range of
            health issues, including asthma, allergies, and other respiratory
            problems, making it crucial to address these concerns promptly.
          </p>
          <Link href="/contact-us">
            <button
              type="button"
              className="w-full md:w-full lg:w-auto flex justify-center items-center gap-2 lt-semibold bg-[#B6E2FB] text-[#010A12] text-[16px] 2xl:text-[18px] px-5 py-4 rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 cursor-pointer"
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
        <div className="hidden md:block w-full lg:w-2/3 lg:py-10 pb-24 drop-shadow-[0_90px_50px_rgba(107,114,128,0.25)]">
          <Image
            src="/images/OurMission.webp"
            alt="Vent-Axia Pozidry Pro Heated System device"
            className="w-full object-cover rounded-4xl"
            width={1400}
            height={600}
            priority
          />
        </div>
      </div>

      {/* Mobile-only image */}
      <div className="md:hidden mt-8">
        <Image
          src="/images/OurMission-mobile.webp"
          alt="Pozidry Pro Heated System - mobile view"
          className="w-full h-full rounded-2xl object-cover"
          width={1200}
          height={600}
          priority
        />
      </div>
    </div>
  );
}