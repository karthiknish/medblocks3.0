import Head from "next/head";
function jobs() {
  return (
    <>
      <Head>
        <title>Jobs | Medblocks</title>
      </Head>
      <div className="flex flex-col p-8">
        <h2 className="text-center">Job Openings</h2>

        <p className="mt-4">
          Thank you for you interest in MedBlocks. We are working on technology
          that might change the future. The Distributed Ledger Technology space
          is changing very rapidly. We are looking for fast learners. So, do not
          worry if you don't know a particular language or technology. You are
          more than welcome if can learn fast.
          <br />
          <br /> Please write an email with your resume to{" "}
          <a
            className="font-bold"
            style={{ color: "#3273dc" }}
            href="mailto:jobs@medblocks.org"
          >
            {" "}
            jobs@medblocks.org
          </a>
          . <br /> <br />
          Your mail must include:
        </p>
        <ul style={{ listStyleType: "decimal" }} className="ml-8 text-lg">
          <li>
            The opening you are interested in <li>Previous work experience </li>
            <li>Link to your Github profile</li>{" "}
            <li>
              Statement of purpose - i.e The reason you want to be a part of
              MedBlocks
            </li>
          </li>
        </ul>
        <p className="font-bold my-4">You can apply for multiple openings.</p>
        <hr />
        <h4 className="my-4">Front-end Javascript Developer</h4>
        <p>
          All your work will go into developing the the Web interface. Since
          most of the time encryption is client side, there will be a lot of
          heavy lifting encryption and decryption done here. We need your help
          making medblocks.js for easy integration into hospital apps.
        </p>
        <p className="font-bold my-4">Requirements</p>

        <ul style={{ listStyleType: "circle" }} className="ml-8">
          <li>Basic HTML and JavaScript</li>
          <li>Framework - VueJS</li>
          <li>Interaction with REST API</li>
          <li>Basic cryptography techniques - RSA, AES</li>
          <li>Encryption, Decryption and Signing using WebJs or CryptoJS</li>
        </ul>
      </div>
    </>
  );
}

export default jobs;
