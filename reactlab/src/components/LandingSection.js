import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const greeting = "Hello, I am Max!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const vStackRef = useIntersectionObserver((intersecting) => {
    setIsVisible(intersecting);
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack className={isVisible ? "show" : "hiddenBottom"} ref={vStackRef}>
        <Avatar src={() => require("../images/programmer.png")} size="3xl" />
        <p>{greeting}</p>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
