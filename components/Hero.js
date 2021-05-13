import { motion } from "framer-motion";
import LinkButtons from "./LinkButtons";
import IndexSection from "./IndexSection";
export default function Hero() {
  return (
    <>
      <div className="flex max-w-7xl m-auto justify-center items-center flex-wrap xl:flex-nowrap xl:my-44">
        <div>
          <h3 className="font-serif text-gray-900 text-4xl md:text-5xl text-secondary text-center py-10 mx-10">
            Your stack for building modern healthcare applications
          </h3>
          <div className="gap-3 justify-center p-10 hidden xl:flex">
            <a
              href=""
              className="rounded-md bg-transparent gap-2 inline-flex items-center hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent"
            >
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>Github</span>
            </a>
            <a
              href=""
              className="rounded-md bg-transparent gap-2 inline-flex items-center  hover:bg-green-700 hover:border-green-700 bg-green-500 border-green-500 font-semibold text-white py-2 px-4 border"
            >
              <span>Get started</span>
            </a>
          </div>
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
                  height: "50px",
                  zIndex: 10,
                }}
              >
                <img width="60" src="/oauth2_logo.svg" />
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
      <IndexSection />
    </>
  );
}

function Item({ color1, words, image, color2 }) {
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
          border: `${words.includes("You") && "2px dashed red"}`,
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
        }}
      >
        {words && !image && (
          <p
            className={`text-center text-white font-semibold ${
              words.includes("Your") && "text-red-500"
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

const color1 = ["#CFFAFE", "#6B7280", "#F59E0B", "#0385af"];
const color2 = ["#93C5FD", "#374151", "#DC2626", "#94dff8"];
const image1 = [
  "/openehr.png",
  "/double-arrow.svg",
  "/fhir.png",
  "/snomed.png",
];
const color3 = ["#001e56", "#C084FC", "white"];
const color4 = ["#1c6bff", "#3090C7", "white"];
const words1 = ["openEHR", `Integration Engine`, "FHIR", "SNOMED"];
const words2 = ["Medication", "Labs", "Your Next app?"];
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
