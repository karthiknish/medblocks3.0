import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
