import Image from "next/image";

export default function OurMission() {
  return (
    <div data-aos="fade-up"
      className="bg-white px-4 sm:px-10 md:px-6 lg:px-18 xl:px-14 2xl:px-6 py-10 md:mt-16 max-w-[1550px] mx-auto overflow-x-hidden"
    >
      {/* Content + Image Section */}
      {/* Changed md:flex-row to md:flex-col, and added lg:flex-row to revert */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between gap-10 md:gap-14">
        {/* Text Content */}
        {/* Changed md:w-1/3 to md:w-full, and added lg:w-1/3 to revert */}
        <div className="w-full md:w-full lg:w-1/3">
          <h1 data-aos="fade-up" className="text-[30px] lt-semibold md:text-4xl lg:text-[46px] text-[#0A1B2A] leading-tight mb-4">
            Our mission
          </h1>
          <p data-aos="fade-up" className="hidden md:block text-[#010A12] text-sm sm:text-base leading-relaxed mb-6">
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
          <p data-aos="fade-up" className="md:hidden text-[#010A12] text-sm sm:text-base leading-relaxed mb-6">
            Dampness and condensation are significant problems that affect more
            than 1 in 5 homes throughout the UK. These issues can lead to the
            growth of mold, which not only damages the structure of the home but
            also poses serious health risks. Residents may experience a range of
            health issues, including asthma, allergies, and other respiratory
            problems, making it crucial to address these concerns promptly.
          </p>
          <button data-aos="fade-up"
            type="button"
            // Changed md:w-auto to md:w-full, and added lg:w-auto to revert
            className="w-full md:w-full lg:w-auto flex justify-center items-center gap-2 lt-semibold bg-[#B6E2FB] text-[#010A12] text-sm sm:text-base px-5 py-3 rounded-md hover:bg-[#a0d8ff] transition-colors duration-200"
          >
            get in touch
            <Image
              src="/icons/right-up.svg"
              alt="Arrow icon"
              width={10}
              height={15}
            />
          </button>
        </div>

        {/* Image */}
        <div className="hidden md:block w-full md:w-full lg:w-2/3">
          <Image
            src="/images/OurMission.webp"
            alt="Vent-Axia Pozidry Pro Heated System device"
            className="w-full rounded-2xl object-cover"
            width={1400}
            height={600}
            priority
          />
        </div>
      </div>

      {/* Mobile-only image (this remains hidden on md and up) */}
      <div data-aos="fade-up" className="md:hidden mt-8">
        <Image
          src="/images/OurMission.webp"
          alt="Pozidry Pro Heated System - mobile view"
          className="w-full rounded-2xl object-cover"
          width={1200}
          height={600}
          priority
        />
      </div>
    </div>
  );
}