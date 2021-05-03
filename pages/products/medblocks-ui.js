function medblocksui() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6">
        <div className="flex my-4 justify-center items-center">
          <img
            className="mr-2 w-1/10 xl:w-1/8"
            src="https://i.imgur.com/JbhZCX3.png"
          />
          <h2>MedBlocks UI components</h2>
        </div>
        <p className="lg:text-3xl text-xl mb-4 text-center">
          Fast path resolution and snippets for Medblocks U
        </p>
        <img className="w-full lg:w-1/4" src="/vs-code.svg" />
        <div className="flex my-6">
          <a
            target="_blank"
            href="https://github.com/sidharthramesh/vscode-medblocks-ui"
            className="button mr-2 border border-primary px-4 lg:px-16 py-2 text-xl font-bold rounded hover:bg-gray-100 hover:border-opacity-0"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://sidharthramesh.github.io/medblocks-ui/"
            className="button bg-primary hover:bg-hoverbg px-4 lg:px-16 py-2 font-bold rounded text-xl"
          >
            Live Site
          </a>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h3 className="mb-2">Introduction</h3>
        <p className="text-md mb-2">
          It is a common need to automatically generate forms from openEHR
          templates. A well-known example is the Better EHR Studio. It offers a
          Form Builder and an AQL Builder. However, there is no open-source
          alternative, especially for low resource environments, where paying an
          expensive openEHR provider is not affordable. We have been working on
          this problem for a while, and today We are happy to announce{" "}
          <span className="font-bold">
            Medblocks UI under the Apache 2 license.
          </span>
        </p>
        <h3 className="mb-2">Tutorial</h3>
        <div className="lg:w-1/2 w-full mt-2">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/GRBIUEA_fc8"
              title="Medblocks Ui tutorial"
              allowFullScreen
            />
          </div>
        </div>
        <p className="my-4">If you prefer reading, read on!</p>
        <h4 className="ml-2"> 1. Create a template</h4>
        <p>
          The first step is to create a template. We’ll be using the Archetype
          Designer. We’ll be creating an Initial Assessment Template with the
          Glasgow Coma Scale and Pulse of the patient.
          <br />
          <br /> For this template, we need the following archetypes:{" "}
        </p>
        <ul style={{ listStyleType: "circle" }} className="my-2 ml-10">
          <li>
            <a
              target="_blank"
              className="text-link hover:text-opacity-80"
              href="https://ckm.openehr.org/ckm/archetypes/1013.1.120/export"
            >
              Encounter
            </a>
          </li>
          <li>
            {" "}
            <a
              target="_blank"
              className="text-link hover:text-opacity-80"
              href="https://ckm.openehr.org/ckm/archetypes/1013.1.137/export"
            >
              Glasgow Coma Scale(GCS)
            </a>
          </li>{" "}
          <li>
            <a
              target="_blank"
              href="https://ckm.openehr.org/ckm/archetypes/1013.1.4295/export"
              className="text-link hover:text-opacity-80"
            >
              Pulse/Heart beat
            </a>
          </li>
        </ul>{" "}
        <br />
        <p>
          Click on Export ADL for the above archetypes and keep them ready.
          <br /> <br /> Go to the{" "}
          <a
            target="_blank"
            className="text-link hover:text-opacity-80"
            href="https://tools.openehr.org/designer/"
          >
            Archetype Designer
          </a>{" "}
          and sign in or sign up. Upload all the archetypes we just exported
          like so:
        </p>
        <img
          className="lg:w-1/2 w-full my-2"
          src="https://blog.medblocks.org/assets/blog/medblocks-ui/import.png"
        />
        <p>First, we’ll create a new template for our Initial assessment:</p>
        <img
          className="lg:w-1/2 w-full my-2"
          src="https://blog.medblocks.org/assets/blog/medblocks-ui/create_template.png"
        />
      </div>
    </>
  );
}

export default medblocksui;
