import Header from "../../../components/HowPIVHelps/Header";
import Hero from "../../../components/HowPIVHelps/Hero";
import Footer from "../../../components/Footer";
import ProductOverview from "../../../components/HowPIVWorks/ProductOverview";
import Works from "../../../components/HowPIVHelps/Works";

export const metadata = {
  title: "How PIV Helps | Vently",
  description:
    "Discover how Vently installs PIV systems to combat condensation.",
};

export default function HowPIVHelps() {
  return (
    <>
      <Header />
      <Hero />
      <Works />
      <div className="-mt-20 md:-mt-10 xl:-mt-12">
        <ProductOverview />
      </div>
      <div className="mt-20 md:mt-30 lg:mt-26 xl:mt-28">
        <Footer />
      </div>
    </>
  );
}
