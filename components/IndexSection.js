import { Container, Text, Image, Flex, Heading, Box } from "@chakra-ui/react";
import Lottie from "react-lottie";
import * as animationData1 from "./develop.json";
import * as animationData2 from "./build.json";
import * as animationData3 from "./update.json";

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
  return (
    <Container backgroundColor="#fff" ref={refer} maxW={"6xl"} my={35}>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box w="100%">
          <Lottie options={defaultOptions1} />
        </Box>
        <Flex mx={4} direction="column">
          <Heading
            size="4xl"
            sx={{ fontFamily: "Inter" }}
            textAlign={["center", "center", "left"]}
            mb={4}
          >
            Develop
          </Heading>
          <Text fontSize="xl">
            Develop for all your users' devices with just one codebase. Add fast
            refresh, true native capabilities, and your creativity, and you'll
            have the app your users want in no time.
          </Text>
        </Flex>
      </Flex>
      <Flex
        marginTop={{ base: "0", sm: "10" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex mx={4} direction="column">
          <Heading
            textAlign={["center", "center", "left"]}
            size="4xl"
            sx={{ fontFamily: "Inter" }}
            mb={4}
          >
            Build
          </Heading>
          <Text fontSize="xl">
            Ready to ship? Let us do the heavy lifting. Expo handles the gritty
            parts of building for each app store so you don't need Xcode or
            Android Studio to get your app into people's hands.
          </Text>
        </Flex>
        <Box w="100%">
          <Lottie options={defaultOptions2} />
        </Box>
      </Flex>{" "}
      <Flex direction={{ base: "column", md: "row" }}>
        <Box w="100%">
          <Lottie options={defaultOptions3} />
        </Box>
        <Flex mx={4} direction="column">
          <Heading
            textAlign={["center", "center", "left"]}
            size="4xl"
            sx={{ fontFamily: "Inter" }}
            mb={4}
          >
            Update
          </Heading>
          <Text fontSize="xl">
            Shipped a bug? No worries: with one command, you can deploy a fix
            that your users will see instantly, without having to re-download
            your app.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}

export default IndexSection;
