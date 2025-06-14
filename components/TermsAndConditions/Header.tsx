import Image from "next/image";
import Link from "next/link";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../Desktopheader";

export default function TermsAndConditionsHeader() {
  return (
    <>
      {/* Header - Mobile */}
      <MobileHeader />

      <div className="mt-6 mb-6 md:mx-6 mx-4">
        {/* Header: Desktop */}
        <DesktopHeader />

        {/* Main Content */}
        <main
          data-aos="fade-up"
          className="max-w-[1550px] mx-auto mt-10 md:mt-14 xl:mt-18 md:px-6 lg:px-0 xl:px-16 2xl:px-24 text-center text-white flex flex-col items-center gap-6"
        >
          {/* Hero Text */}
          <section className="flex flex-col items-center max-w-8xl w-full md:w-auto">
            {/* Breadcrumb */}
            <div
              data-aos="fade-up"
              className="flex items-center gap-2 text-[16px] xl:text-[19px] 2xl:text-xl text-[#010A12] mb-2 lt-regular"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Image
                src="/icons/right.svg"
                alt="Arrow Right"
                width={10}
                height={16}
              />
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms and conditions
              </Link>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="lt-semibold text-[27px] md:text-[3rem] lg:text-[3.9rem] xl:text-[5rem] 2xl:text-[5.2rem] leading-tight max-w-[17ch] md:max-w-[34ch] lg:max-w-[48ch] xl:max-w-[48ch] 2xl:max-w-[60ch] text-[#010A12] mb-2 md:mb-4"
            >
              Terms and conditions
            </h1>

            <p
              data-aos="fade-up"
              className="text-[16px] lg:text-[20px] xl:text-[19px] 2xl:text-xl max-w-[48ch] md:max-w-[47ch] lg:max-w-[46ch] xl:max-w-[66ch] text-[#010A12] mb-6 lt-regular text-justify"
            >
              In a world where creativity knows no bounds, the sun rises
              majestically over the horizon, casting a warm golden glow upon the
              tranquil landscape that stretches as far as the eye can see. The
              gentle breeze, like a playful spirit, whispers secrets of
              adventure and beckons all who dare to explore the uncharted
              territories of imagination. As the day unfolds, vibrant colors
              burst forth, painting the sky in hues of orange, pink, and
              lavender, while the symphony of nature plays a harmonious tune
              that echoes through the valleys and mountains, creating a melody
              that resonates with the very essence of life. Each moment becomes
              a canvas, eagerly waiting to be filled with stories of courage,
              love, and discovery, inviting us to weave our narratives into the
              fabric of existence. Let your heart be your compass, guiding you
              through the intricate labyrinth of possibilities that lie ahead,
              where every twist and turn reveals new wonders and challenges.
              Embrace the journey with open arms, for every step taken is not
              just a movement through space, but a testament to the indomitable
              spirit of exploration that resides within us all. As you venture
              forth, remember that the world is a vast tapestry of experiences,
              each thread woven with intention and purpose, waiting for you to
              add your unique touch.
            </p>

            <Link
              data-aos="fade-up"
              href="/"
              className="w-full md:w-full  flex justify-center items-center gap-2 bg-[#B6E2FB] text-[#00101F] text-[16px] lt-semibold rounded-lg px-4 py-3 hover:bg-[#A9D4FF] transition cursor-pointer"
            >
              <span>back to homepage</span>
              <Image
                src="/icons/right-up.svg"
                alt="arrow"
                width={10}
                height={16}
              />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
