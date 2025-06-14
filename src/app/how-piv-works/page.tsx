import Header from "../../../components/HowPIVWorks/Header";
import Footer from "../../../components/Footer";
import ProductOverview from "../../../components/HowPIVWorks/ProductOverview";
import System from "../../../components/System";
import PIVUnit from "../../../components/PIVUnit";

export const metadata = {
  title: "How PIV Works | Vently",
  description:
    "Discover how Vently installs PIV systems to combat condensation.",
};

export default function HowPIVWorks() {
  return (
    <>
      <Header />
      <ProductOverview />
      <div className="mt-18 md:mt-20 lg:mt-14 xl:mt-28 lg:mx-2 xl:mx-0">
        <System />
      </div>
      <div className="xl:mt-20 lg:mx-2 xl:mx-0">
        <PIVUnit />
      </div>
      <div className="mt-16 md:mt-24 lg:mt-20 xl:mt-30">
        <Footer />
      </div>
    </>
  );
}
