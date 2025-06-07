import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Say Goodbye to Condensation and Dampness",
    description:
      "Tired of condensation on windows, damp walls, and ceilings? A PIV unit continuously circulates fresh, filtered air, reducing moisture and protecting your home from structural and decorative damage.",
    image: "/images/Dampness.webp",
  },
  {
    number: "2",
    title: "Protect Your Home from Mold and Mildew",
    description:
      "Prevent mold and mildew before they start. Our PIV systems maintain ideal humidity levels, significantly reducing mold-friendly conditions. Protect your family's health and your home's value.",
    image: "/images/A PIV Installation.webp",
  },
  {
    number: "3",
    title: "Breathe Easier with Reduced Allergens and Pollutants",
    description:
      "PIV systems use advanced filtration technology to capture pollen, dust mites, pet dander, and fungal spores, dramatically reducing indoor allergens. Ideal for allergy sufferers or anyone sensitive to airborne irritants.",
    image: "/images/Allergens and Pollutants.webp",
  },
  {
    number: "4",
    title: "Enjoy Fresh, Clean Air and Eliminate Odors",
    description:
      "No more persistent odors from cooking, pets, or chemicals. PIV units dilute and remove indoor pollutants and odors, ensuring your home remains fresh and inviting all day long.",
    image: "/images/mean.webp",
  },
  {
    number: "5",
    title: "Support Your Family's Respiratory Health",
    description:
      "One of our Clean Energy Experts will visit to assess your home energy needs and provide a price-locked quote with the government’s £7,500 grant already applied.",
    image: "/images/Health.webp",
  },
];

export default function StepsSection() {
  return (
    <>
      <section data-aos="fade-up" className="w-full px-4 md:px-6 lg:px-12 xl:px-11">
        <hr data-aos="fade-up" className="border-t border-gray-300 mb-6" />
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
                    <h4 data-aos="fade-up" className="text-xl md:text-4xl lg:text-[42px] lt-semibold text-[#010A12] xl:max-w-[24ch]">
                      {step.title}
                    </h4>
                    <p data-aos="fade-up" className="text-sm text-[#010A12] leading-relaxed max-w-[66ch] mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-[513px] xl:w-auto flex-shrink-0">
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
    </>
  );
}
