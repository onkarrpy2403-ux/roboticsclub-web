import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navlinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about" },
  { id: 3, name: "Our Projects", link: "/projects" },
  { id: 4, name: "Events", link: "/events" },
  { id: 5, name: "Our Team", link: "/team" },
  { id: 6, name: "Achievements", link: "/achievements" },
  { id: 7, name: "News", link: "/news" },
  { id: 8, name: "Contacts", link: "/contacts" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex pb-2 justify-between items-center h-17">
          {/* Here Codes for Robotics NITP Logo */}
          <div className="flex-shrink-0">
            <Link to="../roboticsclub-web/" className="flex items-center">
              <img
                src="../roboticsclub-web/logo.png"
                alt="Robotics Club NITP"
                className="h-18 w-auto"
              />
            </Link>
          </div>

          {/* Here Codes for our Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-4 flex flex-wrap justify-center items-baseline space-x-4">
              {navlinks.map((navlink) => {
                const isActive =
                  location.pathname === `/roboticsclub-web${navlink.link}`;
                return (
                  <Link
                    key={navlink.id}
                    to={`/roboticsclub-web${navlink.link}`}
                    className={`text-white bg-transparent hover:bg-black mt-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform ${
                      isActive ? "scale-103 bg-gray-800 shadow-gray-600" : ""
                    } hover:scale-104 shadow-md hover:shadow-gray-500`}
                  >
                    {navlink.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Here Codes for our Mobile Menu Buttons */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white bg-transparent hover:bg-gray-900 hover:text-white focus:outline-none px-3 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-gray-500"
            >
              <svg
                className="h-10 w-7 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 26 26"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Here Codes for our Mobile View Menu */}
      {menuOpen && (
        <div className="text-center md:hidden bg-gray-900 shadow-xl mp-10 min-h-screen">
          <div className="px-4 py-12 space-y-1 sm:px-4">
            {navlinks.map((navlink) => {
              const isActive =
                location.pathname === `/roboticsclub-web${navlink.link}`;
              return (
                <Link
                  key={`10+${navlink.id}`}
                  to={`/roboticsclub-web${navlink.link}`}
                  className={`text-white hover:bg-gray-800 block px-3 py-4 rounded-lg shadow-md text-base font-semibold transition-all duration-300 transform ${
                    isActive
                      ? "bg-gray-800/80 scale-103 shadow-gray-600"
                      : ""
                  } hover:scale-104 hover:shadow-gray-700`}
                  onClick={() => setMenuOpen(false)}
                >
                  {navlink.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;