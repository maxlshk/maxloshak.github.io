import { Heading, HStack, Image, Text, VStack, Box, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import React from "react";

const Card = ({ title, description, imageSrc, position, link, access }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const vStackRef = useIntersectionObserver((intersecting) => {
    setIsVisible(intersecting);
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <Box
      backgroundColor="#f5f5f5"
      borderRadius="10"
      boxShadow="0px 7px 7px 0px rgba(0, 0, 0, 0.45)"
      ref={vStackRef}
      className={isVisible ? "show" : "hidden" + position}
    >
      <Image src={imageSrc} alt="project image" borderRadius="10" />
      <Box padding="5" display="grid" gridGap={3}>
        <Heading as='h2' size='md' color="#171717">{title}</Heading>
        <Text color="#3c3c3d" >{description}</Text>
        <a href={link}>
          <Button width='25%'>
            <HStack>
              <Heading as='h6' size='xs' color="#3c3c3d">
                See more
              </Heading>
              <FontAwesomeIcon icon={faArrowRight} size="1x" left="5" color="#3c3c3d" />
            </HStack>
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default Card;
