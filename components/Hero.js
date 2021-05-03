import { motion } from "framer-motion";
import { useState, useRef } from "react";

import IndexSection from "./IndexSection";
export default function Hero() {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef();
  return (
    <>
      <div className="relative xl:auto xl:h-screen h-auto">
        <div className="flex flex-col items-center sm:my-16 xs:my-10 sm:p-2 xxs:p-10 xl:-mt-24 xl:h-screen xl:flex-row justify-center">
          <motion.div
            //   sx={{ height: "100vh" }}
            variants={anim}
            initial="hidden"
            animate="show"
            className="lg:w-1/3"
          >
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
          <div className="flex flex-col lg:mt-0 mt-10 justify-center items-center">
            <img className="lg:w-3/4 w-full" src="medblocks.png" />
            <p className="font-inter font-medium text-secondary text-center">
              The stack for building modern healthcare applications
            </p>
            <img width="100" src="/gif/hero.gif" />
            <div className="flex">
              <a
                target="_blank"
                href="https://medium.com/@sidharth_ramesh/introducing-medblocks-storing-medical-records-securely-on-the-interplanetary-file-system-using-20f4e88c9bda"
                className="button bg-primary py-2 px-4 mr-4 rounded hover:bg-green-200 font-bold"
              >
                Learn More
              </a>
              <a
                href="https://medium.com/@sidharth_ramesh/introducing-medblocks-storing-medical-records-securely-on-the-interplanetary-file-system-using-20f4e88c9bda"
                target="_blank"
                className="button bg-gray-100 border border-primary py-2 px-4 rounded hover:bg-green-200 font-bold"
              >
                Github
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="xl:block hidden absolute bottom-10 left-1/2">
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
            {/* <ChevronDownIcon
              fontSize="2em"
             
            /> */}
          </motion.div>
        </div>
      </div>{" "}
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
