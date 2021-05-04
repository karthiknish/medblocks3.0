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
      <div className="flex flex-col p-6 xl:h-screen h-auto">
        <div className="flex justify-center items-center">
          <h2>Products</h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="lg:w-1/4 w-full">
            <Lottie options={defaultOptions1} />
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <div className="flex justify-center items-center space-x-3">
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.25)",
              }}
              onClick={() => ref1.current.scrollIntoView()}
              className="border flex justify-center flex-col items-center bg-white border-gray-300 p-4 rounded cursor-pointer"
            >
              <div className="w-1/4 mx-auto">
                <Lottie options={defaultOptions2} />
              </div>
              <h4 className="text-center mt-2">UI Components</h4>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.25)",
              }}
              onClick={() => ref2.current.scrollIntoView()}
              className="border flex justify-center flex-col items-center bg-white border-gray-300 p-4 rounded cursor-pointer"
            >
              <div className="w-1/4 mx-auto">
                <Lottie options={defaultOptions3} />
              </div>
              <h4 className="text-center mt-2">Vs Code Extension</h4>
            </motion.div>
          </div>
        </div>
      </div>
      <div ref={ref1}>UI Components</div>
      <div ref={ref2}>Vs Code</div>
    </>
  );
}

export default index;
