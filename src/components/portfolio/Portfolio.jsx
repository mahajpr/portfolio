
// export default Portfolio;
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

// GenAI-focused project data
const projectData = [
  {
    id: 1,
    type:"genai",
    image: card1,
    title: "Fake Review Detector",
    Tech: "FastAPI • Streamlit • LLM APIs • RAG • NLP • Text Analysis ",
    description:"AI-powered system that detects and explains fake product reviews using rule-based detection, RAG architecture, and LLM reasoning.",
    github: "https://github.com/mahajpr/Fake_Review_Detector.git",
    video:"/videos/fake_review_detection.mp4",
    isVideo:true,
  },
  {
  id: 2,
  type:"genai",
  image: card2,
  title: "Smart Event Management System with AI Assistant",
  Tech: "FastAPI • Streamlit • SQLite • REST API • Role-based Login ",
  description:"Role-based event management platform with separate student and admin portals, built using FastAPI and deployed backend services.",
  github: "https://github.com/mahajpr/College_Event_Register_System.git",
  video:"/videos/college_event_registrartion_video.mp4",
  isVideo:true,
},

  {
    id: 3,
    type:"genai",
    image: card3,
    title: "Agentic AI Resume Matcher",
    Tech: "FastAPI • Streamlit • NLP • LLM APIs • PDF Processing • REST API",
    description:"AI-powered Resume Matcher that analyzes resumes against job descriptions using NLP and LLM techniques. Provides match scores, skill alignment, and improvement suggestions in real-time.",
    github:"https://github.com/mahajpr/AI-Projects.git",
    video:"/videos/resume_demo.mp4",
    isVideo:true,
},
  // {
  //   id: 4,
  //   type:"genai",
  //   image: card4,
  //   category: "GENAI / QA SYSTEM",
  //   title: "Multi-Document QA System",
  //   description:
  //     "Built a multi-document question-answering system using embeddings and vector search, allowing users to query multiple documents efficiently.",
  //   link: "#!",
  //   github :"https://github.com/your-username/multidocument-QA-system ",
  //   demo: "https://your-streamlit-app.streamlit.app",
  // },
  // {
  //   id: 5,
  //   type:"genai",
  //   image: card5,
  //   category: "GENAI / QA SYSTEM",
  //   title: "Multi-Document QA System",
  //   description:
  //     "Built a multi-document question-answering system using embeddings and vector search, allowing users to query multiple documents efficiently.",
  //   link: "#!",
  //   github :"https://github.com/your-username/multidocument-QA-system ",
  //   demo: "https://your-streamlit-app.streamlit.app",
  // },
  // {
  //   id: 6,
  //   type:"genai",
  //   image: card6,
  //   category: "GENAI / QA SYSTEM",
  //   title: "Multi-Document QA System",
  //   description:
  //     "Built a multi-document question-answering system using embeddings and vector search, allowing users to query multiple documents efficiently.",
  //   link: "#!",
  //   github :"https://github.com/your-username/multidocument-QA-system ",
  //   demo: "https://your-streamlit-app.streamlit.app",
  // },
  
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="projects"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">LLM & AI Systems I Built</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Production-ready AI applications built using LLMs, FastAPI, and retrieval-based 
            architectures, focused on solving real-world problems.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://github.com/mahajpr/Projects.git"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
