import { useRef } from "react";
import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  Flex,
  createIcon,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import IndexSection from "./IndexSection";
export default function Hero() {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"6xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 1, md: 14 }}
          py={[5, 20, 30]}
        >
          <Flex
            justifyContent={{ base: "none", md: "space-around" }}
            alignItems={{ base: "none", md: "center" }}
            direction={{ base: "column", md: "row" }}
          >
            <motion.div variants={anim} initial="hidden" animate="show">
              <motion.ul variants={child} style={{ display: "flex" }}>
                {items2.map((height, i) => (
                  <Item
                    key={i}
                    height={height}
                    i={i}
                    color={color2[i]}
                    words={words2[i]}
                  />
                ))}
              </motion.ul>
              <motion.ul variants={child}>
                <li>
                  <motion.div
                    layout
                    onMouseEnter={() => {
                      setHovered(true);
                    }}
                    onMouseLeave={() => {
                      setHovered(false);
                    }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{
                      scale: 1.12,
                      boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
                    }}
                    style={{
                      background: "#99E265",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      padding: "10px",
                      height: "100px",
                      zIndex: 10,
                    }}
                  >
                    <img
                      width="60"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/598px-Oauth_logo.svg.png"
                    />
                    {isHovered && (
                      <motion.div
                        initial={{ y: -10, scale: 0 }}
                        animate={{ y: 0, scale: 1 }}
                        style={{
                          backgroundColor: "#282A35",
                          zIndex: 20,
                          marginTop: "10px",
                          marginRight: "40px",
                          padding: "10px",
                          borderRadius: 10,
                          boxShadow: "5px 10px 10px #8888",
                        }}
                      >
                        <p style={{ color: "white" }}>OAuth</p>
                      </motion.div>
                    )}
                  </motion.div>
                </li>
              </motion.ul>
              <motion.ul variants={child} style={{ display: "flex" }}>
                {items1.map((height, i) => (
                  <Item
                    key={i}
                    height={height}
                    i={i}
                    color={color1[i]}
                    words={words1[i]}
                    image={image1[i]}
                    width={width1[i]}
                  />
                ))}
              </motion.ul>
            </motion.div>
            <Flex sx={{ flex: 0.7 }} alignItems="center" direction="column">
              <Image src="medblocks.png" />
              <Text sx={{ fontFamily: "Inter" }} fontSize="3xl" color="#4A4A4A">
                The stack for building modern healthcare applications
              </Text>
              <Flex mt={2} justifyContent="space-evenly" sx={{ gap: "10px" }}>
                <Button
                  _hover={{ bg: "#e0f4d2" }}
                  sx={{ backgroundColor: "#99e265" }}
                  as={Link}
                  href="https://medium.com/@sidharth_ramesh/introducing-medblocks-storing-medical-records-securely-on-the-interplanetary-file-system-using-20f4e88c9bda"
                  target="_blank"
                >
                  Learn More
                </Button>
                <Button
                  as={Link}
                  href="https://medium.com/@sidharth_ramesh/introducing-medblocks-storing-medical-records-securely-on-the-interplanetary-file-system-using-20f4e88c9bda"
                  variant="outline"
                  colorScheme="gray"
                  target="_blank"
                >
                  Github
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <motion.div
              whileHover={{
                scale: 1.5,
                // boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
              }}
            >
              <ChevronDownIcon
                fontSize="2em"
                onClick={() => {
                  if (ref && ref.current) {
                    ref.current.scrollIntoView();
                  }
                }}
              />
            </motion.div>
          </Flex>
        </Stack>
      </Container>
      <hr
        style={{
          marginLeft: "30px",
          marginRight: "30px",
        }}
      />
      <IndexSection refer={ref} />
    </>
  );
}
function Item({ color, words, image }) {
  const [hover, setHover] = useState("");
  const [isHovered, setHovered] = useState(false);
  return (
    <li style={{ width: `${words === "Integration Engine" ? "20%" : "100%"}` }}>
      <motion.div
        layout
        style={{
          background: color,
          height: "100px",
          padding: "15px",
          borderRadius: 5,
          margin: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "default",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
        }}
        onMouseEnter={() => {
          setHovered(true);
          setHover(words);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setHover("");
        }}
      >
        {words && !image && (
          <p className="hero-p" style={{ color: "white" }}>
            {words}
          </p>
        )}
        {isHovered && image && (
          <motion.div
            initial={{ y: -10, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            style={{
              backgroundColor: "#282A35",
              zIndex: 10,
              marginTop: "100px",
              padding: "10px",
              borderRadius: 10,
              boxShadow: "5px 10px 10px #8888",
            }}
          >
            <p style={{ color: "white" }}>{hover}</p>
          </motion.div>
        )}
      </motion.div>
    </li>
  );
}

const items1 = [100, 100, 100, 100];
const items2 = [100, 100, 100];

const color1 = ["#D6E8F9", "#666666", "#f2d133", "#00A6DF"];
const image1 = [
  "https://www.openehr.org/static/img/Logo.svg",
  "https://www.signstoyou.com/signs/previewimages/high-double-arrow-shaped-3876.png",
  "https://developer.allscripts.com/content/fhir/images/fhir.png",
  "https://i.imgur.com/XHEM39i.png",
];
const width1 = ["250", "30", "250", "200"];
const color2 = ["#0041C2", "#3090C7", "red"];
const words1 = ["openEHR", `Integration Engine`, "FHIR", "SNOMED"];
const words2 = ["Medication App", "React app", "Your Next app?"];
const anim = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.5, staggerChildren: -1 },
  },
};
const child = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
