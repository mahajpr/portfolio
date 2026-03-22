

import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Projects", url: "projects" },
  { id: 4, name: "Skills", url: "skills" },
  { id: 5, name: "Education & Certifications", url:"education"},
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#9929fb",
        color: "white",
      }}
      className="hover:text-picto-primary px-5 py-3 mx-1"
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white"
      } z-50 transition-all duration-500`}
    >
      <div className="navbar flex justify-between mx-auto content">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 w-screen p-2 shadow bg-white text-black"
            >
              {menu}
            </ul>
          </div>

          {/* Logo + Name + Role */}
          <Link
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img src={logo} className="h-10 sm:h-12 rounded-xl" alt="logo" />

            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-semibold text-[#132238]">
                Maha Vigneshwari
              </span>
              <span className="text-xs sm:text-sm text-gray-500">
                GenAI Developer • FastAPI • LLM Apps
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="menu menu-horizontal text-[16px] font-medium">
            {menu}
          </ul>

          <Link
            to="contact"
            smooth={true}
            duration={900}
            className="btn btn-sm sm:btn-md btn-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
