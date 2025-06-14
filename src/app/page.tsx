import Header from "../../components/Header";
import HappyCustomers from "../../components/HappyCustomers";
import PIVUnit from "../../components/PIVUnit";
import DampCondensation from "../../components/DampCondensation";
import Solution from "../../components/Solution";
import WhyChooseUs from "../../components/WhyChooseUs";
import System from "../../components/System";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Vently | Home",
  description:
    "Welcome to Vently — Say goodbye to damp & condensation forever!",
};

export default function Home() {
  return (
    <div>
      <Header />
      <HappyCustomers />
      <div className="md:px-4 lg:px-0">
        <PIVUnit />
      </div>
      <DampCondensation />
      <div className="md:px-4 lg:px-0">
        <Solution />
      </div>
      <WhyChooseUs />
      <div className="md:px-4 lg:px-0">
        <System />
      </div>
      <Faq />
      <Footer />
    </div>
  );
}
