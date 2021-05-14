import { useState } from "react";
import { useRouter } from "next/router";
export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(null);
  const router = useRouter();

  return (
    <>
      <div className="flex flex-wrap">
        <nav className="w-full flex flex-wrap items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
          <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
            <div
              className={`w-full flex align-baseline justify-between md:w-auto px-4  md:justify-start  `}
            >
              <a
                className="button text-xl xxs:mr-auto text-gray-800 rounded flex font-bold items-center leading-relaxed mr-4 py-2 whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300 "
                href="/"
              >
                <img
                  alt="Medblocks"
                  className="mr-1 w-10 h-10"
                  src="/logo.png"
                />
                Medblocks
              </a>
              {!navbarOpen ? (
                <div className="my-auto">
                  <img
                    alt="Menu"
                    src="/icons/hamburger.svg"
                    onClick={() => {
                      setNavbarOpen(!navbarOpen);
                    }}
                    className="cursor-pointer w-3/4 block md:hidden outline-none focus:outline-none"
                  />
                </div>
              ) : (
                <div className="my-auto">
                  <img
                    alt="Menu"
                    src="/icons/close.svg"
                    onClick={() => {
                      setNavbarOpen(!navbarOpen);
                    }}
                    className="cursor-pointer w-3/4 my-auto block md:hidden outline-none focus:outline-none"
                  />
                </div>
              )}
            </div>

            <div className="md:flex-grow items-center">
              <ul
                className={`md:flex md:justify-end  ${
                  navbarOpen ? "block" : "hidden"
                } list-none ml-auto`}
              >
                <li>
                  <a
                    className={`button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700  hover:bg-gray-200 rounded ${
                      router.route === "/consultation" && "bg-gray-200"
                    }`}
                    href="/consultation"
                  >
                    Consultation
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700  hover:bg-gray-200 rounded"
                    href="https://blog.medblocks.org/"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700  hover:bg-gray-200 rounded"
                    href="https://github.com/sidharthramesh/medblocks-ui"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
