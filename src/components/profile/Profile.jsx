import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0.5 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-6"
      id="profile"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] font-semibold mb-6">
          Gen AI Developer
        </h2>

        {/* Description */}
        <div className="text-xs xs:text-[16px] lg:text-lg font-normal text-gray-600">
          <p>
           I am a Generative AI Developer specializing in building end-to-end 
           AI systems using LLMs, RAG architectures, and FastAPI-based backend services.
          </p>

          <p className="mt-4">
           My work includes developing chatbots, document intelligence platforms,
           and AI-driven automation tools, with an emphasis on performance,
           scalability, and practical real-world applications.
          </p>
        </div>

        {/* Social Media */}
        <div className="mt-8">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Profile;
