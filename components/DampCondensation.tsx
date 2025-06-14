import Image from "next/image";
import Link from "next/link";

export default function DampCondensation() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-12 mx-auto  overflow-x-hidden  mt-10 md:mt-28 max-w-[1550px] 2xl:max-w-[1905px]   "
      >
        <div className="flex flex-col md:flex-row md:items-start lg:items-end md:justify-between mb-6 md:mb-10                                             ">
          <div className="max-w-4xl   2xl:max-w-[100ch]                                                        ">
            <h1
              data-aos="fade-up"
              className="hidden md:block text-[30px] md:text-4xl lg:text-[42px] 2xl:text-[54px] lt-semibold text-[#010A12] leading-tight mb-2"
            >
              Understanding Damp and Condensation
            </h1>
            <h1
              data-aos="fade-up"
              className="md:hidden text-[30px] md:text-4xl lg:text-[42px] lt-semibold text-[#010A12] leading-tight mb-2 max-w-[16ch]"
            >
              Understanding Damp and Condensation
            </h1>
            <p
              data-aos="fade-up"
              className="text-[#010A12] lt-medium text-[16px] lg:text-[17px] 2xl:text-[18px] max-w-3xl lg:max-w-[80ch] 2xl:max-w-[100ch]"
            >
              Dampness and condensation are significant problems that affect
              more than 1 in 5 homes throughout the UK. These issues can lead to
              the growth of mold, which not only damages the structure of the
              home but also poses serious health risks. Residents may experience
              a range of health issues, including asthma, allergies, and other
              respiratory problems, making it crucial to address these concerns
              promptly.
            </p>
          </div>
          <div className="mt-6 md:mt-0 w-full md:w-auto">
            <Link
              href="/understand-the-risks"
              passHref
              className="block md:inline-block w-full md:w-auto"
            >
              <button
                data-aos="fade-up"
                className="lt-semibold flex items-center justify-center gap-2 bg-[#B6E2FB] text-[#010A12] text-[16px] 2xl:text-[18px] px-6 py-4 rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 whitespace-nowrap w-full md:w-auto cursor-pointer"
              >
                understand the risks
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
        <div className="-mx-6 sm:-mx-10 md:-mx-6 lg:-mx-10 xl:-mx-14">
          <Image
            alt="Vent-Axia Pozidry Pro Heated System device"
            className="hidden md:block w-full md:max-w-[800px] lg:max-w-[1200px] xl:max-w-[1550px] 2xl:max-w-full rounded-2xl object-cover"
            height={600}
            src="/images/2.webp"
            width={1400}
            priority
          />
        </div>

        <div>
          <Image
            alt="Vent-Axia Pozidry Pro Heated System device"
            className="md:hidden block w-full rounded-2xl object-cover"
            height={600}
            src="/images/23.webp"
            width={1200}
            priority
          />
        </div>
      </div>
    </>
  );
}
