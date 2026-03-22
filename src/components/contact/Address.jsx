import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3
                 rounded-[10px] bg-white cursor-pointer
                 hover:shadow-[0px_0px_37px_5px_rgba(0,0,0,0.1)]
                 transition-all duration-300 max-sm:mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon */}
      <div
        className={`h-10 md:h-12 aspect-square flex items-center justify-center
                    rounded-[4px]
                    ${hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"}`}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className={`text-lg md:text-xl
                      ${hover ? "text-white" : "text-picto-primary"}`}
        />
      </div>

      {/* Text */}
      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] text-[#424E60] font-normal">
          {item.title}:
        </p>

        {/* Clickable if link exists */}
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-3 py-1.5 rounded-md
                       text-sm font-medium text-[#132238]
                       bg-gray-100 hover:bg-purple-100
                       transition"
          >
            {item.description}
          </a>
        ) : (
          <p className="inline-block px-3 py-1.5 rounded-md
                       text-sm font-medium text-[#132238]
                       bg-gray-100"
          >
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Address;
