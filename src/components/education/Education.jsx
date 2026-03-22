const Education = () => {
  return (
    <section
      className="content py-20 max-xxl:px-4"
      id="education"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Academic foundation in Computer Science with focused training in Generative AI, backend development, and real-world AI systems.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Education Column */}
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-transparent hover:border-picto-primary transition-all duration-300">
          <h3 className="text-lg font-semibold mb-4">🎓 Education</h3>

          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900">
                Bachelor’s Degree in Computer Science
              </p>
              <p className="text-sm text-gray-600"> 
                Pioneer Kumaraswamy College. 
              </p>
              <p className="text-xs text-gray-400">
                2022 – 2025
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-transparent hover:border-picto-primary  transition-all duration-300 ">
          <h3 className="text-lg font-semibold mb-4">📜 Courses & Certifications</h3>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>
                <a
                    href="/ux"   
                    className="
                    text-gray-700
                    hover:text-picto-primary
                    hover:underline
                    transition-colors duration-200
                    "
                >
                    • Karaka AI Academy (Generative AI Full Stack Development)
                </a>
            </li>
            <ul classname="text-lg font-semibold mb-4">
              <a> Skills Gained : </a>


            <li>• Retrieval-Augmented Generation (RAG & FAISS)</li>
            <li>• Building AI Apps with Streamlit</li>
            <li>• FastAPI for AI Backends</li>
            </ul>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Education;
