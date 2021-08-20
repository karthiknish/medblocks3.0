import axios from "axios";
import { useState } from "react";
import validator from "validator";
const LinkButtons = ({ className }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      if (email !== "") {
        axios
          .post("/api", {
            email,
          })
          .then((res) => {
            console.log(res);
            setSuccess(res.data.success);
          })
          .catch((e) => {
            console.table(e.response.data);
            setSuccess("dup");
          });
      }
    } else {
      setSuccess(false);
    }
  };
  return (
    <div className={`gap-3 justify-center p-10 flex ${className}`}>
      {/* <a
        target="_blank"
        href="https://github.com/medblocks"
        className="rounded-md bg-transparent gap-2 inline-flex items-center hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent"
      >
        <svg
          className="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
        <span>Github</span>
      </a> */}

      {success === null || success === false ? (
        <>
          <input
            className="shadow appearance-none border rounded w-1/2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="rounded-md bg-transparent gap-2 inline-flex items-center  hover:bg-green-700 hover:border-green-700 bg-green-500 border-green-500 font-semibold text-white py-2 px-4 border"
          >
            <span>I'm interested</span>
          </button>
          {success === false && (
            <>
              <br />
              <strong className="text-red-600">
                Please enter a valid email
              </strong>
            </>
          )}
        </>
      ) : success === true ? (
        <strong>Thank you for your interest</strong>
      ) : (
        <strong className="text-red-600">Duplicate Email entered</strong>
      )}
    </div>
  );
};

export default LinkButtons;
