import Header from "../../../components/UnderstandTheRisks/Header";
import Hero from "../../../components/UnderstandTheRisks/Hero";
import Footer from "../../../components/Footer";
import Faq from "../../../components/UnderstandTheRisks/Faq";

export const metadata = {
  title: "Understand the Risks | Vently",
  description:
    "Understand the health and property risks of damp and condensation.",
};

export default function UnderstandTheRisks() {
  return (
    <>
      <Header />
      <Hero />
      <Faq />
      <Footer />
    </>
  );
}
