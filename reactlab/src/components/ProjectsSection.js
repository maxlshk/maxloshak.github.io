import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: "https://medium.com/@humbleCoder007/simplify-your-react-js-state-management-with-redux-toolkit-f97b677b0ddf"
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    link: "https://snyk.io/advisor/npm-package/react-native-scroll-bottom-sheet"
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    link: "https://www.alamy.com/"
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    link: "https://play.google.com/store/search?q=meetup&c=apps"
  },
  {
    title: "KMA Pizza",
    description: "A web page for KMA Pizza fastfood restoraunt 🍕 (non-comercial). Developed using bootstrap CSS framework",
    getImageSrc: () => require("../images/photo5.jpg"),
    link: "JS-Pizza/Frontend/www/index.html"
  },
  {
    title: "Birthday Card",
    description: "Wonderful birthday present designed as resume-style birthday card. Tracked access only",
    getImageSrc: () => require("../images/photo9.jpg"),
    link: "OliaCV/index.html"
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            position={index % 2 === 0 ? "Left" : "Right"}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
