import Hero from "../../../components/AboutUs/Hero";
import Footer from "../../../components/Footer";
import WhyChooseUs from "../../../components/AboutUs/WhyChooseUs";
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
      <div className="md:px-4 lg:px-0">
        <OurMission />
      </div>
      <div className="md:px-6 lg:px-14 xl:px-10 2xl:px-10 -mt-16 md:-mt-10 lg:-mt-0 xl:-mt-0">
        <WhyChooseUs />
      </div>
      <div className="mt-16 md:mt-0 lg:mt-40 md:px-4 lg:px-8 xl:px-4 2xl:px-7">
        <Solution />
      </div>
      <div className="md:px-4 lg:px-14 xl:px-10 2xl:px-10 lg:-mt-10 md:-mt-24 xl:-mt-6">
        <Faq />
      </div>
      <Footer />
    </>
  );
}
