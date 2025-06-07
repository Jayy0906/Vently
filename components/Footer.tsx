import Image from "next/image";

export default function Footer() {
  return (
    <div data-aos="fade-up" className="mx-2 xl:mx-6 2xl:mx-6">
      <footer className="p-6 md:p-4 lg:p-6 bg-[#010a14] mt-8 lg:mt-24 mb-3 lg:mb-6 rounded-[30px] text-white max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-600 pb-6 md:pb-2 min-h-[100px]">
          {/* Logo & Mobile Social Icons */}
          <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
            <div data-aos="fade-up" className="flex items-center space-x-2">
              <Image
                src="/icons/logo.svg"
                alt="Vently logo"
                width={90}
                height={50}
                className="2xl:w-[110px] 2xl:h-[50px]"
              />
            </div>

            {/* Mobile Social Icons */}
            <div data-aos="fade-up" className="flex md:hidden gap-3">
              {["insta", "yt", "fb"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={icon}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-opacity-10 hover:bg-opacity-20 transition"
                >
                  <Image
                    src={`/icons/${icon}.svg`}
                    alt={icon}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <nav
            data-aos="fade-up"
            className="flex flex-col md:flex-row gap-x-6 gap-y-2 mt-4 md:mt-0 text-sm md:text-[14px] md:justify-center lg:ml-40 2xl:text-[18px]"
          >
            {[
              "solution",
              "benefits",
              "why us",
              "testimonials",
              "how it works",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:underline transition-colors duration-200"
              >
                <hr className="border-gray-600 my-4 md:hidden block" />
                <span className="hidden md:inline">{item}</span>
                <div className="flex justify-between items-center md:hidden">
                  <span>{item}</span>
                  <Image
                    src="/icons/right-up-white.webp"
                    alt=""
                    className="h-[9px] w-[9px]"
                    width={9}
                    height={9}
                  />
                </div>
              </a>
            ))}

            <hr className="border-gray-600 my-4 md:hidden block" />
            <button
              className="md:hidden bg-white text-[#010A12] rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-200 transition"
              type="button"
            >
              get in touch
            </button>
          </nav>

          {/* Desktop Social Icons + Button */}
          <div
            data-aos="fade-up"
            className="hidden md:flex items-center gap-3 mt-6 md:mt-0"
          >
            {["insta", "yt", "fb"].map((icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="hidden lg:flex w-8 h-8 items-center justify-center rounded-full bg-opacity-10 hover:bg-opacity-20 transition"
              >
                <Image
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  width={24}
                  height={24}
                  className="2xl:w-[34px] 2xl:h-[34px]"
                />
              </a>
            ))}
            <button className="ml-4 bg-white text-black rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-200 transition 2xl:text-[18px] cursor-pointer">
              get in touch
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 text-[14px] text-white lg:min-h-[90px]">
          {/* Mobile: Terms & Rights Row */}
          {/* Desktop: Terms (Left) */}
          <div className="flex justify-between w-full md:w-auto md:order-none 2xl:text-[18px] cursor-pointer">
            {/* terms & conditions */}
            <a
              href="/terms-and-conditions"
              className="hover:underline transition-colors duration-200"
            >
              terms &amp; conditions
            </a>

            {/* all rights reserved - Hidden on desktop, visible on mobile, opposite of terms */}
            <a
              href="/terms-and-conditions"
              className="md:hidden hover:underline transition-colors duration-200"
            >
              all rights reserved
            </a>
          </div>

          <hr className="border-gray-600 my-4 md:hidden block" />

          {/* Social Links - Centered on Desktop, Centered and Below on Mobile */}
          <div className="flex gap-6 justify-between w-full md:w-auto md:order-none mx-auto mb-4 md:mb-0 2xl:text-[18px]">
            <a
              href="#"
              className="hover:underline transition-colors duration-200"
            >
              twitter
            </a>
            <a
              href="#"
              className="hover:underline transition-colors duration-200"
            >
              instagram
            </a>
            <a
              href="#"
              className="hover:underline transition-colors duration-200"
            >
              facebook
            </a>
          </div>

          {/* all rights reserved - Visible only on Desktop (Right) */}
          <a
            href="/all-rights-reserved"
            className="hidden md:block md:order-none mb-4 md:mb-0 2xl:text-[18px] hover:underline transition-colors duration-200"
          >
            all rights reserved
          </a>
        </div>
      </footer>
    </div>
  );
}
