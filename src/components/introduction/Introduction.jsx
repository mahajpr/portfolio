
import profileImg from "../../assets/images/person.png";
import "./introduction.css";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="content flex flex-col lg:flex-row items-start justify-between min-h-[80vh] px-6 gap-12 pt-13 lg:pt-20"
    >
      <div className="max-w-3xl">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
          Hello, I’m <br />
          <span className="text-picto-primary">Maha Vigneshwari</span>
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
        <span className="font-medium">Generative AI Developer</span>
        </p>

        {/* Value proposition */}
        <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mb-8">
         I build real-world AI applications using LLMs, FastAPI, and retrieval-based systems.
         Focused on solving practical problems through scalable backend development and intelligent automation.</p>
        <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mb-8">
         Tech Stack: Python • FastAPI • Streamlit • SQLite • RAG • LLM APIs
        </p>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="btn btn-primary px-6 py-3 text-sm sm:text-base"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm sm:text-base text-gray-700 hover:text-picto-primary transition"
          >
            Download Resume →
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img
          src={profileImg}
          alt="Maha Vigneshwari"
          className="w-64 sm:w-72 lg:w-80 rounded-2xl shadow-xl object-cover"
        />
      </div>
    </section>
  );
};

export default Introduction;
