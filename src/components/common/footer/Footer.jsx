
import logo from "../../../assets/logo.png";

const navItems = [
  { id: 1, name: "Home", url: "home" },
  { id: 2, name: "About", url: "about" },
  { id: 3, name: "Projects", url: "projects" },
  { id: 4, name: "Skills", url: "skills" },
  { id: 5, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between items-center text-neutral-200">

        {/* LEFT SIDE */}
        <div className="flex items-center">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <div className="ms-3">
            <p className="text-2xl sm:text-3xl font-semibold">
              Maha Vigneshwari
            </p>
            <p className="text-xs sm:text-sm text-gray-300">
              Generative AI Developer 
            </p>
          </div>
        </div>

        {/* CENTER NAVIGATION */}
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center sm:text-right text-[12px] sm:text-[16px]">
          <p>© {copyrightYear} Picto</p>
          <div className="mt-2 space-x-3">
            <a
              href="https://github.com/mahajpr/Projects.git"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maha-vigneshwari"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <p className="text-white text-center text-xs sm:text-sm w-full py-10">
        Built by Theme Wagon
      </p>
    </div>
  );
};

export default Footer;