import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <a href="#">
          <img
            src={logo}
            alt="Fluxo Logo"
            className="w-7 h-7"
          />
          </a>
          
          <span className="text-2xl font-bold text-blue-900">
            <a href="#">
            Fluxo
            </a>
          </span>
        </div>

        <nav className="hidden md:flex gap-10 font-inter text-sm font- text-gray-600">
          <a href="#services" className="hover:text-blue-900 font-semibold transition">
            Services
          </a>
          <a href="#process" className="hover:text-blue-900 font-semibold transition">
            Process
          </a>
          <a href="#contact" className="hover:text-blue-900 font-semibold transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
