import Image from "next/image";
import Link from "next/link";

export default function DampCondensation() {
  return (
    <>
      <div data-aos="fade-up" className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-12 mx-auto  overflow-x-hidden  mt-10 md:mt-28 max-w-[1440px] 2xl:max-w-[1600px]   ">
        <div className="flex flex-col md:flex-row md:items-start lg:items-end md:justify-between mb-6 md:mb-10                                             ">
          <div className="max-w-4xl                                                           ">
            <h1 data-aos="fade-up" className="text-[30px] md:text-4xl lg:text-[42px] lt-semibold text-[#010A12] leading-tight mb-2">
              Understanding Damp and Condensation
            </h1>
            <p data-aos="fade-up" className="text-[#0A1B2A] lt-medium text-base sm:text-base lg:text-[17px] max-w-3xl">
              Dampness and condensation are significant problems that affect
              more than 1 in 5 homes throughout the UK. These issues can lead to
              the growth of mold, which not only damages the structure of the
              home but also poses serious health risks. Residents may experience
              a range of health issues, including asthma, allergies, and other
              respiratory problems, making it crucial to address these concerns
              promptly.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex justify-center md:block">
            <Link href="/understand-the-risks" passHref>
              <button data-aos="fade-up" className="lt-semibold flex items-center justify-center gap-2 bg-[#B6E2FB] text-[#010A12] text-sm sm:text-base px-5 py-3 rounded-md hover:bg-[#a0d8ff] transition-colors duration-200 whitespace-nowrap cursor-pointer w-[350px] md:w-auto ">
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
            className="hidden md:block w-full md:max-w-[800px] lg:max-w-[1200px] xl:max-w-[1500px] 2xl:max-w-full rounded-2xl object-cover"
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
