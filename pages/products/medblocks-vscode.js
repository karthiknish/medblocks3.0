function medblocksvscode() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6">
        <div className="flex my-4 justify-center items-center">
          <img
            className="mr-2 w-1/10 xl:w-1/8"
            src="https://i.imgur.com/JbhZCX3.png"
          />
          <h2>Medblocks UI VsCode Extension</h2>
        </div>
        <p className="lg:text-3xl text-xl mb-4 text-center">
          Fast path resolution and snippets for Medblocks UI
        </p>
        <img className="w-full lg:w-1/4" src="/vs-code.svg" />
        <div className="flex my-6">
          <a
            target="_blank"
            href="https://github.com/sidharthramesh/medblocks-ui-componets"
            className="button mr-2 border border-primary px-4 lg:px-16 py-2 text-xl font-bold rounded hover:bg-gray-100 hover:border-opacity-0"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://marketplace.visualstudio.com/items?itemName=tornadoalert.medblocks-ui"
            className="button bg-primary hover:bg-hoverbg px-4 lg:px-16 py-2 font-bold rounded text-xl"
          >
            Live Site
          </a>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h4 className="mb-2">Introduction</h4>
        <p className="text-md mb-2">
          It is a common need to automatically generate forms from openEHR
          templates. A well-known example is the Better EHR Studio. It offers a
          Form Builder and an AQL Builder. However, there is no open-source
          alternative, especially for low resource environments, where paying an
          expensive openEHR provider is not affordable.This extension is to help
          develop fast development of openEHR templates. We have been working on
          this problem for a while, and today We are happy to announce{" "}
          <span className="font-bold">
            Medblocks VsCode Extension under the Apache 2 license.
          </span>
        </p>
        <h4 className="mb-2">Setup</h4>
        <p>
          Have a directory with all your webtemplates Open the medblocks-ui
          panel and explore the web template and copy paste snippets
        </p>
        <br /> <h4 className="mb-2">Configuration</h4>
        <p>
          If you are using different web-component or want to include extra
          components, add a medblocksui.config.cjs file and default export the
          transform function like so
        </p>
      </div>
    </>
  );
}

export default medblocksvscode;
