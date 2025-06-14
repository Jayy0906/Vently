"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [isLoading, setIsLoading] = useState(false);

  // --- NEW useEffect for auto-closing modal ---
  useEffect(() => {
    let timer: NodeJS.Timeout; // Define timer variable outside the if block

    if (showModal) {
      // Set a timeout to close the modal after 5 seconds (5000 milliseconds)
      timer = setTimeout(() => {
        setShowModal(false);
      }, 2500);
    }

    // Cleanup function: Clear the timeout if the component unmounts
    // or if showModal becomes false (e.g., user clicks OK button)
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [showModal]); // Re-run this effect whenever showModal changes

  // Function to validate the form fields (rest of the code is the same)
  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email address is invalid.";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    setIsLoading(true);
    setModalMessage("");
    setModalType("success");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setModalType("success");
        setModalMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        setModalType("error");
        setModalMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Contact form submission error:", err);
      setModalType("error");
      setModalMessage(
        "Something went wrong. Please check your internet connection."
      );
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="mx-2 md:mx-40 lg:mx-80 xl:mx-96 2xl:mx-110">
        <div
          data-aos="fade-up"
          className="bg-white text-[#010A12] border border-gray-200 md:border-gray-100 px-4 py-6 mb-24 rounded-2xl w-full max-w-[full] shadow-xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block text-[16px] mb-1 text-[#010A12B8]"
              >
                share your name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  setErrors({ ...errors, name: "" });
                }}
                placeholder="John Doe"
                disabled={isLoading}
                className={`w-full border rounded-xl px-4 py-3 text-[16px] placeholder-[#010A128F] focus:outline-none focus:ring-2
                ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#C6EAFF]"
                }
                ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[16px] mb-1 text-[#010A12B8]"
              >
                share your email address
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
                placeholder="John@info.com"
                disabled={isLoading}
                className={`w-full border rounded-xl px-4 py-3 text-[16px] placeholder-[#010A128F] focus:outline-none focus:ring-2
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#C6EAFF]"
                }
                ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="text-[#010A12B8] mb-5">
            <label htmlFor="message" className="block text-md mb-1">
              leave your message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                setErrors({ ...errors, message: "" });
              }}
              rows={4}
              placeholder="Type anything"
              disabled={isLoading}
              className={`w-full border rounded-xl px-4 py-3 text-[16px] placeholder-[#010A128F] resize-none focus:outline-none focus:ring-2
              ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-[#C6EAFF]"
              }
              ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full bg-[#C6EAFF] text-[#010A12] font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition
            ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-[#A9D4FF] cursor-pointer"
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-[#010A12]"
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
              <>
                <span>send message</span>
                <Image
                  src="/icons/right-up.svg"
                  alt="Arrow Right"
                  width={10}
                  height={16}
                />
              </>
            )}
          </button>

          {/* Divider with "or" */}
          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-[16px] text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button
            className={`w-full bg-[#F0F1F1] text-[#010A12] font-semibold py-3 rounded-xl mb-4
            ${
              isLoading
                ? "bg-gray-300 cursor-not-allowed"
                : "hover:bg-[#010A12] hover:text-white cursor-pointer"
            }`}
            disabled={isLoading}
          >
            ask for a return call
          </button>

          <p className="text-[16px] text-gray-700 mb-1">
            Or, call our team at{" "}
            <span className="font-medium">00 000 00 00</span>
          </p>

          <p className="text-[16px] text-gray-500">
            By submitting your details, you agree to our{" "}
            <Link href="#" className="underline hover:text-[#010A12]/80">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* --- Modal Component --- */}
      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div
            className={`bg-white rounded-lg p-6 shadow-xl max-w-sm w-full text-center
              ${
                modalType === "success"
                  ? "border-t-4 border-green-500"
                  : "border-t-4 border-red-500"
              }`}
          >
            <h3
              className={`text-lg font-semibold mb-3 ${
                modalType === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {modalType === "success" ? "Success!" : "Error!"}
            </h3>
            <p className="text-gray-700 mb-6">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
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
