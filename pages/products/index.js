import * as animationData1 from "../../lottie/products.json";
import * as animationData2 from "../../lottie/ui-blocks.json";
import * as animationData3 from "../../lottie/vs-code.json";
import { useRef } from "react";
import Lottie from "react-lottie";
import Head from "next/head";
import { motion } from "framer-motion";
function index() {
  const ref1 = useRef();
  const ref2 = useRef();
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
  return (
    <>
      <Head>
        <title>Products | Medblocks</title>
      </Head>
      <div className="flex flex-col p-6 xl:-mt-5 xl:h-screen h-auto">
        <div className="flex xl:flex-row flex-col justify-center items-center">
          <h1 className="text-center mt-6 text-head ">Products</h1>
          <div className="lg:w-1/6 w-3/4">
            <Lottie options={defaultOptions1} />
          </div>
        </div>
        <div className="grid lg:grid-flow-col mx-10">
          <motion.div
            onClick={() => ref1.current.scrollIntoView()}
            whileHover={{
              scale: 1.005,
              boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.25)",
            }}
            className="flex flex-col  justify-center items-center flex-grow border-gray-300 rounded border-2 m-4 p-4 cursor-pointer"
          >
            <div className="lg:w-1/4 w-1/2">
              <Lottie options={defaultOptions2} />
            </div>
            <h4 className="text-center text-head">UI Components</h4>
            <p className="my-4 text-center">
              Web Components for rapid development of openEHR systems
            </p>
          </motion.div>{" "}
          <motion.div
            onClick={() => ref2.current.scrollIntoView()}
            whileHover={{
              scale: 1.005,
              boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.25)",
            }}
            className="flex flex-col justify-center items-center flex-grow border-gray-300 rounded border-2 m-4 p-4 cursor-pointer"
          >
            <div className="lg:w-1/4 w-1/2">
              <Lottie options={defaultOptions3} />
            </div>
            <h4 className="text-center text-head">VSCode Extension</h4>
            <p className="my-4 text-center">
              Extension is to help develop fast development of openEHR templates
            </p>
          </motion.div>
        </div>
      </div>
      <div
        className="flex flex-col p-6 items-center justify-center bg-gray-100"
        ref={ref1}
      >
        <div className="flex">
          <img
            className="mr-2"
            width="50"
            src="https://i.imgur.com/JbhZCX3.png"
          />
          <h3 className="text-head">UI Components</h3>
        </div>{" "}
        <p className="lg:text-3xl text-xl my-4 text-center">
          Web Components for rapid development of openEHR systems
        </p>
        <img className="w-full mt-2 lg:w-1/4" src="/blocks.svg" />
        <div className="flex my-6">
          <a
            target="_blank"
            href="https://github.com/sidharthramesh/medblocks-ui"
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
      <div className="flex flex-col p-6 bg-gray-100">
        <h4 className="mb-2">Introduction</h4>
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
        <h4 className="mb-2">Tutorial</h4>
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
      </div>
      <div
        className="flex flex-col mt-5 justify-center items-center p-6"
        ref={ref2}
      >
        <div className="flex">
          <img
            className="mr-2"
            width="50"
            src="https://i.imgur.com/JbhZCX3.png"
          />{" "}
          <h3 className="text-head">Vs Code Extension</h3>
        </div>
        <p className="lg:text-3xl text-xl my-4 text-center">
          Fast path resolution and snippets for Medblocks UI
        </p>
        <img className="w-full mt-2 lg:w-1/4" src="/vs-code.svg" />{" "}
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
            href="https://marketplace.visualstudio.com/items?itemName=tornadoalert.medblocks-ui"
            className="button bg-primary hover:bg-hoverbg px-4 lg:px-16 py-2 font-bold rounded text-xl"
          >
            Live Site
          </a>
        </div>
      </div>{" "}
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

export default index;
