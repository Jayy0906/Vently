"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Is the unit noisy during operation?",
    answer:
      "No, our professional team completes installation quickly with minimal disruption.",
  },
  {
    question: "Does the installation require an inspection beforehand?",
    answer:
      "Yes, a brief inspection is typically required to assess your home's specific needs and ensure optimal installation.",
  },
  {
    question: "How often does the unit require servicing or maintenance?",
    answer:
      "PIV units are generally low-maintenance. We recommend an annual check-up to ensure optimal performance.",
  },
  {
    question: "Can the system be installed in homes without loft space?",
    answer:
      "Yes, while loft installations are common, we also offer discreet wall-mounted or in-cupboard solutions.",
  },
];

export default function FAQ() {
  const [openStates, setOpenStates] = useState(faqs.map((_, i) => i === 0));

  const toggleFAQ = (index: number) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : false))
    );
  };

  return (
    <div
      data-aos="fade-up"
      
      className={`text-[#010A12] mt-0 md:mt-20 max-w-[1550px] 2xl:max-w-[1905px] mx-auto px-4 sm:px-10 md:px-6 lg:px-4 2xl:px-10`}
    >
      {/* Header */}
      <div className="flex justify-between items-center md:mb-10">
        <h1
          data-aos="fade-up"
          className="text-[25px] md:text-4xl lg:text-[48px] 2xl:text-[54px] leading-[48px] lt-semibold"
        >
          FAQ
        </h1>
        <Link href="/#faq">
        <button
          data-aos="fade-up"
          type="button"
          className="hidden md:flex items-center gap-2 bg-[#B6E2FB] text-[#010A12] lt-semibold text-[16px] 2xl:text-[18px] lt-semibold leading-[20px] rounded-lg px-4 py-4 hover:bg-[#A9D4FF] transition cursor-pointer"
        >
          <span>view all faqs</span>
          <Image
            src="/icons/right-up.svg"
            alt="Arrow icon"
            width={10}
            height={16}
          />
        </button>
        </Link>
      </div>

      {/* FAQ + CTA layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* FAQ Section */}
        <div className="flex-1 divide-y divide-[#D9D9D9]">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <div
                data-aos="fade-up"
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p
                  data-aos="fade-up"
                  className="text-[16px] 2xl:text-[20px] leading-[24px] mb-1 lt-semibold"
                >
                  {faq.question}
                </p>
                <Image
                  src={openStates[index] ? "/icons/up.svg" : "/icons/down.svg"}
                  alt={openStates[index] ? "Collapse" : "Expand"}
                  width={10}
                  height={16}
                  className="mt-1 transition-transform duration-300 cursor-pointer"
                />
              </div>
              {openStates[index] && (
                <p className="text-[16px] 2xl:text-[18px] font-normal leading-[20px] text-[#010A12]/80 max-w-3xl pt-2 pb-1 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          data-aos="fade-up"
          className="bg-[#B6E2FB] rounded-[24px] px-6 py-4 lg:w-[400px] xl:w-[580px] 2xl:w-[640px]"
        >
          <div className="text-left">
            <div data-aos="fade-up" className="flex items-center">
              <Image
                src="/icons/Logo.svg"
                alt="Vently logo"
                width={100}
                height={80}
                className="mr-2"
              />
            </div>
            <h2
              data-aos="fade-up"
              className="text-[18px] md:text-[30px] lg:text-[21px] xl:text-[30px] 2xl:text-[36px] xl:max-w-[28ch] 2xl:max-w-[75ch] leading-tight text-[#010A12] my-6 lt-regular"
            >
              Resolve Your Damp Problem Today —<br /> Easy Online Booking, Zero
              Deposit
            </h2>
          </div>
          <Link href="/contact-us">
            <button
              data-aos="fade-up"
              className="w-full md:w-auto bg-white text-[#010A12] text-[16px] lt-semibold py-3 px-4 md:mt-8 lg:mt-6 xl:mt-8 md:mb-2 lg:mb-1 xl:mb-2 rounded-xl shadow-md hover:bg-gray-100 transition cursor-pointer"
            >
              book your installation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
