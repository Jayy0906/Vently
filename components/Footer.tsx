import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "solution", path: "/piv-installation" },
    { label: "benefits", path: "/how-piv-helps" },
    { label: "why us", path: "/#why-us" },
    { label: "testimonials", path: "/#testimonials" },
    { label: "how it works", path: "/how-piv-works" },
  ];

  return (
    <div className="mx-2 xl:mx-4 2xl:mx-6">
      <footer className="p-6 md:p-2 lg:p-2 xl:p-4 md:pl-8 md:pr-8 lg:pl-8 lg:pr-8 xl:pl-8 xl:pr-8 bg-[#010a14] mt-20 lg:mt-24 mb-3 lg:mb-3 rounded-[30px] text-white max-w-[1550px] 2xl:max-w-[1905px] w-full mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-600 pb-6 md:pb-2 min-h-[100px]">
          {/* Logo & Mobile Social Icons */}
          <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image
                  src="/icons/logo.svg"
                  alt="Vently logo"
                  width={90}
                  height={50}
                  className="2xl:w-[110px] 2xl:h-[50px]"
                />
              </div>
            </Link>

            {/* Mobile Social Icons */}
            <div className="flex md:hidden gap-3">
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
          <nav className="flex flex-col md:flex-row gap-x-6 gap-y-2 mt-4 md:mt-0 text-[16px] md:justify-center lg:ml-40 2xl:text-[20px]">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className="hover:underline transition-colors duration-200"
              >
                <hr className="border-gray-600 my-4 md:hidden block" />
                <span className="hidden md:inline">{label}</span>
                <div className="flex justify-between items-center md:hidden">
                  <span>{label}</span>
                  <Image
                    src="/icons/right-up-white.webp"
                    alt=""
                    className="h-[9px] w-[9px]"
                    width={9}
                    height={9}
                  />
                </div>
              </Link>
            ))}

            <hr className="border-gray-600 my-4 md:hidden block" />

            <Link href="/contact-us">
              <button
                className="md:hidden bg-white text-[#010A12] rounded-md px-5 py-2 text-[16px] 2xl:text-[20px] lt-semibold hover:bg-gray-200 transition w-full"
                type="button"
              >
                get in touch
              </button>
            </Link>
          </nav>

          {/* Desktop Social Icons + Button */}
          <div className="hidden md:flex items-center gap-3 mt-6 md:mt-0">
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
            <Link href="/contact-us">
              <button className="ml-4 bg-white text-black rounded-md px-5 py-2 text-[16px] lt-semibold hover:bg-gray-200 transition 2xl:text-[20px] cursor-pointer">
                get in touch
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 md:pb-6 lg:pb-0 text-[16px] 2xl:text-[20px] text-white lg:min-h-[90px]">
          {/* Mobile: Terms & Rights Row */}
          <div className="flex justify-between w-full md:w-auto md:order-none 2xl:text-[20px] cursor-pointer">
            <a
              href="/terms-and-conditions"
              className="hover:underline transition-colors duration-200"
            >
              terms &amp; conditions
            </a>
            <a
              href="/terms-and-conditions"
              className="md:hidden hover:underline transition-colors duration-200"
            >
              all rights reserved
            </a>
          </div>

          <hr className="border-gray-600 my-4 md:hidden block" />

          <div className="flex gap-6 justify-between w-full md:w-auto md:order-none mx-auto mb-4 md:mb-0 2xl:text-[20px]">
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

          <a
            href="/all-rights-reserved"
            className="hidden md:block md:order-none mb-4 md:mb-0 2xl:text-[20px] hover:underline transition-colors duration-200"
          >
            all rights reserved
          </a>
        </div>
      </footer>
    </div>
  );
}
