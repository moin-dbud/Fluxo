import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const problems = [
  "Spending hours on manual data entry and repetitive tasks",
  "Customer support overwhelmed with common questions",
  "Outdated website that does not convert visitors",
  "No clear system for managing leads and follow-ups",
  "Team wasting time on tasks that could be automated",
  "Need a custom tool but cannot find the right solution",
];

const Problems = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold text-white">
          Problems We Help Solve
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Real challenges businesses face every day.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((text, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 flex gap-4 items-start hover:bg-slate-800 transition"
            >
              <span className="text-cyan-400 mt-1">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <p className="text-slate-200 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problems;
