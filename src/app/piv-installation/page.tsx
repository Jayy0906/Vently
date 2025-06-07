import Header from "../../../components/PIVInstallation/Header";
import Hero from "../../../components/PIVInstallation/Hero";
import Footer from "../../../components/Footer";
import WhyChooseUs from "../../../components/WhyChooseUs";
import Solution from "../../../components/Solution";
import Faq from "../../../components/AboutUs/Faq";
import Mean from "../../../components/PIVInstallation/Mean";
import Fitted from "../../../components/PIVInstallation/Fitted";

export const metadata = {
  title: "PIV Installation | Vently",
  description: "Discover how Vently installs PIV systems to combat condensation.",
};

export default function PIVInstallation() {
  return (
    <>
      <Header />
      <Hero />
      <div className="mt-20 md:mt-10 lg:mt-30 lg:mx-3 md:mx-0"><WhyChooseUs /></div>
      <div className="mt-20 md:mt-0 lg:mt-40 lg:mx-3 md:-mx-0"><Solution /></div>
      <Mean />
      <Fitted />
      <div className="-mt-20 md:-mt-0 lg:-mt-0 lg:mx-10 md:mx-0"><Faq /></div>
      <div className="mt-20 md:mt-10 lg:mt-20"><Footer /></div>
    </>
  );
}