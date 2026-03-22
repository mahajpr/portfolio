import Roles from "./Roles";

/* ===============================
   SKILLS DATA (PLACEMENT READY)
================================ */

// AI & Backend Skills
const aiBackendSkills = [
  {
    id: 1,
    title: "LLM & RAG Systems",
    description:
      "Building AI applications using LLM APIs, retrieval-augmented generation (RAG), embeddings, vector search, and document-based question answering systems.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Designing REST APIs using FastAPI, implementing authentication, database integration, and scalable backend architecture for AI-driven systems.",
  },
];

// Programming & Frameworks
const programmingSkills = [
  {
    id: 3,
    title: "Programming",
    description:
      "Python, SQL fundamentals, data processing, algorithmic problem solving, and building end-to-end AI applications.",
  },
  {
    id: 4,
    title: "Frameworks",
    description:
      "FastAPI, Streamlit, REST APIs, SQLite, modular architecture, and deployment-ready application structure.",
  },
];

// Tools & Deployment
const toolsSkills = [
  {
    id: 5,
    title: "AI & LLM Tools",
    description:
      "OpenAI APIs, Groq API, embeddings, cosine similarity, vector search workflows, and model evaluation techniques.",
  },
  {
    id: 6,
    title: "Deployment & Dev Tools",
    description:
      "Git, GitHub, Railway deployment, environment variables, debugging, and version control for production AI apps.",
  },
];

const Profession = () => {
  return (
    <div className="content py-12 md:py-20 max-xxl:px-4" id="skills">
      
      {/* SECTION TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="section-title">Skills</p>
        <p className="text-gray-400 text-sm sm:text-lg mt-4">
          Technical expertise in building real-world AI applications using LLMs,
          FastAPI, and scalable backend systems.
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* AI + BACKEND */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
            AI & Backend Development
          </h3>
          {aiBackendSkills.map((role) => (
            <Roles role={role} key={role.id} />
          ))}
        </div>

        {/* PROGRAMMING */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
            Programming & Frameworks
          </h3>
          {programmingSkills.map((role) => (
            <Roles role={role} key={role.id} />
          ))}
        </div>

        {/* TOOLS */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
            Tools & Deployment
          </h3>
          {toolsSkills.map((role) => (
            <Roles role={role} key={role.id} />
          ))}
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <a
          href="#contact"
          className="btn btn-primary text-white px-6 py-3 text-sm sm:text-base font-semibold"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Profession;