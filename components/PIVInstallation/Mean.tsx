import Image from "next/image";

export default function Mean() {
  return (
    <div data-aos="fade-up"
      className={`px-4 sm:px-10 md:px-6 lg:px-14 xl:px-14 py-10 mt-16 md:mt-16 max-w-[1550px] mx-auto overflow-x-hidden`}
    >
      {/* Content + Image Section */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row lg:items-stretch items-center justify-between gap-10 md:gap-14">
        {/* Text Content */}
        <div className="w-full md:w-full lg:w-1/3 lg:flex lg:flex-col lg:justify-between">
          <h1 data-aos="fade-up" className="text-[30px] md:text-4xl lg:text-[42px] text-[#010A12] lt-semibold leading-tight mb-4">
            What Does PIV Unit Mean?
          </h1>
          <p data-aos="fade-up" className="text-[#010A12] text-sm sm:text-base leading-relaxed mb-6 xl:mb-46">
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
          <button
            type="button"
            className="w-full /* Default for sm */
                       md:w-full /* Full width for md screens */
                       lg:w-[150px]
                       flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#010A12] text-sm sm:text-base px-5 py-3 lt-semibold rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 cursor-pointer"
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
            src="/images/mean.webp"
            alt="Vent-Axia Pozidry Pro Heated System device"
            className="w-full rounded-2xl object-cover"
            width={1400}
            height={600}
            priority
          />
        </div>
      </div>

      {/* Mobile-only image (optional if needed elsewhere) */}
      <div data-aos="fade-up" className="md:hidden mt-8">
        <Image
          src="/images/mean.webp"
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
