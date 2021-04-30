import {
  Container,
  Image,
  Heading,
  Flex,
  Text,
  Button,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
function medblocksui() {
  return (
    <Container maxW="100%">
      <Flex
        sx={{ gap: "15px" }}
        mt={10}
        mb={5}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          width={["10", "25", "50"]}
          src="https://i.imgur.com/JbhZCX3.png"
        />
        <Heading>MedBlocks UI components</Heading>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Text align="center" mb={4} fontSize="xl">
          Web Components for rapid development of openEHR systems
        </Text>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image
          my={10}
          width={["100%", "100%", "50%", "25%"]}
          src="/blocks.svg"
        />
        <Flex direction={{ base: "column", md: "row" }} sx={{ gap: "20px" }}>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="#71c138"
            as={Link}
            target="_blank"
            href="https://github.com/sidharthramesh/medblocks-ui-componets"
          >
            Github
          </Button>{" "}
          <Button
            size="md"
            height="48px"
            width="200px"
            _hover={{ bg: "#c7f2a9" }}
            sx={{ backgroundColor: "#71c138" }}
            as={Link}
            target="_blank"
            href="https://sidharthramesh.github.io/medblocks-ui/"
          >
            Live Site
          </Button>
        </Flex>
      </Flex>
      <Flex m={[4, 10]} direction="column">
        <Heading align={["center", "left"]} mb={2}>
          Introduction
        </Heading>
        <Text fontSize="xl">
          It is a common need to automatically generate forms from openEHR
          templates. A well-known example is the Better EHR Studio. It offers a
          Form Builder and an AQL Builder. However, there is no open-source
          alternative, especially for low resource environments, where paying an
          expensive openEHR provider is not affordable. We have been working on
          this problem for a while, and today We are happy to announce{" "}
          <span style={{ fontWeight: "bold" }}>
            Medblocks UI under the Apache 2 license.
          </span>
        </Text>{" "}
        <Heading mt={4} align={["center", "left"]} mb={2}>
          Tutorial
        </Heading>
        <AspectRatio maxW="500px" ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/GRBIUEA_fc8"
            title="MedBlocks Tutorial"
            allowFullScreen
          />
        </AspectRatio>
      </Flex>
    </Container>
  );
}

export default medblocksui;
