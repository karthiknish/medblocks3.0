import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
function Scroll() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            cursor: "pointer",
            bottom: 30,
            right: 30,
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: "15px",
            paddingLeft: "15px",
            backgroundColor: "#99E265",
            borderRadius: "5px",
          }}
          onClick={scrollToTop}
        >
          <ArrowUpIcon />
        </div>
      )}
    </>
  );
}

export default Scroll;
