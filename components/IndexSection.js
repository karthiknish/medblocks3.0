import { motion } from "framer-motion";
import Lottie from "react-lottie";
import * as animationData1 from "../lottie/develop.json";
import * as animationData2 from "../lottie/build.json";
import * as animationData3 from "../lottie/update.json";
import * as animationData4 from "../lottie/ui-blocks.json";
import * as animationData5 from "../lottie/vs-code.json";
import * as animationData6 from "../lottie/consultation.json";
function IndexSection({ refer }) {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: animationData5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions6 = {
    loop: true,
    autoplay: true,
    animationData: animationData6,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div
        ref={refer}
        className="flex flex-col mt-14 bg-gray-100 xxs:p-6 lg:p-2"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-center mt-6 text-head ">What we Do</h1>
        </div>
        <div className="flex flex-col xl:flex-row items-center">
          <div className="lg:w-1/3 w-1/2">
            <Lottie options={defaultOptions1} />
          </div>
          {/* <img className=" w-full md:w-1/2 xl:w-1/3" src="/gif/develop.gif" /> */}
          <div className="w-full xl:w-1/4 flex flex-col mx-auto xl:items-start items-center">
            <h3 className="text-head">Develop</h3>
            <p className="mt-10 xl:mt-3 text-center xl:text-left">
              Develop for all your users' devices with just one codebase. Add
              fast refresh, true native capabilities, and your creativity, and
              you'll have the app your users want in no time.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse items-center">
          <div className="lg:w-1/3 w-1/2">
            <Lottie options={defaultOptions2} />
          </div>
          <div className="w-full xl:w-1/4 flex flex-col mx-auto xl:items-start p-6 xl:p-0 items-center">
            <h3 className="text-head">Build</h3>
            <p className="mt-10 xl:mt-3 text-center xl:text-left">
              Ready to ship? Let us do the heavy lifting. Expo handles the
              gritty parts of building for each app store so you don't need
              Xcode or Android Studio to get your app into people's hands.
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col xl:flex-row items-center">
          <div className="lg:w-1/3 w-1/2">
            <Lottie options={defaultOptions3} />
          </div>
          <div className="w-full xl:w-1/4 flex flex-col mx-auto xl:items-start items-center">
            <h3 className="text-head">Update</h3>
            <p className="mt-10 xl:mt-3 text-center xl:text-left">
              Shipped a bug? No worries: with one command, you can deploy a fix
              that your users will see instantly, without having to re-download
              your app.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col bg:white py-4">
        <div className="flex justify-center mt-4">
          <h1 className="text-center text-head">Our Products</h1>
        </div>
        <div className="lg:flex justify-center">
          <div className="flex flex-col justify-center items-center flex-0.5 border-gray-300 rounded border-2 m-4 p-4">
            <div className="w-1/4">
              <Lottie options={defaultOptions4} />
            </div>
            <h4 className="text-center text-head">UI Components</h4>
            <p className="my-4 text-center">
              Web Components for rapid development of openEHR systems
            </p>

            <a
              href="/products/medblocks-ui"
              className="button bg-primary py-2 px-4 rounded hover:bg-green-200 font-bold"
            >
              Know More
            </a>
          </div>
          <div className="grid grid-flow-col">
            <div className="flex flex-col justify-center items-center flex-0.5 border-gray-300 rounded border-2 m-4 p-4">
              <div className="w-1/4">
                <Lottie options={defaultOptions5} />
              </div>
              <h4 className="text-center text-head">VSCode Extension</h4>
              <p className="my-4 text-center">
                Extension is to help develop fast development of openEHR
                templates
              </p>
              <a
                href="/products/medblocks-vscode"
                className="button bg-primary py-2 px-4 rounded hover:bg-green-200 font-bold"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 bg-gray-100">
          <h2 className="text-center text-head ">Other Tech Used</h2>
          <div className="flex lg:flex-row flex-col justify-center items-center lg:p-16 p-4">
            <motion.div
              whileHover={{
                scale: 1.01,
                boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.15)",
              }}
              className="flex-col flex items-center w-1/2 lg:w-1/3 m-4"
            >
              <img src="https://hapifhir.io/hapi-fhir/images/logos/raccoon-forwards.png" />
              <img src="https://hapifhir.io/hapi-fhir/images/logos/small-logo.png" />
            </motion.div>
            <motion.img
              whileHover={{
                scale: 1.01,
                boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.15)",
              }}
              className="lg:w-1/3 w-full m-4 p-6"
              src="https://ehrbase.org/wp-content/uploads/2021/05/ehrbase_red5-1.png"
            />
            <motion.img
              whileHover={{
                scale: 1.01,
                boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.15)",
              }}
              className="lg:w-1/3 w-3/4 p-6"
              src="https://i.imgur.com/7NGaqM4.png"
            />
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col items-center p-6 justify-center bg-white">
        <h2 className="text-center xl:w-1/3 w-full text-head">
          Want to work with us?
        </h2>

        <div className="xl:w-1/3 w-1/2">
          <Lottie options={defaultOptions6} />
        </div>
        <div className="flex flex-col space-y-10 ">
          <h6 className="text-4xl text-gray-600 font-semibold xl:text-left text-center">
            Book a consultation{" "}
            <span className="text-2xl">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="flex justify-center items-center xl:justify-start"
                href="/consultation"
              >
                Here <img width="20" src="/icons/arrow-right.svg" />
              </motion.a>
            </span>
          </h6>
          <h6 className="text-4xl text-gray-600 xl:text-left font-semibold text-center">
            Check for new openings{" "}
            <span className="text-2xl">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="flex justify-center items-center xl:justify-start"
                href="/jobs"
              >
                Here <img width="20" src="/icons/arrow-right.svg" />
              </motion.a>
            </span>
          </h6>
        </div>
      </div>
    </>
  );
}

export default IndexSection;
