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
    image: "/images/Protect Your Family’s Respiratory Health.webp",
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
    image: "/images/Relief from Hay Fever & Allergies.webp",
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
    image: "/images/Boost Comfort, Banish Indoor Illness.webp",
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
    <>
      <section data-aos="fade-up" className="w-full px-4 md:px-8 lg:px-12 xl:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
          {understandItems.map((item, index) => (
            <div key={item.id} className="flex flex-col gap-6">
              {index !== 0 && (
                <hr
                  data-aos="fade-up"
                  className="border-t border-gray-300 -mt-8"
                />
              )}{" "}
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Text Block - Now responsive for vertical distribution */}
                <div className="flex-1 w-full flex flex-col gap-3 lg:justify-between lg:min-h-[500px]">
                  {/* Title at top */}
                  <h3
                    data-aos="fade-up"
                    className="text-xl md:text-2xl lg:text-4xl xl:text-5xl lt-semibold leading-tight text-gray-900 text-[#010A12]"
                  >
                    {item.title}
                  </h3>

                  {/* Middle Section: Issue, Benefit, Description */}
                  <div className="flex-1 flex flex-col space-y-4">
                    {/* Issue */}
                    <div>
                      <span
                        data-aos="fade-up"
                        className="inline-block px-2 py-1 text-[13px] font-medium text-[#F64242] bg-[#fdcece] rounded-xl mr-2"
                      >
                        issue
                      </span>
                      <p
                        data-aos="fade-up"
                        className="text-sm md:text-base lg:max-w-[52ch] mt-3"
                      >
                        {item.issue}
                      </p>
                      <hr
                        data-aos="fade-up"
                        className="hidden md:block border-t border-gray-300 lg:w-112 mt-5"
                      />
                    </div>

                    {/* Benefit */}
                    <div>
                      <span
                        data-aos="fade-up"
                        className="inline-block px-2 py-1 text-[13px] lt-regular text-[#056C31] bg-[#b5edcd] rounded-xl mr-2"
                      >
                        benefit
                      </span>
                      <p
                        data-aos="fade-up"
                        className="text-sm md:text-base mt-3"
                      >
                        {item.benefit}
                      </p>
                      <hr
                        data-aos="fade-up"
                        className="hidden md:block border-t border-gray-300 lg:w-112 mt-5"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <p
                        data-aos="fade-up"
                        className="text-sm md:text-base lg:max-w-[52ch] mt-1"
                      >
                        {item.description}
                      </p>
                      {/* <hr className="hidden md:block border-t border-gray-300 lg:w-112 mt-2" /> */}
                    </div>
                  </div>

                  {/* Button at bottom */}
                  <div data-aos="fade-up" className="lg:mt-">
                    <button className="w-full lg:w-auto px-4 py-3 bg-[#B6E2FB] hover:bg-[#a0d8ff] text-sm text-[#010A12] lt-semibold rounded-lg shadow-sm transition-all cursor-pointer">
                      Book a Survey →
                    </button>
                  </div>
                </div>

                {/* Image Block - Position remains unchanged */}
                <div
                  data-aos="fade-up"
                  className="w-full lg:w-[610px] xl:w-[783px] flex-shrink-0 overflow-hidden rounded-xl shadow-lg border border-gray-200"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover lg:h-[500px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
