import Image from "next/image";

export default function Contact() {
  return (
    <div data-aos="fade-up" className="bg-white text-[#010A12] px-4 py-6 rounded-2xl w-full max-w-[350px] md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div data-aos="fade-up">
          <label className="block text-sm mb-1">share your name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm placeholder-gray-400"
          />
        </div>
        <div data-aos="fade-up">
          <label className="block text-sm mb-1">share your email adress</label>
          <input
            type="email"
            placeholder="John@info.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm placeholder-gray-400"
          />
        </div>
      </div>

      <div data-aos="fade-up" className="mb-5">
        <label className="block text-sm mb-1">leave your message</label>
        <textarea
          rows={4}
          placeholder="Type anything"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm placeholder-gray-400 resize-none"
        />
      </div>

      <button data-aos="fade-up" className="w-full bg-[#C6EAFF] text-[#010A12] font-semibold py-3 rounded-xl flex items-center justify-center gap-1">
        <span>send message</span>
        <Image
          src="/icons/right-up.svg"
          alt="Arrow Right"
          width={10}
          height={16}
        />
      </button>

      {/* Divider with "or" */}
      <div data-aos="fade-up" className="flex items-center gap-2 my-4">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-sm text-gray-500">or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <button data-aos="fade-up" className="w-full bg-[#F0F1F1] text-[#010A12] font-semibold py-3 rounded-xl mb-4">
        ask for a return call
      </button>

      <p data-aos="fade-up" className="text-[15px] text-gray-700 mb-1">
        Or, call our team at <span className="font-medium">00 000 00 00</span>
      </p>
      <p data-aos="fade-up" className="text-[12px] text-gray-500">
        By submitting your details, you agree to our{" "}
        <a href="#" className="underline hover:text-[#010A12]/80">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
