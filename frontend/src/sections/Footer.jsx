import { Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo.png";


const Footer = () => {
    return (
        <footer className=" bg-gradient-to-b from-slate-900 to-slate-950 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-1">
                            <img
                                src={logo}
                                alt="Fluxo Logo"
                                className="w-7 h-7"
                            />
                            <span className="text-2xl font-bold text-blue-900">
            <a href="#">
            Fluxo
            </a>
          </span>
          </div>
                            <p className="mt-4 text-sm text-slate-400 max-w-sm">
                                We build AI-powered systems and modern web solutions that help
                                businesses work smarter and move faster.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                                Company
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-slate-400">
                                <li>
                                    <a href="#services" className="hover:text-slate-400 transition">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#process" className="hover:text-slate-400 transition">
                                        Process
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-slate-400 transition">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                                Connect
                            </h3>
                            <div className="mt-4 flex gap-4">
                                <a
                                    href="http://linkedin.com/company/fluxoagency"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition"
                                >
                                    <Linkedin size={18} />
                                </a>

                                <a
                                    href="https://www.instagram.com/fluxo.web.ai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition"
                                >
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">
                            © {new Date().getFullYear()} Fluxo. All rights reserved.
                        </p>

                        <p className="text-sm text-slate-500">
                            Built with clarity, speed & automation.
                        </p>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
