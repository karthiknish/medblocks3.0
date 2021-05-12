import Lottie from "react-lottie";
import * as animationData1 from "../lottie/develop.json";
import * as animationData2 from "../lottie/build.json";
import * as animationData6 from "../lottie/consultation.json";
import lotteAnimation from "../lottie/analytics.json";
import Section from "./section";

function IndexSection() {
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
  const defaultOptions6 = {
    loop: true,
    autoplay: true,
    animationData: animationData6,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Section className="bg-gray-100">
        <h3 className="font-serif text-gray-900 text-4xl md:text-5xl text-secondary text-center mx-10">
          Why?
        </h3>

        <div className="flex flex-col md:flex-row items-center max-w-5xl m-auto">
          <div className="flex-1 max-w-lg pointer-events-none">
            <Lottie options={defaultOptions1} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-serif">
              Technology that gets the Job Done
            </h3>
            <p className="mt-3">
              The Healthcare IT space is filled with standards, abbreviations
              and legacy systems. We provide you with a bundle of open-source
              microservices and tools that get the job done. So instad of
              worrying about setting up a FHIR server, or reinventing
              authentication, you can start focusing on your application's
              logic.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-5xl m-auto">
          <div className="flex-1 max-w-lg md:order-2 pointer-events-none">
            <Lottie options={defaultOptions2} />
          </div>
          <div className="flex-1  mt-8 lg:mt-0">
            <h3 className="text-3xl font-serif">Healthcare Apps Ecosystem</h3>
            <p className="mt-3">
              Writing software for healthcare is hard-work. Deploying these as
              standalone apps, on a common data model using openEHR archetypes
              and FHIR profiles benefits everyone. Work on your own specialized
              app for the clinic and use existing apps for common use cases like
              e-prescription, labs and demographics. And maybe one day, publish
              your app for the world to use!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto mb-10">
          <div className="flex-1 max-w-lg">
            <Lottie options={defaultOptions3} />
          </div>
          <div className="flex-1  mt-8 lg:mt-0">
            <h3 className="text-3xl font-serif">Data Unlocked</h3>
            <p className="mt-3">
              With proper clinical modelling and powerful tools, unlock the real
              value in clinical data. From Clinical Decision Support to
              Population Level Research, AQL can help you answer any clinical
              question. For Business Analytics, crunch your data with ease by
              using well defined FHIR Profiles for common use cases like Patient
              Encounter, Invoices and Insurance Claims.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="font-serif text-gray-900 text-4xl md:text-5xl text-center mb-10">
          Our Projects
        </h2>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex md:w-1/2 flex-col md:flex-row items-center shadow-lg border border-gray-100 rounded-lg p-8">
            <div className="flex-1">
              <span className="flex items-end gap-3">
                <img
                  src="https://i.imgur.com/JbhZCX3.png"
                  className="w-8"
                ></img>
                <h3 className="text-xl font-semibold">Medblocks UI</h3>
              </span>
              <p className="mt-3">
                Web components for fast and interactive UIs compliant with
                openEHR and FHIR.
              </p>
              <a
                target="_blank"
                href="https://github.com/sidharthramesh/medblocks-ui"
                className="mt-10 rounded-md bg-transparent gap-2 inline-flex items-center hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent"
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
              </a>
            </div>
          </div>
          <div className="flex md:w-1/2 flex-col md:flex-row items-center shadow-lg border border-gray-100 rounded-lg p-8">
            <div className="flex-1">
              <span className="flex items-end gap-3">
                <img src="vscode.png" className="w-8"></img>
                <h3 className="text-xl font-semibold">
                  Medblocks VSCode Extension
                </h3>
              </span>
              <p className="mt-3">
                VSCode Extension to work with webcomponents using openEHR
                templates and FHIR profiles
              </p>
              <a
                target="_blank"
                href="https://github.com/sidharthramesh/vscode-medblocks-ui"
                className="mt-10 rounded-md bg-transparent gap-2 inline-flex items-center hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent"
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
              </a>
            </div>
          </div>
        </div>
      </Section>
      <div className="flex flex-col space-y-10 py-20 bg-gray-100">
        <h2 className="font-serif text-gray-900 text-4xl md:text-5xl text-center">
          Technology Proudly Used
        </h2>
        <div className="flex flex-row gap-10 flex-wrap justify-center items-center">
          <a
            target="_blank"
            href="https://hapifhir.io/"
            className="w-72 p-7 flex flex-col items-center gap-1"
          >
            <img
              className="w-32"
              src="https://hapifhir.io/hapi-fhir/images/logos/raccoon-forwards.png"
            />
            <img src="https://hapifhir.io/hapi-fhir/images/logos/small-logo.png" />
          </a>
          <a target="_blank" className="w-72 p-3" href="https://ehrbase.org/">
            <img src="https://ehrbase.org/wp-content/uploads/2021/05/ehrbase_red5-1.png" />
          </a>
          <a target="_blank" href="https://lit.dev/" className="w-72 p-10">
            <img src="/lit.svg" />
          </a>
          <a
            target="_blank"
            className="w-72 p-3 text-4xl flex gap-2 items-center"
            href="https://github.com/wardle/hermes"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span className="font-light text-center">wardle/hermes</span>
          </a>
          <a
            target="_blank"
            href="https://www.keycloak.org/"
            className="w-72 p-5"
          >
            <img src="/Keycloak.png" />
          </a>
        </div>
      </div>

      <Section>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 space-y-3 order-2">
            <h2 className="font-serif text-gray-900 text-4xl md:text-5xl">
              Want to work with us?
            </h2>
            <p className="px-3">
              You want to change the status quo, and so do we!
            </p>
            <p className="px-3">
              Although most of our tools are free and open-source, we are here
              if you need us. Our team of developers, clinical modellers and
              data scientists can help take your idea off the ground.
            </p>
            <div className="gap-3 flex pt-6 px-3">
              <a
                href="./consultation"
                className="rounded-md bg-transparent gap-2 inline-flex items-center hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent"
              >
                <span>Pricing</span>
              </a>
              <a
                href="mailto:sidharth@medblocks.com"
                className="rounded-md bg-transparent gap-2 inline-flex items-center  hover:bg-green-700 bg-green-500 font-semibold text-white py-2 px-4 border"
              >
                <span>Book a consultation</span>
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-xl">
            <Lottie options={defaultOptions6} />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default IndexSection;
