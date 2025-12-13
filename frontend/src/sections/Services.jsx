import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCode, faBrain } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faBolt,
    title: "AI Automation",
    description:
      "Automate repetitive tasks, streamline workflows, and free up your team to focus on what matters. From data processing to customer interactions.",
  },
  {
    icon: faCode,
    title: "Web Development",
    description:
      "Modern, fast, and scalable web applications built with the latest technologies. From landing pages to full-stack platforms.",
  },
  {
    icon: faBrain,
    title: "Custom AI Tools",
    description:
      "Purpose-built AI solutions tailored to your business needs. Chatbots, recommendation engines, data analysis tools, and more.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-gray-900">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We help businesses leverage technology to work smarter, not harder.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
