import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Scroll from "../components/Scroll";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      {/* <Scroll /> */}
      <Footer />
    </>
  );
}

export default MyApp;
