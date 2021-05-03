import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [appear, setAppear] = useState("");
  const [mouse, setMouse] = useState(false);
  const [prodMob, setprodMob] = useState(false);
  const router = useRouter();

  const mobileNav = useMediaQuery({
    query: "(max-width:1024px)",
  });
  const variants = {
    open: { rotate: 0 },
    closed: { rotate: 180 },
  };
  useEffect(() => {
    console.log(mobileNav);
  }, [mobileNav]);
  return (
    <>
      <div className="sticky top-0 flex z-10  flex-wrap">
        <nav className="relative z-10 w-full flex flex-wrap items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
          <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
            <div
              className={`w-full z-10 relative flex align-baseline justify-between lg:w-auto px-4  lg:justify-start  `}
            >
              <a
                className="button text-xl xxs:mr-auto  text-gray-500 rounded flex font-bold items-center leading-relaxed mr-4 py-2 whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300 "
                href="/"
              >
                <img className="mr-2" width="50" src="/logo.png" />
                MedBlocks
              </a>
              {!navbarOpen ? (
                <motion.div
                  className="my-auto"
                  variants={variants}
                  animate={navbarOpen ? "open" : "closed"}
                >
                  <img
                    src="/icons/hamburger.svg"
                    variants={variants}
                    animate={navbarOpen ? "open" : "closed"}
                    onClick={() => {
                      setNavbarOpen(!navbarOpen);
                      setAppear("yes");
                    }}
                    className="cursor-pointer w-3/4 block lg:hidden outline-none focus:outline-none"
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="my-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: navbarOpen ? 1 : 0 }}
                >
                  <img
                    src="/icons/close.svg"
                    onClick={() => {
                      setNavbarOpen(!navbarOpen);
                      setAppear("no");
                      setprodMob(false);
                    }}
                    className="cursor-pointer w-3/4 my-auto block lg:hidden outline-none focus:outline-none"
                  />
                </motion.div>
              )}
            </div>

            <div
              onMouseLeave={() => setMouse(false)}
              className={`lg:flex-grow items-center ${mobileNav && "w-full"}`}
            >
              <motion.ul
                inital={{
                  y: appear === "" ? 0 : -100,
                  opacity: appear === "" ? 1 : 0,
                }}
                animate={{
                  y: appear === "" ? 1 : 0,
                  opacity: appear === "" ? 1 : appear === "yes" ? 1 : 0,
                }}
                className={`lg:flex lg:justify-end  ${
                  navbarOpen ? "block" : "hidden"
                } list-none ml-auto`}
              >
                <li
                  onMouseEnter={() => {
                    setMouse(true);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`nav-item `}
                >
                  <a
                    onClick={() => {
                      if (mobileNav) {
                        setprodMob(!prodMob);
                      }
                    }}
                    className={`button cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75 hover:bg-gray-200 rounded ${
                      router.route === "products" && "bg-gray-200"
                    }`}
                  >
                    Products
                    {mobileNav && (
                      <img
                        width="20"
                        className="ml-auto"
                        src="/icons/arrow-down.svg"
                      />
                    )}
                  </a>
                  {mouse && !mobileNav && <Products setMouse={setMouse} />}
                  {prodMob && <ProdMob />}
                </li>
                <li className="nav-item">
                  <a
                    className={`button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75 hover:bg-gray-200 rounded ${
                      router.route === "/jobs" && "bg-gray-200"
                    }`}
                    href="/jobs"
                  >
                    Jobs
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a
                    className={`button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75 hover:bg-gray-200 rounded ${
                      router.route === "/consultation" && "bg-gray-200"
                    }`}
                    href="/consultation"
                  >
                    Consultation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="_blank"
                    className="button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75 hover:bg-gray-200 rounded"
                    href="https://blog.medblocks.org/"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="_blank"
                    className="button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75 hover:bg-gray-200 rounded"
                    href="https://github.com/sidharthramesh/medblocks"
                  >
                    Github
                  </a>
                </li>
              </motion.ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
const Products = ({ setMouse }) => (
  <motion.div
    onMouseEnter={() => setMouse(true)}
    onMouseLeave={() => setMouse(false)}
    initial={{ y: -10 }}
    animate={{ y: 0 }}
    className="fixed top-5 bg-white z-20 p-3 shadow-xl rounded"
  >
    <ul className="flex flex-col items-center">
      <li>
        <a
          className="button text-gray-600 hover:text-black"
          href="/products/medblocks-ui"
        >
          <div className="bg-white p-2 hover:bg-hoverbg rounded">
            <p className="text-black font-bold">UI Components</p>
            <h6 className="text-gray-600">
              Web Components for rapid development of openEHR systems
            </h6>
          </div>
        </a>
      </li>
      <li>
        <a
          className="button text-gray-600 hover:text-black"
          href="/products/medblocks-vscode"
        >
          <div className="bg-white p-2 hover:bg-hoverbg rounded">
            <p className="text-black font-bold">Vs Code</p>
            <h6 className="text-gray-600">
              Extension for development of openEHR templates
            </h6>
          </div>
        </a>
      </li>
    </ul>
  </motion.div>
);
const ProdMob = () => (
  <motion.div
    initial={{ y: -10 }}
    animate={{ y: 0 }}
    className="bg-white p-3 rounded"
  >
    <ul className="flex flex-col">
      <li>
        <a
          className="button text-gray-600 hover:text-black"
          href="/products/medblocks-ui"
        >
          <div className="bg-white p-2 hover:bg-hoverbg rounded">
            <span className="text-black font-bold">UI Components</span>
            <h6 className="text-gray-600">
              Web Components for rapid development of openEHR systems
            </h6>
          </div>
        </a>
      </li>
      <li>
        <a
          className="button text-gray-600 hover:text-black"
          href="/products/medblocks-vscode"
        >
          <div className="bg-white p-2 hover:bg-hoverbg rounded">
            <span className="text-black font-bold">Vs Code</span>
            <h6 className="text-gray-600">
              Extension for development of openEHR templates
            </h6>
          </div>
        </a>
      </li>
    </ul>
  </motion.div>
);
