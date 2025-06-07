import Hero from "../../../components/AboutUs/Hero";
import Footer from "../../../components/Footer";
import WhyChooseUs from "../../../components/WhyChooseUs";
import Solution from "../../../components/Solution";
import Faq from "../../../components/AboutUs/Faq";
import OurMission from "../../../components/AboutUs/OurMission";

export const metadata = {
  title: "About Us | Vently",
  description:
    "Learn more about Vently and our mission to eliminate condensation.",
};

export default function AboutUs() {
  return (
    <>
      <Hero />
      <OurMission />
      <div className="md:mt-10 lg:px-8 xl:px-4 -mt-20 md:-mt-0">
        <WhyChooseUs />
      </div>
      <div className="mt-20 md:mt-0 lg:mt-40 lg:px-8 xl:px-4">
        <Solution />
      </div>
      <div className="lg:px-14 xl:px-10">
        <Faq />
      </div>
      <Footer />
    </>
  );
}
