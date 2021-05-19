import Notfound from "../lottie/404.json";
import Lottie from "react-lottie";
export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Notfound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-1/2 max-w-lg pointer-events-none">
        <Lottie options={defaultOptions} />
      </div>
      <h3 className="mt-2">Page not Found</h3>
    </div>
  );
}
