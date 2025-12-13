import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="max-w-4xl text-4xl md:text-7xl font-bold text-gray-900 ">
          We build systems that help businesses move faster.
        </h1>

        <p className="mt-6 max-w-2xl text-[21px] text-gray-600">
          AI automation and web development for startups, founders, and
          growing businesses. Clear solutions, no complexity.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            variant="primary"
            target="_blank"
            href="https://wa.me/7410761326"
          >
            
             💬 Chat on WhatsApp
          </Button>

          <Button
            variant="secondary"
            href="#contact"
          >
            Get in Touch →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
