import Link from "next/link";
import Image from "next/image";

const understandItems = [
  {
    id: 1,
    title: "Say Goodbye to Damp and Mould",
    issue:
      "Around 4% of homes in England experience damp, rising to 11% in privately rented homes.",
    benefit: "Keep your home dry and healthy by reducing indoor humidity.",
    description:
      "How PIV Helps: PIV systems continuously introduce fresh, filtered air, reducing humidity levels and preventing conditions that encourage damp and mould growth.",
    image: "/images/Say Goodbye to Damp and Mould.webp",
  },
  {
    id: 2,
    title: "Eliminate Condensation In Your Home",
    issue:
      "1 in 5 homes in the UK suffer from condensation damp, causing discomfort and mould.",
    benefit: "Enjoy clear windows and comfortable living spaces year-round.",
    description:
      "How PIV Helps: PIV maintains constant airflow, significantly reducing condensation and keeping surfaces dry.",
    image: "/images/Eliminate Condensation in Your Home.webp",
  },
  {
    id: 3,
    title: "Breathe Cleaner, Fresher Air",
    issue:
      "People spend 80-90% of their time indoors, breathing polluted air from cooking, cleaning chemicals, and allergens.",
    benefit:
      "Significantly reduce indoor pollutants and allergens for healthier living.",
    description:
      "How PIV Helps: By circulating fresh, filtered air, PIV reduces pollutants, improving overall indoor air quality.",
    image: "/images/6.webp",
  },
  {
    id: 4,
    title: "Protect Your Family’s Respiratory Health",
    issue:
      "Living in damp conditions significantly increases asthma, allergic rhinitis, and respiratory illnesses.",
    benefit:
      "Remove moisture and contaminants, dramatically improving your family’s respiratory health.",
    description:
      "How PIV Helps: By eliminating damp conditions and reducing airborne contaminants, PIV promotes healthier breathing environments.",
    image: "/images/Protect Your Family Respiratory Health.webp",
  },
  {
    id: 5,
    title: "Relief from Hay Fever & Allergies",
    issue:
      "Approximately 49% of the UK population suffers from hay fever or airborne allergies.",
    benefit:
      "Filter pollen and dust, greatly reducing indoor allergens and allergy symptoms.",
    description:
      "How PIV Helps: PIV units effectively filter incoming air, dramatically reducing pollen and allergen exposure indoors.",
    image: "/images/Relief from Hay Fever and Allergies.webp",
  },
  {
    id: 6,
    title: "Boost Comfort, Banish Indoor Illness",
    issue:
      "Poor ventilation and pollutant build-up cause headaches, fatigue, and Sick Building Syndrome.",
    benefit:
      "Refresh your home's air quality and eliminate common indoor health issues.",
    description:
      "How PIV Helps: Continuous airflow from PIV systems displaces stale, pollutant-laden air, improving indoor comfort and wellbeing.",
    image: "/images/Boost Comfort Banish Indoor Illness.webp",
  },
  {
    id: 7,
    title: "Optimal Ventilation Without Heat Loss",
    issue:
      "Insulated homes often trap moisture, leading to mould and structural problems.",
    benefit: " Balance moisture control and energy efficiency effectively.",
    description:
      "How PIV Helps: PIV provides fresh air circulation while maintaining thermal efficiency, preventing moisture build-up without compromising warmth.",
    image: "/images/mean.webp",
  },
];

export default function UnderstandSectionHero() {
  return (
    <section
      data-aos="fade-up"
      className="w-full px-4 md:px-6 lg:px-12 xl:px-12"
    >
      <div className="max-w-[1440px] 2xl:max-w-[1905px] mx-auto flex flex-col gap-16">
        {understandItems.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-6">
            {index !== 0 && (
              <hr
                data-aos="fade-up"
                className="border-t border-gray-300 -mt-4"
              />
            )}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-6">
              {/* Text Section - Now using flex-col justify-between */}
              <div className="flex-1 w-full flex flex-col justify-between lg:min-h-[500px]">
                <div className="space-y-6 mt-5">
                  {/* Title aligned to top */}
                  <h3
                    data-aos="fade-up"
                    className="text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-[54px] lt-semibold leading-tight text-[#010A12] 2xl:max-w-[18ch]"
                  >
                    {item.title}
                  </h3>

                  {/* Content with maintained spacing */}
                  <div className="space-y-6">
                    {/* Issue */}
                    <div>
                      <span
                        data-aos="fade-up"
                        className="inline-block px-2 py-1 text-[17px] 2xl:text-[18px] lt-regular text-[#F64242] bg-[#fdcece] rounded-xl mr-2"
                      >
                        issue
                      </span>
                      <p
                        data-aos="fade-up"
                        className="text-[17px] 2xl:text-[18px] text-[#010A12] lg:max-w-[52ch] mt-3"
                      >
                        {item.issue}
                      </p>
                      <hr className="hidden md:block border-t border-gray-300 lg:w-112 mt-5" />
                    </div>

                    {/* Benefit */}
                    <div>
                      <span
                        data-aos="fade-up"
                        className="inline-block px-2 py-1 text-[17px] 2xl:text-[18px] lt-regular text-[#056C31] bg-[#b5edcd] rounded-xl mr-2"
                      >
                        benefit
                      </span>
                      <p
                        data-aos="fade-up"
                        className="text-[17px] 2xl:text-[18px] text-[#010A12] mt-3"
                      >
                        {item.benefit}
                      </p>
                      <hr className="hidden md:block border-t border-gray-300 lg:w-112 mt-5" />
                    </div>

                    {/* Description */}
                    <div>
                      <p
                        data-aos="fade-up"
                        className="text-[#010A12] text-[17px] 2xl:text-[18px] lg:max-w-[52ch] 2xl:max-w-[51ch] mt-1"
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button aligned to bottom */}
                <div data-aos="fade-up" className="mt-6 md:mt-0">
                  <Link href="/contact-us">
                    <button className="w-full lg:w-auto px-4 py-3 bg-[#B6E2FB] hover:bg-[#a0d8ff] text-[17px] 2xl:text-[18px] text-[#010A12] lt-semibold rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2 justify-center">
                      <span className="flex items-center gap-2 md:hidden">
                        Book a Survey
                        <Image
                          src="/icons/right-up.svg"
                          alt="Arrow icon"
                          width={10}
                          height={16}
                        />
                      </span>
                      <span className="hidden md:flex items-center gap-2">
                        {index < 3 ? "Book a Survey" : "Find out more"}
                        <Image
                          src="/icons/right-up.svg"
                          alt="Arrow icon"
                          width={10}
                          height={16}
                        />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image Block - unchanged */}
              <div
                data-aos="fade-up"
                className="w-full lg:w-[610px] xl:w-[700px] flex-shrink-0 overflow-hidden shadow-xl shadow-gray-300 rounded-xl border border-gray-200 md:mt-6"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  quality={100}
                  className="w-full h-auto object-cover lg:h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
