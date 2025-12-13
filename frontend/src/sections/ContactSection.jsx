import { useState } from "react";

const ContactSection = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // "success" | "error"

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch("https://fluxo-backend.onrender.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Let's Build Smarter Systems               
                    </h2>
                    <p className="text-lg text-gray-600">
                        Ready to transform your business? Get in touch and
                        let's talk about your project.
                    </p>
                </div>

                {/* Content */}
                 <div className="grid md:grid-cols-2 gap-12 items-stretch">
                     {/* WhatsApp Card */}
                     <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 flex flex-col justify-center items-center text-center">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle h-12 w-12 text-blue-600 mb-4" aria-hidden="true">
                             <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                         </svg>
                         <h3 class="text-2xl font-bold text-gray-900 mb-3">Quick Chat on WhatsApp</h3>
                         <p class="text-gray-600 mb-6">Prefer instant messaging? Let's connect on WhatsApp.</p>
                         <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-9 bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base font-medium rounded-lg transition-all hover:shadow-lg">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle mr-2 h-5 w-5" aria-hidden="true">
                                 <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                             </svg>
                             <a 
                                href="https://wa.me/7410761326"
                                target="_blank"
                                rel="noreferre">
                             Chat on WhatsApp 
                                </a>
                         </button>
                     </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                            Send Us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                 className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                 className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />

                            <textarea
                                 class="flex min-h-[60px] border bg-transparent text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full px-4 py-3 border-gray-400 focus:border-blue-400 focus:ring-blue-400 rounded-lg resize-none" name="message"
                                 placeholder="Tell us about your project" required=""
                                 rows="3">
                            </textarea>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-60"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                            {/* Status Messages */}
                            {status === "success" && (
                                <p className="text-green-600 text-sm mt-2">
                                    ✅ Message sent successfully. We’ll get back to you soon!
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-red-600 text-sm mt-2">
                                    ❌ Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;