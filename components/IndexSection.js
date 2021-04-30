import {
  Container,
  Text,
  Image,
  Flex,
  Heading,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import Lottie from "react-lottie";
import * as animationData1 from "../lottie/develop.json";
import * as animationData2 from "../lottie/build.json";
import * as animationData3 from "../lottie/update.json";
import * as animationData4 from "../lottie/ui-blocks.json";
import * as animationData5 from "../lottie/vs-code.json";

function IndexSection({ refer }) {
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
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: animationData5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Container
        backgroundColor="#f7f9fc"
        ref={refer}
        maxW={"100%"}
        pt={[2, 10]}

        //   marginTop={[10, 10, 20]}
      >
        <Heading
          mt={4}
          sx={{ fontFamily: "Inter" }}
          size="4xl"
          textAlign="center"
        >
          What we Do
        </Heading>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box w={["100%", "100%", "75%", "50%"]}>
            <Lottie options={defaultOptions1} />
          </Box>
          <Flex
            alignItems="center"
            mx={4}
            direction="column"
            justifyContent="center"
          >
            <Box w={["100%", "100%", "50%"]}>
              <Heading
                size="2xl"
                sx={{ fontFamily: "Inter" }}
                textAlign={["center", "center", "left"]}
                mb={[2, 2, 2, 10]}
              >
                Develop
              </Heading>
              <Text fontSize="xl">
                Develop for all your users' devices with just one codebase. Add
                fast refresh, true native capabilities, and your creativity, and
                you'll have the app your users want in no time.
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          marginTop={{ base: "0", sm: "10" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Flex
            mx={4}
            alignItems="center"
            direction="column"
            justifyContent="center"
          >
            <Box w={["100%", "100%", "50%"]}>
              <Heading
                textAlign={["center", "center", "left"]}
                size="2xl"
                sx={{ fontFamily: "Inter" }}
                mb={[2, 2, 2, 10]}
              >
                Build
              </Heading>
              <Text fontSize="xl">
                Ready to ship? Let us do the heavy lifting. Expo handles the
                gritty parts of building for each app store so you don't need
                Xcode or Android Studio to get your app into people's hands.
              </Text>
            </Box>
          </Flex>
          <Box w={["100%", "100%", "75%", "50%"]}>
            <Lottie options={defaultOptions2} />
          </Box>
        </Flex>{" "}
        <Flex direction={{ base: "column", md: "row" }}>
          <Box w={["100%", "100%", "75%", "50%"]}>
            <Lottie options={defaultOptions3} />
          </Box>
          <Flex
            alignItems="center"
            mx={4}
            direction="column"
            justifyContent="center"
          >
            {" "}
            <Box w={["100%", "100%", "50%"]}>
              <Heading
                textAlign={["center", "center", "left"]}
                size="2xl"
                sx={{ fontFamily: "Inter" }}
                mb={[2, 2, 2, 10]}
              >
                Update
              </Heading>
              <Text fontSize="xl">
                Shipped a bug? No worries: with one command, you can deploy a
                fix that your users will see instantly, without having to
                re-download your app.
              </Text>
            </Box>
          </Flex>
        </Flex>
        <hr
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "20px",
          }}
        />
      </Container>
      <Container maxW={"100%"} p={[2, 10]}>
        <Heading textAlign="center" size="4xl">
          Our Products
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          sx={{ gap: "30px" }}
          mt={4}
        >
          <Box
            w={["100%", "100%", "25%"]}
            borderWidth="1px"
            borderRadius="lg"
            backgroundColor="white"
          >
            <Lottie width={200} height={200} options={defaultOptions4} />
            <Box
              d="flex"
              alignItems="center"
              flexDirection="column"
              p="6"
              backgroundColor="white"
            >
              <Text align="center" fontWeight="bold" fontSize="3xl">
                UI Components
              </Text>
              <Text align="center" mt={2}>
                Web Components for rapid development of openEHR systems
              </Text>
              <Button
                as={Link}
                href="/products/medblocks-ui"
                mt={2}
                colorScheme="green"
              >
                Know More
              </Button>
            </Box>
          </Box>
          <Box
            w={["100%", "100%", "25%"]}
            borderWidth="1px"
            borderRadius="lg"
            backgroundColor="white"
          >
            <Lottie width={200} height={200} options={defaultOptions5} />
            <Box
              d="flex"
              alignItems="center"
              flexDirection="column"
              p="6"
              backgroundColor="white"
            >
              <Text align="center" fontWeight="bold" fontSize="3xl">
                VSCode Extension
              </Text>
              <Text mt={2} align="center">
                Extension is to help develop fast development of openEHR
                templates
              </Text>{" "}
              <Button
                as={Link}
                href="/products/medblocks-vscode"
                mt={2}
                colorScheme="green"
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default IndexSection;
