import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const points = [
  "We speak plain language, not tech jargon. You will always know what we are building and why.",
  "Speed without shortcuts. We move fast but never compromise on quality or functionality.",
  "Automation-first mindset. If it can be automated, we will find a way to make it happen.",
  "Transparent pricing and timelines. No hidden costs, no surprise delays.",
];

const values = [
  {
    title: "Fast",
    desc: "Projects delivered in weeks, not months",
  },
  {
    title: "Smart",
    desc: "AI-first approach to every solution",
  },
  {
    title: "Clear",
    desc: "No jargon, just results that matter",
  },
];

const WhyFluxo = () => {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900">
            Why Fluxo
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We're built different. Here's what sets us apart.
          </p>

          <ul className="mt-10 space-y-6">
            {points.map((point, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheck} className="text-sm" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-blue-100 rounded-3xl p-12">
          <div className="space-y-10">
            {values.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyFluxo;
