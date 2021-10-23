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
        <h1 className="font-serif text-3xl mb-10">Consultation</h1>
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
            To book a session, please fill the form below{" "}
            {/* <a
              className="text-blue-500 font-semibold hover:text-blue-400"
              href="mailto:sidharth@medblocks.org"
            >
              sidharth@medblocks.org
            </a>{" "} */}
            and we will get back to you.
          </p>
          <div>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdyc37n-G7wyhf1f1Ao4WAvcEpX1HOhUJVrN6KmmGMMo6oaKw/viewform?tandem_follow=Sidharth"
              className="rounded-md hover:bg-green-700 mt-5 bg-green-500 font-semibold text-white py-2 px-4 border"
            >
              <span>Book session</span>
            </a>
          </div>
        </div>{" "}
      </Section>
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-gray-800">
        <h1 className="font-serif text-3xl mb-10">Standard Sessions</h1>
        <section className="flex flex-col lg:flex-row items-center lg:justify-center w-full lg:px-24  space-x-3">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyc37n-G7wyhf1f1Ao4WAvcEpX1HOhUJVrN6KmmGMMo6oaKw/viewform?tandem_follow=Sidharth" 
              className="customCard bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg shadow-lg border border-gray-100"
              >
            <h5 className="font-bold text-base text-3xl">Standard</h5>
            <h1 className="pb-4 flex justify-center items-center font-bold border-b border-gray-300">
              {/* <span className="text-3xl mt-3 mr-1">₹</span>
              <span className="text-6xl">4000 </span>
              <span className="ml-2 mt-3"> / session</span> */}
            </h1>
            <ul className="text-sm">
              <li className="pt-4 pb-4  border-gray-300">
                An average session lasts for an hour, rounded off to the nearest
                30 mins. 1 hour 30 mins will count as 2 sessions, while 1 hour
                15 mins count as 1 session.
              </li>
            </ul>
          </a>

          <a
            className="customCard w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-white rounded-lg shadow-lg border border-gray-100"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyc37n-G7wyhf1f1Ao4WAvcEpX1HOhUJVrN6KmmGMMo6oaKw/viewform?tandem_follow=Sidharth"
            style={{

              backgroundImage:
                "linear-gradient(90deg,	#A9A9A9 0%, 	#808080 100%)",
            }}
          >
            <h5 className="font-bold text-base text-3xl">Monthly</h5>

            <h2 className="font-bold pb-4 mt-2 items-center flex justify-center border-b border-gray-100">
              {/* <span className="text-3xl mt-6 mr-1">₹</span>
              <span className="text-6xl ">30,000 </span>
              <span className="ml-2 mt-3"> / month</span> */}
            </h2>
            <ul className=" text-sm ">
              <li className="pt-4 pb-4 border-gray-200">
                10 sessions / month and priority support. For teams requiring
                long-term clinical modelling and implementation support.
              </li>
            </ul>
          </a>
        </section>

        <h1 className="font-serif text-3xl mb-10 mt-20">Packages</h1>
        <section className="flex flex-col lg:flex-row lg:items-start items-center lg:justify-center w-full lg:px-24 space-x-3">
          <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg shadow-lg border border-gray-100">
            <h5 className="font-bold text-base text-xl">
              openEHR Starter Pack
            </h5>

            <h2 className="pb-4 flex justify-center items-center font-bold border-b border-gray-300 ">
              {/* <span className="text-3xl mt-3 mr-1">₹</span>
              <span className="text-6xl">30,000 </span> */}
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
                    &#9679; Understanding requirements and discuss
                    implementation strategies.
                  </li>
                  <li>
                    &#9679; Clinical Modelling - Create Archetypes and Templates
                    for your implementation.
                  </li>
                  <li>
                    &#9679; Setting up openEHR data repository, basic API
                    operations and adminstration.
                  </li>
                  <li>
                    &#9679; Designing custom interfaces using for openEHR.
                    Creating and retrieving compositions.
                  </li>
                  <li>
                    &#9679; Querying clinical data using AQL and visualization
                    techniques.
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </article>
          <article className="w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center rounded-lg shadow-lg border border-gray-100">
            <h5 className="font-bold text-base text-xl">FHIR Starter Pack</h5>
            <h2 className="font-bold pb-4 mt-2 items-center border-b border-gray-300 flex justify-center ">
              {/* <span className="text-3xl mt-6 mr-1">₹</span>
              <span className="text-6xl ">30,000 </span> */}
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
                    &#9679; Understanding requirements and discuss
                    implementation strategies.
                  </li>
                  <li>
                    &#9679; FHIR Resources, Paradigms and Servers - Introduction
                    to FHIR resources and paradigms. Setting up FHIR server and
                    API operations.
                  </li>
                  <li>
                    &#9679; FHIR Profiles and Profiling - Understanding
                    different profiles and mapping data to and from FHIR.
                  </li>
                  <li>
                    &#9679; Designing custom interfaces from FHIR Profiles.
                    Creating, retrieving and searching for resources using FHIR
                    APIs.
                  </li>
                  <li>
                    &#9679; SMART on FHIR and deployment and management on Cloud
                    Platform (Google APIs for FHIR, Azure FHIR Platform)
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </article>
          <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg shadow-lg border border-gray-100">
            <h5 className="font-bold text-base text-xl">SNOMED Starter Pack</h5>

            <h2 className="pb-4 flex justify-center items-center font-bold border-b border-gray-300">
              {/* <span className="text-3xl mt-3 mr-1">₹</span>
              <span className="text-6xl">30,000 </span> */}
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
                    &#9679; Understanding requirements and discuss
                    implementation strategies.
                  </li>
                  <li>
                    &#9679; SNOMED CT Basics, Setting up a FHIR Terminology API.
                  </li>
                  <li>
                    &#9679; Designing interfaces that use SNOMED CT for data
                    entry. Creating reference sets and using SNOMED EQL.
                  </li>
                  <li>
                    &#9679; Creating SNOMED CT extensions to cover gaps in
                    content, language maps.
                  </li>
                  <li>
                    &#9679; Mapping SNOMED CT to ICD10, and other code systems,
                    advanced analytics techniques.
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </article>
        </section>
        <Section>
        <h1 className="font-serif text-gray-900 text-3xl md:text-3xl text-center mb-10">
          Services we Provide </h1>
        <div className="customGrid">
          <div href="https://www.hl7.org/fhir/" className="flex flex-col md:flex-row shadow-lg border border-gray-100 rounded-lg p-8">
            <div className="flex-1">
              <a className="flex items-end gap-3 items-center justify-center" href="https://www.hl7.org/fhir/">
                <img
                  alt="Medblocks"
                  src="/icon-fhir.png"
                  className="w-10"
                ></img>
                <h3 className="text-xl font-semibold">FHIR</h3>
              </a>
              
              <ul className="mt-5">
                <li className="m-2">● Setting up an FHIR server - Cloud/on-premise</li>
                <li className="m-2">● FHIR Facade on existing data source</li>
                <li className="m-2">● Building and deploying SMART on FHIR applications</li>
                <li className="m-2">● HL7v2/CCDA to FHIR mapping</li>
                <li className="m-2">● FHIR Profiling and clinical modeling</li>
                <li className="m-2">● FHIR first forms</li>
                <li className="m-2">● Integration with NDHM APIs</li>
                <li className="m-2">● Analytics and dashboards on FHIR data sources</li>
                
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row shadow-lg border border-gray-100 rounded-lg p-8">
            <div className="flex-1">
              <a className="flex items-end gap-3 items-center justify-center" href="https://www.openehr.org/">
                <img alt="openEHR" src="/openehr-icon.svg" className="w-8"></img>
                <h3 className="text-xl font-semibold">
                  openEHR
                </h3>
                
              </a>
              <ul className="mt-5">
                <li className="m-2">● Setting up openEHR server - Cloud/on-premise</li>
                <li className="m-2">● Clinical Modelling and Template Designing</li>
                <li className="m-2">● Building openEHR based applications and forms from templates</li>
                <li className="m-2">● Integrating Medblocks UI into your existing frontend application</li>
                <li className="m-2">● Dashboards and analytics using AQL on openEHR repositories</li>                
              </ul> 
              
            </div>
          </div>
          <div className="flex flex-col md:flex-row shadow-lg border border-gray-100 rounded-lg p-8">
            <div className="flex-1">
              <a className="flex items-end gap-3 items-center justify-center">
                <img alt="DeviceIntegration" src="/device.png" className="w-8"></img>
                <h3 className="text-xl font-semibold">
                Device Integrations
                </h3>
              </a>
              <ul className="mt-5">
                <li className="m-2">● Setting up openEHR server - Cloud/on-premise</li>
                <li className="m-2">● Clinical Modelling and Template Designing</li>
                <li className="m-2">● Building openEHR based applications and forms from templates</li>
                <li className="m-2">● Integrating Medblocks UI into your existing frontend application</li>
                <li className="m-2">● Dashboards and analytics using AQL on openEHR repositories</li>                
              </ul> 
            </div>
          </div>
          <div className="flex flex-col md:flex-row shadow-lg border border-gray-100 rounded-lg p-8">
            <div className="flex-1">
              <a className="flex items-end gap-3 items-center justify-center" href="https://www.snomed.org/">
                <img alt="snomed" src="/snomed-browser.png" className="w-8"></img>
                <h3 className="text-xl font-semibold">
                SNOMED CT
                </h3>
              </a>
              <ul className="mt-5 ">
                <li className="m-2">● Setting up SNOMED CT search instance - Cloud/on-premise</li>
                <li className="m-2">● Obtaining and managing SNOMED CT license for your application</li>
                <li className="m-2">● SNOMED CT mapping and Reference set creation</li>
                <li className="m-2">● SNOMED CT autocomplete/search implementation</li>
                <li className="m-2">● RxNorm autocomplete/search implementation</li>          
                <li className="m-2">● LOINC/SNOMED CT/RxNorm mapping for internal codes</li>      
                <li className="m-2">● SNOMED CT to ICD 10 mapping</li>
                <li className="m-2">● Analytics on data sources with SNOMED CT</li>            
              </ul> 
            </div>
          </div>
        </div>
      </Section>
      </div>
    </>
  );
}

export default consultation;
