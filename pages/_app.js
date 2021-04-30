import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import theme from "../utils/theme";
import Scroll from "../components/Scroll";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Scroll />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
