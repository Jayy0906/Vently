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
    mobileDescription:
      "Simply answer a few questions about your current heating situation and we’ll give you a call to arrange your free home energy assessment.",
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
      <section
        data-aos="fade-up"
        className="w-full px-4 md:px-6 lg:px-12 xl:px-11 2xl:px-12"
      >
        <hr
          data-aos="fade-up"
          className="border-t border-gray-300 mb-6 mt-12 md:mt-0"
        />
        <div className="flex flex-col gap-10 max-w-[1440px] 2xl:max-w-[1905px] mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-6">
              {/* <hr> before each step except the first */}
              {index !== 0 && (
                <hr data-aos="fade-up" className="border-t border-gray-300 " />
              )}

              <div className="flex flex-col lg:flex-row items-stretch gap-4 w-full mt-4">
                <div className="flex-1 flex flex-col justify-between">
                  <h3
                    data-aos="fade-up"
                    className="text-8xl text-gray-300 lt-semibold"
                  >
                    {step.number}
                  </h3>
                  <div className="mt-4 flex flex-col justify-end">
                    <h4 className="md:hidden text-xl md:text-4xl lg:text-[42px] 2xl:text-[54px] lt-semibold text-[#010A12] xl:max-w-[24ch]">
                      {step.title}
                    </h4>
                    <h4
                      data-aos="fade-up"
                      className="hidden md:block text-xl md:text-4xl lg:text-[42px] 2xl:text-[54px] lt-semibold text-[#010A12] xl:max-w-[24ch]"
                    >
                      {step.title}
                    </h4>
                    <p
                      data-aos="fade-up"
                      className="text-[17px] 2xl:text-[20px] text-[#010A12] leading-relaxed max-w-[66ch] lg:max-w-[55ch] xl:max-w-[64ch] mt-2"
                    >
                      {/* For step 3 (index 2) only */}
                      {index === 2 ? (
                        <>
                          <span className="md:hidden">
                            {step.mobileDescription}
                          </span>
                          <span className="hidden md:block">
                            {step.description}
                          </span>
                        </>
                      ) : (
                        step.description
                      )}
                    </p>
                  </div>
                </div>

                {/* Right: Image with Bottom-Only Shadow */}
                <div className="w-full lg:w-[513px] xl:w-auto flex-shrink-0 drop-shadow-[30px_5px_30px_rgba(107,114,128,0.1)] md:drop-shadow-[0_90px_50px_rgba(107,114,128,0.25)]">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={600}
                      className="w-full md:h-full h-[360px] object-cover"
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
