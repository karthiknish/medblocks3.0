import { motion } from "framer-motion";
import Lottie from "react-lottie";
import * as animationData1 from "../lottie/develop.json";
import * as animationData2 from "../lottie/build.json";
import * as animationData3 from "../lottie/update.json";
import * as animationData4 from "../lottie/ui-blocks.json";
import * as animationData5 from "../lottie/vs-code.json";
import * as animationData6 from "../lottie/consultation.json";
import lotteAnimation from '../lottie/analytics.json';

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
    animationData: lotteAnimation,
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
  return <div>
    <div
      ref={refer}
      className="flex flex-col  bg-gray-100"
    >
      <div className="max-w-7xl m-auto px-10 space-y-14">


        <div className="flex flex-col md:flex-row items-center max-w-5xl m-auto">
          <div className="flex-1 max-w-lg">
            <Lottie options={defaultOptions1} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-serif">Technology that gets the Job Done</h3>
            <p className="mt-10 xl:mt-3">
              The Healthcare IT space is filled with standards, abbreviations and legacy systems. If you're think you're lost, you're not alone.
              We provide you with a bundle of open-source microservices and tools that get the job done.
              So instad of worrying about setting up a FHIR server, or reinventing authentication, you can start focusing on your application's logic.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-5xl m-auto">
          <div className="flex-1 max-w-lg md:order-2">
            <Lottie options={defaultOptions2} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-serif">Healthcare Apps Ecosystem</h3>
            <p className="mt-10 xl:mt-3">
              Every hospital needs modules like Demographics, Medication, RIS PACS and Labs. A lot of work is required to create and maintain such modules.
              Deploying these as open-source standalone apps, on a common data model benefits everyone.
              Work on your own specialized app for the clinic and use existing open-source software for common use cases like e-prescription and labs.
              And maybe one day, publish your app for the world to use!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-5xl m-auto">
          <div className="flex-1 max-w-lg">
            <Lottie options={defaultOptions3} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-serif">Data Unlocked</h3>
            <p className="mt-10 xl:mt-3">
              With proper clinical modelling and powerful tools, unlock the real value in clinical data. From Clinical Decision Support to Population Level Research, AQL can help you answer any clinical question.
              For Business Analytics, crunch your data with ease by using well defined FHIR Profiles for common use cases like Patient Encounter, Invoices and Insurance Claims.
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
    </div>
  </div>

}

export default IndexSection;
