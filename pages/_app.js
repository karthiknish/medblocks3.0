import "../styles/globals.css";
import "../styles/tailwind.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../util/gtag";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
