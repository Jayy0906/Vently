import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Request a quote",
    description:
      "Simply answer a few questions about your current heating situation and we’ll give you a call to arrange your free home energy assessment.",
    image: "/images/Request a quote.webp",
  },
  {
    number: "2",
    title: "A PIV Installation",
    description:
      "One of our Clean Energy Experts will visit to assess your home energy needs and provide a price-locked quote with the government’s £7,500 grant already applied.",
    image: "/images/A PIV Installation.webp",
  },
  {
    number: "3",
    title: "Enjoy your new system",
    description:
      "One of our Clean Energy Experts will visit to assess your home energy needs and provide a price-locked quote with the government’s £7,500 grant already applied.",
    image: "/images/mean.webp",
  },
];

export default function StepsSection() {
  return (
    <section data-aos="fade-up" className="w-full px-4 md:px-6 lg:px-12">
      <div className="flex flex-col gap-10 max-w-[1440px] mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-6">
            {/* <hr> before each step except the first */}
            {index !== 0 && <hr data-aos="fade-up" className="border-t border-gray-300 " />}

            <div className="flex flex-col lg:flex-row items-stretch gap-4 w-full mt-4">
              <div className="flex-1 flex flex-col justify-between">
                <h3 data-aos="fade-up" className="text-8xl md:text-7xl lg:text-7xl text-gray-300 lt-semibold">
                  {step.number}
                </h3>
                <div className="mt-4 flex flex-col justify-end">
                  <h4 data-aos="fade-up" className="text-xl md:text-4xl lg:text-[42px] lt-semibold text-[#010A12]">
                    {step.title}
                  </h4>
                  <p data-aos="fade-up" className="text-sm text-[#010A12] leading-relaxed max-w-[66ch] mt-2">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div data-aos="fade-up" className="w-full lg:w-[513px] flex-shrink-0">
                <div className="overflow-hidden rounded-xl shadow-md border border-gray-200 h-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
