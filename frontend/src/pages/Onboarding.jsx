import { useState } from "react";

const Onboarding = () => {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: "",
    services: "",
    goal: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hi Fluxo 👋

Here are my onboarding details:

👤 Name: ${form.name}
🏢 Business: ${form.business}
📧 Email: ${form.email}
📱 Phone: ${form.phone}
🌐 Website: ${form.website || "Not available"}
🛠 Services Needed: ${form.services}
🎯 Goal: ${form.goal}

Looking forward to connecting!
`;

    const whatsappURL = `https://wa.me/917410761326?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Client Onboarding
        </h1>
        <p className="text-gray-600 mb-8">
          Tell us a bit about your business so we can build the right solution
          for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            required
            placeholder="Your Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />

          <input
            name="business"
            required
            placeholder="Business / Brand Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />

          <input
            name="phone"
            required
            placeholder="Phone / WhatsApp Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />

          <input
            name="website"
            placeholder="Existing Website (if any)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />

          <select
            name="services"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          >
            <option value="">What do you need?</option>
            <option>Website Development</option>
            <option>AI Automation</option>
            <option>Website + Automation</option>
            <option>Not sure yet</option>
          </select>

          <textarea
            name="goal"
            required
            rows="4"
            placeholder="What problem are you trying to solve?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Continue on WhatsApp →
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-6 text-center">
          This will open WhatsApp with your details pre-filled.
        </p>
      </div>
    </section>
  );
};

export default Onboarding;
