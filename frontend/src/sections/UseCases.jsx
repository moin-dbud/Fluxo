const useCases = [
  {
    title: "E-commerce Store",
    problem:
      "An online store spending 10+ hours weekly processing orders, updating inventory, and handling customer inquiries.",
    solution:
      "Automated order processing, inventory sync, and AI chatbot for 24/7 customer support. Cut manual work by 80 percent.",
  },
  {
    title: "Local Service Business",
    problem:
      "A service business losing leads because they cannot respond fast enough and have no online booking system.",
    solution:
      "Modern website with instant quote calculator, online booking, and automated follow-up system. Never miss a lead again.",
  },
  {
    title: "Marketing Agency",
    problem:
      "An agency spending hours creating reports, scheduling posts, and managing client data across multiple tools.",
    solution:
      "Custom dashboard that automates reporting, social scheduling, and client management. Save 15+ hours per week.",
  },
  {
    title: "B2B Startup",
    problem:
      "A startup manually qualifying leads and scheduling demos, losing potential customers in the process.",
    solution:
      "AI-powered lead qualification system and automated demo booking. Focus on closing, not admin work.",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Use Cases
          </h2>
          <p className="text-lg text-gray-600">
            See how Fluxo can transform your business operations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-card text-card-foreground border-2 border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {item.problem}
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-blue-600 mb-2">
                  Solution:
                </p>
                <p className="text-gray-700">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
