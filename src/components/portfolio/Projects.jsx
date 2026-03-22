// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
//   faExternalLinkAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

// const Projects = ({ data }) => {
//   return (
//     <div
//       className="max-w-106 rounded-lg border border-gray-200 bg-white
//                  hover:shadow-2xl transition-all duration-300"
//     >
//       {/* Project Image */}
//       <img
//         src={data?.image}
//         alt={`${data?.title} preview`}
//         className="rounded-t-lg w-full object-cover"
//       />

//       <div className="p-4 xs:p-8">
//         {/* Category */}
//         <p className="text-gray-400 text-xs font-medium uppercase">
//           {data?.category}
//         </p>

//         {/* Title */}
//         <h3 className="text-gray-900 text-md xxs:text-lg font-semibold mt-1">
//           {data?.title}
//         </h3>

//         {/* Live Demo Badge */}

// {/* If project has TWO demos */}
// data?.demos ? (
//   <div className="flex gap-2 mt-2 flex-wrap">

//     <a
//       href={data.demos.Student}
//       target="_blank"
//       rel="noreferrer"
//       className="inline-flex items-center gap-1 text-xs font-medium
//                  text-blue-700 bg-blue-100 px-2 py-1 rounded-full
//                  hover:bg-blue-200 transition"
//     >
//       Student Portal
//       <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
//     </a>

//     <a
//       href={data.demos.Admin}
//       target="_blank"
//       rel="noreferrer"
//       className="inline-flex items-center gap-1 text-xs font-medium
//                  text-purple-700 bg-purple-100 px-2 py-1 rounded-full
//                  hover:bg-purple-200 transition"
//     >
//       Admin Panel
//       <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
//     </a>

//   </div>
// ) : (
//   /* Normal single demo */
//   data?.demo && (
//     <a
//       href={data.demo}
//       target="_blank"
//       rel="noreferrer"
//       className="inline-flex items-center gap-1 text-xs font-medium
//                  text-green-700 bg-green-100 px-2 py-1 rounded-full
//                  mt-2 w-fit hover:bg-green-200 transition"
//     >
//       ● Live Demo
//       <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
//     </a>
//     ))
//   /* Demo Video Section */
//   data?.video && (
//   <div className="mt-4">
//     <p className="text-xs font-semibold text-gray-500 mb-2">
//       🎥 Demo Video
//     </p>

//     <div className="rounded-lg overflow-hidden border">
//       <iframe
//         src={data.video}
//         title="Demo Video"
//         className="w-full h-48"
//         allowFullScreen
//       ></iframe>
//     </div>
//   </div>
//   ))
// {/* Tech Stack */}
//   {data?.Tech && (
//   <p className="text-xs text-gray-500 mt-2">
//   <span className="font-medium">Tech:</span> {data.Tech}
//   </p>
//         )}

//         {/* Description */}
//         <p className="text-gray-600 text-xs xxs:text-[14px] mt-3 leading-relaxed">
//           {data?.description}
//         </p>

//         {/* Actions */}
//         <div className="mt-5 flex flex-col gap-3">

//           {/* UX Case Study*/}
//           {data.type === "ux" && data.caseStudy && (
//             <a
//               href={data.caseStudy}
//               className="inline-flex items-center gap-2 text-sm font-semibold
//                         text-picto-primary hover:underline transition"
//             >
//               View UX Case Study
//               <FontAwesomeIcon icon={faArrowRight} />
//             </a>
//           )}
//           {/* GitHub */}
//           {data?.github && (
//             <a
//               href={data.github}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-2 text-xs text-gray-500
//                          hover:text-gray-800 transition"
//             >
//               <FontAwesomeIcon icon={faGithub} />
//               View Code on GitHub
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ data }) => {
  return (
    <div
      className="max-w-106 rounded-lg border border-gray-200 bg-white
                 hover:shadow-2xl transition-all duration-300"
    >
      {/* Project Image */}
      <img
        src={data?.image}
        alt={`${data?.title} preview`}
        className="rounded-t-lg w-full object-cover"
      />

      <div className="p-4 xs:p-8">
        {/* Category */}
        <p className="text-gray-400 text-xs font-medium uppercase">
          {data?.category}
        </p>

        {/* Title */}
        <h3 className="text-gray-900 text-md xxs:text-lg font-semibold mt-1">
          {data?.title}
        </h3>

        {/* ================= DEMO SECTION ================= */}
        {data?.demos ? (
          <div className="flex gap-2 mt-2 flex-wrap">
            {data?.demos?.Student && (
              <a
                href={data.demos.Student}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium
                           text-blue-700 bg-blue-100 px-2 py-1 rounded-full
                           hover:bg-blue-200 transition"
              >
                Student Portal
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
              </a>
            )}

            {data?.demos?.Admin && (
              <a
                href={data.demos.Admin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium
                           text-purple-700 bg-purple-100 px-2 py-1 rounded-full
                           hover:bg-purple-200 transition"
              >
                Admin Panel
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
              </a>
            )}
          </div>
        ) : (
          <div className="flex gap-2 mt-2 flex-wrap">
            {/* 🎥 Demo Video */}
            {data?.isVideo && (
              <a
                href={data.video}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium
                           text-red-700 bg-red-100 px-2 py-1 rounded-full
                           hover:bg-red-200 transition"
              >
                🎥 Watch Demo
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
              </a>
            )}

            {/* 🌐 Live Demo */}
            {data?.demo && (
              <a
                href={data.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium
                           text-green-700 bg-green-100 px-2 py-1 rounded-full
                           hover:bg-green-200 transition"
              >
                🌐 Live Demo
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
              </a>
            )}
          </div>
        )}

        {/* ================= EMBED VIDEO ================= */}
        {/* {data?.video && (
          <div className="mt-4">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              🎥 Demo Video
            </p>

            <div className="rounded-lg overflow-hidden border">
              <iframe
                src={data.video}
                title="Demo Video"
                className="w-full h-48"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )} */}

        {/* ================= TECH STACK ================= */}
        {data?.Tech && (
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-medium">Tech:</span> {data.Tech}
          </p>
        )}

        {/* ================= DESCRIPTION ================= */}
        <p className="text-gray-600 text-xs xxs:text-[14px] mt-3 leading-relaxed">
          {data?.description}
        </p>

        {/* ================= ACTIONS ================= */}
        <div className="mt-5 flex flex-col gap-3">
          {/* UX Case Study */}
          {data.type === "ux" && data.caseStudy && (
            <a
              href={data.caseStudy}
              className="inline-flex items-center gap-2 text-sm font-semibold
                        text-picto-primary hover:underline transition"
            >
              View UX Case Study
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          )}

          {/* GitHub */}
          {data?.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-gray-500
                         hover:text-gray-800 transition"
            >
              <FontAwesomeIcon icon={faGithub} />
              View Code on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;