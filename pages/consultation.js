import Head from "next/head";
import Section from "../components/section";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
function consultation() {
  const [openone, setOpenone] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [openthree, setOpenthree] = useState(false);
  return (
    <>
      <Head>
        <title>Consultation | Medblocks</title>
      </Head>
      <Section className="text-gray-800">
        <h1 className="font-serif text-3xl mb-10">Consultation Pricing</h1>
        <div className="space-y-10">
          <p>
            I believe that it should be easy for everyone to learn and implement
            standard based health informatics systems. I have made most of my
            content available for free on Youtube. Playlists on openEHR, FHIR
            and SNOMED can be found on{" "}
            <a
              className="text-blue-500 font-semibold hover:text-blue-400"
              href="https://www.youtube.com/c/SidharthRed/videos"
            >
              my channel
            </a>
            .
          </p>
          <p>
            Consultation sessions are not lectures on a topic. They are instead
            practical implementations of technology fine-tuned to your own
            project. Our team of developers and clinical modellers will try
            their best to provide hands-on help with your implementations.
            However, we are not a development agency. You will have to bring
            your own development team.
          </p>
          <p>
            To book a session, please send an email to{" "}
            <a
              className="text-blue-500 font-semibold hover:text-blue-400"
              href="mailto:sidharth@medblocks.org"
            >
              sidharth@medblocks.org
            </a>{" "}
            and I will get back to you.
          </p>
          <div>
            <a
              href="mailto:sidharth@medblocks.org"
              className="rounded-md hover:bg-green-700 mt-5 bg-green-500 font-semibold text-white py-2 px-4 border"
            >
              <span>Send Email</span>
            </a>
          </div>
        </div>{" "}
      </Section>
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-gray-800">
        {" "}
        <h1 className="font-serif text-3xl mb-10">Standard Sessions</h1>
        <section className="flex flex-col lg:flex-row items-center lg:justify-center w-full lg:px-24  space-x-3">
          <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg shadow-lg border border-gray-100">
            <h5 className="font-bold text-base">Standard</h5>
            <h2 className="pb-4 flex justify-center items-center font-bold border-b border-gray-300">
              <span className="text-3xl mt-3 mr-1">₹</span>
              <span className="text-6xl">3000 </span>
              <span className="ml-2 mt-3"> / session</span>
            </h2>
            <ul className="text-sm ">
              <li className="pt-4 pb-4  border-gray-300">
                An average session lasts for an hour, rounded off to the nearest
                30 mins. 1 hour 30 mins will count as 2 sessions, while 1 hour
                15 mins count as 1 session.
              </li>
            </ul>
          </article>

          <article
            className="w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-white rounded-lg shadow-lg border border-gray-100"
            style={{
              backgroundImage:
                "linear-gradient(90deg,	#A9A9A9 0%, 	#808080 100%)",
            }}
          >
            <h5 className="font-bold text-base ">Monthly</h5>
            <h2 className="font-bold pb-4 mt-2 items-center flex justify-center border-b border-gray-100">
              <span className="text-3xl mt-6 mr-1">₹</span>
              <span className="text-6xl ">20,000 </span>
              <span className="ml-2 mt-3"> / month</span>
            </h2>
            <ul className=" text-sm ">
              <li className="pt-4 pb-4 border-gray-200">
                10 sessions / month and priority support. For teams requiring
                long-term clinical modelling and implementation support.
              </li>
            </ul>
          </article>
        </section>
        <h1 className="font-serif text-3xl mb-10 mt-20">Packages</h1>
        <section className="flex flex-col lg:flex-row lg:items-start items-center lg:justify-center w-full lg:px-24 space-x-3">
          <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg shadow-lg border border-gray-100">
            <h5 className="font-bold text-base">openEHR Starter Pack</h5>
            <h2 className="pb-4 flex justify-center items-center font-bold border-b border-gray-300">
              <span className="text-3xl mt-3 mr-1">₹</span>
              <span className="text-6xl">10,000 </span>
            </h2>
            <ul className="text-sm ">
              <li className="pt-4 pb-4  border-gray-300">
                Get up and running with your clinical data using openEHR. All
                the sessions are personalized to your needs and uses your
                clinical data templates as examples.
              </li>
            </ul>
            <div
              onClick={() => setOpenone(!openone)}
              className="flex items-center justify-center cursor-pointer"
            >
              <h3 className="font-bold">More Details</h3>
              {!openone ? (
                <img width="50" src="icons/arrow-down.svg" />
              ) : (
                <img width="50" src="icons/up-detail.svg" />
              )}
            </div>
            <AnimatePresence>
              {openone && (
                <motion.ul
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="text-left space-y-1"
                >
                  <li>
                    <h4 className="font-bold">Session 0</h4>
                    Understanding requirements and discuss implementation
                    strategies.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 1</h4>
                    Clinical Modelling - Create Archetypes and Templates for
                    your implementation.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 2</h4>
                    Setting up openEHR data repository, basic API operations and
                    adminstration.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 3</h4>
                    Designing custom interfaces using for openEHR. Creating and
                    retrieving compositions.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 4</h4>
                    Querying clinical data using AQL and visualization
                    techniques.
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </article>
          <article className="w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center rounded-lg shadow-lg border border-gray-100">
            <h5 className="font-bold text-base ">FHIR Starter Pack</h5>
            <h2 className="font-bold pb-4 mt-2 items-center border-b border-gray-300 flex justify-center ">
              <span className="text-3xl mt-6 mr-1">₹</span>
              <span className="text-6xl ">10,000 </span>
            </h2>
            <ul className=" text-sm ">
              <li className="pt-4 pb-4 border-gray-200">
                Understand FHIR, and start profiling resources for your use
                case. Implement your business logic in FHIR, with hand-on
                examples on mapping to and from FHIR.
              </li>
            </ul>
            <div
              onClick={() => setOpentwo(!opentwo)}
              className="flex items-center justify-center cursor-pointer"
            >
              <h3 className="font-bold">More Details</h3>
              {!opentwo ? (
                <img width="50" src="icons/arrow-down.svg" />
              ) : (
                <img width="50" src="icons/up-detail.svg" />
              )}
            </div>
            <AnimatePresence>
              {opentwo && (
                <motion.ul
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="text-left space-y-1"
                >
                  <li>
                    <h4 className="font-bold">Session 0</h4>
                    Understanding requirements and discuss implementation
                    strategies.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 1</h4>
                    FHIR Resources, Paradigms and Servers - Introduction to FHIR
                    resources and paradigms. Setting up FHIR server and API
                    operations.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 2</h4>
                    FHIR Profiles and Profiling - Understanding different
                    profiles and mapping data to and from FHIR.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 3</h4>
                    Designing custom interfaces from FHIR Profiles. Creating,
                    retrieving and searching for resources using FHIR APIs.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 4</h4>
                    SMART on FHIR and deployment and management on Cloud
                    Platform (Google APIs for FHIR, Azure FHIR Platform)
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </article>
          <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg shadow-lg border border-gray-100">
            <h5 className="font-bold text-base">SNOMED Starter Pack</h5>
            <h2 className="pb-4 flex justify-center items-center font-bold border-b border-gray-300">
              <span className="text-3xl mt-3 mr-1">₹</span>
              <span className="text-6xl">10,000 </span>
            </h2>
            <ul className="text-sm ">
              <li className="pt-4 pb-4  border-gray-300">
                Enable semantic interoperability with using the most prefered
                terminology across the world. Set up your own SNOMED CT server
                and start creating reference sets and extensions for your
                implementation.
              </li>
            </ul>
            <div
              onClick={() => setOpenthree(!openthree)}
              className="flex items-center justify-center cursor-pointer"
            >
              <h3 className="font-bold">More Details</h3>
              {!openthree ? (
                <img width="50" src="icons/arrow-down.svg" />
              ) : (
                <img width="50" src="icons/up-detail.svg" />
              )}
            </div>
            <AnimatePresence>
              {openthree && (
                <motion.ul
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="text-left space-y-1"
                >
                  <li>
                    <h4 className="font-bold">Session 0</h4>
                    Understanding requirements and discuss implementation
                    strategies.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 1</h4>
                    SNOMED CT Basics, Setting up a FHIR Terminology API.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 2</h4>
                    Designing interfaces that use SNOMED CT for data entry.
                    Creating reference sets and using SNOMED EQL.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 3</h4>
                    Creating SNOMED CT extensions to cover gaps in content,
                    language maps.
                  </li>
                  <li>
                    <h4 className="font-bold">Session 4</h4>
                    Mapping SNOMED CT to ICD10, and other code systems, advanced
                    analytics techniques.
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </article>
        </section>
      </div>
    </>
  );
}

export default consultation;
