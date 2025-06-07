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
      <div className="mt-14">
        <System />
      </div>
      <PIVUnit />
      <Footer />
    </>
  );
}
