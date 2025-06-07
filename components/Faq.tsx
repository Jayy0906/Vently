"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Is the unit noisy during operation?",
    answer:
      "No, our professional team completes installation quickly with minimal disruption. The units are designed for quiet operation.",
  },
  {
    question: "Does the installation require an inspection beforehand?",
    answer:
      "Yes, a brief inspection is typically required to assess your home's specific needs and ensure optimal installation. This helps us provide the most effective solution for you.",
  },
  {
    question: "How often does the unit require servicing or maintenance?",
    answer:
      "PIV units are generally low-maintenance. We recommend an annual check-up to ensure optimal performance, which can be part of our service plans.",
  },
  {
    question: "Can the system be installed in homes without loft space?",
    answer:
      "Yes, while loft installations are common, we also offer discreet wall-mounted or in-cupboard solutions for properties without loft access.",
  },
  {
    question: "What areas does your service cover?",
    answer:
      "We cover major metropolitan areas and surrounding regions. Please contact us with your postcode to confirm service availability in your specific location.",
  },
  {
    question: "What payment methods are available, and when is payment due?",
    answer:
      "We offer flexible payment options, including upfront payment or 3 easy instalments via PayPal. Payment is typically due on the day of service upon completion.",
  },
  {
    question: "Are there additional charges beyond the quoted price?",
    answer:
      "Our pricing is all-inclusive, covering the unit, expert installation, and warranty. There are no hidden fees or unexpected charges.",
  },
  {
    question: "Where exactly is the PIV unit installed in my home?",
    answer:
      "The PIV unit is most commonly installed in the loft space, gently introducing fresh, filtered air into your home. For properties without lofts, alternative discreet locations are available.",
  },
  {
    question: "What specific model of PIV system do you install?",
    answer:
      "We primarily install the Vent-Axia Pozidry Pro Heated System, a top-tier heated PIV system known for its efficiency and effectiveness.",
  },
  {
    question: "What warranty is provided with the PIV unit?",
    answer:
      "All our installations come with a comprehensive 5-year warranty, covering both the unit and the installation itself.",
  },
  {
    question: "How much does the PIV system cost including installation?",
    answer:
      "Our all-inclusive price for the PIV system, including expert installation, is £795.",
  },
];

export default function FAQ() {
  const [openStates, setOpenStates] = useState(faqs.map(() => false));

  // Function to toggle the open state of an FAQ item
  const toggleFAQ = (index: number) => {
    setOpenStates(
      (prevStates) =>
        prevStates.map((state, i) => (i === index ? !state : false)) // Only one can be open at a time
    );
  };

  return (
    <>
      <div data-aos="fade-up" className="px-4 md:px-10 lg:px-10 xl:px-10 mt-10 lg:mt-20 2xl:px-12 max-w-[1440px] 2xl:max-w-[1600px]  mx-auto overflow-x-hidden                               ">
        <div className="flex justify-between items-center  md:mb-10">
          <h1
            data-aos="fade-up"
            className="text-[25px] md:text-4xl lg:text-[48px] leading-[48px] text-[#010A12] lt-semibold"
          >
            FAQ
          </h1>
          <button
            data-aos="fade-up"
            type="button"
            className="hidden md:flex flex items-center gap-2 bg-[#B6E2FB] text-[#010A12] text-[14px] lt-semibold leading-[20px] rounded-lg px-4 py-2 hover:bg-[#A9D4FF] transition cursor-pointer                       "
          >
            <span>view all faqs</span>
            <Image src="/icons/right-up.svg" alt="" width={10} height={16} />
          </button>
        </div>

        <div className="divide-y divide-[#D9D9D9]">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4 text-[#010A12]">
              <div
                className="flex justify-between items-start cursor-pointer text-[#010A12]"
                onClick={() => toggleFAQ(index)} // Attach click handler
              >
                <p className="text-[16px] font-medium leading-[24px] mb-1 lt-semibold text-[#010A12]">
                  {faq.question}
                </p>
                <Image
                  src={openStates[index] ? "/icons/up.svg" : "/icons/down.svg"}
                  alt={openStates[index] ? "Collapse" : "Expand"}
                  width={10}
                  height={16}
                  className="mt-1 transition-transform duration-300"
                />
              </div>
              {/* Conditionally render the answer */}
              {openStates[index] && (
                <p className="text-[16px] lt-normal leading-[20px] text-[#010A12] max-w-3xl pt-2 pb-1 transition-all duration-300 ease-in-out opacity-100 translate-y-0">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <hr className="border-gray-300" />
      </div>

      {/* Mobile-only CTA section */}
      <div className="block md:hidden bg-[#B3E3FF] rounded-[24px] mx-4 mt-6 px-6 py-6 mb-14 text-center">
        <div className="text-left">
          <div className="flex items-center">
            <Image
              src="/icons/Logo.svg"
              alt="Vently logo"
              className="h-20 w-20 mr-2 -mt-6"
              width={80}
              height={80}
            />
          </div>
          <h2 className="text-[18px] lt-semibold leading-tight text-[#010A12] mb-6">
            Resolve Your Damp Problem Today -
            <br /> Easy Online Booking, Zero Deposit
          </h2>
        </div>
        <button className="w-full bg-white text-[#010A12] text-[15px] lt-semibold py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
          book your installation
        </button>
      </div>
    </>
  );
}
