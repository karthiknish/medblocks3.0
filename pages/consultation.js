import Head from "next/head";
import Section from "../components/section"
function consultation() {
  return (
    <>
      <Head>
        <title>Consultation | Medblocks</title>
      </Head>
      <Section>
        <h1 className="font-serif text-3xl mb-10">Consultation Pricing</h1>
        <div className="space-y-10">
          <p>I believe that it should be easy for everyone to learn and implement standard based health informatics systems.
          I have made most of my content available for free on Youtube. Playlists on openEHR, FHIR and SNOMED can be found on <a className="text-blue-500 font-semibold hover:text-blue-400" href="https://www.youtube.com/c/SidharthRed/videos">my channel</a>.
        </p>
          <p>Consultation sessions are not lectures on a topic. They are instead practical implementations of technology fine-tuned to your own project.
        Our team of developers and clinical modellers will try their best to provide hands-on help with your implementations. However, we are not a development agency. You will have to bring your own development team.</p>
          <p>To book a session, please send an email to <a className="text-blue-500 font-semibold hover:text-blue-400" href="mailto:sidharth@medblocks.org">sidharth@medblocks.org</a> and I will get back to you.</p>
          <div>
            <a href="mailto:sidharth@medblocks.org" className="rounded-mdhover:bg-green-700 mt-5 bg-green-500 font-semibold text-white py-2 px-4 border">
              <span>Send Email</span>
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">
              Standard
          </h2>
            <p className="text-2xl">
              ₹ 3000 / session
          </p>
            <p>An average session lasts for an hour, rounded off to the nearest 30 mins. 1 hour 30 mins will count as 2 sessions, while 1 hour 15 mins count as 1 session.</p>

          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">
              Monthly
          </h2>
            <p className="text-2xl">
              ₹ 20,000 / month
          </p>
            <p>10 sessions / month and priority support. For teams requiring long-term clinical modelling and implementation support.</p>

          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">
              openEHR Starter Pack - 4 Sessions
          </h2>
            <p className="text-2xl">
              ₹ 10,000
            </p>
            <p>Get up and running with your clinical data using openEHR. All the sessions are personalized to your needs and uses your clinical data templates as examples.</p>

            <div className=" space-y-4 mt-4">
              <p>
                <strong>Session 0</strong>
                <br />
                Understanding requirements and discuss implementation strategies.
              </p>
              <p>
                <strong>Session 1</strong>
                <br />
                Clinical Modelling - Create Archetypes and Templates for your implementation.
                </p>
              <p>
                <strong>Session 2</strong><br />
                Setting up openEHR data repository, basic API operations and adminstration.
              </p>
              <p>
                <strong>Session 3</strong><br />
                Designing custom interfaces using for openEHR. Creating and retrieving compositions.
              </p>
              <p>
                <strong>Session 4</strong>
                <br />
                Querying clinical data using AQL and visualization techniques.
              </p>
            </div>

          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">
              FHIR Starter Pack - 4 Sessions
          </h2>
            <p className="text-2xl">
              ₹ 10,000
            </p>
            <p>Understand FHIR, and start profiling resources for your use case. Implement your business logic in FHIR, with hand-on examples on mapping to and from FHIR.</p>
            <div className=" space-y-4 mt-4">
              <p>
                <strong>Session 0</strong>
                <br />
                Understanding requirements and discuss implementation strategies.
              </p>
              <p>
                <strong>Session 1</strong>
                <br />
                FHIR Resources, Paradigms and Servers - Introduction to FHIR resources and paradigms. Setting up FHIR server and API operations.
                </p>
              <p>
                <strong>Session 2</strong><br />
                FHIR Profiles and Profiling - Understanding different profiles and mapping data to and from FHIR.
              </p>
              <p>
                <strong>Session 3</strong><br />
                Designing custom interfaces from FHIR Profiles. Creating, retrieving and searching for resources using FHIR APIs.
              </p>
              <p>
                <strong>Session 4</strong>
                <br />
                SMART on FHIR and deployment and management on Cloud Platform (Google APIs for FHIR, Azure FHIR Platform)
              </p>
            </div>

          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">
              SNOMED Starter Pack - 4 Sessions
          </h2>
            <p className="text-2xl">
              ₹ 10,000
            </p>
            <p>Enable semantic interoperability with using the most prefered terminology across the world. Set up your own SNOMED CT server and start creating reference sets and extensions for your implementation.</p>
            <div className=" space-y-4 mt-4">
              <p>
                <strong>Session 0</strong>
                <br />
                Understanding requirements and discuss implementation strategies.
              </p>
              <p>
                <strong>Session 1</strong>
                <br />
                SNOMED CT Basics, Setting up a FHIR Terminology API.
                </p>
              <p>
                <strong>Session 2</strong><br />
                Designing interfaces that use SNOMED CT for data entry. Creating reference sets and using SNOMED EQL.
              </p>
              <p>
                <strong>Session 3</strong><br />
                Creating SNOMED CT extensions to cover gaps in content, language maps.
              </p>
              <p>
                <strong>Session 4</strong>
                <br />
                Mapping SNOMED CT to ICD10, and other code systems, advanced analytics techniques.
              </p>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}

export default consultation;
