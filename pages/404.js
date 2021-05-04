import * as animationData from "../lottie/404.json";
import Lottie from "react-lottie";
export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="p-6 flex justify-center items-center h-screen -mt-32 flex-col">
      <div className="lg:w-1/4 w-full">
        <Lottie options={defaultOptions} />
      </div>
      <h3 className="mt-2">404 - Page not Found</h3>
    </div>
  );
}
