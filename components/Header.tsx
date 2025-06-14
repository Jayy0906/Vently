"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  // --- State for the mini-form in Hero section ---
  const [nameForm, setNameForm] = useState({ name: "" });
  const [nameErrors, setNameErrors] = useState({ name: "" });
  const [showNameModal, setShowNameModal] = useState(false);
  const [nameModalMessage, setNameModalMessage] = useState("");
  const [nameModalType, setNameModalType] = useState<"success" | "error">(
    "success"
  );
  const [isNameLoading, setIsNameLoading] = useState(false); // Loader for the mini-form

  // --- useEffect for automatic modal closing (for mini-form) ---
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showNameModal) {
      timer = setTimeout(() => {
        setShowNameModal(false);
      }, 2500); // Close after 5 seconds
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [showNameModal]);

  // --- Scroll effect for header ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --- Validation for the mini-form (only 'name' field) ---
  const validateNameForm = () => {
    const newErrors = { name: "" };
    let isValid = true;

    if (!nameForm.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    setNameErrors(newErrors);
    return isValid;
  };

  // --- Submission handler for "ask for a return call" button ---
  const handleReturnCallSubmit = async () => {
    const isValid = validateNameForm();
    if (!isValid) {
      return;
    }

    setIsNameLoading(true); // Start loading
    setNameModalMessage(""); // Clear previous modal message
    setNameModalType("success"); // Reset modal type

    try {
      // Sending name, and placeholders for email/message to match /api/contact signature
      // RECOMMENDATION: For production, create a dedicated API endpoint like /api/return-call
      // that only expects the name, and perhaps a phone number if you collect it.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameForm.name,
          email: "no-email@example.com", // Placeholder email
          message: "Request for a return call.", // Placeholder message
        }),
      });

      if (res.ok) {
        setNameModalType("success");
        setNameModalMessage("Your request for a call has been sent!");
        setNameForm({ name: "" }); // Clear the name input on success
        setNameErrors({ name: "" }); // Clear errors
      } else {
        setNameModalType("error");
        setNameModalMessage("Failed to send request. Please try again.");
      }
    } catch (err) {
      console.error("Return call form submission error:", err);
      setNameModalType("error");
      setNameModalMessage(
        "Something went wrong. Please check your internet connection."
      );
    } finally {
      setIsNameLoading(false); // End loading
      setShowNameModal(true); // Show the modal
    }
  };

  return (
    <>
      {/* Header - Mobile (This component likely contains both mobile and desktop headers now) */}
      <MobileHeader />

      {/* Main Section */}
      <div className="w-full mx-auto overflow-x-hidden py-8 max-w-[1550px] 2xl:max-w-[1905px] px-2 md:px-4 lg:px-4 xl:px-4 2xl:px-6">
        <div className="relative md:h-full lg:h-full xl:h-full h-[360px] 2xl:h-full flex flex-col justify-end">
          <Image
            src="/images/hero.webp"
            alt="Family on couch"
            fill
            priority
            className="object-cover object-center rounded-3xl"
          />

          {/* Navbar (Desktop) - THIS HEADER IS NOW ENABLED AS REQUESTED */}
          {/* WARNING: This will appear in addition to the desktop header provided by MobileHeader */}
          <header
            data-aos="fade-up"
            className={`hidden md:block top-0 left-0 right-0 z-50 md:px-3 lg:px-6 xl:px-6 py-3 2xl:py-4 mt-0 bg-black/50 backdrop-blur-md rounded-b-2xl md:w-[690px] lg:w-[930px] xl:w-[1100px] 2xl:w-[1300] mx-auto ${
              isScrolled ? "rounded-t-2xl" : ""
            }`}
          >
            <div
              data-aos="fade-up"
              className="max-w-screen-2xl mx-auto flex items-center justify-between text-white font-light tracking-wide"
            >
              {/* Left - Logo + Nav */}
              <div data-aos="fade-up" className="flex items-center gap-8">
                {/* Logo */}
                <Link href="/">
                  <div className="flex items-center gap-2 text-white text-lg font-semibold">
                    <Image
                      src="/icons/logo.svg"
                      alt="house"
                      width={76}
                      height={46}
                    />
                  </div>
                </Link>

                {/* Divider */}
                <div className="w-px h-6 bg-white/30" />

                {/* Nav links */}
                <nav className="flex items-center gap-6 text-[16px] lt-regular relative">
                  <Link href="/about-us" className="hover:text-white/80">
                    about us
                  </Link>

                  {/* Dropdown wrapper */}
                  <div className="relative group">
                    <button className="flex items-center gap-1 hover:text-white/80 cursor-pointer">
                      piv installation
                      <Image
                        src="/icons/down-white.svg"
                        alt="Dropdown arrow"
                        width={10}
                        height={16}
                      />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full mt-8 w-56 border-2 border-black bg-black/30 backdrop-blur-md text-white text-base rounded-xl shadow-lg py-3 px-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                      <Link
                        href="/piv-installation"
                        className="block hover:text-white/80"
                      >
                        PIV Installation
                      </Link>
                      <Link
                        href="/how-piv-works"
                        className="block hover:text-white/80"
                      >
                        How PIV works
                      </Link>
                      <Link
                        href="/how-piv-helps"
                        className="block hover:text-white/80"
                      >
                        How PIV helps
                      </Link>
                    </div>
                  </div>

                  <Link href="/contact-us" className="hover:text-white/80">
                    contact us
                  </Link>
                </nav>
              </div>

              {/* Right - Phone and CTA */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <a
                  href="tel:0000000000"
                  className="text-sm lt-regular hover:text-white/80 cursor-pointer"
                >
                  00 000 00 00
                </a>
                <Link href="/contact-us">
                  <button className="bg-white text-[#010A12] text-sm lt-semibold px-4 py-2 rounded-md shadow-md hover:bg-white/90 cursor-pointer">
                    get in touch
                  </button>
                </Link>
              </div>
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col md:flex-row justify-between items-stretch md:items-end px-4 md:px-6 pb-4 md:mb-8 gap-12 md:gap-8 lg:mb-2 xl:mb-4">
            {/* Left: Text */}
            <div className="max-w-[82ch] lg:max-w-[72ch] xl:max-w-[88ch] 2xl:max-w-[150ch] text-white">
              <h1
                data-aos="fade-up"
                className="text-[29px] md:text-3xl lg:text-[66px] xl:text-[80px] 2xl:text-[96px] lt-bold lg:mb-0 md:mb-3 mb-2"
              >
                Say goodbye to damp & condensation forever!
              </h1>
              <hr
                data-aos="fade-up"
                className="hidden md:block border-gray-200 py-2 2xl:w-[1000px]"
              />
              <p className="text-base md:text-base lg:text-sm xl:text-lg 2xl:text-2xl mb-0 md:mb-6 lt-regular max-w-[34ch] md:max-w-full">
                Trusted Nationwide PIV Installation — from{" "}
                <strong>only &pound;795</strong> fully fitted.
              </p>
              <Link href="/contact-us">
                <button className="hidden md:block bg-white text-[#010A12] px-6 py-4 rounded-lg lt-semibold text-sm md:text-base hover:bg-white/90 cursor-pointer">
                  get in touch
                </button>
              </Link>
            </div>

            {/* Right: Form - Desktop */}
            <div className="hidden md:block bg-white text-[#010A12] p-6 lg:p-6 xl:p-6 rounded-2xl w-full max-w-sm md:max-w-xs lg:max-w-[340px] xl:max-w-[400px] 2xl:max-w-[460px] shadow-xl md:mt-26 lg:mt-22 xl:mt-55 2xl:mt-95 2xl:h-[430px]">
              <h2
                data-aos="fade-up"
                className="text-lg 2xl:text-2xl lt-regular mb-2"
              >
                Want to get rid of dampness?
              </h2>
              <p data-aos="fade-up" className="text-sm text-gray-600 mb-4">
                Fill out the form
              </p>
              <Link href="/contact-us">
                <button
                  data-aos="fade-up"
                  className="w-full bg-blue-200 hover:bg-blue-300 text-[#010A12] lt-semibold py-3 rounded mb-4 rounded-xl cursor-pointer"
                >
                  get a quote
                </button>
              </Link>
              <hr data-aos="fade-up" className="border-gray-300 py-3" />
              <div data-aos="fade-up" className="mb-4">
                <label className="block text-sm mb-1 text-[#010A12B8]">
                  share your name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={nameForm.name}
                  onChange={(e) => {
                    setNameForm({ name: e.target.value });
                    setNameErrors({ name: "" }); // Clear error on change
                  }}
                  disabled={isNameLoading} // Disable when loading
                  className={`w-full border rounded-xl px-4 py-3 text-sm placeholder-[#010A128F] focus:outline-none focus:ring-2
                  ${
                    nameErrors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#C6EAFF]"
                  }
                  ${isNameLoading ? "bg-gray-100 cursor-not-allowed" : ""}`}
                />
                {/* Error message slot for layout stability */}
                <p
                  className={`text-red-500 text-xs mt-1 transition-opacity duration-300`}
                  style={{
                    minHeight: "1.2em",
                    opacity: nameErrors.name ? "1" : "0",
                  }}
                >
                  {nameErrors.name || "\u00A0"}{" "}
                  {/* Non-breaking space to hold height */}
                </p>
              </div>
              <button
                onClick={handleReturnCallSubmit} // New handler for submission
                disabled={isNameLoading} // Disable when loading
                className={`w-full text-white py-3 rounded mb-4 lt-semibold rounded-xl flex items-center justify-center gap-2 transition
                ${
                  isNameLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:bg-[#010A12] hover:text-white cursor-pointer"
                }`}
              >
                {isNameLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white" // Text color white for dark button
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>ask for a return call</span>
                )}
              </button>
              <hr data-aos="fade-up" className="border-gray-300 py-3" />
              <p className="text-[15px] text-gray-600">
                Or, call our team at{" "}
                <a
                  href="tel:0000000000"
                  className="underline hover:text-gray-800"
                >
                  00 0000 00 00
                </a>
              </p>
              <p className="text-[12px] text-gray-500">
                By submitting your details, you agree to our{" "}
                <Link href="#" className="underline hover:text-[#010A12]/80">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form - Mobile */}
      <div data-aos="fade-up" className="md:hidden px-4">
        <div className="bg-white text-[#010A12] p-6 rounded-2xl w-full mt-0 shadow-2xl border border-gray-100">
          <h2 className="text-lg font-semibold mb-2">
            Want to get rid of dampness?
          </h2>
          <p className="text-sm text-gray-600 mb-4">Fill out the form</p>

          <Link href="/contact-us">
            <button className="w-full bg-blue-200 hover:bg-blue-300 text-[#010A12] lt-semibold py-2 rounded mb-4 rounded-xl cursor-pointer">
              get a quote
            </button>
          </Link>

          <hr className="border-gray-300 py-3 " />

          <div className="mb-4">
            <label className="block text-sm mb-1 text-[#010A12B8]">
              share your name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={nameForm.name}
              onChange={(e) => {
                setNameForm({ name: e.target.value });
                setNameErrors({ name: "" }); // Clear error on change
              }}
              disabled={isNameLoading} // Disable when loading
              className={`w-full border rounded-xl px-4 py-3 text-sm placeholder-[#010A128F] focus:outline-none focus:ring-2
              ${
                nameErrors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-[#C6EAFF]"
              }
              ${isNameLoading ? "bg-gray-100 cursor-not-allowed" : ""}`}
            />
            {/* Error message slot for layout stability */}
            <p
              className={`text-red-500 text-xs mt-1 transition-opacity duration-300`}
              style={{
                minHeight: "1.2em",
                opacity: nameErrors.name ? "1" : "0",
              }}
            >
              {nameErrors.name || "\u00A0"}{" "}
              {/* Non-breaking space to hold height */}
            </p>
          </div>

          <button
            onClick={handleReturnCallSubmit} // New handler for submission
            disabled={isNameLoading} // Disable when loading
            className={`w-full text-white py-2 rounded mb-4 lt-semibold rounded-xl flex items-center justify-center gap-2 transition
            ${
              isNameLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-[#010A12] hover:text-white cursor-pointer"
            }`}
          >
            {isNameLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white" // Text color white for dark button
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <span>ask for a return call</span>
            )}
          </button>
          <hr className="border-gray-300 py-3" />

          <p className="text-[15px] text-gray-600">
            Or, call our team at{" "}
            <a href="tel:0000000000" className="underline hover:text-gray-800">
              00 0000 00 00
            </a>
          </p>
          <p className="text-[11px] text-gray-500">
            By submitting your details, you agree to our{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* --- Modal Component for Mini-Forms --- */}
      {showNameModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div
            className={`bg-white rounded-lg p-6 shadow-xl max-w-sm w-full text-center
              ${
                nameModalType === "success"
                  ? "border-t-4 border-green-500"
                  : "border-t-4 border-red-500"
              }`}
          >
            <h3
              className={`text-lg font-semibold mb-3 ${
                nameModalType === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {nameModalType === "success" ? "Success!" : "Error!"}
            </h3>
            <p className="text-gray-700 mb-6">{nameModalMessage}</p>
            <button
              onClick={() => setShowNameModal(false)}
              className="bg-[#C6EAFF] hover:bg-[#A9D4FF] transition text-[#010A12] font-semibold py-2 px-6 rounded-md cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
