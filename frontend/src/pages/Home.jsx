import Navbar from "../components/Navbar";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import HowWeWork from "../sections/HowWeWork";
import Problems from "../sections/Problems";
import Services from "../sections/Services";
import UseCases from "../sections/UseCases";
import WhyFluxo from "../sections/WhyFluxo";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyFluxo />
      <Problems />
      <UseCases />
      <HowWeWork />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
