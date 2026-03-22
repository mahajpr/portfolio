
import { useState } from "react";

const telegramSVG = (
  <svg className="w-4 md:w-6" viewBox="0 0 24 24" fill="none">
    <path
      d="M20.35 9.32L6.35 2.32C5.8 2.05 5.16 1.95 4.55 2.04C3.94 2.13 3.38 2.41 2.93 2.84C2.48 3.26 2.18 3.82 2.06 4.42C1.94 5.03 2.01 5.66 2.26 6.22L4.66 11.59C4.71 11.72 4.74 11.86 4.74 12C4.74 12.14 4.71 12.28 4.66 12.41L2.26 17.78C2.06 18.24 1.97 18.74 2.01 19.24C2.05 19.74 2.21 20.21 2.48 20.63C2.76 21.05 3.13 21.4 3.57 21.64C4.01 21.88 4.5 22 5 22C5.47 22 5.93 21.89 6.35 21.68L20.35 14.68C20.85 14.43 21.26 14.05 21.56 13.57C21.85 13.1 22 12.56 22 12C22 11.44 21.85 10.9 21.56 10.43C21.26 9.95 20.85 9.57 20.35 9.32Z"
      fill="white"
    />
  </svg>
);

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none border-[#E6E8EB] w-full px-0";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-green-600 font-semibold mt-4">
        Message sent successfully ✅
      </p>
    );
  }

  return (
    <form
      action="https://formspree.io/f/mzdaoenr"
      method="POST"
      className="flex flex-col gap-4 mt-4"
    >
      {/* NAME */}
      <input
        type="text"
        name="name"
        placeholder="Name*"
        className={commonClass}
        required
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        placeholder="Email*"
        className={commonClass}
        required
      />

      {/* SUBJECT */}
      <input
        type="text"
        name="subject"
        placeholder="Subject*"
        className={commonClass}
        required
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Message*"
        className={commonClass}
        required
      />

      <button
        type="submit"
        className="btn btn-primary w-fit mt-5 px-6 py-3 flex items-center gap-2"
      >
        Submit {telegramSVG}
      </button>
    </form>
  );
};

export default Form;