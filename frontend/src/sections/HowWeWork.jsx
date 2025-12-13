const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, challenges, and goals. What is slowing you down?",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We map out a clear solution, show you exactly what we will build, and agree on timelines.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build fast, keep you updated, and make adjustments based on your feedback.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "We launch your solution, train your team, and make sure everything runs smoothly.",
  },
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600">
            A simple, transparent process that gets results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="text-6xl font-bold text-gray-200 mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
