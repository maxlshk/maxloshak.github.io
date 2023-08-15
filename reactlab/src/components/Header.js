import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: max.loshak.i@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/maxlshk",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const SocialLinks = () => {
  return (
    <HStack spacing={8}>
      {socials.map(element => (
        <a key={element.url} href={element.url}>
          <FontAwesomeIcon icon={element.icon} size="2x" />
        </a>
      ))}
    </HStack>
  );
};

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      zIndex={2}
      top={0}
      left={0}
      right={0}
      transform={`translateY(${isVisible ? 0 : -200}px)`}
      transitionProperty="transform"
      transitionDuration=".7s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" zIndex={2}>
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <SocialLinks />
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick('projects')} className="navigation-button">
                Projects
              </a>
              <a onClick={handleClick('contactme')} className="navigation-button">
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
