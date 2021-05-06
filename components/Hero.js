import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Lottie from "react-lottie";
import LinkButtons from './LinkButtons'
import * as animationData from "../lottie/hero.json";
import IndexSection from "./IndexSection";
export default function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const ref = useRef();
  return (
    <>
      <div className="flex justify-center items-center flex-wrap xl:flex-nowrap">
        <div className="">
          <h3 className="font-serif text-gray-900 text-4xl md:text-5xl text-secondary text-center py-10 mx-10">
            Your stack for building modern healthcare applications
            </h3>
          <LinkButtons className="hidden xl:flex"></LinkButtons>
        </div>
        <motion.div
          className="w-max m-5 xl:w-1/2 xl:m-10"
          variants={anim}
          initial="hidden"
          animate="show"
        >
          <motion.ul variants={child} style={{ display: "flex" }}>
            {items2.map((height, i) => (
              <Item
                key={i}
                height={height}
                color1={color3[i]}
                color2={color4[i]}
                words={words2[i]}
              />
            ))}
          </motion.ul>
          <motion.ul variants={child}>
            <li>
              <motion.div
                layout
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
                }}
                whileTap={{
                  scale: 1.12,
                  boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
                }}
                className="bg-gray-800"
                style={{
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
              </motion.div>
            </li>
          </motion.ul>
          <motion.ul variants={child} style={{ display: "flex" }}>
            {items1.map((height, i) => (
              <Item
                key={i}
                height={height}
                color1={color1[i]}
                color2={color2[i]}
                words={words1[i]}
                image={image1[i]}
              />
            ))}
          </motion.ul>
        </motion.div>
      </div>
      <LinkButtons className="xl:hidden"></LinkButtons>
      {/* <div className="xl:block hidden absolute bottom-10 left-1/2">
        <motion.div
          whileHover={{
            scale: 1.5,
            boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
          }}
        >
          <img
            onClick={() => {
              if (ref && ref.current) {
                ref.current.scrollIntoView({ inline: "nearest" });
              }
            }}
            src="/icons/arrow-down.svg"
          />
        </motion.div>

      </div> */}
      <IndexSection refer={ref} />
    </>
  );
}
function Item({ color1, words, image, color2 }) {
  const [hover, setHover] = useState("");
  const [isHovered, setHovered] = useState(false);
  return (
    <li style={{ width: `${words === "Integration Engine" ? "20%" : "100%"}` }}>
      <motion.div
        layout
        style={{
          backgroundImage: `url(${image}),linear-gradient(45deg,${color1},${color2})`,
          height: "100px",
          padding: "15px",
          borderRadius: 5,
          margin: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "default",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          border: `${words.includes("You") && "5px dashed red"}`,
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
          <p
            className={`text-center text-white ${words.includes("Your") && "text-red-500"
              }`}
          >
            {words}
          </p>
        )}
      </motion.div>
    </li>
  );
}

const items1 = [100, 100, 100, 100];
const items2 = [100, 100, 100];

const color1 = ["#56adff", "#666666", "#ddb500", "#0385af"];
const color2 = ["#D6E8F9", "#ededed", "#fffa9b", "#94dff8"];
const image1 = [
  "/openehr.png",
  "https://www.signstoyou.com/signs/previewimages/high-double-arrow-shaped-3876.png",
  "/fhir.png",
  "/snomed.png",
];
const color3 = ["#001e56", "#8e389e", "white"];
const color4 = ["#1c6bff", "#3090C7", "white"];
const words1 = ["openEHR", `Integration Engine`, "FHIR", "SNOMED"];
const words2 = ["Medication", "Demographics", "Your Next app?"];
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
